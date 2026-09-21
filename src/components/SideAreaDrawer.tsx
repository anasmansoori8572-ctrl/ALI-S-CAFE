import React from 'react';
import { X, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { INSTAGRAM_PHOTOS } from '../data/baristaData';
import { PageView } from '../types';

interface SideAreaDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView) => void;
}

export const SideAreaDrawer: React.FC<SideAreaDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (view: PageView) => {
    onClose();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#161616] border-l border-[#262626] p-8 sm:p-10 overflow-y-auto z-10 flex flex-col justify-between animate-in slide-in-from-right duration-300">
        <div>
          {/* Top Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#222]">
            <div className="flex items-center space-x-3">
              <img
                src="https://aliscafe.in/loyalty/images/aliscafe.png"
                alt="Barista Logo"
                className="h-11 sm:h-12 w-auto object-contain drop-shadow"
              />
              <span className="font-oswald text-xl font-bold tracking-[0.2em] text-white">
                BARISTA
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#888] hover:text-[#c7a17a] transition-colors focus:outline-none cursor-pointer"
              title="Close panel"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* 4 Page Quick Navigation */}
          <div className="py-6 border-b border-[#222]">
            <span className="font-oswald text-[11px] uppercase tracking-[0.2em] text-[#777] block mb-3">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-3 font-oswald text-xs uppercase tracking-[0.18em]">
              <button
                onClick={() => handleLinkClick('home')}
                className="text-left py-2 px-3 bg-[#1e1e1e] hover:bg-[#252525] text-white hover:text-[#c7a17a] transition-colors border border-[#2b2b2b]"
              >
                HOME
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className="text-left py-2 px-3 bg-[#1e1e1e] hover:bg-[#252525] text-white hover:text-[#c7a17a] transition-colors border border-[#2b2b2b]"
              >
                ABOUT
              </button>
              <button
                onClick={() => handleLinkClick('gallery')}
                className="text-left py-2 px-3 bg-[#1e1e1e] hover:bg-[#252525] text-white hover:text-[#c7a17a] transition-colors border border-[#2b2b2b]"
              >
                GALLERY
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="text-left py-2 px-3 bg-[#1e1e1e] hover:bg-[#252525] text-white hover:text-[#c7a17a] transition-colors border border-[#2b2b2b]"
              >
                CONTACT US
              </button>
            </div>
          </div>

          {/* Side Logo & Description */}
          <div className="text-center py-6">
            <img
              src="https://aliscafe.in/loyalty/images/aliscafe.png"
              alt="Barista Logo"
              className="h-24 sm:h-28 md:h-32 w-auto mx-auto mb-4 object-contain drop-shadow-xl"
            />
            <p className="text-xs text-[#8c8c8c] leading-relaxed font-sans">
              Welcome to Barista. An authentic coffee shop offering fine roasted beans, slow manual brewing, and comforting spaces for connoisseurs.
            </p>
          </div>

          {/* Quick Info */}
          <div className="space-y-3.5 py-5 border-y border-[#222] text-xs">
            <div className="flex items-center space-x-3 text-[#b0b0b0]">
              <Clock className="w-4 h-4 text-[#c7a17a] shrink-0" />
              <span>Mon – Sun: 11:00 AM – 12:00 AM</span>
            </div>
            <div className="flex items-center space-x-3 text-[#b0b0b0]">
              <MapPin className="w-4 h-4 text-[#c7a17a] shrink-0" />
              <span>14/73, Ground Floor, Wright Street, Civil Lines, Kanpur, UP</span>
            </div>
            <div className="flex items-center space-x-3 text-[#b0b0b0]">
              <Phone className="w-4 h-4 text-[#c7a17a] shrink-0" />
              <a href="tel:+919696380526" className="hover:text-[#c7a17a] transition-colors">+91 96963 80526</a>
            </div>
            <div className="flex items-center space-x-3 text-[#b0b0b0]">
              <Mail className="w-4 h-4 text-[#c7a17a] shrink-0" />
              <a href="mailto:info@aliscafe.in" className="hover:text-[#c7a17a] transition-colors">info@aliscafe.in</a>
            </div>
          </div>

          {/* Instagram mini gallery */}
          <div className="pt-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-oswald text-xs uppercase tracking-[0.15em] text-white">
                INSTAGRAM FEED
              </span>
              <button
                onClick={() => handleLinkClick('gallery')}
                className="text-[10px] font-oswald text-[#c7a17a] hover:underline uppercase"
              >
                OPEN GALLERY
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {INSTAGRAM_PHOTOS.slice(0, 6).map((img, i) => (
                <div key={i} className="h-16 rounded-sm overflow-hidden bg-black/40">
                  <img src={img} alt="Coffee thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Social Links */}
        <div className="pt-8 border-t border-[#222] flex items-center justify-between text-xs text-[#666]">
          <span>© 2026 ALI'S CAFE</span>
          <div className="flex items-center space-x-3 text-[#aaa]">
            <a
              href="https://www.instagram.com/aliscafeandpizzeria"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c7a17a] transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
