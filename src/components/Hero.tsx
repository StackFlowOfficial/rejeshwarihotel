import React from 'react';
import { motion } from 'motion/react';
import { Hotel, MessageSquare, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onWhatsAppClick: () => void;
}

export default function Hero({ onBookClick, onWhatsAppClick }: HeroProps) {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-stone-900" id="home-hero">
      {/* Immersive Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 filter brightness-90 animate-fade-in"
        style={{ 
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtqGbBKpKMo7a_FJ8PVmd6zqNczzRpOX2IFsJvJGPfzKpXXYkbOL5miGZMlXCQxQUdITutBb1T4q1slY8tu6_eZo79NVQFL32hMemKKazljvLow9elXx6SeAbmCm2dvVkArY9dHEXx8W4VzflXwjTgnzFhNO2ZFYKB1QNtYlpLvIYDXdxhWToaDMncNtJ6o73n7qEihQU9t9pmztKWe9bD6Pz3oa7pnC32Ln5lhplQuytwqocHCg2-NUiVatfH-YJmMyyAhkRhjFc')` 
        }}
      >
        {/* Dark vignette gradient overlay as defined in HTML */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 text-center px-4 max-w-4xl text-white">
        {/* Glowing floating emblem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-6 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/20 animate-pulse"
        >
          <Hotel className="w-10 h-10 text-[#E8DFCA]" />
        </motion.div>

        {/* Playfair Display Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-md text-[#FAF9F6]"
        >
          Your Comfortable Home in Washim
        </motion.h1>

        {/* Description text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-sm sm:text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow"
        >
          Affordable lodging with modern amenities at Pusad Naka, providing a peaceful, secure sanctuary in the heart of Washim city.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            onClick={onBookClick}
            animate={{ 
              scale: [0.96, 1.01, 0.96],
              boxShadow: ["0px 4px 12px rgba(217, 119, 6, 0.2)", "0px 8px 24px rgba(217, 119, 6, 0.45)", "0px 4px 12px rgba(217, 119, 6, 0.2)"]
            }}
            transition={{
              repeat: Infinity,
              duration: 2.4,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.04, boxShadow: "0px 8px 24px rgba(217, 119, 6, 0.55)" }}
            className="w-full sm:w-auto bg-[#D97706] hover:bg-[#b86202] text-white font-sans font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book Your Stay
          </motion.button>
          
          <button 
            onClick={onWhatsAppClick}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-[#FAF9F6] font-sans font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2.5 scale-95 hover:scale-100"
          >
            <MessageSquare className="w-5 h-5 text-stone-100" />
            WhatsApp Booking
          </button>
        </motion.div>
      </div>

      {/* Bounce scroll down button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20 pointer-events-none">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
