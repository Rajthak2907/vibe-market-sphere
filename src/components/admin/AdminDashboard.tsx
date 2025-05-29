
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from '@supabase/supabase-js';
import { LogOut, Package, Folder, Award, Image, Users } from "lucide-react";
import ProductManagement from "./ProductManagement";
import CategoryManagement from "./CategoryManagement";
import BrandManagement from "./BrandManagement";
import BannerManagement from "./BannerManagement";
import AdminUserManagement from "./AdminUserManagement";

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

const AdminDashboard = ({ user, onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B9D] to-[#4A90E2] bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">Welcome back, {user.email}</p>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Folder className="h-4 w-4" />
              Categories
            </TabsTrigger>
            <TabsTrigger value="brands" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Brands
            </TabsTrigger>
            <TabsTrigger value="banners" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Banners
            </TabsTrigger>
            <TabsTrigger value="admins" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Admins
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="products">
              <ProductManagement />
            </TabsContent>
            
            <TabsContent value="categories">
              <CategoryManagement />
            </TabsContent>
            
            <TabsContent value="brands">
              <BrandManagement />
            </TabsContent>
            
            <TabsContent value="banners">
              <BannerManagement />
            </TabsContent>
            
            <TabsContent value="admins">
              <AdminUserManagement />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
