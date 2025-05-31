
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
    image: string;
    brand: string;
    isNew?: boolean;
    isTrending?: boolean;
    isFlashSale?: boolean;
    isTopRated?: boolean;
  };
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    
    // Save to localStorage for guest users
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (isWishlisted) {
      const filteredWishlist = wishlist.filter((id: string) => id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(filteredWishlist));
    } else {
      wishlist.push(product.id);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group relative ${className}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isTrending && (
            <Badge className="text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg" style={{ backgroundColor: "#fc334d" }}>
              🔥 Trending
            </Badge>
          )}
          {product.isFlashSale && (
            <Badge className="text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg animate-pulse" style={{ backgroundColor: "#fc2682" }}>
              ⚡ Flash Sale
            </Badge>
          )}
          {product.isNew && (
            <Badge className="text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg" style={{ backgroundColor: "#f9b704" }}>
              🌟 New
            </Badge>
          )}
          {product.isTopRated && (
            <Badge className="text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg" style={{ backgroundColor: "#fb8619" }}>
              🏆 Top Rated
            </Badge>
          )}
          {discountPercent > 0 && (
            <Badge className="text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg" style={{ backgroundColor: "#fc334d" }}>
              {discountPercent}% OFF
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
          onClick={handleWishlistToggle}
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'text-white' : 'text-gray-600'
            }`} 
            style={{ fill: isWishlisted ? "#fc2682" : "none", color: isWishlisted ? "#fc2682" : undefined }}
          />
        </Button>

        {/* Quick Add to Cart - Shows on Hover */}
        <Button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          style={{ background: "linear-gradient(135deg, #fc2682, #08a0ef)" }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">{product.brand}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-[#f9b704]" style={{ fill: "#f9b704" }} />
            <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 hover:text-[#fc2682] transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
