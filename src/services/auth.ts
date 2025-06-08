
import { apiCall, setToken, removeToken } from './api';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'user' | 'admin' | 'vendor';
  emailVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: 'user' | 'vendor';
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export const authService = {
  // Login user
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await apiCall.post<AuthResponse>('/auth/login', credentials);
    
    if (response.success && response.data) {
      setToken(response.data.token);
      localStorage.setItem('refresh_token', response.data.refreshToken);
      localStorage.setItem('user_data', JSON.stringify(response.data.user));
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Login failed');
  },

  // Register user
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await apiCall.post<AuthResponse>('/auth/register', userData);
    
    if (response.success && response.data) {
      setToken(response.data.token);
      localStorage.setItem('refresh_token', response.data.refreshToken);
      localStorage.setItem('user_data', JSON.stringify(response.data.user));
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Registration failed');
  },

  // Logout user
  async logout(): Promise<void> {
    try {
      await apiCall.post('/auth/logout');
    } finally {
      removeToken();
    }
  },

  // Get current user from localStorage
  getCurrentUser(): User | null {
    const userData = localStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    const user = this.getCurrentUser();
    return !!(token && user);
  },

  // Forgot password
  async forgotPassword(email: string): Promise<void> {
    const response = await apiCall.post('/auth/forgot-password', { email });
    
    if (!response.success) {
      throw new Error(response.error?.message || 'Failed to send reset email');
    }
  },

  // Reset password
  async resetPassword(token: string, password: string): Promise<void> {
    const response = await apiCall.post('/auth/reset-password', { token, password });
    
    if (!response.success) {
      throw new Error(response.error?.message || 'Password reset failed');
    }
  },

  // Verify email
  async verifyEmail(token: string): Promise<void> {
    const response = await apiCall.post('/auth/verify-email', { token });
    
    if (!response.success) {
      throw new Error(response.error?.message || 'Email verification failed');
    }
  },

  // Resend verification email
  async resendVerification(email: string): Promise<void> {
    const response = await apiCall.post('/auth/resend-verification', { email });
    
    if (!response.success) {
      throw new Error(response.error?.message || 'Failed to resend verification');
    }
  },
};
