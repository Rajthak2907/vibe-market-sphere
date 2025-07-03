
export const womenPageData = {
  carouselImages: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800", 
      title: "Women's Spring Collection",
      subtitle: "Embrace the season with our latest styles"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
      title: "Elegant Evening Wear", 
      subtitle: "Perfect for special occasions"
    }
  ],
  categories: [
    {
      id: "c1",
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100",
      link: "/women/dresses"
    },
    {
      id: "c2", 
      name: "Tops",
      image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=100",
      link: "/women/tops"
    },
    {
      id: "c3",
      name: "Jeans",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100",
      link: "/women/jeans"
    },
    {
      id: "c4",
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100",
      link: "/women/shoes"
    },
    {
      id: "c5",
      name: "Bags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100",
      link: "/women/bags"
    },
    {
      id: "c6",
      name: "Jewelry",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100",
      link: "/women/jewelry"
    }
  ],
  subcategories: [
    { id: "s1", name: "Casual Wear", image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=80", link: "/women/casual" },
    { id: "s2", name: "Formal Wear", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=80", link: "/women/formal" },
    { id: "s3", name: "Party Wear", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=80", link: "/women/party" },
    { id: "s4", name: "Ethnic Wear", image: "https://images.unsplash.com/photo-1583391733956-6c78fbe58a7b?w=80", link: "/women/ethnic" },
    { id: "s5", name: "Summer Collection", image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=80", link: "/women/summer" },
    { id: "s6", name: "Winter Wear", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80", link: "/women/winter" },
    { id: "s7", name: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=80", link: "/women/footwear" },
    { id: "s8", name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80", link: "/women/accessories" }
  ],
  products: [
    {
      id: "w1",
      name: "Floral Summer Dress",
      price: 1299,
      originalPrice: 1999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      brand: "FashionCo",
      isNew: true
    },
    {
      id: "w2",
      name: "Casual Crop Top",
      price: 799,
      originalPrice: 1299,
      rating: 4.3,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=400",
      brand: "TrendyWear"
    },
    {
      id: "w3",
      name: "High-Waist Jeans",
      price: 1599,
      originalPrice: 2499,
      rating: 4.5,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
      brand: "DenimStyle"
    },
    {
      id: "w4",
      name: "Elegant Heels",
      price: 2299,
      originalPrice: 3499,
      rating: 4.7,
      reviews: 278,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "ShoeGlam",
      isTrending: true
    }
  ],
  dealProduct: {
    id: "deal-w1",
    name: "Designer Handbag",
    price: 3999,
    originalPrice: 7999,
    rating: 4.8,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    brand: "LuxeBags",
    isNew: true
  },
  dealEndTime: (() => {
    const dealEndTime = new Date();
    dealEndTime.setHours(dealEndTime.getHours() + 6);
    return dealEndTime;
  })(),
  brandsFlexData: [
    { id: "bf1", name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Zara_Logo.svg", discount: "Up to 50% OFF" },
    { id: "bf2", name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg", discount: "Up to 40% OFF" },
    { id: "bf3", name: "Forever 21", logo: "https://logos-world.net/wp-content/uploads/2020/04/Forever-21-Logo.png", discount: "Up to 60% OFF" },
    { id: "bf4", name: "Mango", logo: "https://logos-world.net/wp-content/uploads/2020/04/Mango-Logo.png", discount: "Up to 45% OFF" },
    { id: "bf5", name: "Uniqlo", logo: "https://logos-world.net/wp-content/uploads/2020/04/Uniqlo-Logo.png", discount: "Up to 35% OFF" },
    { id: "bf6", name: "Gap", logo: "https://logos-world.net/wp-content/uploads/2020/04/Gap-Logo.png", discount: "Up to 30% OFF" },
    { id: "bf7", name: "Vero Moda", logo: "https://logos-world.net/wp-content/uploads/2020/04/Vero-Moda-Logo.png", discount: "Up to 40% OFF" },
    { id: "bf8", name: "Only", logo: "https://logos-world.net/wp-content/uploads/2020/04/Only-Logo.png", discount: "Up to 35% OFF" },
    { id: "bf9", name: "Bershka", logo: "https://logos-world.net/wp-content/uploads/2020/04/Bershka-Logo.png", discount: "Up to 45% OFF" },
    { id: "bf10", name: "Pull & Bear", logo: "https://logos-world.net/wp-content/uploads/2020/04/Pull-Bear-Logo.png", discount: "Up to 40% OFF" },
    { id: "bf11", name: "Stradivarius", logo: "https://logos-world.net/wp-content/uploads/2020/04/Stradivarius-Logo.png", discount: "Up to 35% OFF" },
    { id: "bf12", name: "Massimo Dutti", logo: "https://logos-world.net/wp-content/uploads/2020/04/Massimo-Dutti-Logo.png", discount: "Up to 30% OFF" },
    { id: "bf13", name: "COS", logo: "https://logos-world.net/wp-content/uploads/2020/04/COS-Logo.png", discount: "Up to 25% OFF" },
    { id: "bf14", name: "& Other Stories", logo: "https://logos-world.net/wp-content/uploads/2020/04/Other-Stories-Logo.png", discount: "Up to 40% OFF" },
    { id: "bf15", name: "Arket", logo: "https://logos-world.net/wp-content/uploads/2020/04/Arket-Logo.png", discount: "Up to 35% OFF" },
    { id: "bf16", name: "Weekday", logo: "https://logos-world.net/wp-content/uploads/2020/04/Weekday-Logo.png", discount: "Up to 30% OFF" }
  ],
  topBrandsProducts: [
    {
      id: "tb-w1",
      name: "Zara Floral Dress",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      brand: "Zara"
    },
    {
      id: "tb-w2",
      name: "H&M Casual Top",
      price: 1299,
      originalPrice: 1999,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=400",
      brand: "H&M"
    }
  ],
  tshirtCategories: [
    { id: "t1", name: "Basic Tees", image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=80", link: "/women/basic-tees" },
    { id: "t2", name: "Crop Tops", image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=80", link: "/women/crop-tops" },
    { id: "t3", name: "Tank Tops", image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=80", link: "/women/tank-tops" },
    { id: "t4", name: "Blouses", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=80", link: "/women/blouses" },
    { id: "t5", name: "Graphic Tees", image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=80", link: "/women/graphic-tees" },
    { id: "t6", name: "Long Sleeves", image: "https://images.unsplash.com/photo-1551854089-37fee5b8b89b?w=80", link: "/women/long-sleeves" }
  ],
  couponsData: [
    {
      id: "c1",
      code: "WOMEN50",
      title: "Women's Special",
      description: "Flat ₹500 off on women's fashion",
      discount: "₹500 OFF",
      validUntil: "31 Dec 2024"
    },
    {
      id: "c2",
      code: "BEAUTY30",
      title: "Beauty Bonus",
      description: "Extra 30% off on beauty products",
      discount: "30% OFF",
      validUntil: "31 Dec 2024"
    }
  ],
  biggestOfferProducts: [
    {
      id: "w1",
      name: "Floral Summer Dress",
      price: 1299,
      originalPrice: 1999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      brand: "FashionCo",
      isNew: true
    },
    {
      id: "tb-w1",
      name: "Zara Floral Dress",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      brand: "Zara"
    }
  ],
  everythingInOfferCategories: [
    { id: "e1", name: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", discount: "Up to 60% OFF", link: "/women/dresses" },
    { id: "e2", name: "Jewelry", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400", discount: "Up to 50% OFF", link: "/women/jewelry" },
    { id: "e3", name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", discount: "Up to 40% OFF", link: "/women/bags" },
    { id: "e4", name: "Shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", discount: "Up to 70% OFF", link: "/women/shoes" }
  ],
  promoBanners: [
    {
      id: "promo-w1",
      title: "Women's Fashion Festival",
      subtitle: "Up to 70% off on trending women's styles",
      buttonText: "Shop Now",
      buttonLink: "/women/sale",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800",
      backgroundColor: "#E91E63"
    },
    {
      id: "promo-w2",
      title: "New Arrivals",
      subtitle: "Fresh women's collection just dropped",
      buttonText: "Explore",
      buttonLink: "/women/new",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
      backgroundColor: "#9C27B0"
    },
    {
      id: "promo-w3",
      title: "Beauty & Fashion",
      subtitle: "Best women's brands, unbeatable prices",
      buttonText: "Shop Beauty",
      buttonLink: "/women/beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",
      backgroundColor: "#FF5722"
    }
  ],
  beautyProducts: [
    {
      id: "b1",
      name: "Makeup Palette",
      price: 899,
      originalPrice: 1499,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      brand: "BeautyPro"
    },
    {
      id: "b2",
      name: "Skincare Set",
      price: 1299,
      originalPrice: 1999,
      rating: 4.7,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      brand: "GlowSkin"
    },
    {
      id: "b3",
      name: "Lipstick Collection",
      price: 599,
      originalPrice: 999,
      rating: 4.4,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      brand: "ColorLips"
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
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "ComfortFoot"
    },
    {
      id: "f2",
      name: "Elegant Heels",
      price: 2499,
      originalPrice: 4299,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "HeelQueen"
    },
    {
      id: "f3",
      name: "Stylish Flats",
      price: 1499,
      originalPrice: 2499,
      rating: 4.3,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      brand: "FlatsForever"
    }
  ],
  watchesProducts: [
    {
      id: "w1",
      name: "Fashion Watch",
      price: 2999,
      originalPrice: 4999,
      rating: 4.6,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TimeStyle"
    },
    {
      id: "w2",
      name: "Elegant Bracelet Watch",
      price: 3999,
      originalPrice: 6999,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "BraceletTime"
    },
    {
      id: "w3",
      name: "Smart Watch for Women",
      price: 7999,
      originalPrice: 12999,
      rating: 4.5,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "SmartFem"
    }
  ],
  perfumeProducts: [
    {
      id: "p1",
      name: "Floral Perfume",
      price: 1999,
      originalPrice: 3499,
      rating: 4.7,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "FloralScent"
    },
    {
      id: "p2",
      name: "Elegant Eau de Parfum",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "ElegantScent"
    },
    {
      id: "p3",
      name: "Fresh Body Spray",
      price: 599,
      originalPrice: 999,
      rating: 4.3,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "FreshVibes"
    }
  ]
};
