import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                CBS
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                CBS
              </h3>
            </div>
            <p className="text-sm mb-6 text-slate-600 leading-relaxed">
              Your trusted partner for all financial, taxation, and business setup needs. Expert solutions with transparency and efficiency.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-purple-100 bg-white border border-slate-200">
                <Facebook size={16} className="text-slate-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-purple-100 bg-white border border-slate-200">
                <Twitter size={16} className="text-slate-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-purple-100 bg-white border border-slate-200">
                <Linkedin size={16} className="text-slate-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-purple-100 bg-white border border-slate-200">
                <Instagram size={16} className="text-slate-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">Our Services</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-900">
              Popular Services
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">GST Registration</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">ITR Filing</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">Company Registration</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">Tax Planning</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">Accounting Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-900">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-purple-500" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  123 Business District, Finance Plaza, Mumbai - 400001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-purple-500" />
                <a href="tel:+919354419950" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">
                  +91 93544 19950
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-purple-500" />
                <a href="mailto:info@cafinancial.com" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">
                  info@cafinancial.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2025 CA Financial Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
