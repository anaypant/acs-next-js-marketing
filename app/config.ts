// Environment variables configuration
const config = {
  email: {
    smtp: {
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      user: process.env.ZOHO_EMAIL_USER,
      pass: process.env.ZOHO_EMAIL_PASS,
    },
    from: {
      name: 'ACS Contact Form',
      address: process.env.ZOHO_EMAIL_USER,
    },
    to: 'support@automatedconsultancy.com',
  },
  site: {
    name: 'ACS',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
} as const;

// Validate required environment variables
const validateConfig = () => {
  const requiredEnvVars = {
    'ZOHO_EMAIL_USER': config.email.smtp.user,
    'ZOHO_EMAIL_PASS': config.email.smtp.pass,
  };

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
};

// Validate on import
validateConfig();

export default config; 