
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">SAM Life Savers</h2>
                <p className="text-sm text-gray-300">Building Futures Together</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Dedicated to uplifting orphan girls and supporting underprivileged communities 
              through compassionate care, education, and sustainable development.
            </p>
            <div className="flex space-x-4">
              <Link to="/donate" className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Support Our Cause
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/hope-in-action" className="text-gray-300 hover:text-white transition-colors">Hope In Action</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-rose-400" />
                <span className="text-gray-300">+92 336 0863545</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-rose-400" />
                <span className="text-gray-300">info@samlifesavers.org</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-rose-400 mt-1" />
                <span className="text-gray-300">D999- Al Basit Arcade, Fifth Road, Rawalpindi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SAM Life Savers. All rights reserved. Made with ❤️ for a better tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
