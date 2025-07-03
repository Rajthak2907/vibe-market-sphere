export const menPageData = {
  carouselImages: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      title: "Men's Summer Collection",
      subtitle: "Discover the latest trends"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      title: "Formal Wear Sale",
      subtitle: "Up to 50% off on suits & shirts"
    }
  ],
  categories: [
    {
      id: "c1",
      name: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100",
      link: "/men/tshirts"
    },
    {
      id: "c2",
      name: "Shirts",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100",
      link: "/men/shirts"
    },
    {
      id: "c3",
      name: "Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100",
      link: "/men/jeans"
    },
    {
      id: "c4",
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100",
      link: "/men/shoes"
    },
    {
      id: "c5",
      name: "Jackets",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100",
      link: "/men/jackets"
    },
    {
      id: "c6",
      name: "Watches",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100",
      link: "/men/watches"
    }
  ],
  subcategories: [
    { id: "s1", name: "Casual Wear", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80", link: "/men/casual" },
    { id: "s2", name: "Formal Wear", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=80", link: "/men/formal" },
    { id: "s3", name: "Sports Wear", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=80", link: "/men/sports" },
    { id: "s4", name: "Party Wear", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80", link: "/men/party" },
    { id: "s5", name: "Winter Wear", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=80", link: "/men/winter" },
    { id: "s6", name: "Summer Collection", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=80", link: "/men/summer" },
    { id: "s7", name: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80", link: "/men/footwear" },
    { id: "s8", name: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80", link: "/men/accessories" }
  ],
  products: [
    {
      id: "m1",
      name: "Classic Cotton T-Shirt",
      price: 599,
      originalPrice: 999,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "StyleCo",
      isNew: true
    },
    {
      id: "m2",
      name: "Slim Fit Denim Jeans",
      price: 1299,
      originalPrice: 2199,
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "DenimCo"
    },
    {
      id: "m3",
      name: "Formal Dress Shirt",
      price: 899,
      originalPrice: 1499,
      rating: 4.7,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1620001390628-11f5a2f0ab91?w=400",
      brand: "FormalWear"
    },
    {
      id: "m4",
      name: "Sports Running Shoes",
      price: 2499,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "SportMax",
      isTrending: true
    }
  ],
  dealProduct: {
    id: "deal-m1",
    name: "Premium Leather Jacket",
    price: 2999,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    brand: "LeatherCraft",
    isNew: true
  },
  dealEndTime: (() => {
    const dealEndTime = new Date();
    dealEndTime.setHours(dealEndTime.getHours() + 6);
    return dealEndTime;
  })(),
  brandsFlexData: [
    { id: "bf1", name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", discount: "Up to 60% OFF" },
    { id: "bf2", name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", discount: "Up to 50% OFF" },
    { id: "bf3", name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg", discount: "Up to 45% OFF" },
    { id: "bf4", name: "Levi's", logo: "https://logos-world.net/wp-content/uploads/2020/04/Levis-Logo.png", discount: "Up to 40% OFF" },
    { id: "bf5", name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg", discount: "Up to 35% OFF" },
    { id: "bf6", name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Zara_Logo.svg", discount: "Up to 30% OFF" },
    { id: "bf7", name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Tommy_Hilfiger_logo.svg", discount: "Up to 45% OFF" },
    { id: "bf8", name: "Calvin Klein", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Calvin_klein_logo.svg", discount: "Up to 40% OFF" },
    { id: "bf9", name: "Lacoste", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Lacoste_logo.svg", discount: "Up to 35% OFF" },
    { id: "bf10", name: "Ralph Lauren", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Polo_Ralph_Lauren_logo.svg", discount: "Up to 50% OFF" },
    { id: "bf11", name: "Hugo Boss", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hugo_Boss_logo.svg", discount: "Up to 45% OFF" },
    { id: "bf12", name: "Armani", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Giorgio_Armani_logo.svg", discount: "Up to 40% OFF" },
    { id: "bf13", name: "Diesel", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Diesel_logo.svg", discount: "Up to 35% OFF" },
    { id: "bf14", name: "Guess", logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Guess_logo.svg", discount: "Up to 30% OFF" },
    { id: "bf15", name: "Versace", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Versace_logo.svg", discount: "Up to 50% OFF" },
    { id: "bf16", name: "Burberry", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Burberry_logo.svg", discount: "Up to 45% OFF" }
  ],
  topBrandsProducts: [
    {
      id: "tb-m1",
      name: "Nike Air Max Sneakers",
      price: 8999,
      originalPrice: 12999,
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "Nike"
    },
    {
      id: "tb-m2",
      name: "Adidas Track Jacket",
      price: 3999,
      originalPrice: 5999,
      rating: 4.7,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      brand: "Adidas"
    }
  ],
  tshirtCategories: [
    { id: "t1", name: "Basic Tees", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80", link: "/men/basic-tees" },
    { id: "t2", name: "Graphic Tees", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=80", link: "/men/graphic-tees" },
    { id: "t3", name: "Polo Shirts", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=80", link: "/men/polo-shirts" },
    { id: "t4", name: "Sports Tees", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=80", link: "/men/sports-tees" },
    { id: "t5", name: "V-Neck", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80", link: "/men/v-neck" },
    { id: "t6", name: "Henley", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80", link: "/men/henley" }
  ],
  couponsData: [
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
  ],
  biggestOfferProducts: [
    {
      id: "m1",
      name: "Classic Cotton T-Shirt",
      price: 599,
      originalPrice: 999,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "StyleCo",
      isNew: true
    },
    {
      id: "tb-m1",
      name: "Nike Air Max Sneakers",
      price: 8999,
      originalPrice: 12999,
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "Nike"
    }
  ],
  everythingInOfferCategories: [
    { id: "e1", name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", discount: "Up to 60% OFF", link: "/men/jeans" },
    { id: "e2", name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", discount: "Up to 50% OFF", link: "/men/watches" },
    { id: "e3", name: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", discount: "Up to 40% OFF", link: "/men/accessories" },
    { id: "e4", name: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", discount: "Up to 70% OFF", link: "/men/shoes" }
  ],
  promoBanners: [
    {
      id: "promo-m1",
      title: "Men's Fashion Week",
      subtitle: "Up to 70% off on trending styles",
      buttonText: "Shop Now",
      buttonLink: "/men/sale",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      backgroundColor: "#4A90E2"
    },
    {
      id: "promo-m2",
      title: "New Arrivals",
      subtitle: "Fresh men's collection just dropped",
      buttonText: "Explore",
      buttonLink: "/men/new",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      backgroundColor: "#FF9A6B"
    },
    {
      id: "promo-m3",
      title: "Brand Festival",
      subtitle: "Best men's brands, unbeatable prices",
      buttonText: "Shop Brands",
      buttonLink: "/men/brands",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d2d5f?w=800",
      backgroundColor: "#FF6B9D"
    }
  ],
  beautyProducts: [
    {
      id: "b1",
      name: "Men's Face Wash",
      price: 299,
      originalPrice: 499,
      rating: 4.3,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1556229010-aa4aac71b912?w=400",
      brand: "MenCare"
    },
    {
      id: "b2",
      name: "Beard Oil Premium",
      price: 599,
      originalPrice: 999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1556229010-aa4aac71b912?w=400",
      brand: "BeardCraft"
    },
    {
      id: "b3", 
      name: "Hair Styling Gel",
      price: 399,
      originalPrice: 699,
      rating: 4.2,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1556229010-aa4aac71b912?w=400",
      brand: "StyleHub"
    }
  ],
  footwearProducts: [
    {
      id: "f1",
      name: "Casual Sneakers",
      price: 1999,
      originalPrice: 3499,
      rating: 4.5,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      brand: "FootStyle"
    },
    {
      id: "f2",
      name: "Formal Leather Shoes",
      price: 2499,
      originalPrice: 4299,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      brand: "FormalWear"
    },
    {
      id: "f3",
      name: "Running Shoes",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "RunFast"
    }
  ],
  watchesProducts: [
    {
      id: "w1",
      name: "Smart Watch Pro",
      price: 8999,
      originalPrice: 12999,
      rating: 4.6,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TechTime"
    },
    {
      id: "w2",
      name: "Classic Analog Watch",
      price: 3999,
      originalPrice: 6999,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TimeCraft"
    },
    {
      id: "w3",
      name: "Sports Digital Watch",
      price: 2499,
      originalPrice: 3999,
      rating: 4.5,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "SportTime"
    }
  ],
  perfumeProducts: [
    {
      id: "p1",
      name: "Men's Cologne Premium",
      price: 2999,
      originalPrice: 4999,
      rating: 4.7,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "FragranceKing"
    },
    {
      id: "p2",
      name: "Fresh Deodorant Spray",
      price: 599,
      originalPrice: 999,
      rating: 4.3,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "FreshScent"
    },
    {
      id: "p3",
      name: "Luxury Aftershave",
      price: 1999,
      originalPrice: 3299,
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "LuxuryMen"
    }
  ]
};
