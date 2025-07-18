#!/bin/bash

# Deploy Portfolio Infrastructure to LocalStack
# This script sets up the CDK infrastructure for testing with LocalStack

set -e # Stops the script if any command fails

if [ -z "$AWS_PROFILE" ]; then
    export AWS_PROFILE=localstack
fi

echo "🚀 Deploying Portfolio AWS Infrastructure to LocalStack..."

# Check if LocalStack is running
echo "📋 Checking if LocalStack is running..."
if ! curl -s http://localhost:4566 > /dev/null; then
    echo "❌ LocalStack is not running. Please start LocalStack first:"
    echo "   docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack"
    exit 1
fi

echo "✅ LocalStack is running"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the CDK project
echo "🔨 Building CDK project..."
npm run build

# Bootstrap CDK for LocalStack (if not already done)
echo "🥾 Bootstrapping CDK for LocalStack..."
cdklocal bootstrap aws://000000000000/us-east-1

# Deploy the stack to LocalStack
echo "🚀 Deploying stack to LocalStack..."
cdklocal deploy --context useLocalStack=true

echo "✅ Deployment complete!"
echo ""
echo "📋 To view the stack outputs:"
echo "   cdklocal list"
echo ""
echo "🗑️  To destroy the stack:"
echo "   cdklocal destroy --context useLocalStack=true" 