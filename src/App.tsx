import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { FeaturesSection } from './components/FeaturesSection';
import { ApplicationSection } from './components/ApplicationSection';
import { EquipmentSection } from './components/EquipmentSection';
import { BannerParallax } from './components/BannerParallax';
import { GallerySection } from './components/GallerySection';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { SideAreaDrawer } from './components/SideAreaDrawer';
import { CartDrawer } from './components/CartDrawer';
import { LightboxModal } from './components/LightboxModal';
import { SearchModal } from './components/SearchModal';
import { ProductItem, CartItem, GalleryItem, PageView } from './types';
import { GALLERY_ITEMS } from './data/baristaData';

export default function App() {
  const [activeView, setActiveView] = useState<PageView>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isSideAreaOpen, setIsSideAreaOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (view: PageView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart operations
  const handleAddToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setToastMessage(`Added ${product.name} to cart`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartTotalCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Lightbox slide navigation
  const handleNextLightbox = () => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setLightboxItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setLightboxItem(GALLERY_ITEMS[prevIndex]);
  };

  // Scroll helper
  const handleNavigateToSection = (sectionId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#8c8c8c] flex flex-col selection:bg-[#c7a17a] selection:text-[#141414]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#c7a17a] text-[#141414] px-4 py-3 font-oswald text-xs uppercase tracking-wider font-semibold shadow-2xl animate-in slide-in-from-bottom-5 duration-200">
          {toastMessage}
        </div>
      )}

      {/* Main Navigation Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSideArea={() => setIsSideAreaOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            {/* 1. Hero Revolution Slider */}
            <HeroSlider
              onReadMore={() => navigateToPage('about')}
              onExploreGallery={() => navigateToPage('gallery')}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenSideArea={() => setIsSideAreaOpen(true)}
            />

            {/* 2. Three Columns Features */}
            <FeaturesSection />

            {/* 2b. Parallax Application Section: USE OUR APPLICATION */}
            <ApplicationSection onReadMore={() => navigateToPage('about')} />

            {/* 3. Hardware / Equipment Tabs */}
            <EquipmentSection />

            {/* 4. Best Coffee Parallax Banner */}
            <BannerParallax onExploreShop={() => handleNavigateToSection('equipment')} />

            {/* 7. Gallery Section */}
            <GallerySection
              onOpenLightbox={(item) => setLightboxItem(item)}
              onViewAllGallery={() => navigateToPage('gallery')}
            />
          </>
        )}

        {/* Dedicated About Page */}
        {activeView === 'about' && (
          <AboutPage onNavigate={navigateToPage} />
        )}

        {/* Dedicated Gallery Page */}
        {activeView === 'gallery' && (
          <GalleryPage
            onBackToHome={() => navigateToPage('home')}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {/* Dedicated Contact Us Page */}
        {activeView === 'contact' && (
          <ContactPage
            onNavigate={navigateToPage}
            onShowToast={(msg) => {
              setToastMessage(msg);
              setTimeout(() => setToastMessage(null), 3500);
            }}
          />
        )}

        {/* Instagram Photos Strip */}
        <InstagramFeed />
      </main>

      {/* Barista 4-Column Footer */}
      <Footer
        onOpenLightbox={(item) => setLightboxItem(item)}
        onNavigate={navigateToPage}
      />

      {/* Slide-out Side Area Drawer */}
      <SideAreaDrawer
        isOpen={isSideAreaOpen}
        onClose={() => setIsSideAreaOpen(false)}
        onNavigate={navigateToPage}
      />

      {/* Slide-out Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Fullscreen Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectGalleryItem={(item) => setLightboxItem(item)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Fullscreen Photo Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onSelectNext={handleNextLightbox}
        onSelectPrev={handlePrevLightbox}
      />

      {/* Back to Top Button matching screenshot */}
      {showScrollTop && (
        <button
          id="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 bg-[#c49b71] hover:bg-[#b0885e] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2]" />
        </button>
      )}
    </div>
  );
}
