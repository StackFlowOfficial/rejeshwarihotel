import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import ReviewsSection from './components/ReviewsSection';
import RoomsPage from './components/RoomsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import RoomModal from './components/RoomModal';
import AIAssistant from './components/AIAssistant';
import { Room } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'rooms' | 'contact'>('home');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  
  // Real-time Success Notification overlay
  const [successBooking, setSuccessBooking] = useState<{
    guests: string;
    dateIn: string;
    dateOut: string;
    totalPayable: number;
  } | null>(null);

  const handleBookSuccess = (details: { name: string; dateIn: string; dateOut: string; guests: string; totalPayable: number }) => {
    setSuccessBooking(details);
    
    // Auto-timeout success banner after 8 seconds
    setTimeout(() => {
      setSuccessBooking(null);
    }, 8000);
  };

  const triggerWhatsAppDirect = () => {
    const text = encodeURIComponent("Pranam, I want to book standard room lodging options at Rajeshwari Guest House.");
    window.open(`https://wa.me/918208601647?text=${text}`, '_blank');
  };

  const handleViewAllRooms = () => {
    setActiveView('rooms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#212529] font-sans overflow-x-hidden flex flex-col justify-between">
      
      {/* 1. Header Navigation */}
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView} 
        onBookNowClick={handleViewAllRooms} 
      />

      {/* 2. Success Alert Box Overlay inside Sandbox */}
      <AnimatePresence>
        {successBooking && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-4 right-4 md:left-auto md:right-6 md:w-[400px] bg-emerald-900 border border-emerald-700 text-white p-6 rounded-2xl shadow-2xl z-50 overflow-hidden"
            id="global-success-booking-alert"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <h4 className="font-serif font-bold text-sm">Booking Inquiry Generated!</h4>
              </div>
              <button 
                onClick={() => setSuccessBooking(null)}
                className="text-white hover:text-stone-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-xs space-y-1 bg-white/10 p-3 rounded-lg mb-4 font-sans text-stone-200">
              <p>📍 Guest: <strong className="text-white">{successBooking.guests}</strong></p>
              <p>🗓️ Stay: <strong className="text-white">{successBooking.dateIn}</strong> to <strong className="text-white">{successBooking.dateOut}</strong></p>
              <p>💵 Total: <strong className="text-white font-serif text-sm">₹{successBooking.totalPayable.toLocaleString()}</strong></p>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] leading-relaxed text-[#cde6d2]">
                Your booking summary has been formatted. If your browser blocks custom redirected pop-ups, click this green button manually to finish your reservations via safe WhatsApp links:
              </p>
              
              <a
                href={`https://wa.me/918208601647?text=${encodeURIComponent(
                  `Namaste Rajeshwari Guest House! I am inquiring for a direct room booking. \n\n• Guests: ${successBooking.guests} \n• Dates: ${successBooking.dateIn} to ${successBooking.dateOut} \n• Estimated Total: ₹${successBooking.totalPayable.toLocaleString()}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#D97706] hover:bg-[#b86202] text-white flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold transition-all text-xs outline-none shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Confirm Via WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Views router wrapper with standard sliding animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Hero 
                onBookClick={handleViewAllRooms} 
                onWhatsAppClick={triggerWhatsAppDirect} 
              />
              <About />
              <RoomsSection 
                onViewAllClick={handleViewAllRooms} 
                onRoomSelect={handleRoomSelect} 
              />
              <AmenitiesSection />
              <ReviewsSection />
            </motion.div>
          )}

          {activeView === 'rooms' && (
            <motion.div
              key="rooms"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <RoomsPage onRoomSelect={handleRoomSelect} />
            </motion.div>
          )}

          {activeView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. Single Room Popup Detail Modal */}
      <RoomModal 
        room={selectedRoom} 
        onClose={() => setSelectedRoom(null)} 
        onBookSuccess={handleBookSuccess} 
      />

      {/* 5. Floating AI Desk Receptionist Assistant */}
      <AIAssistant />

      {/* 6. Professional Page Footer */}
      <Footer onNavClick={(v) => {
        setActiveView(v);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

    </div>
  );
}
