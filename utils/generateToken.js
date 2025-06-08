import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "fallback_refresh_secret_key";

export const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    { 
      expiresIn: process.env.JWT_EXPIRES_IN || "24h",
      issuer: "obeyyo-api",
      audience: "obeyyo-client"
    }
  );
};

export const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId },
    JWT_REFRESH_SECRET,
    { 
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
      issuer: "obeyyo-api",
      audience: "obeyyo-client"
    }
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid token");
  }
};

export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
};

export const generatePasswordResetToken = () => {
  return jwt.sign(
    { type: "password_reset", timestamp: Date.now() },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};

export const generateEmailVerificationToken = (email) => {
  return jwt.sign(
    { email, type: "email_verification" },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
};
