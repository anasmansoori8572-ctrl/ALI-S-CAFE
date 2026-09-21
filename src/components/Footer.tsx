import React from 'react';
import { GALLERY_ITEMS } from '../data/baristaData';
import { GalleryItem, PageView } from '../types';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLightbox,
  onNavigate,
}) => {
  return (
    <footer id="main-footer" className="bg-[#0f0f0f] border-t border-[#222222] text-[#8c8c8c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Column 1: Quick Page Navigation & Hours */}
          <div>
            <div
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mb-5 cursor-pointer inline-block group"
            >
              <img
                src="https://aliscafe.in/loyalty/images/aliscafe.png"
                alt="Barista Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-md"
              />
            </div>
            <h4 className="font-oswald text-base font-semibold tracking-[0.15em] text-white uppercase mb-4 pb-2 border-b border-[#242424]">
              EXPLORE PAGES
            </h4>
            <div className="flex flex-col space-y-2.5 font-oswald text-xs uppercase tracking-[0.18em] mb-6">
              <button
                onClick={() => {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-[#b0b0b0] hover:text-[#c7a17a] transition-colors py-1"
              >
                HOME
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-[#b0b0b0] hover:text-[#c7a17a] transition-colors py-1"
              >
                ABOUT
              </button>
              <button
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-[#b0b0b0] hover:text-[#c7a17a] transition-colors py-1"
              >
                GALLERY
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-[#b0b0b0] hover:text-[#c7a17a] transition-colors py-1"
              >
                CONTACT US
              </button>
            </div>

            <div className="pt-4 border-t border-[#1c1c1c]">
              <span className="text-xs text-[#666] block mb-1 font-oswald uppercase tracking-wider">
                Direct Line
              </span>
              <span className="text-sm text-white font-oswald tracking-wide">
                +91 96963 80526
              </span>
            </div>
          </div>

          {/* Column 2: Gallery Moments */}
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#242424]">
              <h4 className="font-oswald text-base font-semibold tracking-[0.15em] text-white uppercase">
                GALLERY HIGHLIGHTS
              </h4>
              <button
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[11px] font-oswald text-[#c7a17a] hover:underline uppercase tracking-wider cursor-pointer"
              >
                VIEW ALL
              </button>
            </div>
            
            <div className="space-y-3">
              {GALLERY_ITEMS.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item)}
                  className="flex items-center space-x-3 group cursor-pointer p-1.5 rounded hover:bg-[#161616] transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-sm object-cover shrink-0 border border-[#2b2b2b]"
                  />
                  <div className="min-w-0 flex-1">
                    <h5 className="font-oswald text-xs sm:text-sm text-[#d6d6d6] group-hover:text-[#c7a17a] transition-colors truncate uppercase">
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-[#666] uppercase tracking-wider block font-sans">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#242424]">
              <h4 className="font-oswald text-base font-semibold tracking-[0.15em] text-white uppercase">
                CONTACT US
              </h4>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[11px] font-oswald text-[#c7a17a] hover:underline uppercase tracking-wider cursor-pointer"
              >
                FORM
              </button>
            </div>
            <div className="space-y-3 text-sm font-sans">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#c7a17a] shrink-0 mt-1" />
                <span className="text-[#a0a0a0] leading-snug">
                  14/73, Ground Floor, Wright Street, Civil Lines, Kanpur, Uttar Pradesh 208001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#c7a17a] shrink-0" />
                <a
                  href="mailto:info@aliscafe.in"
                  className="text-[#a0a0a0] hover:text-[#c7a17a] transition-colors"
                >
                  info@aliscafe.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#c7a17a] shrink-0" />
                <a
                  href="tel:+919696380526"
                  className="text-[#a0a0a0] hover:text-[#c7a17a] transition-colors"
                >
                  +91 96963 80526
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-[#1c1c1c]">
              <a
                href="https://www.instagram.com/aliscafeandpizzeria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8c8c8c] hover:text-[#c7a17a] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/aliscafeandpizzeria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8c8c8c] hover:text-[#c7a17a] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h4 className="font-oswald text-base font-semibold tracking-[0.15em] text-white uppercase mb-6 pb-2 border-b border-[#242424]">
              OPENING HOURS
            </h4>
            <div className="space-y-4 text-xs sm:text-sm font-sans">
              <div className="flex justify-between items-center py-1 border-b border-[#1c1c1c]">
                <span className="text-[#a0a0a0]">Monday – Sunday:</span>
                <span className="text-[#c7a17a] font-oswald text-xs tracking-wider">11:00 AM – 12:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#555] space-y-3 sm:space-y-0">
          <p>© 2026 ALI'S CAFE & PIZZERIA. All Rights Reserved</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#c7a17a] transition-colors uppercase font-oswald text-[11px] tracking-wider cursor-pointer"
            >
              Gallery
            </button>
            <span>•</span>
            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#c7a17a] transition-colors uppercase font-oswald text-[11px] tracking-wider cursor-pointer"
            >
              About Us
            </button>
            <span>•</span>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#c7a17a] transition-colors uppercase font-oswald text-[11px] tracking-wider cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
