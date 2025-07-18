#!/bin/bash

export BUCKET_NAME=portfolio-localstack

# Start LocalStack
# echo "Starting LocalStack..."
# docker run -d --name localstack -p 4566:4566 localstack/localstack

# Wait for LocalStack to be ready
echo "Waiting for LocalStack to be ready..."
sleep 10

# Create bucket
echo "Creating S3 bucket..."
aws --endpoint-url=http://localhost:4566 s3 mb s3://$BUCKET_NAME

# Configure website hosting
echo "Configuring website hosting..."
aws --endpoint-url=http://localhost:4566 s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html

# Build and deploy
echo "Building and deploying..."
npm run build
aws --endpoint-url=http://localhost:4566 s3 sync build/ s3://$BUCKET_NAME --delete

echo "Deployment complete!"
echo "Your website is available at: http://$BUCKET_NAME.s3-website.localhost.localstack.cloud:4566"