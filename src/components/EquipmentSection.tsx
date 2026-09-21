import React, { useState } from 'react';
import { EQUIPMENT_TABS } from '../data/baristaData';
import { Check } from 'lucide-react';

export const EquipmentSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(EQUIPMENT_TABS[0].id);

  const activeTab = EQUIPMENT_TABS.find((t) => t.id === activeTabId) || EQUIPMENT_TABS[0];

  return (
    <section id="equipment" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#c7a17a] font-oswald text-xs tracking-[0.3em] uppercase block mb-3">
            ARTISAN PRECISION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oswald text-white tracking-[0.08em] mb-4">
            USE OUR APPLICATION
          </h2>
          <div className="w-16 h-[2px] bg-[#c7a17a] mx-auto mb-5" />
          <p className="text-[#8c8c8c] text-sm sm:text-base font-sans">
            Every cup is backed by precision engineering, commercial Italian hardware, and calibrated extraction curves.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {EQUIPMENT_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`p-6 border transition-all duration-300 flex flex-col items-center justify-center text-center group relative ${
                  isActive
                    ? 'bg-[#1a1a1a] border-[#c7a17a] shadow-lg shadow-[#c7a17a]/10'
                    : 'bg-[#161616] border-[#262626] hover:border-[#444] hover:bg-[#181818]'
                }`}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={tab.icon}
                    alt={tab.title}
                    className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                      isActive ? 'scale-110 brightness-125' : 'opacity-70 group-hover:opacity-100'
                    }`}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h4
                  className={`font-oswald text-sm sm:text-base tracking-[0.15em] font-semibold transition-colors ${
                    isActive ? 'text-[#c7a17a]' : 'text-[#d6d6d6] group-hover:text-white'
                  }`}
                >
                  {tab.title}
                </h4>

                {isActive && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#c7a17a]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Panel */}
        <div className="bg-[#181818] border border-[#262626] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <span className="text-[#c7a17a] font-oswald text-xs tracking-[0.25em] uppercase font-semibold">
                {activeTab.subtitle}
              </span>
              <h3 className="font-oswald text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-[0.08em]">
                {activeTab.title}
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm sm:text-base font-sans">
                {activeTab.description}
              </p>

              <div className="pt-2 space-y-3">
                {activeTab.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="mt-1 p-0.5 rounded bg-[#c7a17a]/20 text-[#c7a17a]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-sm text-[#c4c4c4]">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hardware photo */}
            <div className="relative h-72 sm:h-96 rounded overflow-hidden border border-[#2a2a2a] bg-black/40">
              <img
                src={activeTab.image}
                alt={activeTab.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
