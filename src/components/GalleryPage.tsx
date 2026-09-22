import React, { useState } from 'react';
import { GALLERY_ITEMS, getRandomStoredImage } from '../data/baristaData';
import { GalleryItem } from '../types';
import { Maximize2, Grid, LayoutGrid, Columns, ArrowLeft, Coffee, Sparkles } from 'lucide-react';

interface GalleryPageProps {
  onBackToHome: () => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onBackToHome,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'masonry' | 'wide'>('grid');

  const categories = ['All', 'Coffee', 'Interior', 'Morning Habits', 'Coffee Craft', 'Bakery'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div id="gallery-page" className="min-h-screen bg-[#141414] text-[#8c8c8c] pt-16 sm:pt-20 pb-20">
      {/* Hero Page Banner matching Barista theme header banner */}
      <div className="relative py-20 bg-[#0e0e0e] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#141414]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumbs matching Barista elementor demo */}
          <nav className="flex justify-center items-center space-x-2 text-xs font-oswald tracking-[0.2em] text-[#a0a0a0] uppercase mb-4">
            <button
              onClick={onBackToHome}
              className="hover:text-[#c7a17a] transition-colors flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ALI'S CAFE HOME</span>
            </button>
            <span className="text-[#555]">/</span>
            <span className="text-[#a0a0a0]">PORTFOLIO</span>
            <span className="text-[#555]">/</span>
            <span className="text-[#c7a17a]">GALLERY GRID SPACE</span>
          </nav>

          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[0.08em] uppercase mb-4">
            GALLERY GRID SPACE
          </h1>

          <div className="w-16 h-[2px] bg-[#c7a17a] mx-auto mb-4" />

          <p className="font-merriweather italic text-sm sm:text-base text-[#c7a17a] max-w-xl mx-auto">
            "A visual tribute to the heritage, roasting craft, and social sanctuary of Ali's Cafe."
          </p>

          {/* Owner Notice Badge */}
          <div className="inline-flex items-center space-x-2 mt-6 px-4 py-1.5 bg-[#1f1a14] border border-[#c7a17a]/40 text-[#c7a17a] rounded-sm text-xs font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updated: Dedicated Gallery page introduced in place of the blog section</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & Layout switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#212121]">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-oswald tracking-[0.15em] uppercase transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-[#c7a17a] text-[#141414] border-[#c7a17a] font-semibold'
                  : 'bg-[#191919] text-[#a0a0a0] border-[#292929] hover:border-[#c7a17a]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Layout Mode Toggles */}
        <div className="flex items-center space-x-2 bg-[#191919] border border-[#292929] p-1">
          <button
            onClick={() => setLayoutMode('grid')}
            className={`p-2 transition-colors ${
              layoutMode === 'grid' ? 'bg-[#c7a17a] text-[#141414]' : 'text-[#888] hover:text-white'
            }`}
            title="4-Column Grid"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setLayoutMode('masonry')}
            className={`p-2 transition-colors ${
              layoutMode === 'masonry' ? 'bg-[#c7a17a] text-[#141414]' : 'text-[#888] hover:text-white'
            }`}
            title="Masonry Flow"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setLayoutMode('wide')}
            className={`p-2 transition-colors ${
              layoutMode === 'wide' ? 'bg-[#c7a17a] text-[#141414]' : 'text-[#888] hover:text-white'
            }`}
            title="3-Column Wide"
          >
            <Columns className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Gallery Items Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <Coffee className="w-12 h-12 text-[#444] mx-auto mb-4" />
            <p className="font-oswald text-lg text-white">No items found in this category.</p>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              layoutMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : layoutMode === 'wide'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative overflow-hidden bg-[#1a1a1a] border border-[#262626] cursor-pointer shadow-lg hover:border-[#c7a17a] transition-all duration-500 ${
                  layoutMode === 'masonry' && idx % 3 === 1 ? 'h-96' : 'h-80'
                }`}
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = getRandomStoredImage();
                  }}
                />

                {/* Dark Overlay with Barista Typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#c7a17a] text-[10px] font-oswald tracking-[0.25em] uppercase block mb-1">
                      {item.category}
                    </span>
                    <h2 className="font-oswald text-xl font-bold text-white tracking-[0.05em] uppercase mb-1">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className="text-xs text-[#b8b8b8] font-sans line-clamp-2 mb-3">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center space-x-1.5 text-xs text-[#c7a17a] font-oswald tracking-wider">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>CLICK TO EXPAND</span>
                    </div>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm p-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 text-[#c7a17a]">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back to Home CTA */}
        <div className="mt-16 text-center border-t border-[#262626] pt-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 py-3 px-8 bg-[#c7a17a] hover:bg-[#b08d66] text-[#141414] font-oswald text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg shadow-[#c7a17a]/15"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO MAIN HOME</span>
          </button>
        </div>
      </div>
    </div>
  );
};
