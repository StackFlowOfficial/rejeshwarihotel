import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Check, MessageSquare } from 'lucide-react';
import { Room } from '../types';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onBookSuccess: (bookingDetails: { name: string; dateIn: string; dateOut: string; guests: string; totalPayable: number }) => void;
}

export default function RoomModal({ room, onClose, onBookSuccess }: RoomModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dates: {
      checkIn: new Date().toISOString().split('T')[0],
      checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    },
    guests: '1 Adult',
  });

  const [simulating, setSimulating] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!room) return null;

  // Calculate nights
  const dIn = new Date(formData.dates.checkIn);
  const dOut = new Date(formData.dates.checkOut);
  const diffTime = Math.max(0, dOut.getTime() - dIn.getTime());
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
  const totalCost = room.price * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please fill out your Full Name and Phone number to proceed.');
      return;
    }

    setSimulating(true);
    setTimeout(() => {
      setSimulating(false);
      setSuccess(true);
      setTimeout(() => {
        onBookSuccess({
          name: formData.fullName,
          dateIn: formData.dates.checkIn,
          dateOut: formData.dates.checkOut,
          guests: formData.guests,
          totalPayable: totalCost,
        });
        setSuccess(false);
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-start md:items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#FAF9F6] rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl border border-[#E8DFCA] z-10 grid grid-cols-1 md:grid-cols-12"
          id="room-modal-container"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-[#1A4D2E] p-2 rounded-full shadow-md hover:scale-105 transition-all flex items-center justify-center"
            id="close-modal-btn"
          >
            <X className="w-5 h-5 text-[#1A4D2E]" />
          </button>

          {/* Left Column: Room Info & Images */}
          <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8DFCA]">
            <div>
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-[#E8DFCA]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl md:text-3xl text-[#1A4D2E] font-semibold">{room.name}</h3>
                <span className="bg-[#E8DFCA] text-[#645e4d] px-3 py-1 rounded-md text-xs font-semibold capitalize">
                  {room.type} Room
                </span>
              </div>

              <p className="text-[#414942] text-sm md:text-base leading-relaxed mb-6">{room.longDescription}</p>

              {/* Room Stats */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-lg border border-[#E8DFCA] mb-6">
                <div>
                  <span className="text-xs text-stone-500 uppercase block font-semibold">Room Size</span>
                  <span className="text-sm font-semibold text-[#1A4D2E]">{room.size}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 uppercase block font-semibold">Bed Type</span>
                  <span className="text-sm font-semibold text-[#1A4D2E]">{room.bedType}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 uppercase block font-semibold">Max Cap</span>
                  <span className="text-sm font-semibold text-[#1A4D2E]">{room.capacity}</span>
                </div>
              </div>

              {/* Features Tags */}
              <h4 className="font-serif text-sm font-semibold text-[#1A4D2E] uppercase tracking-wider mb-3">Room Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((feature, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs border border-[#E8DFCA] text-[#414942]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0 fill-current" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8DFCA] mt-6 flex items-baseline justify-between">
              <span className="text-sm text-[#414942]">Base Rate (per night):</span>
              <span className="text-2xl font-bold text-[#D97706]">₹{room.price.toLocaleString()}</span>
            </div>
          </div>

          {/* Right Column: Dynamic Booking Form */}
          <div className="md:col-span-5 p-6 md:p-8 bg-white flex flex-col justify-center">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-[#1A4D2E] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md animate-bounce">
                  <Check className="w-8 h-8 text-white font-bold" />
                </div>
                <h4 className="font-serif text-2xl text-[#1A4D2E] font-bold mb-3">Inquiry Created!</h4>
                <p className="text-stone-600 text-sm leading-relaxed px-4">
                  Simulating reservation link to WhatsApp chat. You are being redirected to book directly...
                </p>
                <div className="w-24 h-1 bg-[#E8DFCA] rounded-full mx-auto mt-8 overflow-hidden">
                  <div className="h-full bg-[#D97706] animate-pulse w-full"></div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center border-b border-[#E8DFCA] pb-4 mb-4">
                  <h4 className="font-serif text-lg text-[#1A4D2E] font-semibold uppercase tracking-wider">Book This Room</h4>
                  <p className="text-xs text-stone-500">Instant direct inquiry generator</p>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-600 uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Patil"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#1A4D2E] focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-600 uppercase tracking-widest">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#1A4D2E] focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-600 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#1A4D2E] focus:outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-600 uppercase tracking-widest">Check-In</label>
                    <input
                      type="date"
                      value={formData.dates.checkIn}
                      onChange={(e) => setFormData({ ...formData, dates: { ...formData.dates, checkIn: e.target.value } })}
                      className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-2.5 py-2 text-xs focus:ring-1 focus:ring-[#1A4D2E] focus:outline-none transition-all focus:border-[#1A4D2E]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-600 uppercase tracking-widest">Check-Out</label>
                    <input
                      type="date"
                      value={formData.dates.checkOut}
                      onChange={(e) => setFormData({ ...formData, dates: { ...formData.dates, checkOut: e.target.value } })}
                      className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-2.5 py-2 text-xs focus:ring-1 focus:ring-[#1A4D2E] focus:outline-none transition-all focus:border-[#1A4D2E]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-600 uppercase tracking-widest">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#1A4D2E] focus:outline-none transition-all"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>Family (2 Adults + Kids)</option>
                    <option>Group Booking Request</option>
                  </select>
                </div>

                {/* Calculations details */}
                <div className="p-3.5 bg-[#FAF9F6] rounded-lg border border-[#E8DFCA] space-y-1.5 text-xs text-stone-600 mt-2">
                  <div className="flex justify-between">
                    <span>Base Fare:</span>
                    <span>₹{room.price} × {nights} {nights > 1 ? 'nights' : 'night'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST & Fees:</span>
                    <span className="text-green-700">Included / Free</span>
                  </div>
                  <div className="border-t border-[#E8DFCA] pt-1.5 flex justify-between font-bold text-[#1A4D2E]">
                    <span>Total Estimated:</span>
                    <span>₹{totalCost.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={simulating}
                  className="w-full bg-[#D97706] hover:bg-[#b86202] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all scale-95 hover:scale-100 flex items-center justify-center gap-2 mt-4 text-sm"
                  id="modal-submit-booking-btn"
                >
                  {simulating ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Creating Request...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      Submit WhatsApp Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
