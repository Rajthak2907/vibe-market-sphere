
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Men = () => {
  const products = [
    {
      id: "m1",
      name: "Classic Cotton T-Shirt",
      price: 599,
      originalPrice: 999,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "StyleCo",
      isNew: true
    },
    {
      id: "m2",
      name: "Slim Fit Denim Jeans",
      price: 1299,
      originalPrice: 2199,
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "DenimCo"
    },
    {
      id: "m3",
      name: "Formal Dress Shirt",
      price: 899,
      originalPrice: 1499,
      rating: 4.7,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1620001390628-11f5a2f0ab91?w=400",
      brand: "FormalWear"
    },
    {
      id: "m4",
      name: "Sports Running Shoes",
      price: 2499,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "SportMax",
      isTrending: true
    }
  ];

  const categories = ["All", "T-Shirts", "Shirts", "Jeans", "Shoes", "Accessories"];

  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Men's Fashion</h1>
          <p className="text-gray-600">Discover the latest trends in men's clothing and accessories</p>
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

export default Men;
