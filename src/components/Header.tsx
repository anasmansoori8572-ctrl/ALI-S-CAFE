import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search as SearchIcon, Menu as MenuIcon, X } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  activeView: PageView;
  setActiveView: (view: PageView) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSideArea: () => void;
  onOpenSearch?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  cartCount,
  onOpenCart,
  onOpenSideArea,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView) => {
    setMobileMenuOpen(false);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-none ${
        isScrolled
          ? 'bg-[#101010]/95 backdrop-blur-md py-3 sm:py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        
        {/* Left: Brand Logo (Same previous logo) */}
        <div
          id="brand-logo-button"
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center group transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://aliscafe.in/loyalty/images/aliscafe.png"
            alt="Barista Logo"
            className={`${
              isScrolled ? 'h-9 sm:h-11' : 'h-10 sm:h-13'
            } w-auto max-w-[160px] sm:max-w-[200px] object-contain drop-shadow-lg transition-all duration-300`}
          />
        </div>

        {/* Right Desktop Navigation: [HOME  ABOUT  GALLERY  CONTACT US  |  🛒 0  🔍  ☰] */}
        <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          <nav id="desktop-navbar" className="flex items-center space-x-7 xl:space-x-9">
            {/* 1. Home */}
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('home')}
              className={`font-oswald text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase transition-all py-1 cursor-pointer relative drop-shadow ${
                activeView === 'home'
                  ? 'text-[#c7a17a]'
                  : 'text-white hover:text-[#c7a17a]'
              }`}
            >
              HOME
            </button>

            {/* 2. About */}
            <button
              id="nav-about-btn"
              onClick={() => handleNavClick('about')}
              className={`font-oswald text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase transition-all py-1 cursor-pointer relative drop-shadow ${
                activeView === 'about'
                  ? 'text-[#c7a17a]'
                  : 'text-white hover:text-[#c7a17a]'
              }`}
            >
              ABOUT
            </button>

            {/* 3. Gallery */}
            <button
              id="nav-gallery-btn"
              onClick={() => handleNavClick('gallery')}
              className={`font-oswald text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase transition-all py-1 cursor-pointer relative drop-shadow ${
                activeView === 'gallery'
                  ? 'text-[#c7a17a]'
                  : 'text-white hover:text-[#c7a17a]'
              }`}
            >
              GALLERY
            </button>

            {/* 4. Contact Us */}
            <button
              id="nav-contact-btn"
              onClick={() => handleNavClick('contact')}
              className={`font-oswald text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase transition-all py-1 cursor-pointer relative drop-shadow ${
                activeView === 'contact'
                  ? 'text-[#c7a17a]'
                  : 'text-white hover:text-[#c7a17a]'
              }`}
            >
              CONTACT US
            </button>
          </nav>

          {/* Divider line | matching the real Barista header */}
          <div className="h-4 w-[1px] bg-white/30" />

          {/* Action Icons: Cart with counter, Search, Hamburger menu */}
          <div className="flex items-center space-x-4 xl:space-x-5">
            {/* Cart with count */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              className="relative text-white hover:text-[#c7a17a] transition-colors p-1.5 flex items-center cursor-pointer drop-shadow"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4 stroke-[2]" />
              <span className="font-oswald text-[11px] font-bold text-white ml-1">
                {cartCount}
              </span>
            </button>

            {/* Search Icon */}
            <button
              id="nav-search-btn"
              onClick={onOpenSearch}
              className="text-white hover:text-[#c7a17a] transition-colors p-1.5 cursor-pointer drop-shadow"
              aria-label="Search"
            >
              <SearchIcon className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Hamburger Icon */}
            <button
              id="nav-sidearea-btn"
              onClick={onOpenSideArea}
              className="text-white hover:text-[#c7a17a] transition-colors p-1.5 cursor-pointer drop-shadow"
              aria-label="Open Sidebar Menu"
            >
              <MenuIcon className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={onOpenCart}
            className="relative text-white p-1"
            aria-label="Cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-oswald text-[10px] font-bold text-white ml-0.5">
              {cartCount}
            </span>
          </button>
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="text-white p-1"
              aria-label="Search"
            >
              <SearchIcon className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown - 4 Pages */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121212]/95 backdrop-blur-xl px-6 py-5 space-y-3 shadow-2xl border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="pb-3 flex items-center justify-between border-b border-white/10">
            <img
              src="https://aliscafe.in/loyalty/images/aliscafe.png"
              alt="Barista Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-oswald text-xs uppercase tracking-[0.2em] text-[#c7a17a]">
              ROASTERY &amp; CAFÉ
            </span>
          </div>
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left font-oswald text-sm tracking-[0.2em] py-2 ${
              activeView === 'home' ? 'text-[#c7a17a] font-bold' : 'text-white/80 hover:text-white'
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left font-oswald text-sm tracking-[0.2em] py-2 ${
              activeView === 'about' ? 'text-[#c7a17a] font-bold' : 'text-white/80 hover:text-white'
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className={`block w-full text-left font-oswald text-sm tracking-[0.2em] py-2 ${
              activeView === 'gallery' ? 'text-[#c7a17a] font-bold' : 'text-white/80 hover:text-white'
            }`}
          >
            GALLERY
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left font-oswald text-sm tracking-[0.2em] py-2 ${
              activeView === 'contact' ? 'text-[#c7a17a] font-bold' : 'text-white/80 hover:text-white'
            }`}
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
};
