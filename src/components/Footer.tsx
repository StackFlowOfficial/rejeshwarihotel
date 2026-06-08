import React from 'react';
import { Hotel } from 'lucide-react';

interface FooterProps {
  onNavClick: (view: 'home' | 'rooms' | 'contact') => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-[#FAF9F6] border-t border-stone-800 font-sans" id="app-footer">
      
      {/* Footer Top */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E5BA73] text-stone-900 flex items-center justify-center font-bold">
              <Hotel className="w-4 h-4" />
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-tight">
              Rajeshwari
            </span>
          </div>
          <p className="text-[#a1a19f] text-xs leading-relaxed">
            Premium lodging at affordable rates. Located centrally at Pusad Naka in Washim, catering to business travelers and families with warm Indian hospitality.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#D97706] pl-3">
            Quick Navigation
          </h5>
          <ul className="space-y-2 text-xs text-[#a1a19f]">
            <li>
              <button onClick={() => onNavClick('home')} className="hover:text-white transition-colors">
                Home Overview
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('rooms')} className="hover:text-white transition-colors">
                Comfort Rooms &amp; Photo Gallery
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('contact')} className="hover:text-white transition-colors">
                Contact &amp; Location Directions
              </button>
            </li>
          </ul>
        </div>

        {/* Timings Column */}
        <div>
          <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#D97706] pl-3">
            Helpdesk Hours
          </h5>
          <ul className="space-y-2 text-xs text-[#a1a19f]">
            <li className="flex justify-between">
              <span>Lobby Desk:</span>
              <span className="text-white font-semibold">24 / 7 Available</span>
            </li>
            <li className="flex justify-between">
              <span>Housekeeping:</span>
              <span className="text-white font-semibold">7:00 AM – 9:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Maharashtrian Breakfast:</span>
              <span className="text-white font-semibold">8:00 AM – 10:30 AM</span>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div>
          <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#D97706] pl-3">
            Direct Reach
          </h5>
          <p className="text-xs text-[#a1a19f] leading-loose">
            Pusad Naka, Akola Road,<br />
            Washim, MH 444505<br />
            <span className="text-white font-semibold">Tel:</span> +91 82086 01647
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-[#70706e] gap-4">
        <span>&copy; {currentYear} Rajeshwari Guest House (Washim). All Rights Reserved.</span>
        <div className="flex gap-6">
          <span className="hover:text-stone-300 transition-colors">Cleanliness Standard Guaranteed</span>
          <span className="hover:text-stone-300 transition-colors">Pristine Stay Assurance</span>
        </div>
      </div>

    </footer>
  );
}
