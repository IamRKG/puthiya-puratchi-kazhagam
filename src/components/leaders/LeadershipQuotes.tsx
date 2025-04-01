"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    id: 1,
    quote: "தமிழகத்தின் எதிர்காலம் நம் கைகளில்",
    author: "தலைமை",
    role: "கழகத் தலைவர்",
    category: "தலைமை"
  },
  {
    id: 2,
    quote: "இளைஞர்களின் கனவுகளை நனவாக்குவோம்",
    author: "இளைஞர்",
    role: "இளைஞர் அணி தலைவர்",
    category: "இளைஞர்"
  },
  {
    id: 3,
    quote: "பெண்களின் முன்னேற்றமே சமூகத்தின் முன்னேற்றம்",
    author: "பெண்கள்",
    role: "மகளிர் அணி தலைவர்",
    category: "பெண்கள்"
  },
  {
    id: 4,
    quote: "விவசாயிகளின் வளர்ச்சியே நாட்டின் வளர்ச்சி",
    author: "விவசாயம்",
    role: "விவசாய அணி தலைவர்",
    category: "விவசாயம்"
  }
];

export default function LeadershipQuotes() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">தலைவர்களின் சிந்தனைகள்</h2>
          <motion.div 
            className="h-1 w-16 bg-gradient-to-r from-[#000080] to-[#000080]/60 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#000066]/85 via-[#000099]/90 to-[#0000cc]/85 p-6 md:p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -top-4 -left-4 text-white/5 text-[100px] font-serif leading-none">
                &quot;
              </div>
              
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full mb-4">
                  {quote.category}
                </span>
                
                <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  &quot;{quote.quote}&quot;
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg text-white font-bold">
                      {quote.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <cite className="text-white font-medium block not-italic">
                      {quote.author}
                    </cite>
                    <span className="text-white/70 text-sm">
                      {quote.role}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
