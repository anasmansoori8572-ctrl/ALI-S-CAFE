import React from 'react';
import { INSTAGRAM_PHOTOS } from '../data/baristaData';
import { Instagram } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="bg-[#111111] border-b border-[#212121]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {INSTAGRAM_PHOTOS.map((url, idx) => (
          <div
            key={idx}
            className="group relative h-48 sm:h-56 overflow-hidden bg-black/50"
          >
            <img
              src={url}
              alt="Instagram coffee moment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#141414]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
              <Instagram className="w-6 h-6 text-[#c7a17a] mb-2" />
              <span className="font-oswald text-xs tracking-[0.2em] text-white uppercase">
                @BARISTA_COFFEE
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
