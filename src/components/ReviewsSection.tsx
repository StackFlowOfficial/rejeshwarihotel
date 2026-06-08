import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, StarHalf } from 'lucide-react';
import { Review } from '../types';
import { reviewsData } from '../data';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(reviewsData);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    userType: 'Leisure Stay'
  });

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      alert('Please fill out your Name and Comment.');
      return;
    }

    const review: Review = {
      id: `custom-rev-${Date.now()}`,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Just now',
      avatar: newReview.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U',
      userType: newReview.userType
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '', userType: 'Leisure Stay' });
    setShowForm(false);
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-[#FAF9F6] border-b border-[#E8DFCA]" id="reviews-section">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* Left Column rating details */}
          <div className="md:col-span-4 sticky top-24">
            <span className="text-[#D97706] font-sans font-bold text-xs uppercase tracking-widest block mb-2">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A4D2E] font-bold mb-6">
              What Our Guests Say
            </h2>
            
            <div className="bg-white p-6 rounded-xl border border-[#E8DFCA] shadow-sm flex flex-col items-center text-center">
              <span className="font-serif text-5xl md:text-6xl text-[#1A4D2E] font-bold leading-none">
                4.3
              </span>
              <div className="flex text-[#D97706] my-3 gap-0.5">
                <Star className="w-5 h-5 fill-current text-[#D97706]" />
                <Star className="w-5 h-5 fill-current text-[#D97706]" />
                <Star className="w-5 h-5 fill-current text-[#D97706]" />
                <Star className="w-5 h-5 fill-current text-[#D97706]" />
                <StarHalf className="w-5 h-5 fill-current text-[#D97706]" />
              </div>
              <p className="text-[#414942] text-xs font-semibold uppercase tracking-wider">
                Based on 250+ Verified Reviews
              </p>
            </div>

            {/* Submit Guest feedback button */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full mt-6 bg-[#1A4D2E] hover:bg-[#11321d] text-white text-xs sm:text-sm font-semibold py-3 rounded-lg shadow-sm transition-all"
            >
              {showForm ? 'Cancel Feedback' : 'Write Guest Review'}
            </button>
          </div>

          {/* Right Column review list or form block */}
          <div className="md:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              {showForm ? (
                <motion.div
                  key="review-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white p-8 rounded-xl border border-[#E8DFCA] shadow-md"
                >
                  <h3 className="font-serif text-xl font-bold text-[#1A4D2E] mb-6">Share Your Experience</h3>
                  <form onSubmit={handleCreateReview} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs uppercase font-bold text-stone-600">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Sathe"
                          value={newReview.name}
                          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#1A4D2E] outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs uppercase font-bold text-stone-600">Stay Category</label>
                        <select
                          value={newReview.userType}
                          onChange={(e) => setNewReview({ ...newReview, userType: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#1A4D2E] outline-none"
                        >
                          <option>Leisure Stay</option>
                          <option>Business Traveler</option>
                          <option>Family stay</option>
                          <option>Group Stay</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs uppercase font-bold text-stone-600 block mb-1">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((starValue) => (
                          <button
                            type="button"
                            key={starValue}
                            onClick={() => setNewReview({ ...newReview, rating: starValue })}
                            className="hover:scale-110 transition-transform focus:outline-none"
                          >
                            <Star 
                              className={`w-7 h-7 ${newReview.rating >= starValue ? 'fill-current text-[#D97706]' : 'text-stone-300'}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs uppercase font-bold text-stone-600">Your Review Comments</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="What did you think of the rooms, cleanliness, and the staff?"
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#1A4D2E] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D97706] text-white py-3 font-semibold rounded-lg text-sm hover:bg-[#b86202] transition-colors"
                    >
                      Publish Review
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="review-list" className="space-y-6">
                  {reviews.map((rev, idx) => (
                    <motion.div
                      key={rev.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFCA] shadow-sm flex flex-col justify-between"
                    >
                      {/* Rating star list display */}
                      <div className="flex text-[#D97706] mb-3 gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < rev.rating ? 'fill-current text-[#D97706]' : 'text-stone-300'}`} 
                          />
                        ))}
                      </div>

                      {/* Comment text italic */}
                      <p className="text-[#414942] italic text-sm sm:text-base leading-relaxed mb-6 font-sans">
                        "{rev.comment}"
                      </p>

                      {/* User Profile */}
                      <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                        <div className="w-12 h-12 rounded-full bg-[#E8DFCA] text-[#1A4D2E] font-bold flex items-center justify-center text-sm">
                          {rev.avatar}
                        </div>
                        <div>
                          <div className="font-sans font-bold text-[#1A4D2E] text-sm md:text-base">
                            {rev.name}
                          </div>
                          <div className="text-[10px] sm:text-xs text-stone-500 uppercase font-semibold tracking-wider">
                            {rev.userType} • {rev.date}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
