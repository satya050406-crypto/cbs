import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { personalCategories, businessCategories } from '../data/servicesData';
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

import logo from '../assets/logo_v3.png';

const navItems = [
  { name: "About Us", link: "/about" },
  { name: "Mission", link: "/mission" },
  { name: "Personal Services", link: "/expertise/personal" },
  { name: "Business Services", link: "/expertise/business" },
  { name: "Insights", link: "/insights" },
  { name: "Global Desk", link: "/global-desk" },
  { name: "Calculator", link: "/calculator" },
  { name: "Careers", link: "/careers" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const allServices = [
      ...personalCategories.flatMap(cat => cat.services.map(s => ({ ...s, category: cat.category_name, link: '/expertise/personal' }))),
      ...businessCategories.flatMap(cat => cat.services.map(s => ({ ...s, category: cat.category_name, link: '/expertise/business' })))
    ];

    const results = allServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);



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
            <div className="relative flex items-center" onMouseLeave={() => { if (!searchQuery && isSearchOpen) setIsSearchOpen(false); }}>
              <AnimatePresence mode="wait">
                {isSearchOpen ? (
                  <motion.div
                    key="search-input"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 300, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative flex items-center bg-black/5 border border-black/10 backdrop-blur-md rounded-full px-2"
                  >
                    <Search size={18} className="text-neutral-500 ml-2 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="p-1.5 rounded-full hover:bg-black/10 transition-colors text-neutral-500 hover:text-black"
                    >
                      <X size={16} />
                    </button>

                    {searchResults.length > 0 && (
                      <div className="absolute top-12 left-0 w-full bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden z-[50] max-h-80 overflow-y-auto">
                        {searchResults.map((result, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                              navigate(`${result.link}?service=${encodeURIComponent(result.name)}`);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-0"
                          >
                            <div className="font-medium text-neutral-900 text-sm truncate">{result.name}</div>
                            <div className="text-xs text-neutral-500 truncate">{result.category}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.button
                    key="search-trigger"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSearchOpen(true)}
                    className="group flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-all duration-300 text-neutral-600 hover:text-black"
                  >
                    <Search size={20} />
                    <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm font-medium">
                      Search Services
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <NavbarButton
              variant="primary"
              className="bg-corporate-primary hover:bg-corporate-primary/90 text-white"
              onClick={() => navigate('/contact')}
            >
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
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-neutral-800 border-none rounded-lg pl-10 pr-4 py-3 text-base focus:ring-2 focus:ring-corporate-primary/20 outline-none"
                />
                {searchResults.length > 0 && searchQuery && (
                  <div className="absolute top-full mt-2 left-0 w-full bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-800 overflow-hidden z-[50] max-h-60 overflow-y-auto">
                    {searchResults.map((result, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setSearchQuery("");
                          navigate(`${result.link}?service=${encodeURIComponent(result.name)}`);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors border-b border-gray-50 dark:border-neutral-800 last:border-0"
                      >
                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm truncate">{result.name}</div>
                        <div className="text-xs text-gray-500 truncate">{result.category}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/contact');
                }}
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

