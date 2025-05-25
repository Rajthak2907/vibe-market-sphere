
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [cartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Men", path: "/men", icon: null },
    { label: "Women", path: "/women", icon: null },
    { label: "Kids", path: "/kids", icon: null },
    { label: "Accessories", path: "/accessories", icon: null },
  ];

  const bottomNavItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Search", path: "/search", icon: Search },
    { label: "Cart", path: "/cart", icon: ShoppingCart, badge: cartCount },
    { label: "Profile", path: "/profile", icon: User },
  ];

  // Mobile menu modal
  const MobileMenu = () => {
    if (!menuOpen) return null;
    
    return (
      <>
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" 
          onClick={() => setMenuOpen(false)}
        />
        <div className="fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm h-full bg-white shadow-2xl">
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
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <Link
                to="/login"
                className="block px-4 py-3 text-base font-medium text-[#FF6B9D] hover:bg-pink-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/164ea4a6-a57e-4afe-9e7a-0190149b95b6.png" 
                alt="Obeyyo" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#FF6B9D] to-[#4A90E2] bg-clip-text text-transparent">
                obeyyo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#FF6B9D] ${
                    location.pathname === item.path
                      ? "text-[#FF6B9D] border-b-2 border-[#FF6B9D]"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search for products, brands..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:border-[#FF6B9D] rounded-lg text-sm"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <Link to="/login" className="hidden sm:block">
                <Button variant="outline" size="sm" className="border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg text-xs px-3 py-1.5">
                  Login
                </Button>
              </Link>
              
              {/* Cart - Desktop */}
              <Link to="/cart" className="hidden md:flex relative p-2">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6B9D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden p-2"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for products, brands..."
              className="pl-10 bg-gray-50 border-gray-200 focus:border-[#FF6B9D] text-sm rounded-lg"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-16 md:pb-4">
        {children}
      </main>

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
        <div className="grid grid-cols-4 h-14">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center space-y-0.5 relative ${
                  isActive ? "text-[#FF6B9D]" : "text-gray-500"
                }`}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 bg-[#FF6B9D] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
