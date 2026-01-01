import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "About Us", link: "/about" },
    { name: "Mission", link: "/mission" },
    { name: "Personal Services", link: "/expertise/personal" },
    { name: "Business Services", link: "/expertise/business" },
    { name: "Insights", link: "/#insights" },
    { name: "Global Desk", link: "/#global-desk" },
    { name: "Calculator", link: "/calculator" },
    { name: "Careers", link: "/#careers" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar height/padding

      // Find the current active section
      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        const sectionId = item.link.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveIdx(i);
            return;
          }
        }
      }

      // If we are at the top (Home), no specific nav item is active
      setActiveIdx(-1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="Nangia & Co" className="h-12 w-auto object-contain" />
            </a>
          </div>

          <NavItems items={navItems} activeIdx={activeIdx} />

          <div className="hidden md:flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mr-2"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 backdrop-blur-md rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-primary/50 text-gray-800 dark:text-gray-200 placeholder-gray-400"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </button>
            </div>

            <NavbarButton variant="primary" className="bg-corporate-primary hover:bg-corporate-primary/90 text-white">
              Contact Us
            </NavbarButton>
          </div>

          <MobileNavToggle
            className="md:hidden"
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="top-[80px]" // Adjust based on navbar height
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-corporate-primary transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {/* Mobile Search */}
            <div className="relative flex items-center mt-4 px-1">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-50 dark:bg-neutral-800 border-none rounded-lg pl-10 pr-4 py-3 text-base focus:ring-2 focus:ring-corporate-primary/20 outline-none"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-corporate-primary text-white"
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;

