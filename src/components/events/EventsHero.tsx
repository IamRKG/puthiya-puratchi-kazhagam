"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EventsHero() {
  return (
    <section className="relative h-[60vh] xs:h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/events/events-hero.jpg"
          alt="புதிய புரட்சி கழகம் - நிகழ்வுகள்"
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000050]/75 via-[#000080]/80 to-[#0000a0]/75 backdrop-blur-[2px] z-10"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 z-30 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            நிகழ்வுகள்
          </motion.h1>
          
          <motion.div 
            className="h-1 w-12 xs:w-14 sm:w-16 bg-gradient-to-r from-white/90 to-white/60 mx-auto rounded-full mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-white/90 leading-relaxed px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            கட்சியின் முக்கிய நிகழ்வுகள் மற்றும் கூட்டங்கள் - மக்களுடன் இணைந்து பயணிக்கும் எங்கள் பயணம்
          </motion.p>

          <motion.button
            className="w-36 xs:w-40 sm:w-44 md:w-48 lg:w-52 py-2 xs:py-2.5 sm:py-3 md:py-3.5 bg-white text-[#000066] rounded-full text-xs xs:text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            நிகழ்வுகளை காண
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          const nextSection = document.getElementById('upcomingEvents');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          className="w-3 xs:w-4 sm:w-5 md:w-6 h-6 xs:h-7 sm:h-8 md:h-9 border-2 border-white/30 rounded-full p-1 mb-1 xs:mb-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-full h-2 bg-white/80 rounded-full"></div>
        </motion.div>
        <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-white/70">கீழே செல்லவும்</p>
      </motion.div>
    </section>
  );
}
