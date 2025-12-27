import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #1e40af 0%, #0891b2 100%)' }}
              >
                CBS
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                CBS
              </h3>
            </div>
            <p className="text-sm mb-4 text-gray-600">
              Your trusted partner for all financial, taxation, and business setup needs. Expert solutions with transparency and efficiency.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #0891b2 100%)' }}>
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)' }}>
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #0891b2 100%)' }}>
                <Linkedin size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
                <Instagram size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Our Services</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-4 text-gray-900">
              Popular Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">GST Registration</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">ITR Filing</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Company Registration</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Tax Planning</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Accounting Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4 text-gray-900">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-purple-600" />
                <p className="text-sm text-gray-600">
                  123 Business District, Finance Plaza, Mumbai - 400001
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-purple-600" />
                <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-purple-600" />
                <a href="mailto:info@cafinancial.com" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  info@cafinancial.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 CA Financial Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
