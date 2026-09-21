import React, { useState, useEffect, useRef } from 'react';

interface BannerParallaxProps {
  onExploreShop: () => void;
}

export const BannerParallax: React.FC<BannerParallaxProps> = ({ onExploreShop }) => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative py-32 sm:py-40 overflow-hidden bg-[#141414]">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/videos/videoA1.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-center scale-105"
          >
            <source src="/videos/videoA1.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920&auto=format&fit=crop')`
            }}
          />
        )}
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/75 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Emblem */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 rounded-full border border-[#c7a17a]/60 flex items-center justify-center p-3 bg-[#141414]/90 shadow-2xl backdrop-blur-sm">
          <img
            src="https://aliscafe.in/loyalty/images/aliscafe.png"
            alt="Barista Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow"
          />
        </div>

        <span className="text-[#c7a17a] font-oswald text-xs sm:text-sm tracking-[0.35em] uppercase font-medium block mb-4">
          ROASTED WITH PASSION
        </span>

        <h2 className="font-oswald text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-[0.08em] leading-tight mb-6 uppercase">
          TRY THE BEST COFFEE IN THE CITY
        </h2>

        <p className="font-merriweather italic text-[#c7a17a] text-base sm:text-lg mb-8 max-w-xl mx-auto">
          "Where every roast tells a story, and every cup brings people together."
        </p>

        <button
          id="banner-explore-shop-btn"
          onClick={onExploreShop}
          className="py-3.5 px-8 bg-[#c7a17a] hover:bg-[#b08d66] text-[#141414] font-oswald text-sm font-semibold tracking-[0.2em] transition-all duration-300 uppercase shadow-lg shadow-[#c7a17a]/20 hover:scale-105 cursor-pointer"
        >
          EXPLORE ROASTERY SHOP
        </button>
      </div>
    </section>
  );
};
