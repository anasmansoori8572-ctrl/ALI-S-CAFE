import React, { useState } from 'react';
import { X, Search as SearchIcon, Coffee, ShoppingBag, Image as ImageIcon } from 'lucide-react';
import { CAFE_MENU_ITEMS, PRODUCTS, GALLERY_ITEMS } from '../data/baristaData';
import { GalleryItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGalleryItem: (item: GalleryItem) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectGalleryItem,
  onNavigateToSection
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingMenu = trimmed
    ? CAFE_MENU_ITEMS.filter((item) =>
        item.name.toLowerCase().includes(trimmed) ||
        item.description.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingProducts = trimmed
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(trimmed) ||
        p.description.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingGallery = trimmed
    ? GALLERY_ITEMS.filter((g) =>
        g.title.toLowerCase().includes(trimmed) ||
        g.category.toLowerCase().includes(trimmed) ||
        (g.description && g.description.toLowerCase().includes(trimmed))
      )
    : [];

  const totalMatches = matchingMenu.length + matchingProducts.length + matchingGallery.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-3xl bg-[#161616] border border-[#2b2b2b] shadow-2xl p-6 sm:p-8">
        {/* Search Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#282828]">
          <div className="flex items-center space-x-3 w-full mr-4">
            <SearchIcon className="w-6 h-6 text-[#c7a17a] shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search coffee flavours, roastery products, gallery..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-lg sm:text-xl font-oswald text-white placeholder-[#555] focus:outline-none tracking-wide"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#777] hover:text-[#c7a17a] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results Container */}
        <div className="mt-6 max-h-[60vh] overflow-y-auto space-y-6">
          {query.trim() === '' ? (
            <div className="py-10 text-center text-xs text-[#666] font-sans">
              Type to search our artisan cafe menu, roastery beans, and gallery collection.
            </div>
          ) : totalMatches === 0 ? (
            <div className="py-12 text-center text-sm text-[#777] font-oswald">
              No results found for "{query}".
            </div>
          ) : (
            <div className="space-y-6">
              {/* Menu items match */}
              {matchingMenu.length > 0 && (
                <div>
                  <h4 className="flex items-center space-x-2 text-xs font-oswald tracking-[0.2em] text-[#c7a17a] uppercase mb-3">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>CAFE FLAVOURS ({matchingMenu.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchingMenu.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => {
                          onClose();
                          onNavigateToSection('menu');
                        }}
                        className="flex items-center justify-between p-2 rounded bg-[#1c1c1c] hover:bg-[#222] cursor-pointer transition-colors"
                      >
                        <span className="font-oswald text-sm text-white">{m.name}</span>
                        <span className="font-oswald text-xs text-[#c7a17a]">{m.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Shop items match */}
              {matchingProducts.length > 0 && (
                <div>
                  <h4 className="flex items-center space-x-2 text-xs font-oswald tracking-[0.2em] text-[#c7a17a] uppercase mb-3">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>ROASTERY PRODUCTS ({matchingProducts.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchingProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onNavigateToSection('shop');
                        }}
                        className="flex items-center justify-between p-2 rounded bg-[#1c1c1c] hover:bg-[#222] cursor-pointer transition-colors"
                      >
                        <span className="font-oswald text-sm text-white">{p.name}</span>
                        <span className="font-oswald text-xs text-[#c7a17a]">${p.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery match */}
              {matchingGallery.length > 0 && (
                <div>
                  <h4 className="flex items-center space-x-2 text-xs font-oswald tracking-[0.2em] text-[#c7a17a] uppercase mb-3">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>GALLERY PHOTOGRAPHY ({matchingGallery.length})</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {matchingGallery.map((g) => (
                      <div
                        key={g.id}
                        onClick={() => {
                          onClose();
                          onSelectGalleryItem(g);
                        }}
                        className="group relative h-24 rounded overflow-hidden cursor-pointer border border-[#2b2b2b] hover:border-[#c7a17a]"
                      >
                        <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-2 text-center group-hover:bg-black/40">
                          <span className="font-oswald text-xs text-white uppercase truncate">
                            {g.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
