// EmailJS Configuration
// Values are loaded from environment variables

export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

// Validate that all required environment variables are set
export const validateEmailJSConfig = () => {
  const requiredVars = [
    'REACT_APP_EMAILJS_SERVICE_ID',
    'REACT_APP_EMAILJS_TEMPLATE_ID', 
    'REACT_APP_EMAILJS_PUBLIC_KEY'
  ];
  
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('Missing EmailJS environment variables:', missingVars);
    console.error('Please check your .env file and ensure all required variables are set.');
    return false;
  }
  
  return true;
};

// Email template parameters structure
export const createEmailParams = (formData, recipientName = 'Devin Abreu') => ({
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  to_name: recipientName,
  reply_to: formData.email, // This ensures replies go to the sender
});

// Initialize EmailJS (call this in your app initialization)
export const initializeEmailJS = () => {
  // EmailJS will be initialized automatically when you import it
  // You can add any additional initialization here if needed
}; 