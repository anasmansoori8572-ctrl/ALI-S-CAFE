import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/baristaData';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
  const totalCount = GALLERY_ITEMS.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Main Lightbox Content */}
      <div className="relative z-10 max-w-5xl w-full bg-[#161616] border border-[#2b2b2b] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-[#c7a17a] text-white hover:text-[#141414] rounded-full transition-colors"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image container */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain p-2"
          />

          {/* Prev / Next Chevrons on image */}
          <button
            onClick={onSelectPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#c7a17a] text-white hover:text-[#141414] transition-colors"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onSelectNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#c7a17a] text-white hover:text-[#141414] transition-colors"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Information Sidebar */}
        <div className="w-full md:w-80 bg-[#191919] p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#262626]">
          <div>
            <div className="flex items-center justify-between text-xs text-[#777] font-oswald mb-3">
              <span>PHOTO {currentIndex + 1} OF {totalCount}</span>
              <span className="text-[#c7a17a] font-semibold">{item.category}</span>
            </div>

            <h2 className="font-oswald text-2xl font-bold text-white tracking-[0.08em] uppercase mb-4">
              {item.title}
            </h2>

            <div className="w-10 h-[2px] bg-[#c7a17a] mb-4" />

            <p className="text-xs sm:text-sm text-[#a0a0a0] leading-relaxed font-sans mb-6">
              {item.description || 'Authentic photography showcasing barista brewing methods, interior architecture, and fresh roast culture.'}
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#777]">
              <Tag className="w-3.5 h-3.5 text-[#c7a17a]" />
              <span>Ali's Cafe Portfolio Showcase</span>
            </div>
          </div>

          <div className="pt-6 border-t border-[#262626] flex items-center justify-between text-xs">
            <button
              onClick={onSelectPrev}
              className="text-[#999] hover:text-[#c7a17a] font-oswald uppercase tracking-wider flex items-center space-x-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREV</span>
            </button>
            <span className="text-[#444]">|</span>
            <button
              onClick={onSelectNext}
              className="text-[#999] hover:text-[#c7a17a] font-oswald uppercase tracking-wider flex items-center space-x-1"
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
