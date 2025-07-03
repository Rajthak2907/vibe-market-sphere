import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp } from "lucide-react";
import TabSection from "@/components/shared/TabSection";
import { Link } from "react-router-dom";
import FashionCarousel from "@/components/shared/FashionCarousel";

const Beauty = () => {
  const products = [
    {
      id: "b1",
      name: "Organic Face Wash",
      price: 599,
      originalPrice: 999,
      rating: 4.7,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      brand: "EcoBeauty",
      isNew: true
    },
    {
      id: "b2",
      name: "Hydrating Serum",
      price: 999,
      originalPrice: 1499,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1591604029544-e5c42d034c26?w=400",
      brand: "AquaSkin",
      isTrending: true
    },
    {
      id: "b3",
      name: "Luxury Makeup Kit",
      price: 2999,
      originalPrice: 4999,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1606852529474-339489c1193c?w=400",
      brand: "GlamUp"
    },
    {
      id: "b4",
      name: "Anti-Aging Cream",
      price: 1299,
      originalPrice: 1999,
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1616718963440-a0495409ff6c?w=400",
      brand: "YouthRenew"
    }
  ];

  const categories = ["All", "Skin Care", "Makeup", "Hair Care", "Fragrances", "Bath & Body"];

  return (
    <Layout>
      <FashionCarousel 
        section="beauty" 
        title="Beauty & Personal Care" 
        subtitle="Discover the best beauty products" 
      />
      <TabSection tabs={[]} />

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Beauty & Personal Care</h1>
          <p className="text-gray-600">Explore our wide range of beauty products</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="ml-auto">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Beauty;
