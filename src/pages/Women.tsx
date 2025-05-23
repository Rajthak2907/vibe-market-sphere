
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Women = () => {
  const products = [
    {
      id: "w1",
      name: "Floral Print Summer Dress",
      price: 1299,
      originalPrice: 2199,
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "FashionHub",
      isNew: true
    },
    {
      id: "w2",
      name: "Designer Ethnic Kurta Set",
      price: 1899,
      originalPrice: 3299,
      rating: 4.6,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      brand: "EthnicWear",
      isTrending: true
    },
    {
      id: "w3",
      name: "Casual Denim Jacket",
      price: 999,
      originalPrice: 1699,
      rating: 4.4,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      brand: "CasualCo"
    },
    {
      id: "w4",
      name: "Elegant High Heels",
      price: 1499,
      originalPrice: 2499,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "FootWear"
    }
  ];

  const categories = ["All", "Dresses", "Tops", "Ethnic", "Shoes", "Accessories"];

  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Women's Fashion</h1>
          <p className="text-gray-600">Explore trendy and stylish women's clothing collection</p>
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

export default Women;
