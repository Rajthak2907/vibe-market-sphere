
import Layout from "@/components/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import TabSection from "@/components/TabSection";
import RoundCategorySection from "@/components/RoundCategorySection";
import FeaturesBanner from "@/components/FeaturesBanner";
import TopCategoriesOffer from "@/components/TopCategoriesOffer";
import PocketFriendlySection from "@/components/PocketFriendlySection";
import DealOfTheDay from "@/components/DealOfTheDay";
import Footer from "@/components/Footer";

const Index = () => {
  // Mock data
  const carouselImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      title: "Summer Edit 2025",
      subtitle: "Big collection 40% off"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
      title: "Fashion Week Special",
      subtitle: "Exclusive Designer Wear"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
      title: "Flash Sale",
      subtitle: "Limited Time Offer - Don't Miss Out!"
    }
  ];

  // Categories matching the reference design
  const categories = [
    { id: "1", name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300", itemCount: 1200, link: "/men" },
    { id: "2", name: "Kurtas", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300", itemCount: 800, link: "/women" },
    { id: "3", name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300", itemCount: 950, link: "/men" },
    { id: "4", name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300", itemCount: 600, link: "/accessories" },
    { id: "5", name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", itemCount: 450, link: "/accessories" },
    { id: "6", name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", itemCount: 320, link: "/accessories" },
    { id: "7", name: "Sarees", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300", itemCount: 750, link: "/women" },
    { id: "8", name: "Sports", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300", itemCount: 540, link: "/men" }
  ];

  const dealProduct = {
    id: "deal-1",
    name: "Premium Wireless Headphones with Noise Cancellation",
    price: 1999,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    brand: "AudioMax",
    isNew: true
  };

  // Tab section data - simplified since we're not showing products in the All tab
  const tabData = [
    {
      name: "All",
      value: "all",
      products: []
    },
    {
      name: "Men", 
      value: "men",
      products: []
    },
    {
      name: "Women",
      value: "women", 
      products: []
    },
    {
      name: "Kids",
      value: "kids",
      products: []
    }
  ];

  // Top categories on offer matching reference design
  const topOfferCategories = [
    { id: "1", name: "Casual Shirts", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300", discount: "Up to 70% OFF", link: "/men" },
    { id: "2", name: "Designer Dresses", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300", discount: "Up to 50% OFF", link: "/women" },
    { id: "3", name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", discount: "Up to 60% OFF", link: "/accessories" },
    { id: "4", name: "Luxury Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", discount: "Up to 40% OFF", link: "/accessories" }
  ];

  // Pocket friendly products
  const pocketFriendlyProducts = [
    {
      id: "pf-1",
      name: "Casual Cotton Tee",
      price: 299,
      originalPrice: 599,
      rating: 4.2,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "BasicWear"
    },
    {
      id: "pf-2",
      name: "Slim Fit Jeans",
      price: 799,
      originalPrice: 1599,
      rating: 4.0,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "DenimCo"
    },
    {
      id: "pf-3",
      name: "Canvas Backpack",
      price: 599,
      originalPrice: 999,
      rating: 4.3,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "EverydayBags"
    },
    {
      id: "pf-4",
      name: "Sports Sneakers",
      price: 699,
      originalPrice: 1299,
      rating: 4.1,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      brand: "SportFit"
    },
    {
      id: "pf-5",
      name: "Cotton Kurta",
      price: 449,
      originalPrice: 899,
      rating: 4.4,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      brand: "EthnicWear"
    },
    {
      id: "pf-6",
      name: "Casual Shirt",
      price: 599,
      originalPrice: 1199,
      rating: 4.2,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
      brand: "StyleCo"
    }
  ];

  const dealEndTime = new Date();
  dealEndTime.setHours(dealEndTime.getHours() + 8);

  return (
    <Layout>
      <div className="space-y-6 bg-white">
        {/* 1. Navbar (handled by Layout) */}
        
        {/* 2. Category Tab Section */}
        <TabSection tabs={tabData} />

        {/* 3. Round Product Category Component */}
        <RoundCategorySection categories={categories} />

        {/* 4. Hero Carousel */}
        <div className="px-3 sm:px-4 lg:px-6">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* 5. Features Banner */}
        <FeaturesBanner />

        {/* 6. Top Categories on Offer */}
        <TopCategoriesOffer categories={topOfferCategories} />

        {/* 7. ⚡ Deal of the Day */}
        <section className="px-3 sm:px-4 lg:px-6">
          <DealOfTheDay product={dealProduct} endTime={dealEndTime} />
        </section>

        {/* 8. Pocket Friendly Section with Slider */}
        <PocketFriendlySection products={pocketFriendlyProducts} />

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
