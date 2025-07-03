import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, Heart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  brand: string;
  isNew?: boolean;
  isTrending?: boolean;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Mock product data - replace with actual API call
    const mockProducts: Product[] = [
      {
        id: "t-1",
        name: "Oversized Graphic Hoodie",
        price: 1299,
        originalPrice: 2499,
        rating: 4.8,
        reviews: 245,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
        brand: "UrbanVibe",
        isTrending: true
      },
      {
        id: "t-2",
        name: "Cropped Denim Jacket",
        price: 1599,
        originalPrice: 2999,
        rating: 4.6,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        brand: "RebelWear",
        isTrending: true
      },
      {
        id: "fs-1",
        name: "Premium Wireless Headphones",
        price: 1999,
        originalPrice: 4999,
        rating: 4.9,
        reviews: 342,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        brand: "AudioMax",
        isFlashSale: true
      },
      {
        id: "na-1",
        name: "Designer Midi Dress",
        price: 2299,
        originalPrice: 3999,
        rating: 4.8,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
        brand: "ElegantWear",
        isNew: true
      }
    ];

    const foundProduct = mockProducts.find((p) => p.id === id);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.brand}</p>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
              <span className="text-gray-500 ml-2">({product.reviews} reviews)</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-700 font-bold text-lg">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through ml-2">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <div className="flex space-x-4 mb-6">
              <Button className="bg-gradient-to-r from-obeyyo-pink to-obeyyo-blue text-white">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Product Description
              </h2>
              <p className="text-gray-600">
                This is a high-quality product that is perfect for any occasion.
                It is made with the finest materials and is sure to last for
                years to come.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Related Products
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <ProductCard product={product} compact />
                <ProductCard product={product} compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
