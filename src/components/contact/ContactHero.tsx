"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] xs:h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/contact-hero.png"
          alt="புதிய புரட்சி கழகம் - தொடர்புக்கு"
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="filter brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000050]/80 via-[#000080]/85 to-[#0000a0]/80 backdrop-blur-[1px] z-10"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-[0.03] z-20"></div>
      
      {/* Top and bottom gradients for better text readability */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 z-30 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            தொடர்புக்கு
          </motion.h1>
          
          <motion.div 
  className="h-1 w-12 xs:w-14 sm:w-16 md:w-20 bg-gradient-to-r from-white to-white/80 mx-auto rounded-full mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8"
  initial={{ width: 0 }}
  animate={{ width: "5rem" }}
  transition={{ duration: 0.8, delay: 0.3 }}
></motion.div>

          
          <motion.p 
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-white/90 leading-relaxed px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            எங்களுடன் தொடர்பு கொள்ள - உங்கள் கருத்துக்கள் மற்றும் யோசனைகளை பகிர்ந்து கொள்ளுங்கள்
          </motion.p>

          <motion.button
            className="bg-white/95 hover:bg-white text-[#000080] px-6 xs:px-7 sm:px-8 py-2.5 xs:py-3 sm:py-3.5 rounded-full text-sm xs:text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            இப்போது தொடர்பு கொள்ள
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 xs:bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          const contactForm = document.getElementById('contactForm');
          contactForm?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          className="w-4 xs:w-5 sm:w-6 h-7 xs:h-8 sm:h-9 border-2 border-white/30 rounded-full p-1 mb-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-full h-2 bg-white/80 rounded-full"></div>
        </motion.div>
        <p className="text-[10px] xs:text-xs sm:text-sm text-white/70">கீழே செல்லவும்</p>
      </motion.div>
    </section>
  );
}
