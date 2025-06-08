
import { apiCall, ApiResponse } from './api';
import { Product } from './product';

export interface Brand {
  id: string;
  name: string;
  description?: string;
  logoUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const brandService = {
  // Get all brands
  async getBrands(): Promise<Brand[]> {
    const response = await apiCall.get<Brand[]>('/brands');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch brands');
  },

  // Get products by brand
  async getBrandProducts(brandId: string, page: number = 1, limit: number = 20): Promise<{ products: Product[]; total: number }> {
    const response = await apiCall.get<{ products: Product[]; total: number }>(`/brands/${brandId}/products?page=${page}&limit=${limit}`);
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch brand products');
  },
};
