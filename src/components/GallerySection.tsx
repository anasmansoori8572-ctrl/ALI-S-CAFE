import React, { useState } from 'react';
import { GALLERY_ITEMS, getRandomStoredImage } from '../data/baristaData';
import { GalleryItem } from '../types';
import { Maximize2, ArrowRight } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onViewAllGallery: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenLightbox,
  onViewAllGallery
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Coffee', 'Interior', 'Morning Habits', 'Coffee Craft', 'Bakery'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery-section" className="py-24 bg-[#111111] border-b border-[#212121] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (In place of old Blog section "READ OUR LATEST NEWS") */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#c7a17a]/15 text-[#c7a17a] border border-[#c7a17a]/30 mb-3 text-xs font-oswald tracking-[0.2em] uppercase">
            <span>Visual Showcase</span>
            <span>•</span>
            <span>Replacing Blog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oswald text-white tracking-[0.08em] mb-4">
            OUR COFFEE GALLERY
          </h2>
          <div className="w-16 h-[2px] bg-[#c7a17a] mx-auto mb-5" />
          <p className="text-[#8c8c8c] text-sm sm:text-base font-sans">
            Capturing the atmosphere, craft brewing, delicate foam art, and comforting moments of everyday coffee life.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-oswald tracking-[0.15em] uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-[#c7a17a] text-[#141414] border-[#c7a17a] font-semibold shadow-md shadow-[#c7a17a]/20'
                    : 'bg-[#181818] text-[#999] border-[#2b2b2b] hover:border-[#c7a17a]/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (8 Items from authentic Barista theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative h-72 sm:h-80 overflow-hidden bg-[#181818] border border-[#262626] cursor-pointer shadow-lg hover:border-[#c7a17a] transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = getRandomStoredImage();
                }}
              />

              {/* Hover Dark Gold Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#c7a17a] text-[10px] font-oswald tracking-[0.25em] uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-oswald text-xl font-bold text-white tracking-[0.05em] uppercase mb-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-[#b0b0b0] font-sans line-clamp-2 mb-3">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center space-x-2 text-xs text-[#c7a17a] font-oswald tracking-wider">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>EXPAND VIEW</span>
                  </div>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm p-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 text-white">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Page Action */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewAllGallery}
            className="inline-flex items-center space-x-3 py-3.5 px-8 bg-transparent hover:bg-[#c7a17a] text-[#c7a17a] hover:text-[#141414] border-2 border-[#c7a17a] font-oswald text-sm font-semibold tracking-[0.2em] transition-all duration-300 uppercase shadow-lg shadow-[#c7a17a]/10"
          >
            <span>VIEW FULL GALLERY PAGE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#666] mt-3 font-sans">
            Explore our complete portfolio, high-resolution galleries, and interior photography
          </p>
        </div>
      </div>
    </section>
  );
};
