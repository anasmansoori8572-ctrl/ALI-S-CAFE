import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react';
import { HERO_SLIDES } from '../data/baristaData';
import { RippedPaperDivider } from './RippedPaperDivider';

interface HeroSliderProps {
  onReadMore?: () => void;
  onExploreGallery?: () => void;
  onOpenCart?: () => void;
  onOpenSideArea?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onReadMore,
  onOpenCart,
  onOpenSideArea,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-play slider caption every 7 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-screen min-h-[700px] max-h-[1050px] overflow-hidden bg-[#141414] flex items-center justify-center select-none"
    >
      {/* Background Video: public/videos/HeroVideo.mp4 with Image Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/videos/HeroVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            poster={currentSlide.image}
            className="w-full h-full object-cover object-center scale-105"
          >
            <source src="/videos/HeroVideo.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src={currentSlide.image}
            alt={currentSlide.heading}
            className="w-full h-full object-cover object-center"
          />
        )}
        {/* Subtle dark gradient overlay for optimal video visibility and typography contrast */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Main Slide Content: Centered Real Barista Layout */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center justify-center pt-8 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Top Coffee Emblem Badge */}
            {currentSlide.emblem && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mb-4 sm:mb-6"
              >
                <img
                  src={currentSlide.emblem}
                  alt="Ali's Cafe Logo"
                  className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto object-contain mx-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                />
              </motion.div>
            )}

            {/* Headline: THE HOME OF COFFEE */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-oswald font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem] tracking-tight uppercase leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] max-w-4xl"
            >
              {currentSlide.heading}
            </motion.h1>

            {/* Two-line Italic Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 sm:mt-5 mb-8 sm:mb-10 text-[#eae7de]/95 font-serif italic text-base sm:text-lg md:text-xl lg:text-[1.35rem] leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-2xl text-center"
            >
              <p>{currentSlide.subtitleLine1}</p>
              {currentSlide.subtitleLine2 && <p>{currentSlide.subtitleLine2}</p>}
            </motion.div>

            {/* Boxed Action Button: READ MORE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <button
                id="hero-read-more-btn"
                onClick={onReadMore}
                className="border border-white/85 hover:border-white text-white font-oswald text-xs sm:text-[13px] font-semibold tracking-[0.25em] uppercase px-8 sm:px-11 py-3.5 sm:py-4 bg-transparent hover:bg-white hover:text-[#141414] transition-all duration-300 shadow-xl cursor-pointer"
              >
                {currentSlide.buttonText || 'READ MORE'}
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Left & Right) */}
      <button
        id="hero-prev-btn"
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer drop-shadow-lg"
        aria-label="Previous Slide"
      >
        <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
      </button>

      <button
        id="hero-next-btn"
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer drop-shadow-lg"
        aria-label="Next Slide"
      >
        <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
      </button>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center space-x-2.5">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlideIndex
                ? 'w-2.5 h-2.5 bg-white scale-125'
                : 'w-2 h-2 bg-white/45 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Floating Demo Sidebar Widgets on Far Right Edge (matching Barista theme screenshot) */}
      <div className="fixed right-0 top-[42%] -translate-y-1/2 z-40 hidden sm:flex flex-col shadow-2xl">
        <button
          onClick={onOpenSideArea}
          className="w-9 h-9 sm:w-10 sm:h-10 bg-[#e62b56] hover:bg-[#d61e47] text-white flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          aria-label="Themes / Demo Info"
          title="Theme Options"
        >
          {/* Circular Qode Badge Icon */}
          <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </button>
        <button
          onClick={onOpenCart}
          className="w-9 h-9 sm:w-10 sm:h-10 bg-white hover:bg-gray-100 text-[#e62b56] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer border-t border-gray-100"
          aria-label="View Cart"
          title="View Shopping Cart"
        >
          <ShoppingCart className="w-4 h-4 stroke-[2]" />
        </button>
      </div>

      {/* Ripped Paper Divider at Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <RippedPaperDivider fillColor="#141414" isTop={true} withShadow={true} />
      </div>
    </section>
  );
};
