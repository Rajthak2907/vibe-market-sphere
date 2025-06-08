import bcrypt from "bcrypt";
import { storage } from "../storage.js";
import { generateToken, generateRefreshToken } from "../utils/generateToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import { 
  registerSchema, 
  loginSchema, 
  forgotPasswordSchema, 
  resetPasswordSchema 
} from "../../shared/schema.js";
import crypto from "crypto";

export const authController = {
  async register(req, res) {
    try {
      const validatedData = registerSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(validatedData.email);
      if (existingUser) {
        return res.status(400).json({
          success: false,
          error: {
            code: "USER_EXISTS",
            message: "User with this email already exists",
          },
        });
      }

      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(validatedData.password, saltRounds);

      // Generate email verification token
      const emailVerificationToken = crypto.randomBytes(32).toString("hex");

      // Create user
      const user = await storage.createUser({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        password: hashedPassword,
        role: validatedData.role || "user",
        emailVerificationToken,
      });

      // Send verification email
      try {
        await sendEmail({
          to: user.email,
          subject: "Verify your email address",
          template: "email-verification",
          data: {
            name: `${user.firstName} ${user.lastName}`,
            verificationToken: emailVerificationToken,
          },
        });
      } catch (emailError) {
        console.error("Failed to send verification email:", emailError);
      }

      // Generate tokens
      const token = generateToken(user.id);
      const refreshToken = generateRefreshToken(user.id);

      res.status(201).json({
        success: true,
        message: "Registration successful. Please check your email for verification.",
        data: {
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            emailVerified: user.emailVerified,
          },
          token,
          refreshToken,
        },
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "REGISTRATION_FAILED",
          message: "Registration failed. Please try again.",
        },
      });
    }
  },

  async login(req, res) {
    try {
      const validatedData = loginSchema.parse(req.body);
      
      // Find user
      const user = await storage.getUserByEmail(validatedData.email);
      if (!user) {
        return res.status(401).json({
          success: false,
          error: {
            code: "INVALID_CREDENTIALS",
            message: "Invalid email or password",
          },
        });
      }

      // Check if user is active
      if (!user.isActive) {
        return res.status(401).json({
          success: false,
          error: {
            code: "ACCOUNT_DISABLED",
            message: "Your account has been disabled",
          },
        });
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(validatedData.password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          error: {
            code: "INVALID_CREDENTIALS",
            message: "Invalid email or password",
          },
        });
      }

      // Update last login
      await storage.updateUser(user.id, { lastLogin: new Date() });

      // Generate tokens
      const token = generateToken(user.id);
      const refreshToken = generateRefreshToken(user.id);

      res.json({
        success: true,
        message: "Login successful",
        data: {
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            emailVerified: user.emailVerified,
          },
          token,
          refreshToken,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "LOGIN_FAILED",
          message: "Login failed. Please try again.",
        },
      });
    }
  },

  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;
      
      if (!refreshToken) {
        return res.status(401).json({
          success: false,
          error: {
            code: "REFRESH_TOKEN_REQUIRED",
            message: "Refresh token is required",
          },
        });
      }

      // Verify refresh token and generate new tokens
      // This is a simplified implementation - in production, you'd store refresh tokens
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || "refresh_secret");
      const user = await storage.getUser(decoded.userId);
      
      if (!user || !user.isActive) {
        return res.status(401).json({
          success: false,
          error: {
            code: "INVALID_REFRESH_TOKEN",
            message: "Invalid refresh token",
          },
        });
      }

      const newToken = generateToken(user.id);
      const newRefreshToken = generateRefreshToken(user.id);

      res.json({
        success: true,
        data: {
          token: newToken,
          refreshToken: newRefreshToken,
        },
      });
    } catch (error) {
      console.error("Refresh token error:", error);
      res.status(401).json({
        success: false,
        error: {
          code: "INVALID_REFRESH_TOKEN",
          message: "Invalid refresh token",
        },
      });
    }
  },

  async logout(req, res) {
    try {
      // In a production app, you would invalidate the token here
      // For now, we'll just return a success response
      res.json({
        success: true,
        message: "Logout successful",
      });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "LOGOUT_FAILED",
          message: "Logout failed",
        },
      });
    }
  },

  async forgotPassword(req, res) {
    try {
      const validatedData = forgotPasswordSchema.parse(req.body);
      
      const user = await storage.getUserByEmail(validatedData.email);
      if (!user) {
        // Don't reveal if email exists for security
        return res.json({
          success: true,
          message: "If the email exists, a password reset link has been sent",
        });
      }

      // Generate reset token
      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetExpires = new Date(Date.now() + 3600000); // 1 hour

      await storage.updateUser(user.id, {
        resetPasswordToken: resetToken,
        resetPasswordExpires: resetExpires,
      });

      // Send reset email
      try {
        await sendEmail({
          to: user.email,
          subject: "Password Reset Request",
          template: "password-reset",
          data: {
            name: `${user.firstName} ${user.lastName}`,
            resetToken,
          },
        });
      } catch (emailError) {
        console.error("Failed to send reset email:", emailError);
      }

      res.json({
        success: true,
        message: "If the email exists, a password reset link has been sent",
      });
    } catch (error) {
      console.error("Forgot password error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "FORGOT_PASSWORD_FAILED",
          message: "Failed to process password reset request",
        },
      });
    }
  },

  async resetPassword(req, res) {
    try {
      const validatedData = resetPasswordSchema.parse(req.body);
      
      // Find user by reset token
      const users = await storage.getAllUsers();
      const user = users.users.find(u => 
        u.resetPasswordToken === validatedData.token &&
        u.resetPasswordExpires &&
        u.resetPasswordExpires > new Date()
      );

      if (!user) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_RESET_TOKEN",
            message: "Invalid or expired reset token",
          },
        });
      }

      // Hash new password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(validatedData.password, saltRounds);

      // Update user
      await storage.updateUser(user.id, {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      });

      res.json({
        success: true,
        message: "Password reset successful",
      });
    } catch (error) {
      console.error("Reset password error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "PASSWORD_RESET_FAILED",
          message: "Password reset failed",
        },
      });
    }
  },

  async verifyEmail(req, res) {
    try {
      const { token } = req.body;
      
      if (!token) {
        return res.status(400).json({
          success: false,
          error: {
            code: "TOKEN_REQUIRED",
            message: "Verification token is required",
          },
        });
      }

      // Find user by verification token
      const users = await storage.getAllUsers();
      const user = users.users.find(u => u.emailVerificationToken === token);

      if (!user) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_TOKEN",
            message: "Invalid verification token",
          },
        });
      }

      // Update user
      await storage.updateUser(user.id, {
        emailVerified: true,
        emailVerificationToken: null,
      });

      res.json({
        success: true,
        message: "Email verified successfully",
      });
    } catch (error) {
      console.error("Email verification error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "EMAIL_VERIFICATION_FAILED",
          message: "Email verification failed",
        },
      });
    }
  },

  async resendVerification(req, res) {
    try {
      const { email } = req.body;
      
      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({
          success: false,
          error: {
            code: "USER_NOT_FOUND",
            message: "User not found",
          },
        });
      }

      if (user.emailVerified) {
        return res.status(400).json({
          success: false,
          error: {
            code: "EMAIL_ALREADY_VERIFIED",
            message: "Email is already verified",
          },
        });
      }

      // Generate new verification token
      const emailVerificationToken = crypto.randomBytes(32).toString("hex");
      await storage.updateUser(user.id, { emailVerificationToken });

      // Send verification email
      try {
        await sendEmail({
          to: user.email,
          subject: "Verify your email address",
          template: "email-verification",
          data: {
            name: `${user.firstName} ${user.lastName}`,
            verificationToken: emailVerificationToken,
          },
        });
      } catch (emailError) {
        console.error("Failed to send verification email:", emailError);
        return res.status(500).json({
          success: false,
          error: {
            code: "EMAIL_SEND_FAILED",
            message: "Failed to send verification email",
          },
        });
      }

      res.json({
        success: true,
        message: "Verification email sent successfully",
      });
    } catch (error) {
      console.error("Resend verification error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "RESEND_VERIFICATION_FAILED",
          message: "Failed to resend verification email",
        },
      });
    }
  },
};
