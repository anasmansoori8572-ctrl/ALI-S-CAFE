import React from 'react';
import { THREE_FEATURES, getRandomStoredImage } from '../data/baristaData';
import { RippedPaperDivider } from './RippedPaperDivider';

export const FeaturesSection: React.FC = () => {
  return (
    <div className="relative bg-[#eae7de] text-[#333] z-20">
      {/* Top Authentic Torn Paper Edge with shadow overlapping slider by 26px */}
      <div className="absolute -top-[26px] left-0 right-0 z-30 pointer-events-none">
        <RippedPaperDivider fillColor="#eae7de" isTop={true} withShadow={true} />
      </div>

      <section id="features" className="pt-20 sm:pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-merriweather italic text-base sm:text-lg text-[#c7a17a] tracking-wider mb-3">
            What Happens Here
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oswald text-[#1a1a1a] tracking-[0.06em] uppercase mb-4">
            COFFEE BUILD YOUR BASE.
          </h2>
          <div className="w-16 h-[2px] bg-[#c7a17a] mx-auto mb-5" />
          <p className="text-[#666] text-sm sm:text-base font-sans leading-relaxed">
            Aliquet nisl integer platea ipsum aliquet integer turpis adipiscing maecenas. Magna sem adipiscing elementum pretium elementum tristique sit.
          </p>
        </div>

        {/* 3 Columns matching authentic Barista theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {THREE_FEATURES.map((feat) => (
            <div
              key={feat.number}
              className="group bg-white/75 border border-[#d8d3c5] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image with zoom on hover */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-black/10">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = getRandomStoredImage();
                  }}
                />
              </div>

              {/* Text content with vintage typography */}
              <div className="p-6 sm:p-8 text-center">
                <h3 className="font-oswald text-xl sm:text-2xl font-semibold text-[#1a1a1a] tracking-[0.08em] mb-3 flex items-center justify-center space-x-2 uppercase">
                  <span className="text-[#c7a17a] font-normal">{feat.number}</span>
                  <span>{feat.title}</span>
                </h3>
                <p className="text-sm text-[#666] leading-relaxed font-sans">
                  Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom transition into Application parallax section */}
      <div className="w-full leading-none relative z-30">
        <RippedPaperDivider fillColor="#eae7de" isTop={false} withShadow={true} />
      </div>
    </div>
  );
};
