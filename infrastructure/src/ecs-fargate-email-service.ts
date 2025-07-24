import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface ECSFargateEmailServiceStackProps extends cdk.StackProps {
  useLocalStack?: boolean;
}

export class ECSFargateEmailServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ECSFargateEmailServiceStackProps = {}) {
    super(scope, id, props);

    const { useLocalStack = false } = props;

    // Use default VPC for LocalStack, otherwise lookup
    const vpc = useLocalStack
      ? new ec2.Vpc(this, 'LocalStackVPC', {
        maxAzs: 1,
        natGateways: 0,
        subnetConfiguration: [
          {
            name: 'public',
            subnetType: ec2.SubnetType.PUBLIC,
          },
        ],
      })
      : ec2.Vpc.fromLookup(this, 'DefaultVPC', { isDefault: true });

    const cluster = new ecs.Cluster(this, 'EmailServiceCluster', { vpc });

    // Create a load-balanced Fargate service
    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'EmailService', {
      cluster,
      cpu: 256, //default
      desiredCount: 1, //default
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('000000000000.dkr.ecr.us-east-1.localhost.localstack.cloud:4566/email-service'),
        // containerPort: 80,
        environment: {
          SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
          SMTP_PORT: process.env.SMTP_PORT || '465',
          SMTP_USER: process.env.SMTP_USER || '',
          SMTP_PASS: process.env.SMTP_PASS || '',
        },
      },
      memoryLimitMiB: 512, //default
      publicLoadBalancer: true,
      assignPublicIp: useLocalStack, // For LocalStack networking
    });
  }
} 