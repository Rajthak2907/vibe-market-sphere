
import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (isWishlisted) {
      const updatedWishlist = wishlist.filter((item: any) => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
    setIsWishlisted(!isWishlisted);
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    setIsInCart(true);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-[1.02] ${compact ? 'h-full' : ''}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full object-cover ${compact ? 'h-24' : 'h-48'}`}
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-green-500 text-white text-xs px-2 py-1">
                New
              </Badge>
            )}
            {product.isTrending && (
              <Badge className="bg-orange-500 text-white text-xs px-2 py-1">
                Trending
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleWishlist}
            className={`absolute top-2 right-2 p-2 rounded-full ${compact ? 'w-6 h-6' : 'w-8 h-8'} ${
              isWishlisted ? 'bg-red-100 text-red-500' : 'bg-white/80 text-gray-600'
            } hover:bg-red-100 hover:text-red-500 transition-colors`}
          >
            <Heart className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
        </div>

        <div className={`p-3 ${compact ? 'p-2' : ''}`}>
          <div className="flex items-center justify-between mb-1">
            <span className={`text-gray-500 ${compact ? 'text-xs' : 'text-sm'}`}>{product.brand}</span>
            <div className="flex items-center space-x-1">
              <Star className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} fill-current text-yellow-400`} />
              <span className={`${compact ? 'text-xs' : 'text-sm'} text-gray-600`}>
                {product.rating}
              </span>
            </div>
          </div>
          
          <h3 className={`font-semibold text-gray-800 mb-2 line-clamp-2 ${compact ? 'text-xs' : 'text-sm'}`}>
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className={`font-bold text-gray-900 ${compact ? 'text-sm' : 'text-base'}`}>
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className={`text-gray-500 line-through ${compact ? 'text-xs' : 'text-sm'}`}>
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            {!compact && (
              <Button
                onClick={handleAddToCart}
                size="sm"
                className={`p-2 ${
                  isInCart ? 'bg-green-500 hover:bg-green-600' : 'bg-obeyyo-blue hover:bg-obeyyo-blue/90'
                } text-white rounded-full transition-colors`}
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            )}
          </div>
          
          {!compact && (
            <p className="text-xs text-gray-500 mt-1">
              {product.reviews} reviews
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
