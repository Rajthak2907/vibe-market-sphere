import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp } from "lucide-react";
import TabSection from "@/components/shared/TabSection";
import { Link } from "react-router-dom";
import FashionCarousel from "@/components/shared/FashionCarousel";

const Footwear = () => {
  const products = [
    {
      id: "f1",
      name: "Classic Leather Sneakers",
      price: 2999,
      originalPrice: 4999,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1606851444399-ef4c9429f07e?w=400",
      brand: "StyleStep",
      isNew: true
    },
    {
      id: "f2",
      name: "Sport Running Shoes",
      price: 3999,
      originalPrice: 5999,
      rating: 4.9,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1588954842549-05b993e98559?w=400",
      brand: "RunFree",
      isTrending: true
    },
    {
      id: "f3",
      name: "Ankle Leather Boots",
      price: 4499,
      originalPrice: 6999,
      rating: 4.6,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1543163521-1bfbc75bb043?w=400",
      brand: "UrbanWalk"
    },
    {
      id: "f4",
      name: "Suede Loafers",
      price: 2799,
      originalPrice: 3999,
      rating: 4.5,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1516478170703-76d63952e7cb?w=400",
      brand: "EasyStride"
    }
  ];

  const categories = ["All", "Sneakers", "Running", "Boots", "Loafers", "Sandals"];

  const tabs = [
    { name: "Trending", value: "trending" },
    { name: "New Arrivals", value: "new" },
    { name: "Bestsellers", value: "bestsellers" },
    { name: "Sale", value: "sale" }
  ];

  return (
    <Layout>
      <FashionCarousel
        section="footwear"
        title="Step Up Your Style"
        subtitle="Explore the latest footwear trends"
      />

      <TabSection tabs={tabs} />

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Footwear</h1>
          <p className="text-gray-600">Discover our wide range of shoes for every occasion</p>
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

export default Footwear;
