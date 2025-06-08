
import { apiCall, ApiResponse } from './api';

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
    salePrice?: number;
    images: string[];
    brand?: {
      name: string;
    };
    stockQuantity: number;
  };
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

export const cartService = {
  // Get user cart
  async getCart(): Promise<Cart> {
    const response = await apiCall.get<Cart>('/cart');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch cart');
  },

  // Add item to cart
  async addToCart(productId: string, quantity: number = 1): Promise<Cart> {
    const response = await apiCall.post<Cart>('/cart/add', { productId, quantity });
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to add item to cart');
  },

  // Update cart item quantity
  async updateCartItem(itemId: string, quantity: number): Promise<Cart> {
    const response = await apiCall.put<Cart>('/cart/update', { itemId, quantity });
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to update cart item');
  },

  // Remove item from cart
  async removeFromCart(itemId: string): Promise<Cart> {
    const response = await apiCall.delete<Cart>('/cart/remove', { itemId });
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to remove item from cart');
  },

  // Clear entire cart
  async clearCart(): Promise<void> {
    const response = await apiCall.delete<void>('/cart/clear');
    
    if (!response.success) {
      throw new Error(response.error?.message || 'Failed to clear cart');
    }
  },
};
