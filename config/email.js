/**
 * Email configuration for OBEYYO e-commerce API
 * Handles email service setup, templates, and delivery settings
 */

import nodemailer from "nodemailer";

// Email service configuration
const emailConfig = {
  // SMTP settings
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true" || false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // App password for Gmail
    },
    pool: true,
    maxConnections: parseInt(process.env.SMTP_MAX_CONNECTIONS) || 5,
    maxMessages: parseInt(process.env.SMTP_MAX_MESSAGES) || 100,
  },

  // Sender information
  from: {
    name: process.env.FROM_NAME || "OBEYYO",
    address: process.env.FROM_EMAIL || "noreply@obeyyo.com",
  },

  // Email service provider settings
  service: process.env.EMAIL_SERVICE, // 'gmail', 'sendgrid', 'mailgun', etc.

  // Development settings
  development: {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "ethereal.user@ethereal.email",
      pass: "ethereal.pass",
    },
  },
};

// Validate email configuration
const validateEmailConfig = () => {
  if (process.env.NODE_ENV === "development") {
    console.log("Using development email configuration");
    return true;
  }

  const requiredFields = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
  const missing = requiredFields.filter(field => !process.env[field]);
  
  if (missing.length > 0) {
    console.warn(`Email configuration missing: ${missing.join(', ')}`);
    return false;
  }
  
  return true;
};

// Create email transporter
let transporter;
let isEmailConfigured = false;

const createTransporter = () => {
  try {
    if (process.env.NODE_ENV === "development" && !process.env.SMTP_HOST) {
      // Use Ethereal Email for development
      transporter = nodemailer.createTransporter(emailConfig.development);
      console.log("Using Ethereal Email for development");
    } else if (emailConfig.service) {
      // Use specific email service
      transporter = nodemailer.createTransporter({
        service: emailConfig.service,
        auth: emailConfig.smtp.auth,
      });
      console.log(`Using ${emailConfig.service} email service`);
    } else {
      // Use SMTP configuration
      transporter = nodemailer.createTransporter(emailConfig.smtp);
      console.log("Using SMTP email configuration");
    }
    
    isEmailConfigured = true;
    return transporter;
  } catch (error) {
    console.error("Failed to create email transporter:", error);
    isEmailConfigured = false;
    return null;
  }
};

// Initialize transporter if configuration is valid
if (validateEmailConfig()) {
  createTransporter();
}

/**
 * Check if email is configured and working
 * @returns {boolean} True if email is configured
 */
export const isEmailConfigured = () => isEmailConfigured;

/**
 * Get email transporter
 * @returns {Object|null} Nodemailer transporter or null
 */
export const getTransporter = () => transporter;

/**
 * Test email configuration
 * @returns {Promise<Object>} Test result
 */
export const testEmailConfig = async () => {
  if (!transporter) {
    return { success: false, message: "Email not configured" };
  }

  try {
    await transporter.verify();
    return { success: true, message: "Email configuration is valid" };
  } catch (error) {
    console.error("Email configuration test failed:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Email template configurations
 */
export const emailTemplates = {
  // Welcome email
  welcome: {
    subject: "Welcome to OBEYYO!",
    type: "transactional",
    priority: "high",
  },

  // Email verification
  emailVerification: {
    subject: "Verify your email address",
    type: "transactional",
    priority: "high",
    expiresIn: "24h",
  },

  // Password reset
  passwordReset: {
    subject: "Password Reset Request",
    type: "transactional", 
    priority: "high",
    expiresIn: "1h",
  },

  // Order confirmation
  orderConfirmation: {
    subject: "Order Confirmation",
    type: "transactional",
    priority: "high",
  },

  // Order status update
  orderStatusUpdate: {
    subject: "Order Status Update",
    type: "transactional",
    priority: "normal",
  },

  // Shipping notification
  shippingNotification: {
    subject: "Your order has shipped!",
    type: "transactional",
    priority: "normal",
  },

  // Delivery notification
  deliveryNotification: {
    subject: "Your order has been delivered!",
    type: "transactional",
    priority: "normal",
  },

  // Order cancellation
  orderCancellation: {
    subject: "Order Cancellation Confirmation",
    type: "transactional",
    priority: "normal",
  },

  // Return confirmation
  returnConfirmation: {
    subject: "Return Request Confirmation",
    type: "transactional",
    priority: "normal",
  },

  // Newsletter
  newsletter: {
    subject: "OBEYYO Newsletter",
    type: "marketing",
    priority: "low",
  },

  // Product back in stock
  backInStock: {
    subject: "Product Back in Stock!",
    type: "notification",
    priority: "normal",
  },

  // Abandoned cart
  abandonedCart: {
    subject: "You left something in your cart",
    type: "marketing",
    priority: "low",
  },

  // Review request
  reviewRequest: {
    subject: "How was your purchase?",
    type: "engagement",
    priority: "low",
  },
};

/**
 * Email queue configuration for different priorities
 */
export const queueConfig = {
  high: {
    delay: 0, // Send immediately
    attempts: 5,
    backoff: 'exponential',
  },
  normal: {
    delay: 1000, // 1 second delay
    attempts: 3,
    backoff: 'fixed',
  },
  low: {
    delay: 5000, // 5 second delay
    attempts: 2,
    backoff: 'fixed',
  },
};

/**
 * Rate limiting configuration for email sending
 */
export const rateLimits = {
  // Per user limits
  user: {
    transactional: 50, // per hour
    marketing: 5, // per day
    notification: 20, // per hour
  },

  // Global limits
  global: {
    perSecond: 10,
    perMinute: 100,
    perHour: 1000,
  },
};

/**
 * Email tracking configuration
 */
export const trackingConfig = {
  enabled: process.env.EMAIL_TRACKING_ENABLED === "true",
  trackOpens: true,
  trackClicks: true,
  trackUnsubscribes: true,
  pixelTracker: process.env.EMAIL_PIXEL_TRACKER_URL,
  linkTracker: process.env.EMAIL_LINK_TRACKER_URL,
};

/**
 * Unsubscribe configuration
 */
export const unsubscribeConfig = {
  enabled: true,
  url: process.env.UNSUBSCRIBE_URL || `${process.env.FRONTEND_URL}/unsubscribe`,
  oneClick: true, // RFC 8058 List-Unsubscribe-Post
};

/**
 * Get email configuration for specific template
 * @param {string} templateName - Name of the email template
 * @returns {Object} Template configuration
 */
export const getTemplateConfig = (templateName) => {
  return emailTemplates[templateName] || {
    subject: "Notification from OBEYYO",
    type: "transactional",
    priority: "normal",
  };
};

/**
 * Generate email headers based on configuration
 * @param {string} templateName - Template name
 * @param {Object} options - Additional options
 * @returns {Object} Email headers
 */
export const generateEmailHeaders = (templateName, options = {}) => {
  const template = getTemplateConfig(templateName);
  const headers = {
    'X-Mailer': 'OBEYYO-API',
    'X-Priority': template.priority === 'high' ? '1' : template.priority === 'low' ? '5' : '3',
    'X-Template': templateName,
  };

  // Add tracking headers if enabled
  if (trackingConfig.enabled) {
    headers['X-Track-Opens'] = trackingConfig.trackOpens ? '1' : '0';
    headers['X-Track-Clicks'] = trackingConfig.trackClicks ? '1' : '0';
  }

  // Add unsubscribe headers for marketing emails
  if (template.type === 'marketing' && unsubscribeConfig.enabled) {
    headers['List-Unsubscribe'] = `<${unsubscribeConfig.url}>`;
    if (unsubscribeConfig.oneClick) {
      headers['List-Unsubscribe-Post'] = 'List-Unsubscribe=One-Click';
    }
  }

  return { ...headers, ...options.headers };
};

/**
 * Get email sending options based on template and environment
 * @param {string} templateName - Template name
 * @param {Object} customOptions - Custom options to override defaults
 * @returns {Object} Sending options
 */
export const getSendingOptions = (templateName, customOptions = {}) => {
  const template = getTemplateConfig(templateName);
  const queue = queueConfig[template.priority] || queueConfig.normal;

  return {
    from: emailConfig.from,
    headers: generateEmailHeaders(templateName, customOptions),
    priority: template.priority,
    queue,
    ...customOptions,
  };
};

/**
 * Validate email address
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if email domain is allowed
 * @param {string} email - Email address to check
 * @returns {boolean} True if domain is allowed
 */
export const isAllowedDomain = (email) => {
  // Add any domain restrictions here
  const blockedDomains = process.env.BLOCKED_EMAIL_DOMAINS?.split(',') || [];
  const domain = email.split('@')[1]?.toLowerCase();
  
  return !blockedDomains.includes(domain);
};

/**
 * Email delivery status tracking
 */
export const deliveryStatus = {
  PENDING: 'pending',
  SENT: 'sent',
  DELIVERED: 'delivered',
  FAILED: 'failed',
  BOUNCED: 'bounced',
  REJECTED: 'rejected',
  OPENED: 'opened',
  CLICKED: 'clicked',
  UNSUBSCRIBED: 'unsubscribed',
};

/**
 * Export email configuration object
 */
export default {
  config: emailConfig,
  templates: emailTemplates,
  queueConfig,
  rateLimits,
  trackingConfig,
  unsubscribeConfig,
  deliveryStatus,
  isEmailConfigured,
  getTransporter,
  testEmailConfig,
  getTemplateConfig,
  generateEmailHeaders,
  getSendingOptions,
  validateEmail,
  isAllowedDomain,
};
