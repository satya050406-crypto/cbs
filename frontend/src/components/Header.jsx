import React from 'react';
import { Button } from './ui/button';
import { Phone, Mail, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              CBS
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-900">
                CBS
              </h1>
              <p className="text-xs text-slate-500">
                Your Trusted Financial Partner
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a 
              href="tel:+919354419950" 
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-purple-600 transition-colors"
            >
              <Phone size={16} className="text-purple-500" />
              +91 93544 19950
            </a>
            <a 
              href="mailto:info@cbs.com" 
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-purple-600 transition-colors"
            >
              <Mail size={16} className="text-purple-500" />
              info@cbs.com
            </a>
          </div>

          <Button
            className="font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            style={{
              borderRadius: '10px',
              padding: '0.625rem 1.25rem'
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
