
import OffersAndCouponsSection from "@/components/shared/OffersAndCouponsSection";
import BiggestOfferSection from "@/components/shared/BiggestOfferSection";
import EverythingInOfferSection from "@/components/shared/EverythingInOfferSection";
import PromoBanner from "@/components/shared/PromoBanner";

interface Coupon {
  id: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
}

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

interface Category {
  id: string;
  name: string;
  image: string;
  discount: string;
  link: string;
}

interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
}

interface MenOffersSectionProps {
  couponsData: Coupon[];
  biggestOfferProducts: Product[];
  everythingInOfferCategories: Category[];
  promoBanners: PromoBanner[];
}

const MenOffersSection = ({ couponsData, biggestOfferProducts, everythingInOfferCategories, promoBanners }: MenOffersSectionProps) => {
  return (
    <>
      <OffersAndCouponsSection coupons={couponsData} />
      <BiggestOfferSection products={biggestOfferProducts} />
      
      <section className="px-3">
        <PromoBanner banner={promoBanners[1]} />
      </section>

      <EverythingInOfferSection categories={everythingInOfferCategories} />
      
      <section className="px-3">
        <PromoBanner banner={promoBanners[2]} />
      </section>
    </>
  );
};

export default MenOffersSection;
