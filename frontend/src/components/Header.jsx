import React, { useState } from 'react';
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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const navItems = [
    { name: "About Us", link: "#about" },
    { name: "Expertise", link: "#expertise" },
    { name: "Insights", link: "#insights" },
    { name: "Global Desk", link: "#global-desk" },
    { name: "Careers", link: "#careers" },
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
            <a href="#" className="flex items-center space-x-2 group">
              <span className="material-icons text-corporate-primary text-3xl group-hover:text-corporate-secondary transition-colors">
                account_balance
              </span>
              <span className="font-display text-2xl font-bold text-corporate-primary dark:text-white tracking-tight group-hover:text-corporate-primary/80 dark:group-hover:text-gray-200 transition-colors">
                NANGIA <span className="text-corporate-secondary">&</span> CO
              </span>
            </a>
          </div>

          <NavItems items={navItems} activeIdx={activeIdx} />

          <div className="hidden md:flex items-center gap-4">
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

