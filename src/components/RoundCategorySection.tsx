
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoundCategorySectionProps {
  categories: Array<{
    id: string;
    name: string;
    image: string;
    link: string;
  }>;
}

const RoundCategorySection = ({ categories }: RoundCategorySectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 200;
    const newScrollLeft = direction === 'left' 
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount;
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <section className="px-2 sm:px-4 lg:px-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">Shop by Category</h2>
        <div className="hidden md:flex space-x-1">
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
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-3 md:space-x-4 pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <Link key={category.id} to={category.link} className="flex-shrink-0">
            <div className="text-center space-y-2 group w-16 md:w-20">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-[#E91E63]/20 to-[#2196F3]/20 p-1 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-gray-800 text-xs md:text-sm group-hover:text-[#E91E63] transition-colors text-center">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoundCategorySection;
