import React from 'react';
import { Button } from './ui/button';
import { Phone, Mail, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl text-white"
              style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            >
              CF
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                CA Financial Services
              </h1>
              <p className="text-xs text-gray-500">
                Your Trusted Financial Partner
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Phone size={16} className="text-purple-600" />
              +91 98765 43210
            </a>
            <a 
              href="mailto:info@cafinancial.com" 
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Mail size={16} className="text-purple-600" />
              info@cafinancial.com
            </a>
          </div>

          <Button
            className="font-semibold text-white shadow-md hover:shadow-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem'
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
