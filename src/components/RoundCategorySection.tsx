
import { useRef } from "react";
import { Link } from "react-router-dom";

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

  return (
    <section className="px-4 py-4 bg-white">
      <h2 className="text-base font-semibold text-gray-800 mb-3">Shop by Category</h2>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <Link key={category.id} to={category.link} className="flex-shrink-0">
            <div className="text-center space-y-2 group w-16">
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-[#E91E63]/20 to-[#2196F3]/20 p-1 group-active:scale-95 transition-transform duration-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-gray-800 text-xs text-center leading-tight">
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
