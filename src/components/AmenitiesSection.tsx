import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Coffee, Car, Wind, Bell } from 'lucide-react';
import { amenitiesData } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-10 h-10" />,
  free_breakfast: <Coffee className="w-10 h-10" />,
  local_parking: <Car className="w-10 h-10" />,
  ac_unit: <Wind className="w-10 h-10" />,
  room_service: <Bell className="w-10 h-10" />,
};

export default function AmenitiesSection() {
  // Let's add Swimming pool in the display specifically with correct spanning
  return (
    <section className="py-20 px-6 md:px-16 bg-white border-b border-[#E8DFCA]" id="amenities-section">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <span className="text-[#D97706] font-sans font-bold text-xs uppercase tracking-widest block mb-2">
          Services
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1A4D2E] font-bold">
          Modern Amenities for Your Ease
        </h2>
        <p className="font-sans text-xs sm:text-sm text-stone-500 max-w-xl mx-auto mt-2">
          Everything you need for a comfortable, stress-free lodging experience at Pusad Naka, Washim.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {amenitiesData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`p-6 sm:p-8 rounded-2xl border border-[#E8DFCA] bg-[#FAF9F6] flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[#1A4D2E] hover:border-[#1A4D2E] transition-all duration-300 shadow-sm ${
              item.id === 'service' ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            {/* Lucide Icon with Group Hover Color Transition */}
            <div className="text-[#D97706] group-hover:text-[#FAF9F6] transition-colors mb-4 leading-none">
              {iconMap[item.icon] || <Bell className="w-10 h-10" />}
            </div>
            <h5 className="font-sans font-bold text-sm sm:text-base text-[#1A4D2E] group-hover:text-white transition-colors">
              {item.name}
            </h5>
            <p className="text-[10px] sm:text-xs text-stone-500 group-hover:text-stone-300 transition-colors mt-2 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
