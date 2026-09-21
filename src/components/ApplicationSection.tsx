import React from 'react';
import { RippedPaperDivider } from './RippedPaperDivider';

interface ApplicationSectionProps {
  onReadMore?: () => void;
}

export const ApplicationSection: React.FC<ApplicationSectionProps> = ({ onReadMore }) => {
  return (
    <div className="relative bg-[#141414] overflow-hidden">
      {/* Main Parallax Background Section */}
      <section
        id="application"
        className="relative min-h-[580px] lg:min-h-[660px] bg-cover bg-center bg-no-repeat flex items-center py-24 sm:py-28 lg:py-32"
        style={{
          backgroundImage: `url("https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home1-parallax-1.jpg")`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Subtle dark tint to match screenshot exactly */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Authentic Circular Stamp Emblem */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start lg:pl-4">
              <div className="relative group">
                <img
                  src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-img-6.png"
                  alt="Prosperos Tasty Natural Coffee"
                  className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-img-6.png";
                  }}
                />
              </div>
            </div>

            {/* Right Column: Application Text Content matching screenshot */}
            <div className="lg:col-span-7 text-left lg:pl-6">
              {/* Subtitle: Application in white italic serif */}
              <p className="font-merriweather italic text-lg sm:text-xl md:text-2xl text-white font-light mb-2 tracking-wide drop-shadow">
                Application
              </p>

              {/* Headline: USE OUR APPLICATION. in bold Oswald uppercase */}
              <h2 className="font-oswald text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-[0.06em] uppercase leading-tight mb-4 drop-shadow-md">
                USE OUR APPLICATION.
              </h2>

              {/* White divider line */}
              <div className="w-20 sm:w-24 h-[1.5px] bg-white mb-6" />

              {/* Description Paragraph */}
              <p className="text-white text-sm sm:text-base md:text-[15px] font-sans leading-relaxed max-w-2xl mb-8 drop-shadow">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius.
              </p>

              {/* Solid tan/camel button matching screenshot */}
              <div>
                <button
                  id="application-read-more-btn"
                  onClick={onReadMore}
                  className="inline-block bg-[#c49b71] hover:bg-[#b0885e] text-white font-oswald text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase px-9 py-3.5 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ripped Paper Divider transitioning into the Equipment section */}
      <div className="w-full leading-none relative z-30 pointer-events-none -mt-4">
        <RippedPaperDivider fillColor="#141414" isTop={true} withShadow={true} />
      </div>
    </div>
  );
};
