
import { Link } from "react-router-dom";
import { Star, ChevronRight } from "lucide-react";
import FeaturedBrands from "@/components/FeaturedBrands";
import SkeletonLoader from "@/components/SkeletonLoader";
import SectionBanner from "@/components/SectionBanner";

interface ShopByBrandsSectionProps {
  isLoading: boolean;
}

const ShopByBrandsSection = ({ isLoading }: ShopByBrandsSectionProps) => {
  const featuredBrands = [{
    id: "fb-1",
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100",
    discount: "Up to 50% OFF",
    link: "/brands/nike"
  }, {
    id: "fb-2",
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=100",
    discount: "Up to 40% OFF",
    link: "/brands/adidas"
  }, {
    id: "fb-3",
    name: "Puma",
    logo: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=100",
    discount: "Up to 60% OFF",
    link: "/brands/puma"
  }, {
    id: "fb-4",
    name: "Zara",
    logo: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100",
    discount: "Up to 30% OFF",
    link: "/brands/zara"
  }, {
    id: "fb-5",
    name: "H&M",
    logo: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100",
    discount: "Up to 45% OFF",
    link: "/brands/hm"
  }];

  return (
    <section className="bg-gradient-to-r from-obeyyo-orange to-obeyyo-yellow mx-4 rounded-2xl p-4 bg-white">
      <div className="mb-4">
        <SectionBanner
          title="Shop by Brands"
          subtitle="Explore collections from your favorite brands"
          imageUrl="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800"
          height="h-28"
        />
      </div>

      <div className="flex items-center justify-between mb-4 rounded-sm bg-white">
        <div className="flex items-center gap-2 bg-white">
          <Star className="w-5 h-5 text-white bg-slate-950" />
          <h2 className="text-lg font-bold text-black">Premium Brands</h2>
        </div>
        <Link to="/brands" className="text-sm text-black/80 hover:text-black flex items-center gap-1 font-medium">
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      {isLoading ? (
        <div className="flex gap-4 overflow-x-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-32">
              <SkeletonLoader type="brand" />
            </div>
          ))}
        </div>
      ) : (
        <FeaturedBrands brands={featuredBrands} />
      )}
    </section>
  );
};

export default ShopByBrandsSection;
