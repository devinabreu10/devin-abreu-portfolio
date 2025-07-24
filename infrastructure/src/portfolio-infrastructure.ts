#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioInfrastructureStack } from './portfolio-infrastructure-stack';
import { ECSFargateEmailServiceStack } from './ecs-fargate-email-service';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();

// Check if we're using LocalStack
const useLocalStack = app.node.tryGetContext('useLocalStack') === 'true';

console.log('🔧 useLocalStack:', useLocalStack);

new PortfolioInfrastructureStack(app, 'PortfolioInfrastructureStack', {
  useLocalStack,
  env: useLocalStack 
    ? { 
        account: '000000000000', 
        region: 'us-east-1' 
      }
    : {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
      },
});

// Deploy ECS Fargate Email Service
new ECSFargateEmailServiceStack(app, 'ECSFargateEmailServiceStack', {
  useLocalStack,
  env: useLocalStack
    ? {
        account: '000000000000',
        region: 'us-east-1',
      }
    : {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
      },
});