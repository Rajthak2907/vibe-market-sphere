
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Kids = () => {
  const products = [
    {
      id: "k1",
      name: "Cute Cartoon T-Shirt",
      price: 399,
      originalPrice: 699,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
      brand: "KidsFun",
      isNew: true
    },
    {
      id: "k2",
      name: "Comfortable School Uniform",
      price: 899,
      originalPrice: 1299,
      rating: 4.5,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400",
      brand: "SchoolWear"
    },
    {
      id: "k3",
      name: "Colorful Party Dress",
      price: 1199,
      originalPrice: 1899,
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1518917439142-deacd78191de?w=400",
      brand: "PartyKids",
      isTrending: true
    },
    {
      id: "k4",
      name: "Sports Sneakers",
      price: 799,
      originalPrice: 1299,
      rating: 4.4,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400",
      brand: "ActiveKids"
    }
  ];

  const categories = ["All", "Boys", "Girls", "Shoes", "Toys", "Accessories"];

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#FF9A6B] text-white px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Kids Fashion</h1>
            <p className="text-lg opacity-90">Adorable and comfortable clothing for your little ones</p>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-8 py-4 border-b border-gray-200">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={`whitespace-nowrap rounded-full ${
                    category === "All" 
                      ? "bg-[#4A90E2] hover:bg-[#4A90E2]/90" 
                      : "border-gray-300 hover:border-[#4A90E2] hover:text-[#4A90E2]"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="ml-auto">
              <Select>
                <SelectTrigger className="w-48 rounded-full">
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
      </div>
    </Layout>
  );
};

export default Kids;
