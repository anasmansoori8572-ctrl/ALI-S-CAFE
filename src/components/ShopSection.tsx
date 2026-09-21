import React from 'react';
import { PRODUCTS } from '../data/baristaData';
import { ProductItem } from '../types';
import { Star, ShoppingBag } from 'lucide-react';

interface ShopSectionProps {
  onAddToCart: (product: ProductItem) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onAddToCart }) => {
  return (
    <section id="shop" className="py-24 bg-[#141414] border-b border-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#c7a17a] font-oswald text-xs tracking-[0.3em] uppercase block mb-3">
            ONLINE ROASTERY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oswald text-white tracking-[0.08em] mb-4">
            COFFEE BUILD YOUR BASE
          </h2>
          <div className="w-16 h-[2px] bg-[#c7a17a] mx-auto mb-5" />
          <p className="text-[#8c8c8c] text-sm sm:text-base font-sans">
            Take the Barista ritual home with our freshly roasted single-origin batches and custom ceramic accessories.
          </p>
        </div>

        {/* Products 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group bg-[#191919] border border-[#282828] hover:border-[#c7a17a]/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Product Tag */}
              {prod.tag && (
                <span className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-[#c7a17a] text-[#141414] text-[10px] font-oswald font-bold uppercase tracking-wider">
                  {prod.tag}
                </span>
              )}

              {/* Image container */}
              <div className="relative h-64 overflow-hidden bg-black/40 flex items-center justify-center p-6">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop';
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6 text-center border-t border-[#242424] flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating Stars */}
                  <div className="flex justify-center items-center space-x-1 mb-2 text-[#c7a17a]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < prod.rating ? 'fill-[#c7a17a]' : 'text-[#444]'
                        }`}
                      />
                    ))}
                  </div>

                  <h3 className="font-oswald text-lg font-semibold text-white tracking-[0.08em] mb-1 group-hover:text-[#c7a17a] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#777] mb-3 line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                <div>
                  <div className="font-oswald text-lg font-bold text-[#c7a17a] mb-4">
                    ${prod.price.toFixed(2)}
                  </div>

                  <button
                    onClick={() => onAddToCart(prod)}
                    className="w-full py-2.5 px-4 bg-[#202020] hover:bg-[#c7a17a] text-[#d6d6d6] hover:text-[#141414] font-oswald text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 border border-[#333] hover:border-transparent"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
