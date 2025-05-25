
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Search, ShoppingCart, Menu } from "lucide-react";
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

  // Simple mobile menu modal
  const MobileMenu = () => {
    if (!menuOpen) return null;
    
    return (
      <>
        <div 
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" 
          onClick={() => setMenuOpen(false)}
        />
        <div className="fixed inset-y-0 right-0 z-50 w-[75%] sm:max-w-sm h-full bg-background p-6 shadow-lg border-l">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="mt-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo - Made larger and bolder */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/164ea4a6-a57e-4afe-9e7a-0190149b95b6.png" 
                alt="Obeyyo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF6B9D] to-[#4A90E2] bg-clip-text text-transparent">
                obeyyo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
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
            <div className="hidden lg:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search for products, brands..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:border-[#FF6B9D] rounded-full"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-full">
                  Login
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden px-3 sm:px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for products, brands..."
              className="pl-10 bg-gray-50 border-gray-200 focus:border-[#FF6B9D] text-sm rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 md:pb-4">
        {children}
      </main>

      {/* Mobile Menu Render */}
      {MobileMenu()}

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
        <div className="grid grid-cols-4 h-16">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center space-y-1 relative ${
                  isActive ? "text-[#FF6B9D]" : "text-gray-500"
                }`}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-[#FF6B9D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
