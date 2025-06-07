
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu, X, Search, ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white shadow-sm border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="lg:hidden hover:bg-gray-100 transition-colors duration-200"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer">
                obeyyo
              </h1>
            </div>

            {/* Search bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="w-full relative group">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-brand-pink transition-colors duration-200" />
                  <input
                    type="text"
                    placeholder="Search products, brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all duration-200 hover:border-gray-300"
                  />
                </div>
              </form>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-2">
              {/* Mobile search button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden hover:bg-gray-100 transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-gray-100 transition-colors duration-200 group"
              >
                <Heart className="h-5 w-5 group-hover:text-brand-pink transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 bg-brand-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-gentle">
                  3
                </span>
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-gray-100 transition-colors duration-200 group"
              >
                <ShoppingCart className="h-5 w-5 group-hover:text-brand-pink transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-gentle">
                  2
                </span>
              </Button>

              {/* Profile */}
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100 transition-colors duration-200 group"
              >
                <User className="h-5 w-5 group-hover:text-brand-blue transition-colors duration-200" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-h-screen transition-all duration-300">
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
