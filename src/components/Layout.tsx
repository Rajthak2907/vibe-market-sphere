import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Grid3X3, ShoppingCart, Heart, User, Menu, X, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
  return <div className="min-h-screen bg-gray-50 font-['Poppins',sans-serif]">
      {/* Header - Mobile Optimized */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="px-4 py-[10px] bg-gray-800">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/fcde6e4f-7f0d-4250-9eac-15f1c0e84293.png" alt="Obeyyo" className="h-8 w-auto object-contain" />
              <span className="text-xl font-black bg-gradient-to-r from-[#fc2682] via-[#fc334d] to-[#08a0ef] bg-clip-text text-transparent">
                obeyyo
              </span>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="p-2 relative">
                <TrendingUp className="h-5 w-5 text-obeyyo-orange" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-white text-xs bg-obeyyo-pink">
                  2
                </Badge>
              </Button>
              
              <Button variant="ghost" size="sm" className="p-2" onClick={() => setMenuOpen(true)}>
                <Menu className="h-5 w-5 text-obeyyo-blue" />
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-obeyyo-blue w-4 h-4" />
              <Input placeholder="Search for brands, products..." className="pl-10 bg-gray-50 border-gray-200 rounded-xl h-10 focus:border-obeyyo-pink" />
            </div>
          </div>

          {/* Quick Categories with Icons */}
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
            {quickCategories.map(category => <Link key={category.path} to={category.path} style={{
            background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`
          }} className="flex-shrink-0 flex items-center gap-2 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all px-[12px] py-0">
                <img src={category.icon} alt={category.name} className="w-6 h-6 rounded-full object-cover border-2 border-white/30" />
                {category.name}
              </Link>)}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {children}
      </main>

      {/* Mobile Menu Overlay */}
      {menuOpen && <>
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm h-full bg-white shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold bg-gradient-to-r from-obeyyo-pink to-obeyyo-blue bg-clip-text text-transparent">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 text-obeyyo-red" />
              </button>
            </div>
            
            <div className="p-4 space-y-2">
              <Link to="/login" className="block px-4 py-3 text-base font-medium hover:bg-pink-50 rounded-lg transition-colors text-obeyyo-pink" onClick={() => setMenuOpen(false)}>
                Login / Sign Up
              </Link>
              <Link to="/orders" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                My Orders
              </Link>
              <Link to="/profile" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
            </div>
          </div>
        </>}

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="grid grid-cols-5 h-16">
          {bottomNavItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return <Link key={item.path} to={item.path} className={`flex flex-col items-center justify-center space-y-1 relative transition-all ${isActive ? "transform scale-105 text-obeyyo-pink" : "text-gray-500"}`}>
                <div className="relative bg-transparent py-0 my-0 px-0">
                  <Icon className="w-5 h-5" />
                  {item.badge && item.badge > 0 && <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-white text-xs bg-obeyyo-pink border-2 border-white">
                      {item.badge}
                    </Badge>}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && <div className="absolute bottom-0 w-6 h-0.5 rounded-full bg-gradient-to-r from-obeyyo-pink to-obeyyo-blue" />}
              </Link>;
        })}
        </div>
      </nav>
    </div>;
};
export default Layout;