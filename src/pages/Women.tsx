import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ImageCarousel from "@/components/ImageCarousel";
import PromoBanner from "@/components/PromoBanner";
import ProductSlider from "@/components/ProductSlider";
import PocketFriendlySection from "@/components/PocketFriendlySection";
import DealOfTheDay from "@/components/DealOfTheDay";
import TabSection from "@/components/TabSection";
import RoundCategorySection from "@/components/RoundCategorySection";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  return (
    <Layout>
      <div className="space-y-2 bg-gray-50">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#FF6B9D] to-[#FF9A6B] text-white px-3 py-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">Women's Fashion</h1>
            <p className="text-sm sm:text-base opacity-90">Explore trendy and stylish women's collection</p>
          </div>
        </div>

        {/* Tabs Section */}
        <TabSection tabs={tabs} />

        {/* Shop by Category */}
        <RoundCategorySection categories={categories} />

        {/* Hero Carousel */}
        <div className="px-3">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Subcategory Section */}
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

        {/* Deal of the Day */}
        <section className="px-3">
          <DealOfTheDay product={dealProduct} endTime={dealEndTime} />
        </section>

        {/* Pocket Friendly Section */}
        <PocketFriendlySection products={pocketFriendlyProducts} />

        {/* Promo Banner 1 */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[0]} />
        </section>

        {/* GenZ Picks */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">🔥 GenZ Picks</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={genzPicksProducts} />
        </section>

        {/* Top Brands on Offer */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">🏆 Top Brands on Offer</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={topBrandsProducts} />
        </section>

        {/* Promo Banner 2 */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[1]} />
        </section>

        {/* GenZ Brands on Offer */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">✨ GenZ Brands on Offer</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={genzBrandsProducts} />
        </section>

        {/* Deals on Men's Wardrobe */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">👔 Deals on Men's Wardrobe</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={mensWardrobeProducts} />
        </section>

        {/* Promo Banner 3 */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[2]} />
        </section>

        {/* Brands Deal You Can't Miss */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">💎 Brands Deal You Can't Miss</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={brandsDealsProducts} />
        </section>

        {/* Deals on Women's Wardrobe */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">👗 Deals on Women's Wardrobe</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={womensWardrobeProducts} />
        </section>

        {/* Featured Brands */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">⭐ Featured Brands</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={featuredBrandsProducts} />
        </section>

        {/* Best Brands */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">🎯 Best Brands</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={bestBrandsProducts} />
        </section>

        {/* Final Promo Banner */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[3]} />
        </section>

        {/* Filters */}
        <div className="px-3">
          <div className="flex flex-wrap items-center gap-3 py-3 border-t border-gray-200 bg-white rounded-lg">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={`whitespace-nowrap rounded-full text-xs px-3 py-1.5 ${
                    category === "All" 
                      ? "bg-[#FF6B9D] hover:bg-[#FF6B9D]/90" 
                      : "border-gray-300 hover:border-[#FF6B9D] hover:text-[#FF6B9D]"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="ml-auto">
              <Select>
                <SelectTrigger className="w-40 rounded-full text-xs">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

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
