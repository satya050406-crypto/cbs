import React from 'react';
import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#1a1c1b', borderBottom: '1px solid #3f4816' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
              style={{ backgroundColor: '#d9fb06', color: '#1a1c1b' }}
            >
              CF
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#d9fb06' }}>
                CA Financial Services
              </h1>
              <p className="text-xs" style={{ color: '#888680' }}>
                Your Trusted Financial Partner
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#dfddd6' }}
            >
              <Phone size={16} style={{ color: '#d9fb06' }} />
              +91 98765 43210
            </a>
            <a 
              href="mailto:info@cafinancial.com" 
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#dfddd6' }}
            >
              <Mail size={16} style={{ color: '#d9fb06' }} />
              info@cafinancial.com
            </a>
          </div>

          <Button
            className="font-semibold"
            style={{
              backgroundColor: '#d9fb06',
              color: '#1a1c1b',
              borderRadius: '10rem',
              textTransform: 'uppercase',
              fontSize: '0.875rem',
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
