# Portfolio Infrastructure with AWS CDK

This directory contains the AWS CDK infrastructure code to deploy your React portfolio as a static website using S3. The infrastructure supports both AWS and LocalStack for testing.

## Prerequisites

- Node.js (v16 or later)
- AWS CLI (for AWS deployment)
- Docker (for LocalStack)
- AWS CDK CLI: `npm install -g aws-cdk-local aws-cdk`

## Project Structure

```
infrastructure/
├── src/
│   └── portfolio-infrastructure.ts    # CDK app entry point
│   └── portfolio-infrastructure-stack.ts  # Main infrastructure stack
├── deploy-localstack.sh              # LocalStack deployment script
├── package.json                      # CDK dependencies
├── tsconfig.json                     # TypeScript configuration
├── cdk.json                          # CDK configuration
└── README.md                         # This file
```

## Features

- **S3 Static Website Hosting**: Configured for React SPA with proper routing
- **Public Access**: Bucket policy allows public read access
- **CORS Support**: Configured for cross-origin requests
- **LocalStack Support**: Full compatibility with LocalStack for testing
- **Automatic Deployment**: Deploys built React app to S3
- **Environment Tags**: Proper tagging for resource management

## Quick Start with LocalStack

### 1. Start LocalStack

```bash
docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
```

### 2. Build Your React App

From the project root:

```bash
npm run build
```

### 3. Deploy to LocalStack

```bash
cd infrastructure
chmod +x deploy-localstack.sh
./deploy-localstack.sh
```

### 4. Access Your Website

Your website will be available at:
```
http://devin-portfolio-localstack.s3-website.localhost.localstack.cloud:4566
```

### 5. Clean Up

```bash
cdklocal destroy --context useLocalStack=true
```

## Manual Deployment Steps

### For LocalStack

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the CDK project:**
   ```bash
   npm run build
   ```

3. **Bootstrap CDK (first time only):**
   ```bash
   cdklocal bootstrap aws://000000000000/us-east-1
   ```

4. **Deploy:**
   ```bash
   cdklocal deploy --context useLocalStack=true
   ```

5. **Destroy (when done):**
   ```bash
   cdklocal destroy --context useLocalStack=true
   ```

### For AWS

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the CDK project:**
   ```bash
   npm run build
   ```

3. **Bootstrap CDK (first time only):**
   ```bash
   cdk bootstrap
   ```

4. **Deploy:**
   ```bash
   cdk deploy
   ```

5. **Destroy (when done):**
   ```bash
   cdk destroy
   ```

## Infrastructure Components

### S3 Bucket
- **Name**: `devin-portfolio-localstack` (LocalStack) or `devin-abreu-portfolio` (AWS)
- **Purpose**: Static website hosting
- **Configuration**:
  - Website hosting enabled
  - Index document: `index.html`
  - Error document: `index.html` (for SPA routing)
  - Public read access
  - CORS enabled
  - Auto-delete objects (LocalStack only)

### Bucket Policy
- Allows public read access to all objects
- Required for static website hosting

### S3 Deployment
- Automatically deploys the built React app from `../build/`
- Prunes old files on deployment
- Only runs if build directory exists

## Environment Variables

The stack automatically detects the environment:
- **LocalStack**: Uses dummy account ID and LocalStack endpoints
- **AWS**: Uses your AWS account and region

## Outputs

After deployment, CDK will output:
- **WebsiteURL**: The S3 website URL
- **BucketName**: The S3 bucket name
- **BucketARN**: The S3 bucket ARN
- **WebsiteDeploymentId**: The deployment ID (if deployment succeeded)

## Troubleshooting

### LocalStack Issues

1. **LocalStack not running:**
   ```bash
   docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
   ```

2. **CDK bootstrap issues:**
   ```bash
   cdklocal bootstrap --endpoint-url http://localhost:4566 aws://000000000000/us-east-1
   ```

3. **Build directory not found:**
   Make sure to run `npm run build` from the project root first.

### AWS Issues

1. **AWS credentials not configured:**
   ```bash
   aws configure
   ```

2. **CDK bootstrap issues:**
   ```bash
   cdk bootstrap
   ```

3. **Bucket name conflicts:**
   Change the bucket name in `src/portfolio-infrastructure-stack.ts`

## Security Considerations

- **LocalStack**: Uses permissive settings for testing
- **AWS**: Uses more restrictive settings for production
- **Bucket Policy**: Only allows read access, no write access for public users
- **CORS**: Configured for web access but can be restricted as needed

## Cost Optimization

- **LocalStack**: Free for testing
- **AWS**: S3 static website hosting is very cost-effective
  - Storage: ~$0.023 per GB per month
  - Requests: ~$0.0004 per 1,000 requests
  - Data transfer: Free for first 1GB per month

## Next Steps

1. **Custom Domain**: Add CloudFront and Route53 for custom domain
2. **HTTPS**: Enable HTTPS with ACM certificate
3. **CI/CD**: Set up automated deployment pipeline
4. **Monitoring**: Add CloudWatch metrics and alarms
5. **Backup**: Implement S3 versioning and lifecycle policies 