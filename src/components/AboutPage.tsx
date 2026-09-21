import React from 'react';
import { motion } from 'motion/react';
import { RippedPaperDivider } from './RippedPaperDivider';
import { Coffee, Award, Heart, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface AboutPageProps {
  onNavigate: (view: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#111111] text-[#eae7de] pt-16 sm:pt-20">
      {/* 1. Page Header Banner */}
      <section
        className="relative py-28 md:py-36 bg-cover bg-center overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: `url("https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home1-parallax-1.jpg")`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-merriweather italic text-lg sm:text-xl text-[#c7a17a] mb-3"
          >
            Our Story & Craft
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-oswald text-5xl sm:text-7xl font-bold tracking-[0.06em] text-white uppercase mb-4"
          >
            ABOUT BARISTA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-[#c7a17a] mx-auto mb-6"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center space-x-2 font-oswald text-xs uppercase tracking-[0.25em] text-[#8c8c8c]"
          >
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors"
            >
              HOME
            </button>
            <span>/</span>
            <span className="text-[#c7a17a]">ABOUT US</span>
          </motion.div>
        </div>

        {/* Bottom ripped transition into Parchment Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <RippedPaperDivider fillColor="#eae7de" isTop={true} withShadow={true} />
        </div>
      </section>

      {/* 2. Story Section (Parchment background) */}
      <section className="relative bg-[#eae7de] text-[#222222] py-24 sm:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden shadow-2xl border-4 border-white/60">
              <img
                src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-blog-f-img-2.jpg"
                alt="Roasting artisanal coffee"
                className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Vintage Stamp Accent */}
            <div className="absolute -bottom-8 -right-6 z-20 hidden sm:block">
              <img
                src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-img-6.png"
                alt="Quality Seal"
                className="w-36 h-36 object-contain drop-shadow-xl animate-spin-slow"
              />
            </div>

            {/* Subtle background border frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c7a17a]/40 -z-0 hidden sm:block" />
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 text-left">
            <span className="font-oswald text-xs uppercase tracking-[0.3em] text-[#9b7852] font-semibold block mb-2">
              ESTABLISHED IN 2012
            </span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold tracking-tight text-[#1c1c1c] uppercase mb-4 leading-tight">
              BORN FROM A PASSION FOR ROASTING.
            </h2>
            <div className="w-16 h-[2px] bg-[#9b7852] mb-6" />

            <p className="font-merriweather italic text-lg text-[#555] mb-6 leading-relaxed">
              &ldquo;We believe that great coffee is not merely extracted; it is cultivated through relationship, patient roasting, and obsessive care.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#444] leading-relaxed mb-6">
              Barista was founded with a singular aspiration: to create a sanctuary where the art of coffee can be celebrated without rush or compromise. From the lush mountainsides of Yirgacheffe to high-altitude estates in Huila, Colombia, we collaborate directly with growers who share our reverence for quality and biodiversity.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#444] leading-relaxed mb-8">
              Every bean is roasted in small batches on our cast-iron drum roasters to unlock nuanced aromatics—from wild jasmine florals and crisp stone fruit to velvety dark chocolate and caramelized honey.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#d8d3c5]">
              <div>
                <span className="font-oswald text-3xl sm:text-4xl font-bold text-[#1c1c1c] block">
                  100%
                </span>
                <span className="font-sans text-xs uppercase tracking-wider text-[#666]">
                  Single-Origin Arabica
                </span>
              </div>
              <div>
                <span className="font-oswald text-3xl sm:text-4xl font-bold text-[#1c1c1c] block">
                  14+
                </span>
                <span className="font-sans text-xs uppercase tracking-wider text-[#666]">
                  Direct Partner Farms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom transition into Dark Roastery Pillars */}
      <div className="w-full leading-none relative z-30">
        <RippedPaperDivider fillColor="#eae7de" isTop={false} withShadow={true} />
      </div>

      {/* 3. The Four Pillars of Our Craft */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#111111] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-merriweather italic text-base sm:text-lg text-[#c7a17a] block mb-2">
              Our Principles
            </span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-white uppercase tracking-[0.05em] mb-4">
              THE ARTISAN COFFEE PHILOSOPHY
            </h2>
            <div className="w-20 h-[1.5px] bg-[#c7a17a] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#181818] border border-[#242424] p-8 text-center group hover:border-[#c7a17a]/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#202020] flex items-center justify-center text-[#c7a17a] group-hover:scale-110 transition-transform">
                <Coffee className="w-8 h-8 stroke-[1.5]" />
              </div>
              <span className="font-oswald text-xs uppercase tracking-[0.2em] text-[#888] block mb-2">01 / SELECTION</span>
              <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-3">
                ETHICAL SOURCING
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8c8c] font-sans leading-relaxed">
                Direct trade partnerships that guarantee above-fair wages to farmers who practice regenerative soil stewardship.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#181818] border border-[#242424] p-8 text-center group hover:border-[#c7a17a]/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#202020] flex items-center justify-center text-[#c7a17a] group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 stroke-[1.5]" />
              </div>
              <span className="font-oswald text-xs uppercase tracking-[0.2em] text-[#888] block mb-2">02 / ROASTING</span>
              <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-3">
                SMALL BATCH ROASTS
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8c8c] font-sans leading-relaxed">
                Hand-adjusted heat profiling, roast curves, and sensory cuppings ensure each crop reflects its true terroir.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#181818] border border-[#242424] p-8 text-center group hover:border-[#c7a17a]/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#202020] flex items-center justify-center text-[#c7a17a] group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 stroke-[1.5]" />
              </div>
              <span className="font-oswald text-xs uppercase tracking-[0.2em] text-[#888] block mb-2">03 / EXTRACTION</span>
              <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-3">
                PRECISION BREWING
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8c8c] font-sans leading-relaxed">
                Calibrated water mineral chemistry, precision burr alignment, and micro-metric temperature control for pristine clarity.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#181818] border border-[#242424] p-8 text-center group hover:border-[#c7a17a]/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#202020] flex items-center justify-center text-[#c7a17a] group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <span className="font-oswald text-xs uppercase tracking-[0.2em] text-[#888] block mb-2">04 / COMMUNITY</span>
              <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-3">
                WARM SANCTUARY
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8c8c] font-sans leading-relaxed">
                A calm, tactile atmosphere featuring mid-century timber, natural daylight, and conversation-forward seating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Our Master Baristas & Roasters */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#161616] border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-merriweather italic text-base sm:text-lg text-[#c7a17a] block mb-2">
                The Artisans
              </span>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-white uppercase tracking-[0.05em]">
                MEET OUR BARISTAS
              </h2>
            </div>
            <p className="text-[#8c8c8c] text-sm max-w-md font-sans mt-4 md:mt-0 leading-relaxed">
              Certified sensory judges, competition champions, and hospitality purists committed to elevating your morning cup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Barista 1 */}
            <div className="group bg-[#111111] border border-[#262626] overflow-hidden">
              <div className="h-80 overflow-hidden relative">
                <img
                  src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-2.jpg"
                  alt="Julian Rossi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-oswald text-[#c7a17a] uppercase tracking-[0.2em] block mb-1">
                  HEAD ROASTER & FOUNDER
                </span>
                <h4 className="font-oswald text-2xl font-bold text-white uppercase tracking-wider mb-2">
                  JULIAN ROSSI
                </h4>
                <p className="text-xs text-[#8c8c8c] leading-relaxed font-sans">
                  15 years of specialty roasting expertise. Leads bean selection voyages across Latin America and East Africa.
                </p>
              </div>
            </div>

            {/* Barista 2 */}
            <div className="group bg-[#111111] border border-[#262626] overflow-hidden">
              <div className="h-80 overflow-hidden relative">
                <img
                  src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-3.jpg"
                  alt="Elena Vance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-oswald text-[#c7a17a] uppercase tracking-[0.2em] block mb-1">
                  LEAD BREWER & LATTE ARTIST
                </span>
                <h4 className="font-oswald text-2xl font-bold text-white uppercase tracking-wider mb-2">
                  ELENA VANCE
                </h4>
                <p className="text-xs text-[#8c8c8c] leading-relaxed font-sans">
                  World Barista Championship finalist. Specialist in high-extraction natural Ethiopians and velvet milk textures.
                </p>
              </div>
            </div>

            {/* Barista 3 */}
            <div className="group bg-[#111111] border border-[#262626] overflow-hidden">
              <div className="h-80 overflow-hidden relative">
                <img
                  src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-5.jpg"
                  alt="Marcus Thorne"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-oswald text-[#c7a17a] uppercase tracking-[0.2em] block mb-1">
                  LAB TECHNICIAN & SENSORY LEAD
                </span>
                <h4 className="font-oswald text-2xl font-bold text-white uppercase tracking-wider mb-2">
                  MARCUS THORNE
                </h4>
                <p className="text-xs text-[#8c8c8c] leading-relaxed font-sans">
                  Q-Grader certified scientist. Oversees daily brew consistency, water TDS filtration, and micro-lot quality cuppings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call To Action Footer Banner */}
      <section className="py-20 px-6 sm:px-12 bg-[#0c0c0c] border-t border-[#1f1f1f] text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-merriweather italic text-lg text-[#c7a17a] block mb-3">
            Experience It In Person
          </span>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-white uppercase tracking-[0.06em] mb-6">
            COME TASTE THE DIFFERENCE
          </h2>
          <p className="text-sm sm:text-base text-[#8c8c8c] font-sans leading-relaxed mb-8 max-w-xl mx-auto">
            Visit our flagship coffee bar for slow morning brews, house-made pastries, and freshly roasted whole bean bags.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#c7a17a] hover:bg-[#b0885e] text-white font-oswald text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase px-8 py-3.5 transition-all shadow-xl hover:shadow-2xl flex items-center space-x-2"
            >
              <span>VISIT OUR CAFE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="border border-white/40 hover:border-white text-white hover:bg-white/10 font-oswald text-xs sm:text-sm font-medium tracking-[0.22em] uppercase px-8 py-3.5 transition-all"
            >
              VIEW GALLERY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
