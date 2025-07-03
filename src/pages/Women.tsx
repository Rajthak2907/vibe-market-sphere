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

  const brandsFlexData = [
    { id: "bf1", name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Zara_Logo.svg", discount: "Up to 60% OFF" },
    { id: "bf2", name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg", discount: "Up to 50% OFF" },
    { id: "bf3", name: "Forever 21", logo: "https://logos-world.net/wp-content/uploads/2020/04/Forever-21-Logo.png", discount: "Up to 45% OFF" },
    { id: "bf4", name: "Mango", logo: "https://logos-world.net/wp-content/uploads/2020/11/Mango-Logo.png", discount: "Up to 40% OFF" },
    { id: "bf5", name: "Vero Moda", logo: "https://logos-world.net/wp-content/uploads/2020/11/Vero-Moda-Logo.png", discount: "Up to 35% OFF" },
    { id: "bf6", name: "Only", logo: "https://logos-world.net/wp-content/uploads/2020/11/Only-Logo.png", discount: "Up to 30% OFF" },
    { id: "bf7", name: "Calvin Klein", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Calvin_klein_logo.svg", discount: "Up to 45% OFF" },
    { id: "bf8", name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Tommy_Hilfiger_logo.svg", discount: "Up to 40% OFF" },
    { id: "bf9", name: "Gap", logo: "https://logos-world.net/wp-content/uploads/2020/04/Gap-Logo.png", discount: "Up to 35% OFF" },
    { id: "bf10", name: "Levi's", logo: "https://logos-world.net/wp-content/uploads/2020/04/Levis-Logo.png", discount: "Up to 50% OFF" },
    { id: "bf11", name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", discount: "Up to 45% OFF" },
    { id: "bf12", name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", discount: "Up to 40% OFF" },
    { id: "bf13", name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg", discount: "Up to 35% OFF" },
    { id: "bf14", name: "Guess", logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Guess_logo.svg", discount: "Up to 30% OFF" },
    { id: "bf15", name: "Versace", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Versace_logo.svg", discount: "Up to 50% OFF" },
    { id: "bf16", name: "Coach", logo: "https://logos-world.net/wp-content/uploads/2020/04/Coach-Logo.png", discount: "Up to 45% OFF" }
  ];

  const topCategories = [
    { id: "t1", name: "Casual Dresses", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=80", link: "/women/casual-dresses" },
    { id: "t2", name: "Formal Wear", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=80", link: "/women/formal-wear" },
    { id: "t3", name: "Ethnic Wear", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80", link: "/women/ethnic-wear" },
    { id: "t4", name: "Party Wear", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=80", link: "/women/party-wear" },
    { id: "t5", name: "Tops & Tees", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=80", link: "/women/tops" },
    { id: "t6", name: "Activewear", image: "https://images.unsplash.com/photo-1571019613540-97d60b3c49f8?w=80", link: "/women/activewear" }
  ];

  const couponsData = [
    {
      id: "c1",
      code: "SAVE50",
      title: "Flat ₹500 Off",
      description: "On orders above ₹2000",
      discount: "₹500 OFF",
      validUntil: "31 Dec 2024"
    },
    {
      id: "c2",
      code: "FIRST30",
      title: "First Order Discount",
      description: "Extra 30% off for new users",
      discount: "30% OFF",
      validUntil: "31 Dec 2024"
    }
  ];

  const biggestOfferProducts = [
    ...products.slice(0, 3),
    ...topBrandsProducts.slice(0, 3),
    ...genzPicksProducts.slice(0, 3)
  ];

  const everythingInOfferCategories = [
    { id: "e1", name: "Dresses", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400", discount: "Up to 60% OFF", link: "/women/dresses" },
    { id: "e2", name: "Handbags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", discount: "Up to 50% OFF", link: "/women/handbags" },
    { id: "e3", name: "Jewelry", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400", discount: "Up to 40% OFF", link: "/women/jewelry" },
    { id: "e4", name: "Shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", discount: "Up to 70% OFF", link: "/women/shoes" }
  ];

  const beautyProducts = [
    {
      id: "b1",
      name: "Lipstick Matte Finish",
      price: 599,
      originalPrice: 999,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
      brand: "BeautyHub"
    },
    {
      id: "b2",
      name: "Foundation Long Lasting",
      price: 1299,
      originalPrice: 1999,
      rating: 4.6,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
      brand: "GlowCraft"
    },
    {
      id: "b3",
      name: "Eyeshadow Palette",
      price: 999,
      originalPrice: 1699,
      rating: 4.4,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
      brand: "ColorMagic"
    }
  ];

  const footwearProducts = [
    {
      id: "f1",
      name: "High Heel Pumps",
      price: 1899,
      originalPrice: 2999,
      rating: 4.3,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "ElegantStep"
    },
    {
      id: "f2",
      name: "Casual Sneakers",
      price: 1299,
      originalPrice: 2199,
      rating: 4.5,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      brand: "ComfortWalk"
    },
    {
      id: "f3",
      name: "Ankle Boots",
      price: 2299,
      originalPrice: 3599,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      brand: "StyleBoots"
    }
  ];

  const watchesProducts = [
    {
      id: "w1",
      name: "Fashion Smart Watch",
      price: 6999,
      originalPrice: 9999,
      rating: 4.4,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "FashionTech"
    },
    {
      id: "w2",
      name: "Classic Gold Watch",
      price: 4999,
      originalPrice: 7999,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "GoldTime"
    },
    {
      id: "w3",
      name: "Diamond Studded Watch",
      price: 12999,
      originalPrice: 19999,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "LuxuryTime"
    }
  ];

  const perfumeProducts = [
    {
      id: "p1",
      name: "Floral Perfume",
      price: 1999,
      originalPrice: 2999,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "FloralScents"
    },
    {
      id: "p2",
      name: "Vanilla Essence",
      price: 1599,
      originalPrice: 2499,
      rating: 4.3,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "VanillaLux"
    },
    {
      id: "p3",
      name: "Rose Water Spray",
      price: 799,
      originalPrice: 1299,
      rating: 4.4,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "RoseGarden"
    }
  ];

  const highlightsProducts = products.slice(0, 3);

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
