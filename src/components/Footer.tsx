
import { Link } from 'react-router-dom';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl">Wisdom</span>
                <span className="font-display font-normal text-lg text-slate-300 ml-1">Tours & Travels</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted travel companion for 15+ years. We create unforgettable journeys with professional service and competitive prices.
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
              <li><Link to="/packages" className="text-slate-300 hover:text-white transition-colors text-sm">Tour Packages</Link></li>
              <li><Link to="/flights" className="text-slate-300 hover:text-white transition-colors text-sm">Flight Bookings</Link></li>
              <li><Link to="/visa" className="text-slate-300 hover:text-white transition-colors text-sm">Visa Services</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-slate-300 text-sm">International Packages</span></li>
              <li><span className="text-slate-300 text-sm">Domestic Tours</span></li>
              <li><span className="text-slate-300 text-sm">Flight Bookings</span></li>
              <li><span className="text-slate-300 text-sm">Visa Assistance</span></li>
              <li><span className="text-slate-300 text-sm">Travel Insurance</span></li>
              <li><span className="text-slate-300 text-sm">Hotel Bookings</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-white text-sm">info@wisdomtours.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-white text-sm">+91 98765 43210</p>
                  <p className="text-slate-300 text-xs">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-1" />
                <div>
                  <p className="text-white text-sm">123 Travel Street</p>
                  <p className="text-slate-300 text-xs">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="mt-4">
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Wisdom Tours & Travels. All rights reserved. | Licensed Travel Agency | IATA Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
