import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp } from "lucide-react";
import TabSection from "@/components/shared/TabSection";
import { Link } from "react-router-dom";
import FashionCarousel from "@/components/shared/FashionCarousel";

const Kids = () => {
  const products = [
    {
      id: "k1",
      name: "Kids' Adventure Backpack",
      price: 999,
      originalPrice: 1499,
      rating: 4.7,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1605296867304-46dcd2540e68?w=400",
      brand: "FunGear",
      isNew: true
    },
    {
      id: "k2",
      name: "Children's Storybook Set",
      price: 499,
      originalPrice: 799,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      brand: "StoryLand",
      isTrending: true
    },
    {
      id: "k3",
      name: "Kids' Art Supplies Kit",
      price: 699,
      originalPrice: 999,
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1623939374574-317454448914?w=400",
      brand: "ArtMaster"
    },
    {
      id: "k4",
      name: "Educational Building Blocks",
      price: 799,
      originalPrice: 1199,
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1584338204789-4c5594594541?w=400",
      brand: "BlockBuild"
    }
  ];

  const categories = ["All", "Clothing", "Toys", "Books", "Accessories"];

  return (
    <Layout>
      <FashionCarousel 
        section="kids" 
        title="Kids' Collection" 
        subtitle="Explore the latest trends in kids' fashion" 
      />
      <TabSection tabs={[
        { name: "All", value: "all", products: [] },
        { name: "Boys", value: "boys", products: [] },
        { name: "Girls", value: "girls", products: [] }
      ]} />

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Kids</h1>
          <p className="text-gray-600">Explore our wide range of products for kids</p>
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

export default Kids;
