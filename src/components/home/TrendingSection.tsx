
import { Link } from "react-router-dom";
import { TrendingUp, ChevronRight } from "lucide-react";
import ProductSlider from "@/components/ProductSlider";

interface TrendingSectionProps {
  isLoading: boolean;
}

const TrendingSection = ({ isLoading }: TrendingSectionProps) => {
  const trendingProducts = [{
    id: "t-1",
    name: "Oversized Graphic Hoodie",
    price: 1299,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    brand: "UrbanVibe",
    isTrending: true
  }, {
    id: "t-2",
    name: "Cropped Denim Jacket",
    price: 1599,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    brand: "RebelWear",
    isTrending: true
  }, {
    id: "t-3",
    name: "Aesthetic Phone Case",
    price: 399,
    originalPrice: 799,
    rating: 4.5,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    brand: "TechStyle",
    isTrending: true
  }];

  return (
    <section className="bg-gradient-to-r from-obeyyo-yellow to-obeyyo-orange mx-4 rounded-2xl p-4 bg-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-white" />
          <h2 className="text-lg font-bold text-white">Trending Now</h2>
        </div>
        <Link to="/trending" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <ProductSlider title="" products={trendingProducts} />
    </section>
  );
};

export default TrendingSection;
