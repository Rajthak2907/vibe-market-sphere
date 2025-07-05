import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Women = () => {
  const products = [
    {
      id: "w1",
      name: "Floral Print Dress",
      price: 2999,
      originalPrice: 4999,
      rating: 4.5,
      reviews: 120,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300",
      brand: "Fashionista",
      isNew: true
    },
    {
      id: "w2",
      name: "Elegant Evening Gown",
      price: 5999,
      originalPrice: 8999,
      rating: 4.8,
      reviews: 85,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300",
      brand: "GlamourStyle",
      isTrending: true
    },
    {
      id: "w3",
      name: "Casual Summer Top",
      price: 999,
      originalPrice: 1499,
      rating: 4.2,
      reviews: 150,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
      brand: "DailyWear"
    },
    {
      id: "w4",
      name: "Classic Denim Jeans",
      price: 1999,
      originalPrice: 2999,
      rating: 4.6,
      reviews: 90,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300",
      brand: "DenimCo"
    }
  ];

  const beautyProducts = [
    {
      id: "wb-1",
      name: "Luxury Skincare Set",
      price: 3499,
      originalPrice: 5999,
      rating: 4.7,
      reviews: 75,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300",
      brand: "BeautyEssentials"
    },
    {
      id: "wb-2",
      name: "Makeup Palette",
      price: 1499,
      originalPrice: 2499,
      rating: 4.4,
      reviews: 110,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300",
      brand: "ColorGlam"
    }
  ];

  const footwearProducts = [
    {
      id: "wf-1",
      name: "High Heel Sandals",
      price: 2799,
      originalPrice: 4499,
      rating: 4.6,
      reviews: 60,
      image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300",
      brand: "ElegantSteps"
    },
    {
      id: "wf-2",
      name: "Comfortable Sneakers",
      price: 1799,
      originalPrice: 2799,
      rating: 4.3,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
      brand: "ActiveFoot"
    }
  ];

  const watchesProducts = [
    {
      id: "ww-1",
      name: "Designer Watch",
      price: 4499,
      originalPrice: 6999,
      rating: 4.8,
      reviews: 50,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300",
      brand: "TimeLuxe"
    },
    {
      id: "ww-2",
      name: "Smart Watch",
      price: 3299,
      originalPrice: 5299,
      rating: 4.5,
      reviews: 80,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      brand: "TechTime"
    }
  ];

  const perfumeProducts = [
    {
      id: "wp-1",
      name: "Exclusive Perfume",
      price: 1999,
      originalPrice: 3499,
      rating: 4.9,
      reviews: 40,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300",
      brand: "ScentDelight"
    },
    {
      id: "wp-2",
      name: "Floral Scent",
      price: 1299,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 70,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300",
      brand: "AromaEssence"
    }
  ];

  const womensTopBrands = [
    {
      id: "wtb-1",
      name: "Zara",
      logo: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300",
      link: "/women?brand=zara"
    },
    {
      id: "wtb-2", 
      name: "H&M",
      logo: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
      link: "/women?brand=hm"
    }
  ];

  const womensCoupons = [
    {
      id: "wc-1",
      title: "Extra 20% Off",
      code: "WOMEN20",
      discount: "20% OFF",
      description: "On all women's fashion",
      validUntil: "2024-12-31"
    },
    {
      id: "wc-2",
      title: "Buy 2 Get 1 Free",
      code: "BUY2GET1",
      discount: "33% OFF",
      description: "On select items",
      validUntil: "2024-12-31"
    }
  ];

  const womensTopCategories = [
    {
      id: "wtc-1",
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300",
      link: "/women?category=dresses",
      discount: "Up to 40% OFF"
    },
    {
      id: "wtc-2",
      name: "Tops & Blouses", 
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
      link: "/women?category=tops",
      discount: "Up to 35% OFF"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Women's Collection</h1>

        {/* Featured Products */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Top Brands */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Top Brands</h2>
          <div className="flex gap-4 overflow-x-auto">
            {womensTopBrands.map((brand) => (
              <Link key={brand.id} to={brand.link} className="flex flex-col items-center">
                <img src={brand.logo} alt={brand.name} className="w-16 h-16 rounded-full object-cover mb-2" />
                <p className="text-sm">{brand.name}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Coupons & Offers */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Coupons & Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {womensCoupons.map((coupon) => (
              <div key={coupon.id} className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold">{coupon.title}</h3>
                <p className="text-gray-600">{coupon.description}</p>
                <p className="text-sm">Code: {coupon.code}</p>
                <p className="text-xs">Valid Until: {coupon.validUntil}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Categories */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Top Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {womensTopCategories.map((category) => (
              <Link key={category.id} to={category.link} className="relative">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-md" />
                <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm">{category.discount}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Shop by Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Shop By</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Beauty Products */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Beauty</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {beautyProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <Button variant="link" asChild>
                <Link to="/women?category=beauty">View All Beauty Products</Link>
              </Button>
            </div>

            {/* Footwear Products */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Footwear</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {footwearProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <Button variant="link" asChild>
                <Link to="/women?category=footwear">View All Footwear</Link>
              </Button>
            </div>

            {/* Watches Products */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Watches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {watchesProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <Button variant="link" asChild>
                <Link to="/women?category=watches">View All Watches</Link>
              </Button>
            </div>

            {/* Perfume Products */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Perfumes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {perfumeProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <Button variant="link" asChild>
                <Link to="/women?category=perfumes">View All Perfumes</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Women;
