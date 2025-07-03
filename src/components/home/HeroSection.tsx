
import FashionCarousel from "@/components/shared/FashionCarousel";
import TabSection from "@/components/shared/TabSection";
import RoundCategorySection from "@/components/shared/RoundCategorySection";
import ImageCarousel from "@/components/shared/ImageCarousel";

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface CarouselImage {
  id: string;
  url: string;
  title: string;
  subtitle: string;
}

interface HeroSectionProps {
  carouselImages: CarouselImage[];
  isLoading: boolean;
  categories: Category[];
}

const HeroSection = ({ carouselImages, isLoading, categories }: HeroSectionProps) => {
  const tabs = [
    { name: "All", value: "all", products: [] },
    { name: "Men", value: "men", products: [] },
    { name: "Women", value: "women", products: [] },
    { name: "Kids", value: "kids", products: [] }
  ];

  return (
    <>
      <FashionCarousel 
        section="home" 
        title="Fashion Hub" 
        subtitle="Discover the latest trends in fashion" 
      />
      <TabSection tabs={tabs} />
      <RoundCategorySection categories={categories} />
      <div className="px-3">
        <ImageCarousel images={carouselImages} />
      </div>
    </>
  );
};

export default HeroSection;
