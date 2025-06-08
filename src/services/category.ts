
import { apiCall, ApiResponse } from './api';
import { Product } from './product';

export interface Category {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  parentId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const categoryService = {
  // Get all categories
  async getCategories(): Promise<Category[]> {
    const response = await apiCall.get<Category[]>('/categories');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch categories');
  },

  // Get products by category
  async getCategoryProducts(categoryId: string, page: number = 1, limit: number = 20): Promise<{ products: Product[]; total: number }> {
    const response = await apiCall.get<{ products: Product[]; total: number }>(`/categories/${categoryId}/products?page=${page}&limit=${limit}`);
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch category products');
  },
};
