
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Grid3X3, ShoppingCart, Heart, User, Menu, X, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  // Functional cart and wishlist with localStorage
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Update counts when component mounts or storage changes
  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setCartCount(cart.length);
      setWishlistCount(wishlist.length);
    };
    updateCounts();

    // Listen for storage changes
    window.addEventListener('storage', updateCounts);
    // Listen for custom events from ProductCard
    window.addEventListener('cartUpdated', updateCounts);
    window.addEventListener('wishlistUpdated', updateCounts);
    return () => {
      window.removeEventListener('storage', updateCounts);
      window.removeEventListener('cartUpdated', updateCounts);
      window.removeEventListener('wishlistUpdated', updateCounts);
    };
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const bottomNavItems = [{
    label: "Home",
    path: "/",
    icon: Home
  }, {
    label: "Categories",
    path: "/categories",
    icon: Grid3X3
  }, {
    label: "Cart",
    path: "/cart",
    icon: ShoppingCart,
    badge: cartCount
  }, {
    label: "Wishlist",
    path: "/wishlist",
    icon: Heart,
    badge: wishlistCount
  }, {
    label: "Profile",
    path: "/profile",
    icon: User
  }];

  const quickCategories = [{
    name: "Men",
    path: "/men",
    color: "#fc2682",
    icon: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=face"
  }, {
    name: "Women",
    path: "/women",
    color: "#fc334d",
    icon: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
  }, {
    name: "Kids",
    path: "/kids",
    color: "#f9b704",
    icon: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop&crop=face"
  }, {
    name: "Accessories",
    path: "/accessories",
    color: "#08a0ef",
    icon: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop&crop=center"
  }];

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins',sans-serif]">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header - Mobile Optimized with Animations */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40 transition-all duration-300">
        <div className="px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center justify-between">
            {/* Logo with Sidebar Toggle */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95" 
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5 text-white" />
              </Button>
              
              <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <img src="/lovable-uploads/fcde6e4f-7f0d-4250-9eac-15f1c0e84293.png" alt="Obeyyo" className="h-8 w-auto object-contain" />
                <span className="text-xl font-black bg-gradient-to-r from-[#fc2682] via-[#fc334d] to-[#08a0ef] bg-clip-text text-transparent">
                  obeyyo
                </span>
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="p-2 relative hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95">
                <TrendingUp className="h-5 w-5 text-obeyyo-orange" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-white text-xs bg-obeyyo-pink animate-pulse">
                  2
                </Badge>
              </Button>
              
              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => setMenuOpen(true)}>
                <Menu className="h-5 w-5 text-obeyyo-blue" />
              </Button>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="mt-3">
            <div className={`relative transition-all duration-300 ${searchFocused ? 'transform scale-[1.02]' : ''}`}>
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${searchFocused ? 'text-obeyyo-pink' : 'text-obeyyo-blue'}`} />
              <Input 
                placeholder="Search for brands, products..." 
                className="pl-10 bg-gray-50 border-gray-200 rounded-xl h-10 focus:border-obeyyo-pink focus:ring-2 focus:ring-obeyyo-pink/20 transition-all duration-200"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* Enhanced Quick Categories */}
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide py-1">
            {quickCategories.map((category, index) => (
              <Link 
                key={category.path} 
                to={category.path} 
                style={{
                  background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`
                }} 
                className={`flex-shrink-0 flex items-center gap-2 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-200 px-3 py-2 hover:scale-105 active:scale-95 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img src={category.icon} alt={category.name} className="w-6 h-6 rounded-full object-cover border-2 border-white/30" />
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 transition-all duration-300">
        {children}
      </main>

      {/* Enhanced Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm h-full bg-white shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-obeyyo-pink/5 to-obeyyo-blue/5">
              <span className="text-lg font-semibold bg-gradient-to-r from-obeyyo-pink to-obeyyo-blue bg-clip-text text-transparent">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-105 active:scale-95">
                <X className="h-5 w-5 text-obeyyo-red" />
              </button>
            </div>
            
            <div className="p-4 space-y-2">
              <Link to="/login" className="block px-4 py-3 text-base font-medium hover:bg-pink-50 rounded-lg transition-all duration-200 text-obeyyo-pink hover:scale-[1.02] hover:shadow-sm" onClick={() => setMenuOpen(false)}>
                Login / Sign Up
              </Link>
              <Link to="/orders" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-sm" onClick={() => setMenuOpen(false)}>
                My Orders
              </Link>
              <Link to="/profile" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-sm" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Enhanced Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40 shadow-lg">
        <div className="grid grid-cols-5 h-16">
          {bottomNavItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex flex-col items-center justify-center space-y-1 relative transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isActive ? "transform scale-105 text-obeyyo-pink" : "text-gray-500"
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-all duration-200 ${isActive ? 'animate-pulse' : ''}`} />
                  {item.badge && item.badge > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-white text-xs bg-obeyyo-pink border-2 border-white animate-bounce">
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <span className={`text-xs font-medium transition-all duration-200 ${isActive ? 'animate-fade-in' : ''}`}>{item.label}</span>
                {isActive && <div className="absolute bottom-0 w-8 h-1 rounded-full bg-gradient-to-r from-obeyyo-pink to-obeyyo-blue animate-scale-in" />}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
