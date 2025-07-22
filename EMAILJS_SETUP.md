# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality for your contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your chosen provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

**From:** {{from_name}} ({{from_email}})
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Set Up Environment Variables
   ```
1. Open `devin-abreu-portfolio/.env` and replace the placeholder values with your actual credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

2. **Important**: Restart your development server after creating the `.env` file for the changes to take effect.

## Step 6: Test the Integration

1. Start your development server: `npm start`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email to see if the message was received

## Troubleshooting

### Common Issues:

1. **"Service not found" error**: Double-check your Service ID
2. **"Template not found" error**: Verify your Template ID
3. **"Invalid public key" error**: Ensure your Public Key is correct
4. **CORS errors**: Make sure you're using the correct EmailJS service

### Security Notes:

- The public key is safe to expose in frontend code
- Never share your private keys or service credentials
- Consider using environment variables for production

## Environment Variables

The project is now configured to use environment variables for EmailJS credentials. This approach provides better security and makes it easier to manage different configurations for development and production.

### Benefits:
- ✅ Credentials are not hardcoded in source code
- ✅ Easy to switch between different EmailJS accounts
- ✅ Better security for production deployments
- ✅ Automatic validation of required variables

## EmailJS Free Plan Limits

- 200 emails per month
- Basic email templates
- Standard support

For higher limits, consider upgrading to a paid plan.

## Support

If you encounter issues:
1. Check the EmailJS documentation
2. Verify your credentials are correct
3. Check the browser console for error messages
4. Ensure your email service is properly configured 