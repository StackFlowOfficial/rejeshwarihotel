import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white border-b border-[#E8DFCA]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-[#D97706] font-sans font-bold text-xs uppercase tracking-widest block">
            Our Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A4D2E] font-bold leading-tight">
            Excellence in Hospitality &amp; Comfort
          </h2>
          <p className="text-[#414942] font-sans text-sm sm:text-base leading-relaxed">
            Rajeshwari Guest House is more than just a place to stay; it's a testament to the warm, genuine hospitality Washim is known for. Situated conveniently at <strong>Pusad Naka, Akola Road</strong>, we cater to both busy corporate executives and leisure visitors seeking a exceptionally clean, highly secure, and professional environment.
          </p>
          <p className="text-[#414942] font-sans text-sm sm:text-base leading-relaxed">
            Our commitment to your peaceful rest is reflected in every single detail, from our responsive 24/7 lobby assistance to the pristine housekeeping and premium design choices. We provide full modern comfort with a homely touch.
          </p>

          <div className="grid grid-cols-2 gap-8 py-6 border-t border-[#E8DFCA] mt-8">
            <div>
              <div className="font-serif text-3xl sm:text-4xl text-[#1A4D2E] font-bold">10+</div>
              <div className="text-[#414942] text-xs font-semibold uppercase tracking-wider mt-1">
                Years of Service
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl text-[#1A4D2E] font-bold">4.3 / 5</div>
              <div className="text-[#414942] text-xs font-semibold uppercase tracking-wider mt-1">
                Guest Satisfaction
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column Image Representation */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="relative group p-4"
        >
          {/* Main lobby counter pic */}
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#E8DFCA]">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbiN6HNsozIgYLrfyDfcdQcSXAD5RzvX0Z9lzmwadVIhCFui-kNgBcsaIseoQyRltlpGmwli7tdZjxeh-UHI5ouOSVBsA6D1irGx9LTflt6SsErq-QOR9IKIvc8K3IcdDcvYXe4cPL-gq8sdcr62iwrB10S-8xbr_qywjBE10V0Xk3gxxnwKx4LRd2IZp-yQjMfDvHcbEX_zIBkNHF920ulL9R856TWbJeKMYpcY10wgciRqbkQYEcsyfWwyvlKztUpMOJp5NVQNo" 
              alt="Rajeshwari Reception Counter"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating testimonial-like quote box overlap */}
          <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-[#1A4D2E] p-6 rounded-xl shadow-2xl hidden sm:block border border-[#faf9f6]/10 max-w-xs">
            <p className="text-[#FAF9F6] font-serif text-lg italic leading-snug">
              "True comfort meets affordability in the heart of Washim."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
