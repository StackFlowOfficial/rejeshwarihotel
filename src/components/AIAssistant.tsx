import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Room } from '../types';

interface Message {
  id: string;
  sender: 'ai' | 'guest';
  text: string;
  time: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      sender: 'ai',
      text: "Namaste! I am Rajeshwari's virtual receptionist. 🌸 How may I help you plan your stay in Washim today?",
      time: 'Now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const presetQuestions = [
    "What are the rates?",
    "Where is it located?",
    "Timing for check-in?",
    "Book over WhatsApp"
  ];

  const getAssistantAnswer = (q: string): string => {
    const text = q.toLowerCase();
    
    if (text.includes('rate') || text.includes('price') || text.includes('cost') || text.includes('how much') || text.includes('room')) {
      return "We offer 3 beautiful room options tailored to your comfort:\n\n• Solo Executive (Twin Bed): ₹1,200/night\n• Business Deluxe (Split AC, King Bed): ₹2,500/night\n• Family Premium (Double AC, 2 Queens): ₹4,000/night.\n\nAll bookings include free high-speed Wi-Fi and parking.";
    }
    if (text.includes('locate') || text.includes('where') || text.includes('address') || text.includes('naka') || text.includes('washim')) {
      return "Rajeshwari Guest House sits in a premium spot directly at Pusad Naka, Akola Road, Washim, Maharashtra 444505. It connects seamlessly to public transport, bus terminals, and business hubs!";
    }
    if (text.includes('time') || text.includes('check') || text.includes('checkin') || text.includes('checkout') || text.includes('hours')) {
      return "Our standard check-in hour is from 2:00 PM onwards, and check-out is strictly by 12:00 PM (Noon). Contact us at +91 82086 01647 if you require custom times!";
    }
    if (text.includes('whatsapp') || text.includes('book') || text.includes('reserve') || text.includes('phone') || text.includes('contact')) {
      return "You can secure your rooms directly with our executive receptionist at +91 82086 01647. Click the 'WhatsApp Booking' buttons on our main sections to trigger a ready-made form immediately.";
    }
    if (text.includes('wifi') || text.includes('internet') || text.includes('parking') || text.includes('breakfast') || text.includes('amenit')) {
      return "Every Guest at Rajeshwari enjoys high-speed fiber Wi-Fi, fully secured on-site vehicle parking with modern cameras, 24/7 lobby aid, and delicious hot Maharashtrian breakfast served daily.";
    }
    
    return "Thank you for asking! Rajeshwari Guest House Washim is dedicated to giving you premium accommodations with spotless sheets and warm hospitality. You can call +91 82086 01647 or message on WhatsApp to reserve now!";
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add Guest message
    const guestMsg: Message = {
      id: `guest-${Date.now()}`,
      sender: 'guest',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, guestMsg]);
    setInputText('');
    setTyping(true);

    // Simulated Assistant response
    setTimeout(() => {
      const replyText = getAssistantAnswer(textToSend);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Absolute Floating CTA Activator bubble */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#1A4D2E] hover:bg-[#11321d] text-[#FAF9F6] rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
          id="ai-assistant-activator-btn"
        >
          {isOpen ? <X className="w-6 h-6 text-[#FAF9F6]" /> : <MessageSquare className="w-6 h-6 text-[#FAF9F6]" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[380px] max-h-[500px] h-[80vh] z-40 bg-white rounded-2xl border border-[#E8DFCA] shadow-2xl overflow-hidden flex flex-col"
            id="ai-assistant-overlay-chat"
          >
            {/* Receptionist Header info */}
            <div className="bg-[#1A4D2E] text-white p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold leading-normal">Rajeshwari Lodge Helpdesk</h4>
                <p className="text-[10px] text-stone-300 font-semibold uppercase tracking-wider">Virtual Assistant • Instant Answers</p>
              </div>
            </div>

            {/* Chat list block */}
            <div 
              ref={scrollRef}
              className="flex-grow p-4 overflow-y-auto bg-[#FAF9F6] space-y-4"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === 'guest' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 px-4 rounded-2xl text-xs sm:text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${
                    m.sender === 'guest'
                      ? 'bg-[#D97706] text-white rounded-tr-none'
                      : 'bg-white border border-[#E8DFCA] text-[#212529] rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#E8DFCA] p-3 px-4 rounded-2xl rounded-tl-none text-stone-400 text-xs flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested quick-chips */}
            <div className="p-2 bg-stone-50 border-t border-b border-stone-100 flex gap-1.5 overflow-x-auto scroller-hidden">
              {presetQuestions.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  className="bg-white hover:bg-[#E8DFCA] text-stone-700 text-[10px] font-bold px-2.5 py-1.5 rounded-full border border-stone-200 shadow-sm whitespace-nowrap transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Form footer input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 bg-white flex items-center gap-2 border-t border-[#E8DFCA]"
            >
              <input
                type="text"
                placeholder="Ask assistant about rates, timing, location..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-grow bg-[#FAF9F6] border border-[#E8DFCA] rounded-lg px-3 py-2 text-xs sm:text-sm outline-none focus:ring-1 focus:ring-[#1A4D2E]"
              />
              <button
                type="submit"
                className="bg-[#1A4D2E] text-white p-2.5 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center"
                id="send-chat-submit-btn"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
