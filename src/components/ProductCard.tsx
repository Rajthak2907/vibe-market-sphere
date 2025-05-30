
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  };
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group ${className}`}>
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-brand-green text-white text-xs px-2 py-1 rounded-full font-medium">
              NEW
            </span>
          )}
          {product.isTrending && (
            <span className="bg-brand-orange text-white text-xs px-2 py-1 rounded-full font-medium">
              TRENDING
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-brand-pink text-white text-xs px-2 py-1 rounded-full font-medium">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
      </div>

      <div className="p-3 sm:p-4 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide truncate">{product.brand}</span>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm sm:text-base text-gray-800 line-clamp-2 hover:text-primary transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="font-bold text-base sm:text-lg text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        <Button className="w-full bg-gradient-brand hover:opacity-90 text-white border-0 h-8 sm:h-9 text-xs sm:text-sm">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
