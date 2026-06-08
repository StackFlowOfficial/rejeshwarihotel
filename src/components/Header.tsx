import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hotel, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeView: 'home' | 'rooms' | 'contact';
  setActiveView: (view: 'home' | 'rooms' | 'contact') => void;
  onBookNowClick: () => void;
}

export default function Header({ activeView, setActiveView, onBookNowClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'rooms' | 'contact', anchorId?: string) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (anchorId) {
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E8DFCA] px-4 md:px-16 py-4 flex justify-between items-center shadow-sm">
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
          id="header-logo-container"
        >
          <div className="w-10 h-10 rounded-full bg-[#1A4D2E] text-white flex items-center justify-center font-bold relative overflow-hidden shadow-inner group-hover:scale-105 transition-all">
            <Hotel className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl font-bold text-[#1A4D2E] tracking-tight group-hover:text-[#D97706] transition-colors">
              Rajeshwari Guest House
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#645e4d] font-semibold block -mt-1 font-sans">
              Pusad Naka • Washim
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('home')}
            className={`font-sans font-semibold text-sm transition-colors py-1 relative ${
              activeView === 'home' ? 'text-[#D97706]' : 'text-[#1A4D2E] hover:text-[#D97706]'
            }`}
          >
            Home
            {activeView === 'home' && (
              <motion.div layoutId="header-active-pin" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D97706]" />
            )}
          </button>
          <button
            onClick={() => handleNavClick('rooms')}
            className={`font-sans font-semibold text-sm transition-colors py-1 relative ${
              activeView === 'rooms' ? 'text-[#D97706]' : 'text-[#1A4D2E] hover:text-[#D97706]'
            }`}
          >
            Rooms
            {activeView === 'rooms' && (
              <motion.div layoutId="header-active-pin" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D97706]" />
            )}
          </button>
          <button
            onClick={() => handleNavClick('home', 'amenities-section')}
            className="font-sans font-semibold text-sm text-[#1A4D2E] hover:text-[#D97706] transition-colors py-1"
          >
            Amenities
          </button>
          <button
            onClick={() => handleNavClick('home', 'reviews-section')}
            className="font-sans font-semibold text-sm text-[#1A4D2E] hover:text-[#D97706] transition-colors py-1"
          >
            Reviews
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`font-sans font-semibold text-sm transition-colors py-1 relative ${
              activeView === 'contact' ? 'text-[#D97706]' : 'text-[#1A4D2E] hover:text-[#D97706]'
            }`}
          >
            Contact
            {activeView === 'contact' && (
              <motion.div layoutId="header-active-pin" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D97706]" />
            )}
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onBookNowClick}
            className="bg-[#D97706] hover:bg-[#b86202] text-white font-sans font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-lg active:scale-95 transition-transform shadow-sm"
          >
            Book Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1A4D2E] p-1 flex items-center justify-center"
            id="mobile-nav-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[73px] left-0 right-0 bg-[#FAF9F6] border-b border-[#E8DFCA] shadow-lg z-30 overflow-hidden"
            id="mobile-nav-root"
          >
            <div className="p-6 flex flex-col gap-4 font-sans font-semibold">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left py-2.5 border-b border-stone-100 ${
                  activeView === 'home' ? 'text-[#D97706]' : 'text-[#1A4D2E]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('rooms')}
                className={`text-left py-2.5 border-b border-stone-100 ${
                  activeView === 'rooms' ? 'text-[#D97706]' : 'text-[#1A4D2E]'
                }`}
              >
                Rooms & Gallery
              </button>
              <button
                onClick={() => handleNavClick('home', 'amenities-section')}
                className="text-left text-[#1A4D2E] py-2.5 border-b border-stone-100"
              >
                Amenities
              </button>
              <button
                onClick={() => handleNavClick('home', 'reviews-section')}
                className="text-left text-[#1A4D2E] py-2.5 border-b border-stone-100"
              >
                Reviews
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left py-2.5 ${activeView === 'contact' ? 'text-[#D97706]' : 'text-[#1A4D2E]'}`}
              >
                Contact & Location
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookNowClick();
                }}
                className="mt-2 bg-[#1A4D2E] text-white py-3.5 rounded-lg text-center font-bold"
              >
                Book Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
