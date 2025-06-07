
import ImageCarousel from "@/components/ImageCarousel";
import SkeletonLoader from "@/components/SkeletonLoader";

interface HeroSectionProps {
  carouselImages: Array<{
    id: string;
    url: string;
    title: string;
    subtitle: string;
  }>;
  isLoading: boolean;
}

const HeroSection = ({ carouselImages, isLoading }: HeroSectionProps) => {
  return (
    <>
      {/* Personalized Greeting */}
      <div className="px-4 pt-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-obeyyo-pink to-obeyyo-blue bg-clip-text text-zinc-950">
          Hi there! 👋
        </h1>
        <p className="text-sm text-gray-600 mt-1">Discover amazing deals just for you</p>
      </div>

      {/* Hero Carousel */}
      <div className="px-4">
        <div className="relative w-full h-48 rounded-2xl overflow-hidden">
          {isLoading ? <SkeletonLoader type="banner" /> : <ImageCarousel images={carouselImages} />}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
