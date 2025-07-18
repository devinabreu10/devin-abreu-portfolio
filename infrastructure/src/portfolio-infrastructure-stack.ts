import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as path from 'path';

export interface PortfolioInfrastructureStackProps extends cdk.StackProps {
  useLocalStack?: boolean;
}

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: PortfolioInfrastructureStackProps) {
    super(scope, id, props);

    const { useLocalStack = false } = props;

    // Create S3 bucket for static website hosting
    const websiteBucket = new s3.Bucket(this, 'PortfolioWebsiteBucket', {
      bucketName: useLocalStack ? 'devin-portfolio-localstack' : 'devin-abreu-portfolio',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html', // For SPA routing
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      removalPolicy: useLocalStack ? cdk.RemovalPolicy.DESTROY : cdk.RemovalPolicy.RETAIN,
      autoDeleteObjects: useLocalStack,
      cors: [
        {
          allowedMethods: [
            s3.HttpMethods.GET,
            s3.HttpMethods.HEAD,
          ],
          allowedOrigins: ['*'],
          allowedHeaders: ['*'],
        },
      ],
    });

    // Bucket policy for public read access
    const bucketPolicy = new s3.BucketPolicy(this, 'PortfolioWebsiteBucketPolicy', {
      bucket: websiteBucket,
    });

    bucketPolicy.document.addStatements(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        principals: [new iam.AnyPrincipal()],
        actions: ['s3:GetObject'],
        resources: [websiteBucket.arnForObjects('*')],
      })
    );

    // Deploy the built React app to S3
    // Note: This will only work if the build directory exists
    const buildPath = path.join(__dirname, '../../build');
    
    try {
      const deployment = new s3deploy.BucketDeployment(this, 'PortfolioWebsiteDeployment', {
        sources: [s3deploy.Source.asset(buildPath)],
        destinationBucket: websiteBucket,
        destinationKeyPrefix: '',
        prune: true,
        retainOnDelete: false,
      });

      // Output the deployment as a dependency
      new cdk.CfnOutput(this, 'WebsiteDeploymentId', {
        value: deployment.node.id,
        description: 'Website deployment ID',
      });
    } catch (error) {
      console.warn('Build directory not found. Skipping deployment. Run "npm run build" first.');
    }

    // Output the website URL
    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: websiteBucket.bucketWebsiteUrl,
      description: 'Portfolio Website URL',
      exportName: 'PortfolioWebsiteURL',
    });

    // Output the bucket name
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 Bucket Name',
      exportName: 'PortfolioBucketName',
    });

    // Output the bucket ARN
    new cdk.CfnOutput(this, 'BucketARN', {
      value: websiteBucket.bucketArn,
      description: 'S3 Bucket ARN',
      exportName: 'PortfolioBucketARN',
    });

    // Add tags
    cdk.Tags.of(this).add('Project', 'Portfolio');
    cdk.Tags.of(this).add('Environment', useLocalStack ? 'localstack' : 'production');
    cdk.Tags.of(this).add('ManagedBy', 'CDK');
  }
} 