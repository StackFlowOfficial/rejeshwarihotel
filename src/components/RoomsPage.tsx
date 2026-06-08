import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Bed, Users, XCircle, ArrowRight } from 'lucide-react';
import { Room } from '../types';
import { roomsData, galleryData } from '../data';

interface RoomsPageProps {
  onRoomSelect: (room: Room) => void;
}

export default function RoomsPage({ onRoomSelect }: RoomsPageProps) {
  // Filters
  const [roomFilter, setRoomFilter] = useState<'all' | 'ac' | 'non-ac'>('all');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'exterior' | 'rooms' | 'reception' | 'amenities'>('all');

  // Search Availability Form State
  const [searchDates, setSearchDates] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    guests: '2 Adults'
  });
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchFeedback('checking');
    setTimeout(() => {
      setSearchFeedback(`Rooms are available for the selected dates! Select your preferred category below to complete your direct WhatsApp inquiry.`);
    }, 1200);
  };

  // Filter Rooms
  const filteredRooms = roomsData.filter((room) => {
    if (roomFilter === 'ac') return room.ac;
    if (roomFilter === 'non-ac') return !room.ac;
    return true;
  });

  // Filter Gallery Items
  const filteredGallery = galleryData.filter((item) => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  return (
    <div className="py-12 bg-[#FAF9F6] min-h-screen" id="rooms-page-root">
      
      {/* Title block */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12 text-center">
        <span className="text-[#D97706] font-sans font-bold text-xs uppercase tracking-widest block mb-2">Residences</span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1A4D2E] font-bold">
          Accommodations &amp; Gallery
        </h1>
        <p className="font-sans text-stone-500 text-xs sm:text-sm max-w-xl mx-auto mt-2">
          Comfortable lodging built for every level of traveler. Choose details below to check rates.
        </p>
      </div>

      {/* 1. Date Availability Search Widget */}
      <section className="max-w-[1100px] mx-auto px-6 mb-16">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E8DFCA] shadow-md">
          <form onSubmit={handleCheckAvailability} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
            <div className="space-y-1.5">
              <label className="text-xs uppercase font-extrabold text-[#1A4D2E] tracking-widest">Check-In Date</label>
              <input
                type="date"
                value={searchDates.checkIn}
                onChange={(e) => setSearchDates({ ...searchDates, checkIn: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-[#1A4D2E] outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs uppercase font-extrabold text-[#1A4D2E] tracking-widest">Check-Out Date</label>
              <input
                type="date"
                value={searchDates.checkOut}
                onChange={(e) => setSearchDates({ ...searchDates, checkOut: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-[#1A4D2E] outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs uppercase font-extrabold text-[#1A4D2E] tracking-widest">Total Guests</label>
              <select
                value={searchDates.guests}
                onChange={(e) => setSearchDates({ ...searchDates, guests: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-[#1A4D2E] outline-none font-semibold text-stone-700"
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>Family (2 Adults + Kids)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1A4D2E] hover:bg-[#11321d] text-[#FAF9F6] font-bold py-3 px-4 rounded-lg shadow-sm transition-all text-xs uppercase"
              id="search-widget-submit-btn"
            >
              Check Availability
            </button>
          </form>

          {/* Feedback states */}
          <AnimatePresence mode="wait">
            {searchFeedback === 'checking' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 flex items-center justify-center gap-2 text-stone-500 text-xs"
              >
                <svg className="animate-spin h-5 w-5 text-[#D97706]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Scanning vacant rooms matrix...
              </motion.div>
            )}

            {searchFeedback && searchFeedback !== 'checking' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200 text-green-800 text-xs sm:text-sm font-semibold flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                {searchFeedback}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 2. Room Listings Filter Bar */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-[#E8DFCA] pb-6 mb-10 gap-4">
          <h3 className="font-serif text-2xl font-bold text-[#1A4D2E]">Select Comfort Package</h3>
          
          <div className="flex gap-2 bg-stone-100 p-1 rounded-lg border border-stone-200 text-xs font-semibold overflow-x-auto max-w-full whitespace-nowrap scrollbar-none sm:w-auto">
            <button
              onClick={() => setRoomFilter('all')}
              className={`px-4 py-1.5 rounded-md transition-all ${
                roomFilter === 'all' ? 'bg-[#1A4D2E] text-white shadow-sm' : 'text-stone-600 hover:text-[#1A4D2E]'
              }`}
            >
              All Rooms
            </button>
            <button
              onClick={() => setRoomFilter('ac')}
              className={`px-4 py-1.5 rounded-md transition-all ${
                roomFilter === 'ac' ? 'bg-[#1A4D2E] text-white shadow-sm' : 'text-stone-600 hover:text-[#1A4D2E]'
              }`}
            >
              Air Conditioned
            </button>
            <button
              onClick={() => setRoomFilter('non-ac')}
              className={`px-4 py-1.5 rounded-md transition-all ${
                roomFilter === 'non-ac' ? 'bg-[#1A4D2E] text-white shadow-sm' : 'text-stone-600 hover:text-[#1A4D2E]'
              }`}
            >
              Standard Non-AC
            </button>
          </div>
        </div>

        {/* Room items displayed in detailed elegant row-styled cards */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 bg-white rounded-2xl overflow-hidden border border-[#E8DFCA] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Images side */}
                <div className="md:col-span-5 aspect-[16/10] md:aspect-auto overflow-hidden relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {room.topChoice && (
                    <span className="absolute top-4 left-4 bg-[#D97706] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">
                      Top Rated Stays
                    </span>
                  )}
                </div>

                {/* Info side */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between mb-2.5 gap-2">
                      <h4 className="font-serif text-2xl font-semibold text-[#1A4D2E]">
                        {room.name}
                      </h4>
                      <span className="bg-[#FAF9F6] border border-[#E8DFCA] text-[#645e4d] px-3 py-0.5 rounded text-xs font-semibold uppercase">
                        {room.size}
                      </span>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {room.longDescription}
                    </p>

                    {/* Features row tags */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                      <div className="flex items-center gap-2 text-stone-600">
                        <Bed className="w-4 h-4 text-stone-400 shrink-0" />
                        <span className="text-xs">{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600">
                        <Users className="w-4 h-4 text-stone-400 shrink-0" />
                        <span className="text-xs">{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600">
                        {room.ac ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        )}
                        <span className="text-xs">{room.ac ? 'Split AC Comfort' : 'Natural Ventilation'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking actions */}
                  <div className="border-t border-[#E8DFCA] pt-6 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-bold">Standard Nightly Fare</span>
                      <span className="text-2xl font-bold text-[#D97706]">
                        ₹{room.price.toLocaleString()}
                        <span className="text-xs font-normal text-stone-500"> / Night</span>
                      </span>
                    </div>
                    <button
                      onClick={() => onRoomSelect(room)}
                      className="bg-[#D97706] hover:bg-[#b86202] text-[#FAF9F6] font-[600] px-6 py-3 rounded-lg shadow-sm transition-all scale-95 hover:scale-100 flex items-center gap-2 text-sm"
                      id={`book-room-btn-${room.id}`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. Filterable Visual Tour Gallery Bento-Grid Segment (Screenshot 2) */}
      <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-16">
        <div className="text-center mb-12">
          <span className="text-[#D97706] font-sans font-bold text-xs uppercase tracking-widest block mb-2">Visual Tour</span>
          <h3 className="font-serif text-3xl font-bold text-[#1A4D2E]">Rajeshwari Photo Gallery</h3>
          <p className="font-sans text-stone-500 text-xs sm:text-sm mt-1">Explore our pristine spaces and amenities visually before your visit.</p>
        </div>

        {/* Gallery category buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {(['all', 'exterior', 'guest rooms', 'reception', 'amenities'] as const).map((categoryOption) => {
            const label = categoryOption === 'guest rooms' ? 'rooms' : categoryOption;
            const displayLabel = categoryOption;
            return (
              <button
                key={categoryOption}
                onClick={() => setGalleryFilter(label)}
                className={`px-4 sm:px-5 py-2 rounded-full font-sans text-xs font-semibold capitalize border transition-all ${
                  galleryFilter === label
                    ? 'bg-[#1A4D2E] border-[#1A4D2E] text-white shadow-sm'
                    : 'bg-white border-[#E8DFCA] text-[#1A4D2E] hover:border-[#1A4D2E]'
                }`}
              >
                {displayLabel}
              </button>
            );
          })}
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative rounded-2xl overflow-hidden border border-[#E8DFCA] bg-white group cursor-pointer shadow-sm aspect-video sm:aspect-square md:aspect-[4/3]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="bg-[#D97706] text-[#FAF9F6] text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded self-start mb-2">
                    {item.category}
                  </span>
                  <h5 className="text-white font-serif font-semibold text-sm leading-snug">
                    {item.title}
                  </h5>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}
