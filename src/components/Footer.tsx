
import { Link } from 'react-router-dom';
import { Calendar, Search, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-travel rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">WanderWays</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted travel companion for unforgettable journeys. We make travel planning seamless and exciting.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/flights" className="text-slate-300 hover:text-white transition-colors text-sm">Flight Search</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-slate-300 text-sm">Flight Bookings</span></li>
              <li><span className="text-slate-300 text-sm">Hotel Packages</span></li>
              <li><span className="text-slate-300 text-sm">Group Tours</span></li>
              <li><span className="text-slate-300 text-sm">Visa Assistance</span></li>
              <li><span className="text-slate-300 text-sm">Travel Insurance</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-300 text-sm">Email</p>
                <p className="text-white text-sm">info@wanderways.com</p>
              </div>
              <div>
                <p className="text-slate-300 text-sm">Phone</p>
                <p className="text-white text-sm">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-slate-300 text-sm">Address</p>
                <p className="text-white text-sm">123 Travel Street<br />Adventure City, AC 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 WanderWays Travel Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
