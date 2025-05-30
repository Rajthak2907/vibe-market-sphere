import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Heart, Share2, ChevronLeft, Plus, Minus, Ruler, MapPin, Truck, Shield, RotateCcw, Upload } from "lucide-react";
import SizeGuide from "@/components/SizeGuide";
import ProductSlider from "@/components/ProductSlider";
import PromoBanner from "@/components/PromoBanner";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [pincode, setPincode] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState<any>(null);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [reviewImages, setReviewImages] = useState<File[]>([]);

  // Mock product data
  const product = {
    id: id || "1",
    name: "Premium Cotton T-Shirt with Modern Design",
    price: 599,
    originalPrice: 999,
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      "https://images.unsplash.com/photo-1583743814966-8936f37f3823?w=600",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600"
    ],
    brand: "StyleCo",
    description: "Experience ultimate comfort with our premium cotton t-shirt featuring a modern design. Made from 100% organic cotton, this shirt offers exceptional breathability and softness that lasts wash after wash.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "White", code: "#FFFFFF" },
      { name: "Navy", code: "#1E3A8A" },
      { name: "Gray", code: "#6B7280" },
      { name: "Red", code: "#DC2626" }
    ],
    features: [
      "100% Organic Cotton",
      "Pre-shrunk fabric",
      "Machine washable",
      "Breathable and comfortable",
      "Modern fit design"
    ]
  };

  // Mock delivery data
  const checkDelivery = () => {
    if (pincode.length === 6) {
      setDeliveryInfo({
        available: true,
        standardDelivery: "3-5 business days",
        expressDelivery: "1-2 business days",
        freeDelivery: "Available on orders above ₹500"
      });
    } else {
      setDeliveryInfo({ available: false, message: "Please enter a valid 6-digit pincode" });
    }
  };

  // Mock promo banner data
  const promoBanner = {
    id: "promo1",
    title: "Limited Time Offer",
    subtitle: "Extra 20% off on orders above ₹1999",
    buttonText: "Shop Now",
    buttonLink: "/",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800",
    backgroundColor: "#FF6B9D"
  };

  const secondBanner = {
    id: "promo2",
    title: "Free Shipping",
    subtitle: "On all orders above ₹799",
    buttonText: "Explore",
    buttonLink: "/",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    backgroundColor: "#4A90E2"
  };

  // Mock related products
  const relatedProducts = [
    {
      id: "2",
      name: "Classic Polo Shirt",
      price: 799,
      originalPrice: 1299,
      rating: 4.3,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
      brand: "StyleCo"
    },
    {
      id: "3",
      name: "Casual Hoodie",
      price: 1299,
      originalPrice: 1899,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      brand: "ComfortWear"
    },
    {
      id: "4",
      name: "Denim Jacket",
      price: 2299,
      originalPrice: 2999,
      rating: 4.4,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      brand: "UrbanStyle"
    },
    {
      id: "5",
      name: "Sports T-Shirt",
      price: 699,
      originalPrice: 999,
      rating: 4.6,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400",
      brand: "ActiveWear"
    }
  ];

  // Mock featured products
  const featuredProducts = [
    {
      id: "6",
      name: "Premium Blazer",
      price: 3499,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
      brand: "FormalWear",
      isNew: true
    },
    {
      id: "7",
      name: "Casual Shorts",
      price: 899,
      originalPrice: 1299,
      rating: 4.2,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
      brand: "SummerStyle",
      isTrending: true
    },
    {
      id: "8",
      name: "Winter Coat",
      price: 4999,
      originalPrice: 6999,
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      brand: "WinterWear"
    },
    {
      id: "9",
      name: "Running Shoes",
      price: 2799,
      originalPrice: 3999,
      rating: 4.5,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "SportsFoot"
    }
  ];

  // Mock similar products
  const similarProducts = [
    {
      id: "10",
      name: "Cotton Basic Tee",
      price: 499,
      originalPrice: 799,
      rating: 4.3,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
      brand: "BasicWear"
    },
    {
      id: "11",
      name: "Graphic Print Tee",
      price: 599,
      originalPrice: 899,
      rating: 4.4,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400",
      brand: "GraphicTees"
    },
    {
      id: "12",
      name: "Vintage Tee",
      price: 649,
      originalPrice: 999,
      rating: 4.6,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400",
      brand: "VintageStyle"
    },
    {
      id: "13",
      name: "Oversized Tee",
      price: 699,
      originalPrice: 1099,
      rating: 4.5,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400",
      brand: "StreetWear"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleReviewSubmit = () => {
    console.log("Review submitted:", { rating: userRating, review: userReview, images: reviewImages });
    // Reset form
    setUserRating(0);
    setUserReview("");
    setReviewImages([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setReviewImages([...reviewImages, ...Array.from(e.target.files)]);
    }
  };

  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-4 sm:mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Product Images - Mobile Optimized */}
          <div className="space-y-3 sm:space-y-4">
            <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md sm:rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">{product.brand}</span>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mt-1 leading-tight">{product.name}</h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3 sm:mt-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-sm sm:text-base">{product.rating}</span>
                  <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                </div>
                <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 py-1 rounded-full w-fit">
                  {discountPercent}% OFF
                </span>
              </div>
            </div>

            {/* Price - Mobile Optimized */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-gray-800">₹{product.price}</span>
              <span className="text-lg sm:text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Select Color</h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 relative ${
                      selectedColor === color.name
                        ? "border-primary"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  >
                    {selectedColor === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${color.name === 'White' ? 'bg-gray-800' : 'bg-white'}`} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">Selected: {selectedColor}</p>
            </div>

            {/* Size Selection with Size Guide */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-800">Select Size</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSizeGuide(true)}
                  className="text-primary hover:text-primary/80 p-0 h-auto font-normal text-sm"
                >
                  <Ruler className="w-4 h-4 mr-1" />
                  Size Guide
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border font-medium text-sm sm:text-base ${
                      selectedSize === size
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity - Mobile Optimized */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Quantity</h3>
              <div className="flex items-center border rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons - Mobile Optimized */}
            <div className="flex gap-3 sm:gap-4">
              <Button className="flex-1 bg-gradient-brand hover:opacity-90 text-white h-11 sm:h-12 text-sm sm:text-base">
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="h-11 sm:h-12 px-3 sm:px-4"
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="outline" size="lg" className="h-11 sm:h-12 px-3 sm:px-4">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* Features - Mobile Optimized */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description - Mobile Optimized */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Delivery & Services Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Delivery & Services</h2>
            
            {/* Pincode Check */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Check Delivery Options
              </h3>
              <div className="flex gap-3 max-w-md">
                <Input
                  type="text"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  maxLength={6}
                  className="flex-1"
                />
                <Button onClick={checkDelivery} variant="outline">
                  Check
                </Button>
              </div>
              
              {deliveryInfo && (
                <div className="mt-4 p-4 bg-white rounded-lg border">
                  {deliveryInfo.available ? (
                    <div className="space-y-2">
                      <p className="text-green-600 font-medium">✓ Delivery available to {pincode}</p>
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Truck className="w-4 h-4 mr-2 text-blue-600" />
                          <span>Standard: {deliveryInfo.standardDelivery}</span>
                        </div>
                        <div className="flex items-center">
                          <Truck className="w-4 h-4 mr-2 text-green-600" />
                          <span>Express: {deliveryInfo.expressDelivery}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{deliveryInfo.freeDelivery}</p>
                    </div>
                  ) : (
                    <p className="text-red-600">{deliveryInfo.message}</p>
                  )}
                </div>
              )}
            </div>

            {/* Services */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center p-4 bg-white rounded-lg">
                <Shield className="w-6 h-6 mr-3 text-blue-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Quality Assured</h4>
                  <p className="text-sm text-gray-600">100% Original Products</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg">
                <RotateCcw className="w-6 h-6 mr-3 text-green-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Easy Returns</h4>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg">
                <Truck className="w-6 h-6 mr-3 text-orange-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Express shipping available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & Review Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white rounded-xl border p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Rate & Review</h2>
            
            {/* Rating Stars */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-2">Your Rating</h3>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setUserRating(star)}
                    className="hover:scale-110 transition-transform"
                  >
                    <Star 
                      className={`w-6 h-6 ${star <= userRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-2">Your Review</h3>
              <textarea
                value={userReview}
                onChange={(e) => setUserReview(e.target.value)}
                placeholder="Share your experience with this product..."
                rows={4}
                className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Add Photos (Optional)</h3>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Upload Images</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {reviewImages.length > 0 && (
                  <span className="text-sm text-gray-600">{reviewImages.length} image(s) selected</span>
                )}
              </div>
            </div>

            <Button 
              onClick={handleReviewSubmit} 
              disabled={userRating === 0}
              className="bg-primary hover:bg-primary/90"
            >
              Submit Review
            </Button>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mt-12 sm:mt-16">
          <PromoBanner banner={promoBanner} />
        </div>

        {/* Similar Products Section */}
        <div className="mt-12 sm:mt-16">
          <ProductSlider title="Similar Products" products={similarProducts} />
        </div>

        {/* Second Banner */}
        <div className="mt-8 sm:mt-12">
          <PromoBanner banner={secondBanner} />
        </div>

        {/* You May Also Like Section */}
        <div className="mt-12 sm:mt-16">
          <ProductSlider title="You May Also Like" products={relatedProducts} />
        </div>

        {/* Featured Products Section */}
        <div className="mt-8 sm:mt-12">
          <ProductSlider title="Featured Products" products={featuredProducts} />
        </div>
      </div>

      {/* Size Guide Modal */}
      <SizeGuide isOpen={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
    </Layout>
  );
};

export default ProductDetail;
