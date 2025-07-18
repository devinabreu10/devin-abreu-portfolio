#!/bin/bash

# Start LocalStack using Docker Compose
# This script starts LocalStack for testing the CDK infrastructure

set -e

echo "🚀 Starting LocalStack with Docker Compose..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Start LocalStack
echo "📦 Starting LocalStack container..."
docker-compose up -d

# Wait for LocalStack to be ready
echo "⏳ Waiting for LocalStack to be ready..."
max_attempts=30
attempt=1

while [ $attempt -le $max_attempts ]; do
    if curl -s http://localhost:4566 > /dev/null; then
        echo "✅ LocalStack is ready!"
        break
    fi
    
    echo "   Attempt $attempt/$max_attempts - Waiting..."
    sleep 2
    attempt=$((attempt + 1))
done

if [ $attempt -gt $max_attempts ]; then
    echo "❌ LocalStack failed to start within the expected time."
    echo "📋 Checking container logs..."
    docker-compose logs localstack
    exit 1
fi

echo ""
echo "🌐 LocalStack is running at:"
echo "   http://localhost:4566"
echo ""
echo "🔧 To view logs:"
echo "   docker-compose logs -f localstack"
echo ""
echo "🛑 To stop LocalStack:"
echo "   docker-compose down"
echo ""
echo "🚀 Ready to deploy your infrastructure!" 