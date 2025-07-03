
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

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

interface ProductSliderProps {
  title: string;
  products: Product[];
}

const ProductSlider = ({ title, products }: ProductSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('left')}
              className="p-2"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('right')}
              className="p-2"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
      
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-40">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
