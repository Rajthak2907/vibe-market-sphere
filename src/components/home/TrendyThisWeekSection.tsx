
import { useRef } from "react";
import ProductCard from "@/components/ProductCard";

const TrendyThisWeekSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const trendyProducts = [
    {
      id: "tw-1",
      name: "Viral TikTok Dress",
      price: 1299,
      originalPrice: 1999,
      rating: 4.7,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300",
      brand: "TrendSet",
      isTrending: true
    },
    {
      id: "tw-2",
      name: "Instagram Famous Bag",
      price: 899,
      originalPrice: 1499,
      rating: 4.5,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
      brand: "InstaStyle",
      isTrending: true
    },
    {
      id: "tw-3",
      name: "Celebrity Style Sunglasses",
      price: 599,
      originalPrice: 999,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300",
      brand: "StarLook",
      isTrending: true
    },
    {
      id: "tw-4",
      name: "Trending Sneakers",
      price: 2499,
      originalPrice: 3999,
      rating: 4.6,
      reviews: 678,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300",
      brand: "StreetVibe",
      isTrending: true
    }
  ];

  return (
    <section className="px-4 py-6 bg-gradient-to-r from-teal-50 to-cyan-50">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            🔥 Trendy This Week
          </h2>
          <p className="text-sm text-gray-600">What everyone's talking about</p>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {trendyProducts.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-44">
            <div className="relative">
              <ProductCard product={product} />
              <div className="absolute -top-2 -left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                🔥 Viral
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendyThisWeekSection;
