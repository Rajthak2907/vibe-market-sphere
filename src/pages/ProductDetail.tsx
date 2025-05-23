
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star, Heart, Share2, ChevronLeft, Plus, Minus } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

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
    colors: ["Black", "White", "Navy", "Gray"],
    features: [
      "100% Organic Cotton",
      "Pre-shrunk fabric",
      "Machine washable",
      "Breathable and comfortable",
      "Modern fit design"
    ]
  };

  const [selectedImage, setSelectedImage] = useState(0);

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">{product.brand}</span>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mt-1">{product.name}</h1>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
                  {discountPercent}% OFF
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-800">₹{product.price}</span>
              <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Select Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border font-medium ${
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

            {/* Quantity */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Quantity</h3>
              <div className="flex items-center border rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-brand hover:opacity-90 text-white h-12">
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="h-12"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="outline" size="lg" className="h-12">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
