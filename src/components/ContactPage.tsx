import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RippedPaperDivider } from './RippedPaperDivider';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageSquare, Coffee } from 'lucide-react';
import { PageView } from '../types';

interface ContactPageProps {
  onNavigate: (view: PageView) => void;
  onShowToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Thank you! Your message has been sent to our Ali\'s Cafe team.');
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 900);
  };

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
            Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-oswald text-5xl sm:text-7xl font-bold tracking-[0.06em] text-white uppercase mb-4"
          >
            CONTACT US
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
            <span className="text-[#c7a17a]">CONTACT US</span>
          </motion.div>
        </div>

        {/* Bottom ripped transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <RippedPaperDivider fillColor="#161616" isTop={true} withShadow={true} />
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#121212] border border-[#242424] p-8 sm:p-12 shadow-2xl relative">
              <span className="font-merriweather italic text-base text-[#c7a17a] block mb-2">
                Drop Us A Note
              </span>
              <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-3">
                SEND A MESSAGE
              </h2>
              <p className="text-xs sm:text-sm text-[#8c8c8c] font-sans leading-relaxed mb-8">
                Have a question about our roastery, whole bean wholesale, or private events? Fill out the form and our head roaster will reply within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-[#1a2e1d] border border-[#305c36] p-8 text-center animate-in fade-in zoom-in-95 duration-300">
                  <CheckCircle2 className="w-12 h-12 text-[#57ab64] mx-auto mb-4" />
                  <h3 className="font-oswald text-2xl font-bold text-white uppercase mb-2">
                    MESSAGE DELIVERED!
                  </h3>
                  <p className="text-sm text-[#a8d5af] font-sans mb-6">
                    Thank you for reaching out. We look forward to connecting with you or welcoming you at our coffee bar.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#c7a17a] hover:bg-[#b0885e] text-white font-oswald text-xs uppercase tracking-widest px-6 py-2.5 transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-oswald text-xs uppercase tracking-wider text-[#b0b0b0] mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-[#c7a17a] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-oswald text-xs uppercase tracking-wider text-[#b0b0b0] mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-[#c7a17a] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-oswald text-xs uppercase tracking-wider text-[#b0b0b0] mb-2">
                      SUBJECT
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-[#c7a17a] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Wholesale Coffee Beans">Wholesale Beans & Roastery</option>
                      <option value="Private Tasting Event">Private Event / Workshop</option>
                      <option value="Feedback">Customer Experience Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-oswald text-xs uppercase tracking-wider text-[#b0b0b0] mb-2">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-[#c7a17a] px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#c7a17a] hover:bg-[#b0885e] disabled:opacity-50 text-white font-oswald text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase px-10 py-4 transition-all shadow-lg flex items-center justify-center space-x-3 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Cards & Practical Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Card 1: Coffee Bar Hours */}
              <div className="bg-[#121212] border border-[#242424] p-8">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#222]">
                  <Clock className="w-5 h-5 text-[#c7a17a]" />
                  <h3 className="font-oswald text-lg font-bold text-white uppercase tracking-wider">
                    CAFE OPENING HOURS
                  </h3>
                </div>
                <div className="space-y-4 text-xs sm:text-sm font-sans">
                  <div className="flex justify-between items-center py-1 border-b border-[#1c1c1c]">
                    <span className="text-[#a0a0a0]">Monday – Sunday</span>
                    <span className="text-[#c7a17a] font-oswald text-xs tracking-wider font-semibold">
                      11:00 AM – 12:00 AM
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Location & Contact */}
              <div className="bg-[#121212] border border-[#242424] p-8">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#222]">
                  <MapPin className="w-5 h-5 text-[#c7a17a]" />
                  <h3 className="font-oswald text-lg font-bold text-white uppercase tracking-wider">
                    FLAGSHIP CAFE & PIZZERIA
                  </h3>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-[#b0b0b0]">
                  <div className="flex items-start space-x-3">
                    <Navigation className="w-4 h-4 text-[#c7a17a] shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">14/73, Ground Floor, Wright Street</p>
                      <p className="text-[#888]">Civil Lines, Kanpur, Uttar Pradesh 208001</p>
                      <p className="text-[#666] text-xs mt-1">Website: aliscafe.in</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <Phone className="w-4 h-4 text-[#c7a17a] shrink-0" />
                    <a href="tel:+919696380526" className="hover:text-[#c7a17a] transition-colors">+91 96963 80526</a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#c7a17a] shrink-0" />
                    <a href="mailto:info@aliscafe.in" className="hover:text-[#c7a17a] transition-colors">info@aliscafe.in</a>
                  </div>
                </div>
              </div>

              {/* Card 3: Walk-Ins Welcome Card */}
              <div className="bg-[#1c1712] border border-[#443322] p-8 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <Coffee className="w-8 h-8 text-[#c7a17a] mx-auto mb-3" />
                  <h4 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-2">
                    WALK-INS WELCOME
                  </h4>
                  <p className="text-xs text-[#b8a28e] font-sans leading-relaxed mb-5">
                    No reservation required. Stop by our espresso bar any time for fresh brews, pour-overs, and artisan beans.
                  </p>
                  <button
                    onClick={() => onNavigate('gallery')}
                    className="bg-[#c7a17a] hover:bg-[#b0885e] text-white font-oswald text-xs uppercase tracking-widest px-6 py-2.5 transition-all shadow-md cursor-pointer"
                  >
                    EXPLORE GALLERY
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Visual Map Section */}
      <section className="relative h-96 w-full bg-[#0d0d0d] overflow-hidden border-t border-[#222]">
        <div 
          className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-40"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#161616]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="w-14 h-14 rounded-full bg-[#c7a17a] flex items-center justify-center text-white shadow-2xl mb-4 animate-bounce">
            <MapPin className="w-7 h-7" />
          </div>
          <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mb-2">
            WELCOME TO OUR SPACE
          </h3>
          <p className="font-merriweather italic text-sm text-[#d4d4d4] max-w-md">
            Step in for the aroma of freshly roasted beans, soothing acoustic rhythms, and honest conversation.
          </p>
        </div>
      </section>
    </div>
  );
};
