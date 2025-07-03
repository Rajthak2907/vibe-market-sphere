
import { useState, useEffect } from "react";
import { Clock, Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

interface DealOfTheDayProps {
  product: Product;
  endTime: Date;
}

const DealOfTheDay = ({ product, endTime }: DealOfTheDayProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-4 text-white">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">⚡ Deal of the Day</h2>
        <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-semibold">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 text-gray-800">
        <div className="flex space-x-4">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            {discountPercentage > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">{product.brand}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>

            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xl font-bold text-gray-900">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Button size="sm" className="bg-obeyyo-blue hover:bg-obeyyo-blue/90 text-white flex-1">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
