import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1c1b', borderTop: '1px solid #3f4816' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ backgroundColor: '#d9fb06', color: '#1a1c1b' }}
              >
                CF
              </div>
              <h3 className="text-lg font-bold" style={{ color: '#d9fb06' }}>
                CA Financial
              </h3>
            </div>
            <p className="text-sm mb-4" style={{ color: '#888680' }}>
              Your trusted partner for all financial, taxation, and business setup needs. Expert solutions with transparency and efficiency.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110" style={{ backgroundColor: 'rgba(217, 251, 6, 0.1)' }}>
                <Facebook size={18} style={{ color: '#d9fb06' }} />
              </a>
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110" style={{ backgroundColor: 'rgba(217, 251, 6, 0.1)' }}>
                <Twitter size={18} style={{ color: '#d9fb06' }} />
              </a>
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110" style={{ backgroundColor: 'rgba(217, 251, 6, 0.1)' }}>
                <Linkedin size={18} style={{ color: '#d9fb06' }} />
              </a>
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110" style={{ backgroundColor: 'rgba(217, 251, 6, 0.1)' }}>
                <Instagram size={18} style={{ color: '#d9fb06' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4" style={{ color: '#d9fb06' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>About Us</a></li>
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>Our Services</a></li>
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>Why Choose Us</a></li>
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>Testimonials</a></li>
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-4" style={{ color: '#d9fb06' }}>
              Popular Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>GST Registration</a></li>
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>ITR Filing</a></li>
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>Company Registration</a></li>
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>Tax Planning</a></li>
              <li><a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#dfddd6' }}>Accounting Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4" style={{ color: '#d9fb06' }}>
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: '#d9fb06' }} />
                <p className="text-sm" style={{ color: '#dfddd6' }}>
                  123 Business District, Finance Plaza, Mumbai - 400001
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} style={{ color: '#d9fb06' }} />
                <a href="tel:+919876543210" className="text-sm" style={{ color: '#dfddd6' }}>
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} style={{ color: '#d9fb06' }} />
                <a href="mailto:info@cafinancial.com" className="text-sm" style={{ color: '#dfddd6' }}>
                  info@cafinancial.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6" style={{ borderTop: '1px solid #3f4816' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: '#888680' }}>
              © 2025 CA Financial Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#888680' }}>Privacy Policy</a>
              <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#888680' }}>Terms of Service</a>
              <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#888680' }}>Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
