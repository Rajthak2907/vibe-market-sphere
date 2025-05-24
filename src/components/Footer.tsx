
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <img 
              src="/lovable-uploads/6e54bcc0-2cf8-4872-b9f7-695a83c9b15c.png" 
              alt="Obeyyo" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 text-sm mb-4">
              Your one-stop destination for fashion, electronics, and lifestyle products at amazing prices.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/men" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Men</Link></li>
              <li><Link to="/women" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Women</Link></li>
              <li><Link to="/kids" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Kids</Link></li>
              <li><Link to="/accessories" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Accessories</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">FAQ</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Shipping Info</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Returns</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">About Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Careers</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-[#E91E63] transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Obeyyo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
