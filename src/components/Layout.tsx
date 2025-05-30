
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, ShoppingCart, Heart, User, Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);

  const bottomNavItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Search", path: "/search", icon: Search },
    { label: "Cart", path: "/cart", icon: ShoppingCart, badge: cartCount },
    { label: "Wishlist", path: "/wishlist", icon: Heart, badge: wishlistCount },
    { label: "Profile", path: "/profile", icon: User },
  ];

  const quickCategories = [
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
    { name: "Accessories", path: "/accessories" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins',sans-serif]">
      {/* Header - Mobile Optimized */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/164ea4a6-a57e-4afe-9e7a-0190149b95b6.png" 
                alt="Obeyyo" 
                className="h-7 w-auto object-contain"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-[#FF6B9D] to-[#4A90E2] bg-clip-text text-transparent">
                obeyyo
              </span>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="p-2 relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-[#FF6B9D] text-white text-xs">
                  2
                </Badge>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search for brands, products..."
                className="pl-10 bg-gray-50 border-gray-200 focus:border-[#FF6B9D] rounded-xl h-10"
              />
            </div>
          </div>

          {/* Quick Categories */}
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
            {quickCategories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-[#FF6B9D] to-[#4A90E2] text-white text-sm font-medium rounded-full hover:shadow-lg transition-all"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {children}
      </main>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" 
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm h-full bg-white shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-2">
              <Link
                to="/login"
                className="block px-4 py-3 text-base font-medium text-[#FF6B9D] hover:bg-pink-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Login / Sign Up
              </Link>
              <Link
                to="/orders"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                My Orders
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="grid grid-cols-5 h-16">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center space-y-1 relative transition-all ${
                  isActive 
                    ? "text-[#FF6B9D] transform scale-105" 
                    : "text-gray-500 hover:text-[#FF6B9D]"
                }`}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.badge && item.badge > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center bg-[#FF6B9D] text-white text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 w-6 h-0.5 bg-gradient-to-r from-[#FF6B9D] to-[#4A90E2] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
