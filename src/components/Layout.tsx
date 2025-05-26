
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [cartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      label: "New arrivals",
      path: "/new-arrivals",
      dropdown: [
        { label: "Latest Men's Collection", path: "/men/new" },
        { label: "Latest Women's Collection", path: "/women/new" },
        { label: "Latest Kids Collection", path: "/kids/new" },
        { label: "New Accessories", path: "/accessories/new" }
      ]
    },
    {
      label: "Top wear",
      path: "/topwear",
      dropdown: [
        { label: "T-Shirts", path: "/men/tshirts" },
        { label: "Shirts", path: "/men/shirts" },
        { label: "Hoodies", path: "/men/hoodies" },
        { label: "Blouses", path: "/women/blouses" },
        { label: "Crop Tops", path: "/women/crop-tops" }
      ]
    },
    {
      label: "Bottom wear",
      path: "/bottomwear",
      dropdown: [
        { label: "Jeans", path: "/men/jeans" },
        { label: "Trousers", path: "/men/trousers" },
        { label: "Shorts", path: "/men/shorts" },
        { label: "Skirts", path: "/women/skirts" },
        { label: "Leggings", path: "/women/leggings" }
      ]
    },
    {
      label: "Trending",
      path: "/trending",
      dropdown: [
        { label: "Popular Now", path: "/trending/popular" },
        { label: "GenZ Picks", path: "/trending/genz" },
        { label: "Celebrity Style", path: "/trending/celebrity" },
        { label: "Street Fashion", path: "/trending/street" }
      ]
    },
    {
      label: "Accessories",
      path: "/accessories",
      dropdown: [
        { label: "Bags", path: "/accessories/bags" },
        { label: "Watches", path: "/accessories/watches" },
        { label: "Jewelry", path: "/accessories/jewelry" },
        { label: "Sunglasses", path: "/accessories/sunglasses" }
      ]
    }
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
              <div key={item.path} className="space-y-1">
                <Link
                  to={item.path}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
          <div className="flex items-center justify-between h-16">
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

            {/* Desktop Navigation with Dropdowns */}
            <nav className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-[#FF6B9D] bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg">
                        <div className="p-4 w-64">
                          <div className="space-y-2">
                            {item.dropdown?.map((subItem) => (
                              <NavigationMenuLink key={subItem.path} asChild>
                                <Link
                                  to={subItem.path}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-[#FF6B9D] hover:bg-gray-50 rounded-md transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
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
                className="lg:hidden p-2"
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
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-40">
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
