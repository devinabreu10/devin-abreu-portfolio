# Devin Abreu Portfolio

A modern React portfolio website built with Create React App, featuring a beautiful UI and AWS CDK infrastructure for deployment.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌙 Dark/Light theme toggle
- 📱 Mobile-first responsive design
- 🚀 AWS CDK infrastructure for deployment
- 🐳 LocalStack support for local testing
- 📧 Contact form with EmailJS integration
- ⚡ Optimized performance and SEO

## Quick Start

### Prerequisites

- Node.js (v16 or later)
- Docker (for LocalStack testing)
- AWS CLI (for AWS deployment)
- AWS CDK CLI: `npm install -g aws-cdk`

### Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## AWS Infrastructure with LocalStack Testing

This project includes AWS CDK infrastructure for deploying the portfolio as a static website using S3. You can test the infrastructure locally using LocalStack.

### Quick Infrastructure Testing

1. **Start LocalStack:**
   ```bash
   npm run infra:start-localstack
   ```

2. **Deploy infrastructure:**
   ```bash
   npm run infra:deploy-local
   ```

3. **Access your website:**
   ```
   http://devin-portfolio-localstack.s3-website.localhost.localstack.cloud:4566
   ```

4. **Clean up:**
   ```bash
   npm run infra:destroy-local
   npm run infra:stop-localstack
   ```

### Manual Infrastructure Steps

For detailed infrastructure setup and deployment instructions, see the [Infrastructure README](./infrastructure/README.md).

## Available Scripts

In the project directory, you can run:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Infrastructure Scripts

- `npm run infra:start-localstack` - Start LocalStack for testing
- `npm run infra:deploy-local` - Deploy infrastructure to LocalStack
- `npm run infra:destroy-local` - Destroy LocalStack infrastructure
- `npm run infra:stop-localstack` - Stop LocalStack

### Local Deployment Scripts

- `npm run deploy:local` - Deploy built app to LocalStack S3
- `npm run deploy:local:create` - Create S3 bucket and configure website hosting

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
