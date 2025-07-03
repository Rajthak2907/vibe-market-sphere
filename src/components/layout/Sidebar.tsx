
import { X, Home, ShoppingBag, Heart, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigationItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Men", path: "/men", icon: ShoppingBag },
    { label: "Women", path: "/women", icon: ShoppingBag },
    { label: "Kids", path: "/kids", icon: ShoppingBag },
    { label: "Beauty", path: "/beauty", icon: ShoppingBag },
    { label: "Footwear", path: "/footwear", icon: ShoppingBag },
    { label: "Accessories", path: "/accessories", icon: ShoppingBag },
    { label: "Wishlist", path: "/wishlist", icon: Heart },
    { label: "Profile", path: "/profile", icon: User },
    { label: "Settings", path: "/settings", icon: Settings },
    { label: "Help", path: "/help", icon: HelpCircle },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/fcde6e4f-7f0d-4250-9eac-15f1c0e84293.png" alt="Obeyyo" className="h-8 w-auto" />
            <span className="text-xl font-bold gradient-text-obeyyo">obeyyo</span>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Icon className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-800 font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
