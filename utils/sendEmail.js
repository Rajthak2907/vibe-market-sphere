import nodemailer from "nodemailer";

// Email configuration
const createTransporter = () => {
  // In production, use environment variables for email configuration
  const emailConfig = {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true" || false,
    auth: {
      user: process.env.SMTP_USER || "your-email@gmail.com",
      pass: process.env.SMTP_PASS || "your-app-password",
    },
  };

  // For development, use Ethereal Email (fake SMTP service)
  if (process.env.NODE_ENV === "development" && !process.env.SMTP_HOST) {
    console.log("Using development email configuration");
    return nodemailer.createTransporter({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "ethereal.user@ethereal.email",
        pass: "ethereal.pass",
      },
    });
  }

  return nodemailer.createTransporter(emailConfig);
};

// Email templates
const getEmailTemplate = (template, data) => {
  const baseUrl = process.env.FRONTEND_URL || "http://localhost:3000";
  const companyName = "OBEYYO";
  
  switch (template) {
    case "email-verification":
      return {
        subject: "Verify your email address",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <h2>Welcome to ${companyName}!</h2>
            <p>Hi ${data.name},</p>
            <p>Thank you for creating an account with us. Please verify your email address by clicking the button below:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${baseUrl}/verify-email?token=${data.verificationToken}" 
                 style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Verify Email Address
              </a>
            </div>
            <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
            <p><a href="${baseUrl}/verify-email?token=${data.verificationToken}">${baseUrl}/verify-email?token=${data.verificationToken}</a></p>
            <p>This link will expire in 24 hours.</p>
            <hr style="margin: 30px 0;">
            <p style="color: #666; font-size: 14px;">
              If you didn't create an account with ${companyName}, please ignore this email.
            </p>
          </div>
        `,
      };

    case "password-reset":
      return {
        subject: "Password Reset Request",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <h2>Password Reset Request</h2>
            <p>Hi ${data.name},</p>
            <p>We received a request to reset your password for your ${companyName} account.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${baseUrl}/reset-password?token=${data.resetToken}" 
                 style="background-color: #dc3545; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Reset Password
              </a>
            </div>
            <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
            <p><a href="${baseUrl}/reset-password?token=${data.resetToken}">${baseUrl}/reset-password?token=${data.resetToken}</a></p>
            <p>This link will expire in 1 hour.</p>
            <hr style="margin: 30px 0;">
            <p style="color: #666; font-size: 14px;">
              If you didn't request a password reset, please ignore this email. Your password will remain unchanged.
            </p>
          </div>
        `,
      };

    case "order-confirmation":
      return {
        subject: `Order Confirmation - ${data.orderNumber}`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <h2>Order Confirmation</h2>
            <p>Hi ${data.name},</p>
            <p>Thank you for your order! We've received your order and are processing it now.</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3>Order Details</h3>
              <p><strong>Order Number:</strong> ${data.orderNumber}</p>
              <p><strong>Total:</strong> $${data.total}</p>
            </div>
            
            <h3>Items Ordered:</h3>
            <div style="border: 1px solid #ddd; border-radius: 5px;">
              ${data.items.map(item => `
                <div style="padding: 15px; border-bottom: 1px solid #eee;">
                  <strong>${item.productSnapshot?.name || 'Product'}</strong><br>
                  Quantity: ${item.quantity} | Price: $${item.price}
                </div>
              `).join('')}
            </div>
            
            <p style="margin-top: 30px;">We'll send you another email when your order ships.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${baseUrl}/orders" 
                 style="background-color: #28a745; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                View Order Status
              </a>
            </div>
            
            <hr style="margin: 30px 0;">
            <p style="color: #666; font-size: 14px;">
              Thank you for shopping with ${companyName}!
            </p>
          </div>
        `,
      };

    case "order-status-update":
      return {
        subject: `Order Status Update - ${data.orderNumber}`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <h2>Order Status Update</h2>
            <p>Hi ${data.name},</p>
            <p>Your order status has been updated:</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Order Number:</strong> ${data.orderNumber}</p>
              <p><strong>Status:</strong> <span style="color: #28a745; font-weight: bold;">${data.status.toUpperCase()}</span></p>
              ${data.trackingNumber ? `<p><strong>Tracking Number:</strong> ${data.trackingNumber}</p>` : ''}
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${baseUrl}/orders" 
                 style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Track Your Order
              </a>
            </div>
            
            <hr style="margin: 30px 0;">
            <p style="color: #666; font-size: 14px;">
              Thank you for shopping with ${companyName}!
            </p>
          </div>
        `,
      };

    default:
      return {
        subject: "Notification from " + companyName,
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <h2>${companyName} Notification</h2>
            <p>You have received a notification from ${companyName}.</p>
          </div>
        `,
      };
  }
};

export const sendEmail = async (options) => {
  try {
    const transporter = createTransporter();
    
    const { to, subject, template, data, html, text } = options;
    
    let emailContent;
    
    if (template && data) {
      emailContent = getEmailTemplate(template, data);
    } else {
      emailContent = {
        subject: subject || "Notification",
        html: html || "<p>No content provided</p>",
        text: text,
      };
    }
    
    const mailOptions = {
      from: {
        name: process.env.FROM_NAME || "OBEYYO",
        address: process.env.FROM_EMAIL || "noreply@obeyyo.com",
      },
      to,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    };
    
    const result = await transporter.sendMail(mailOptions);
    
    // In development, log the email for debugging
    if (process.env.NODE_ENV === "development") {
      console.log("Email sent successfully:");
      console.log("Preview URL:", nodemailer.getTestMessageUrl(result));
    }
    
    return {
      success: true,
      messageId: result.messageId,
      previewUrl: process.env.NODE_ENV === "development" ? nodemailer.getTestMessageUrl(result) : null,
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

export const sendBulkEmail = async (recipients, emailData) => {
  try {
    const results = await Promise.allSettled(
      recipients.map(recipient => 
        sendEmail({
          to: recipient.email,
          template: emailData.template,
          data: {
            ...emailData.data,
            name: recipient.name,
          },
        })
      )
    );
    
    const successful = results.filter(result => result.status === "fulfilled").length;
    const failed = results.filter(result => result.status === "rejected").length;
    
    return {
      success: true,
      sent: successful,
      failed,
      total: recipients.length,
    };
  } catch (error) {
    console.error("Bulk email sending failed:", error);
    throw new Error(`Failed to send bulk email: ${error.message}`);
  }
};
