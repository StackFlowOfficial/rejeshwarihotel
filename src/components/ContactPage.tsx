import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Phone, MessageSquare, Send, Navigation } from 'lucide-react';
import { faqData } from '../data';

interface FAQItemProps {
  faq: { q: string; a: string };
  isInitialOpen: boolean;
  key?: React.Key;
}

function FAQAccordionItem({ faq, isInitialOpen }: FAQItemProps) {
  const [open, setOpen] = useState(isInitialOpen);

  return (
    <div className="bg-white rounded-xl border border-[#E8DFCA] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex items-center justify-between font-sans font-bold text-stone-800 hover:text-[#1A4D2E] transition-all text-xs sm:text-sm"
      >
        <span>{faq.q}</span>
        <ChevronDown 
          className="w-4 h-4 transition-transform duration-300 shrink-0 text-stone-500" 
          style={{ transform: open ? 'rotate(180deg)' : 'none' }} 
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-50">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please enter your name and message details.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  const mapUrl = 'https://maps.google.com/?q=Rajeshwari+Guest+House+Pusad+Naka+Washim';
  const whatsappUrl = 'https://wa.me/918208601647?text=Hello%20Rajeshwari%20Guest%20House,%20I%20am%20inquiring%20about%20room%20availability.';

  return (
    <div className="py-12 bg-[#FAF9F6] min-h-screen" id="contact-page-root">
      
      {/* Title Header (Screenshot 3) */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <span className="text-[#D97706] font-sans font-bold text-xs uppercase tracking-widest block mb-2">Connect</span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1A4D2E] font-bold">
          Get in Touch with Us
        </h1>
        <p className="font-sans text-stone-500 text-xs sm:text-sm max-w-xl mx-auto mt-2">
          Reach our administrative team directly for wedding groups, custom business packages, or room reservations.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Left column: Visit Us + Direct Booking details in structured clean cards */}
        <div className="md:col-span-5 space-y-8">
          
          {/* Card 1: Visit Us Address (Screenshot 3) */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DFCA] shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-[#1A4D2E] bg-[#FAF9F6] p-2.5 rounded-lg border border-[#E8DFCA] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1A4D2E]">Visit Us</h4>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Pusad Naka Location</p>
              </div>
            </div>
            
            <p className="text-stone-700 text-sm leading-relaxed pt-2">
              <strong>Rajeshwari Guest House</strong><br />
              Pusad Naka, Akola Road,<br />
              Washim, Maharashtra 444505
            </p>

            <div className="pt-4 border-t border-stone-100 flex justify-between text-xs text-stone-600">
              <div>
                <span className="block text-[10px] uppercase font-bold text-stone-500">Standard Check-In</span>
                <span className="font-semibold text-[#1A4D2E]">02:00 PM onwards</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-stone-500">Standard Check-Out</span>
                <span className="font-semibold text-[#1A4D2E]">12:00 PM (Noon)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Direct Booking details with WhatsApp (Screenshot 3) */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DFCA] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-[#1A4D2E] bg-[#FAF9F6] p-2.5 rounded-lg border border-[#E8DFCA] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1A4D2E]">Direct Booking</h4>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">24/7 Telephone Line</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-stone-700 text-sm">
                Call our receptionist team to request instant rates, group slots, or wedding party rooms:
              </p>
              <a 
                href="tel:+918208601647"
                className="block font-sans font-bold text-xl text-[#D97706] hover:text-[#1A4D2E] transition-colors"
              >
                +91 82086 01647
              </a>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#D97706] hover:bg-[#b86202] text-white flex items-center justify-center gap-2.5 py-4.5 rounded-lg font-sans font-bold shadow-md transition-all text-sm"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                Message on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Right column: Interactive Send a Message Form (Screenshot 3) */}
        <div className="md:col-span-7">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E8DFCA] shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#1A4D2E] mb-2">Send a Message</h3>
            <p className="text-stone-500 text-xs sm:text-sm mb-8">Fill the secure inquiry form below. Our response officer will email or call you within 2-4 hours.</p>

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 p-6 rounded-xl border border-green-200 text-green-800 space-y-3 text-center py-12"
                >
                  <div className="text-green-600 mb-2 p-3 bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Send className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="font-serif text-lg font-bold">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting Rajeshwari Guest House Washim. Our hospitality management will connect back with you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs uppercase font-extrabold text-[#1A4D2E] tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Anand Sathe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:ring-1 focus:ring-[#1A4D2E] transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs uppercase font-extrabold text-[#1A4D2E] tracking-wider">Email Address</label>
                      <input
                        type="email"
                        placeholder="anand@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:ring-1 focus:ring-[#1A4D2E] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase font-extrabold text-[#1A4D2E] tracking-wider">Inquiry Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Booking availability, Group rates, Wedding accommodation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:ring-1 focus:ring-[#1A4D2E] transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase font-extrabold text-[#1A4D2E] tracking-wider">Message Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your room preferences, expected check-in dates, and special requests here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:ring-1 focus:ring-[#1A4D2E] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1A4D2E] hover:bg-[#11321d] text-white font-serif font-semibold py-3.5 px-4 rounded-lg shadow-md transition-all scale-95 hover:scale-100 flex items-center justify-center gap-2 text-sm"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Transmitting message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        Transmit Secured Booking Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* 4. Map Section: Beautiful facade picture and click to navigate button */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DFCA] shadow-sm grid grid-cols-1 md:grid-cols-12">
          
          {/* Night exterior pic */}
          <div className="md:col-span-7 aspect-video md:aspect-[21/9] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYsQvoa6G1kHeNs8DE2WQIJmiTDjYBSE3p3D8nrSxpDf39S01dj4Z1blJmNO7hp2iMNvGvcF05L3eEfq3MTfOz_f6pscqUVqycG7_wz4xQBpYfncoI2cMaLiwhDVA6fGz85MNTjo-JNARIysJ-UqF5JV7-erRRpjSrFOMHEB33v6M-wRWbyxifMdOSdTC9fbSPkpXeGwkFdTRTn-2XjSYOMVIbOBGyuRHfg0o9T6nq5qnVdt0jiTBm-seRS4NXD11El68yWXIgneM"
              alt="Rajeshwari Exterior Location Facade"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="md:col-span-5 p-8 flex flex-col justify-center bg-stone-50 border-t md:border-t-0 md:border-l border-[#E8DFCA]">
            <span className="text-[#D97706] font-sans font-bold text-xs uppercase tracking-widest block mb-1">Route &amp; Map</span>
            <h4 className="font-serif text-2xl font-bold text-[#1A4D2E] mb-3">Directions Finder</h4>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
              Located directly at the famous <strong>Pusad Naka Roundabout</strong> on Akola Rd. Easily reachable by autorickshaws and traveler buses originating from Washim railway terminal or bus stand.
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#1A4D2E] text-[#1A4D2E] hover:text-white font-sans font-bold border border-[#1A4D2E] py-3 px-6 rounded-lg text-center transition-all shadow-sm flex items-center justify-center gap-2 text-sm"
              id="get-directions-contact-btn"
            >
              <Navigation className="w-4 h-4 shrink-0" />
              Launch Google Maps Navigation
            </a>
          </div>
        </div>
      </section>

      {/* 5. FAQs Interactive Dropdown Grid */}
      <section className="max-w-[900px] mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h4 className="font-serif text-2xl font-bold text-[#1A4D2E]">Frequently Answered Questions</h4>
          <p className="text-stone-500 text-xs sm:text-sm">Find answers instantly to general questions about our lodge.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQAccordionItem key={index} faq={faq} isInitialOpen={index === 0} />
          ))}
        </div>
      </section>

    </div>
  );
}
