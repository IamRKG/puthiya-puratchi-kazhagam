"use client";

import { motion } from "framer-motion";

const promises = [
  {
    id: 1,
    title: "வேலைவாய்ப்பு",
    description: "இளைஞர்களுக்கு திறன் மேம்பாடு மற்றும் வேலைவாய்ப்பு",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "கல்வி",
    description: "அனைவருக்கும் தரமான கல்வி மற்றும் திறன் மேம்பாடு",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 3,
    title: "விவசாயம்",
    description: "விவசாயிகளின் வருமானம் உயர்வு மற்றும் நவீன தொழில்நுட்பம்",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function ManifestoPromises() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-[#000066] via-[#000099] to-[#0000cc] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            எங்கள் வாக்குறுதிகள்
          </h2>
          <p className="text-base sm:text-lg text-white/80">
            மக்களின் வாழ்க்கைத் தரத்தை உயர்த்த நாங்கள் கொடுத்துள்ள உறுதிமொழிகள்
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="text-white mb-4 group-hover:scale-110 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-white/15 to-white/5 rounded-lg flex items-center justify-center">
                  {promise.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                {promise.title}
              </h3>
              <p className="text-white/80 group-hover:text-white transition-colors">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="/join"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-white to-white/90 text-[#000066] rounded-full text-lg font-bold hover:from-white/95 hover:to-white/85 transition-all shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            எங்களுடன் இணைய
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
