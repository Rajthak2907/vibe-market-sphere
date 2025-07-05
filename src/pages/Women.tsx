import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ImageCarousel from "@/components/ImageCarousel";
import PromoBanner from "@/components/PromoBanner";
import ProductSlider from "@/components/ProductSlider";
import PocketFriendlySection from "@/components/PocketFriendlySection";
import DealOfTheDay from "@/components/DealOfTheDay";
import TabSection from "@/components/TabSection";
import RoundCategorySection from "@/components/RoundCategorySection";
import FashionCarousel from "@/components/FashionCarousel";
import HorizontalBrandSection from "@/components/HorizontalBrandSection";
import HighlightsOfTheDaySection from "@/components/HighlightsOfTheDaySection";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BrandsFlexSection from "@/components/BrandsFlexSection";
import TShirtCategoriesSection from "@/components/TShirtCategoriesSection";
import OffersAndCouponsSection from "@/components/OffersAndCouponsSection";
import BiggestOfferSection from "@/components/BiggestOfferSection";
import EverythingInOfferSection from "@/components/EverythingInOfferSection";

const Women = () => {
  const products = [
    {
      id: "w1",
      name: "Floral Print Summer Dress",
      price: 1299,
      originalPrice: 2199,
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "FashionHub",
      isNew: true
    },
    {
      id: "w2",
      name: "Designer Ethnic Kurta Set",
      price: 1899,
      originalPrice: 3299,
      rating: 4.6,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      brand: "EthnicWear",
      isTrending: true
    },
    {
      id: "w3",
      name: "Casual Denim Jacket",
      price: 999,
      originalPrice: 1699,
      rating: 4.4,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      brand: "CasualCo"
    },
    {
      id: "w4",
      name: "Elegant High Heels",
      price: 1499,
      originalPrice: 2499,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "FootWear"
    }
  ];

  const carouselImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      title: "Women's Summer Collection",
      subtitle: "Elegant styles for every occasion"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
      title: "Ethnic Wear Sale",
      subtitle: "Traditional meets modern"
    }
  ];

  const dealProduct = {
    id: "deal-w1",
    name: "Designer Handbag Collection",
    price: 3999,
    originalPrice: 7999,
    rating: 4.9,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    brand: "LuxeBags",
    isNew: true
  };

  const pocketFriendlyProducts = [
    {
      id: "pf-w1",
      name: "Cotton Casual Top",
      price: 399,
      originalPrice: 799,
      rating: 4.3,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
      brand: "CasualWear"
    },
    {
      id: "pf-w2",
      name: "Basic Denim Jeans",
      price: 699,
      originalPrice: 1299,
      rating: 4.1,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "DenimCo"
    },
    {
      id: "pf-w3",
      name: "Comfort Flats",
      price: 599,
      originalPrice: 999,
      rating: 4.2,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "ComfortShoes"
    }
  ];

  const genzPicksProducts = [
    {
      id: "gz-w1",
      name: "Aesthetic Crop Top",
      price: 899,
      originalPrice: 1599,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
      brand: "VibeCheck"
    },
    {
      id: "gz-w2",
      name: "Y2K Style Sunglasses",
      price: 699,
      originalPrice: 1299,
      rating: 4.3,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      brand: "RetroFuture"
    }
  ];

  const topBrandsProducts = [
    {
      id: "tb-w1",
      name: "Zara Style Dress",
      price: 2999,
      originalPrice: 4999,
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "Zara"
    },
    {
      id: "tb-w2",
      name: "H&M Trendy Top",
      price: 1499,
      originalPrice: 2499,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
      brand: "H&M"
    }
  ];

  const genzBrandsProducts = [
    {
      id: "gb-w1",
      name: "Urban Outfitters Tee",
      price: 1299,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
      brand: "Urban Outfitters"
    }
  ];

  const mensWardrobeProducts = [
    {
      id: "mw-w1",
      name: "Gift for Him - Watch",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TimeCraft"
    }
  ];

  const brandsDealsProducts = [
    {
      id: "bd-w1",
      name: "Calvin Klein Perfume",
      price: 3499,
      originalPrice: 5999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "Calvin Klein"
    }
  ];

  const womensWardrobeProducts = [
    {
      id: "ww-w1",
      name: "Elegant Midi Dress",
      price: 2299,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "ElegantWear"
    },
    {
      id: "ww-w2",
      name: "Designer Handbag",
      price: 3999,
      originalPrice: 6999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "LuxeBags"
    }
  ];

  const featuredBrandsProducts = [
    {
      id: "fb-w1",
      name: "Premium Jewelry Set",
      price: 8999,
      originalPrice: 14999,
      rating: 4.9,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
      brand: "JewelCraft"
    }
  ];

  const bestBrandsProducts = [
    {
      id: "bb-w1",
      name: "Smart Fitness Watch",
      price: 6999,
      originalPrice: 9999,
      rating: 4.5,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      brand: "FitStyle"
    }
  ];

  const promoBanners = [
    {
      id: "promo-w1",
      title: "Women's Fashion Week",
      subtitle: "Up to 70% off on trending styles",
      buttonText: "Shop Now",
      buttonLink: "/women/sale",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      backgroundColor: "#FF6B9D"
    },
    {
      id: "promo-w2",
      title: "New Arrivals",
      subtitle: "Fresh women's collection just dropped",
      buttonText: "Explore",
      buttonLink: "/women/new",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
      backgroundColor: "#FF9A6B"
    },
    {
      id: "promo-w3",
      title: "Brand Festival",
      subtitle: "Best women's brands, unbeatable prices",
      buttonText: "Shop Brands",
      buttonLink: "/women/brands",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
      backgroundColor: "#4A90E2"
    },
    {
      id: "promo-w4",
      title: "Final Sale",
      subtitle: "Last chance to grab women's deals",
      buttonText: "Grab Deals",
      buttonLink: "/women/final-sale",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      backgroundColor: "#FF6B9D"
    }
  ];

  const filterCategories = ["All", "Dresses", "Tops", "Ethnic", "Shoes", "Accessories"];
  const dealEndTime = new Date();
  dealEndTime.setHours(dealEndTime.getHours() + 8);

  const categories = [
    {
      id: "c1",
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100",
      link: "/women/dresses"
    },
    {
      id: "c2",
      name: "Tops",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=100",
      link: "/women/tops"
    },
    {
      id: "c3",
      name: "Ethnic",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100",
      link: "/women/ethnic"
    },
    {
      id: "c4",
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100",
      link: "/women/shoes"
    },
    {
      id: "c5",
      name: "Handbags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100",
      link: "/women/handbags"
    },
    {
      id: "c6",
      name: "Jewelry",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=100",
      link: "/women/jewelry"
    }
  ];

  const subcategories = [
    { id: "s1", name: "Casual Wear", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=80", link: "/women/casual" },
    { id: "s2", name: "Formal Wear", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=80", link: "/women/formal" },
    { id: "s3", name: "Party Wear", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=80", link: "/women/party" },
    { id: "s4", name: "Ethnic Wear", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80", link: "/women/ethnic" },
    { id: "s5", name: "Western Wear", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=80", link: "/women/western" },
    { id: "s6", name: "Summer Collection", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=80", link: "/women/summer" },
    { id: "s7", name: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=80", link: "/women/footwear" },
    { id: "s8", name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80", link: "/women/accessories" }
  ];

  const tabs = [
    { name: "All", value: "all", products: [] },
    { name: "Men", value: "men", products: [] },
    { name: "Women", value: "women", products: [] },
    { name: "Kids", value: "kids", products: [] }
  ];

  const highlightsProducts = products.slice(0, 3);

  const brandsFlexData = [
    { id: "bf1", name: "Zara", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100", link: "/women?brand=zara" },
    { id: "bf2", name: "H&M", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=100", link: "/women?brand=hm" },
    { id: "bf3", name: "Forever 21", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=100", link: "/women?brand=forever21" },
    { id: "bf4", name: "Mango", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100", link: "/women?brand=mango" }
  ];

  const topCategories = [
    { id: "tc1", name: "T-Shirts", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=100", link: "/women/tshirts" },
    { id: "tc2", name: "Dresses", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100", link: "/women/dresses" },
    { id: "tc3", name: "Jeans", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100", link: "/women/jeans" },
    { id: "tc4", name: "Tops", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=100", link: "/women/tops" }
  ];

  const couponsData = [
    { code: "SAVE30", discount: "30% OFF", description: "On orders above ₹1999" },
    { code: "FIRST15", discount: "15% OFF", description: "First time buyers" },
    { code: "FLAT500", discount: "₹500 OFF", description: "On orders above ₹2999" }
  ];

  const biggestOfferProducts = products.slice(0, 4);

  const everythingInOfferCategories = [
    { id: "eio1", name: "All Fashion", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100", link: "/women/all" },
    { id: "eio2", name: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100", link: "/women/footwear" },
    { id: "eio3", name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100", link: "/women/accessories" }
  ];

  const beautyProducts = [
    {
      id: "bp1",
      name: "Lipstick Set",
      price: 899,
      originalPrice: 1499,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
      brand: "BeautyBrand"
    },
    {
      id: "bp2",
      name: "Face Cream",
      price: 1299,
      originalPrice: 1999,
      rating: 4.6,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      brand: "SkinCare"
    }
  ];

  const footwearProducts = [
    {
      id: "fp1",
      name: "Casual Sneakers",
      price: 2499,
      originalPrice: 3999,
      rating: 4.4,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "FootBrand"
    },
    {
      id: "fp2",
      name: "Formal Heels",
      price: 1899,
      originalPrice: 2999,
      rating: 4.3,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "HeelCo"
    }
  ];

  const watchesProducts = [
    {
      id: "wp1",
      name: "Smart Watch",
      price: 5999,
      originalPrice: 8999,
      rating: 4.7,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TechWatch"
    }
  ];

  const perfumeProducts = [
    {
      id: "pp1",
      name: "Floral Perfume",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 278,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "FragranceCo"
    }
  ];

  return (
    <Layout>
      <div className="space-y-2 bg-gray-50">
        {/* Fashion Carousel Header */}
        <FashionCarousel 
          section="women" 
          title="Women's Fashion" 
          subtitle="Explore trendy and stylish women's collection" 
        />

        {/* Tabs Section */}
        <TabSection tabs={tabs} />

        {/* Shop by Category */}
        <RoundCategorySection categories={categories} />

        {/* Hero Carousel */}
        <div className="px-3">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Subcategory Section - Updated to 2 lines */}
        <section className="px-3">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-gray-800">Shop by Style</h2>
              <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {subcategories.map((subcategory) => (
                <div key={subcategory.id} className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-1">
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-tight">{subcategory.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[0]} />
        </section>

        {/* Brands Flex Section */}
        <BrandsFlexSection brands={brandsFlexData} />

        {/* Biggest Brands On Offers */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">🏆 Biggest Brands On Offers</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={topBrandsProducts} />
        </section>

        {/* Top Categories Section */}
        <TShirtCategoriesSection categories={topCategories} title="👚 Top Categories" />

        {/* Offers and Coupons Section */}
        <OffersAndCouponsSection coupons={couponsData} />

        {/* Biggest Offers Only on Obeyyo */}
        <BiggestOfferSection products={biggestOfferProducts} />

        {/* Banner */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[1]} />
        </section>

        {/* Everything in Offer */}
        <EverythingInOfferSection categories={everythingInOfferCategories} />

        {/* Banner with Offer */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[2]} />
        </section>

        {/* Beauty Products Section */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">💄 Women's Beauty</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={beautyProducts} />
        </section>

        {/* Footwear Section */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">👠 Women's Footwear</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={footwearProducts} />
        </section>

        {/* Watches Section */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">⌚ Women's Watches</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={watchesProducts} />
        </section>

        {/* Perfume Section */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">🌺 Women's Fragrances</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={perfumeProducts} />
        </section>

        {/* Deal of the Day */}
        <section className="px-3">
          <DealOfTheDay product={dealProduct} endTime={dealEndTime} />
        </section>

        {/* Products Grid */}
        <div className="px-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Women;
