import React, { useState } from 'react';
import { CAFE_MENU_ITEMS, getRandomStoredImage } from '../data/baristaData';

export const CafeMenuSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'hot' | 'iced'>('all');

  const filteredItems = CAFE_MENU_ITEMS.filter((item) => {
    if (filterCategory === 'hot') {
      return !item.name.toLowerCase().includes('iced');
    }
    if (filterCategory === 'iced') {
      return item.name.toLowerCase().includes('iced');
    }
    return true;
  });

  return (
    <section id="menu" className="py-24 bg-[#141414] border-b border-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#c7a17a] font-oswald text-xs tracking-[0.3em] uppercase block mb-3">
            SPECIAL SELECTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oswald text-white tracking-[0.08em] mb-4">
            FAVOURITE COFFEE FLAVOURS
          </h2>
          <div className="w-16 h-[2px] bg-[#c7a17a] mx-auto mb-5" />
          <p className="text-[#8c8c8c] text-sm sm:text-base font-sans">
            Crafted from single-estate arabica beans, roasted fresh weekly in our workshop, paired with organic dairy and artisanal syrups.
          </p>

          {/* Quick Filter */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <button
              onClick={() => setFilterCategory('all')}
              className={`font-oswald text-xs sm:text-sm tracking-[0.2em] transition-colors uppercase ${
                filterCategory === 'all'
                  ? 'text-[#c7a17a] border-b-2 border-[#c7a17a] pb-1 font-semibold'
                  : 'text-[#8c8c8c] hover:text-white pb-1'
              }`}
            >
              ALL ITEMS ({CAFE_MENU_ITEMS.length})
            </button>
            <span className="text-[#333]">•</span>
            <button
              onClick={() => setFilterCategory('hot')}
              className={`font-oswald text-xs sm:text-sm tracking-[0.2em] transition-colors uppercase ${
                filterCategory === 'hot'
                  ? 'text-[#c7a17a] border-b-2 border-[#c7a17a] pb-1 font-semibold'
                  : 'text-[#8c8c8c] hover:text-white pb-1'
              }`}
            >
              HOT SPECIALTIES
            </button>
            <span className="text-[#333]">•</span>
            <button
              onClick={() => setFilterCategory('iced')}
              className={`font-oswald text-xs sm:text-sm tracking-[0.2em] transition-colors uppercase ${
                filterCategory === 'iced'
                  ? 'text-[#c7a17a] border-b-2 border-[#c7a17a] pb-1 font-semibold'
                  : 'text-[#8c8c8c] hover:text-white pb-1'
              }`}
            >
              ICED & COLD BREWS
            </button>
          </div>
        </div>

        {/* 2 Column Cafe Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 p-4 rounded bg-[#181818]/60 hover:bg-[#1c1c1c] border border-transparent hover:border-[#2b2b2b] transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded overflow-hidden bg-black/40 border border-[#2a2a2a]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = getRandomStoredImage();
                  }}
                />
              </div>

              {/* Details & Dotted Line */}
              <div className="flex-1 min-w-0">
                {/* Title and Price */}
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center space-x-2 truncate">
                    <h3 className="font-oswald text-base sm:text-lg font-semibold text-white tracking-[0.05em] group-hover:text-[#c7a17a] transition-colors truncate">
                      {item.name}
                    </h3>
                    {item.label && (
                      <span className="px-1.5 py-0.5 text-[9px] bg-[#c7a17a] text-[#141414] font-bold font-oswald rounded-sm uppercase tracking-wider">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {/* Dotted separator */}
                  <div className="barista-dotted-line hidden sm:block" />

                  {/* Price */}
                  <span className="font-oswald text-base sm:text-lg font-bold text-[#c7a17a] ml-2 shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#7d7d7d] mt-1 font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
