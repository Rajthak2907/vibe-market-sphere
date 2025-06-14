
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FashionCarouselProps {
  section: 'men' | 'women' | 'kids';
  title: string;
  subtitle: string;
}

const FashionCarousel = ({ section, title, subtitle }: FashionCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Different images for each section
  const getImages = () => {
    switch (section) {
      case 'men':
        return [
          {
            id: "men-1",
            url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=300&fit=crop",
            title: "Men's Summer Collection",
            subtitle: "Discover the latest trends in shirts & casual wear"
          },
          {
            id: "men-2",
            url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=300&fit=crop",
            title: "Formal & Business Wear",
            subtitle: "Professional looks for every occasion"
          },
          {
            id: "men-3",
            url: "https://images.unsplash.com/photo-1472851294608-062f824d2d5f?w=800&h=300&fit=crop",
            title: "Sports & Active Wear",
            subtitle: "Gear up for your fitness journey"
          }
        ];
      case 'women':
        return [
          {
            id: "women-1",
            url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=300&fit=crop",
            title: "Women's Fashion Collection",
            subtitle: "Elegant styles for every occasion"
          },
          {
            id: "women-2",
            url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=300&fit=crop",
            title: "Ethnic & Traditional Wear",
            subtitle: "Traditional meets modern elegance"
          },
          {
            id: "women-3",
            url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=300&fit=crop",
            title: "Party & Evening Wear",
            subtitle: "Glamorous outfits for special moments"
          }
        ];
      case 'kids':
        return [
          {
            id: "kids-1",
            url: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&h=300&fit=crop",
            title: "Kids Fashion Collection",
            subtitle: "Adorable and comfortable styles for little ones"
          },
          {
            id: "kids-2",
            url: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=300&fit=crop",
            title: "School & Casual Wear",
            subtitle: "Perfect outfits for school and play"
          },
          {
            id: "kids-3",
            url: "https://images.unsplash.com/photo-1518917439142-deacd78191de?w=800&h=300&fit=crop",
            title: "Party & Special Occasions",
            subtitle: "Make every moment special"
          }
        ];
      default:
        return [];
    }
  };

  const images = getImages();

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getGradientColors = () => {
    switch (section) {
      case 'men':
        return 'from-[#FF6B9D] to-[#4A90E2]';
      case 'women':
        return 'from-[#FF6B9D] to-[#FF9A6B]';
      case 'kids':
        return 'from-[#4A90E2] to-[#FF9A6B]';
      default:
        return 'from-[#FF6B9D] to-[#4A90E2]';
    }
  };

  return (
    <div className={`bg-gradient-to-r ${getGradientColors()} text-white px-3 py-6 relative overflow-hidden group`}>
      {/* Background Carousel */}
      <div 
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="min-w-full relative">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="transition-all duration-500">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 animate-fade-in">
            {images[currentIndex]?.title || title}
          </h1>
          <p className="text-sm sm:text-base opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {images[currentIndex]?.subtitle || subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on small screens, visible on hover */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hidden md:flex"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hidden md:flex"
        onClick={goToNext}
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full hover:scale-125 active:scale-95 ${
              index === currentIndex 
                ? "w-6 h-2 bg-white shadow-lg" 
                : "w-2 h-2 bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Touch/Swipe area for mobile */}
      <div 
        className="absolute inset-0 z-10 md:hidden"
        onTouchStart={(e) => {
          const touch = e.touches[0];
          e.currentTarget.dataset.startX = touch.clientX.toString();
        }}
        onTouchEnd={(e) => {
          const touch = e.changedTouches[0];
          const startX = parseInt(e.currentTarget.dataset.startX || '0');
          const endX = touch.clientX;
          const diff = startX - endX;
          
          if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
              goToNext();
            } else {
              goToPrevious();
            }
          }
        }}
      />
    </div>
  );
};

export default FashionCarousel;
