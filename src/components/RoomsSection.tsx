import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Room } from '../types';
import { roomsData } from '../data';

interface RoomsSectionProps {
  onViewAllClick: () => void;
  onRoomSelect: (room: Room) => void;
}

export default function RoomsSection({ onViewAllClick, onRoomSelect }: RoomsSectionProps) {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#FAF9F6]" id="rooms-section">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header summary of rooms */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#D97706] font-sans font-bold text-xs uppercase tracking-widest block mb-2">
              Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A4D2E] font-bold">
              Our Guest Rooms
            </h2>
          </div>
          <button 
            onClick={onViewAllClick}
            className="hidden md:flex items-center gap-2 text-[#1A4D2E] hover:text-[#D97706] font-semibold text-sm underline decoration-[#E8DFCA] hover:decoration-[#D97706] transition-all"
            id="view-all-rooms-preview-btn"
          >
            View All Rooms &amp; Rates
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8DFCA] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              {/* Image box */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={room.image} 
                  alt={room.name}
                  referrerPolicy="no-referrer"
                />
                {room.topChoice && (
                  <span className="absolute top-4 right-4 bg-[#E8DFCA] text-[#686252] font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                    TOP CHOICE
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-lg md:text-xl text-[#1A4D2E] font-semibold">
                      {room.name}
                    </h4>
                    <span className="text-xs text-stone-500 font-semibold uppercase">{room.size}</span>
                  </div>
                  <p className="text-[#414942] text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6">
                    {room.description}
                  </p>
                </div>

                {/* Pricing / Details Row */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E8DFCA]">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest block font-bold leading-none">Starting from</span>
                    <span className="text-[#1A4D2E] font-bold text-base sm:text-lg">
                      ₹{room.price.toLocaleString()} <span className="text-xs font-normal text-stone-500">/ Night</span>
                    </span>
                  </div>
                  <motion.button 
                    onClick={() => onRoomSelect(room)}
                    animate={{ 
                      scale: [0.97, 1.02, 0.97],
                      boxShadow: ["0px 1px 4px rgba(217, 119, 6, 0.15)", "0px 3px 8px rgba(217, 119, 6, 0.3)", "0px 1px 4px rgba(217, 119, 6, 0.15)"]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#D97706] hover:bg-[#b86202] text-white font-sans font-bold text-xs sm:text-sm px-4.5 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all group/btn"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button link */}
        <div className="text-center mt-10 md:hidden">
          <button
            onClick={onViewAllClick}
            className="w-full bg-white border border-[#E8DFCA] text-[#1A4D2E] font-bold py-3 rounded-lg text-sm transition-all"
          >
            Show All Accommodations
          </button>
        </div>

      </div>
    </section>
  );
}
