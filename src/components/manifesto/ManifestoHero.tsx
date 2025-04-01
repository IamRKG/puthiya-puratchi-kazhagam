"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ManifestoHero() {
  return (
    <section className="relative mt-20 h-[60vh] xs:h-[65vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/manifesto/manifesto-hero.jpg"
          alt="கொள்கை அறிக்கை"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="filter brightness-75"
        />
       <div className="absolute inset-0 bg-gradient-to-br from-[#000050]/75 via-[#000080]/80 to-[#0000a0]/75 backdrop-blur-[2px] z-10"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 z-30 relative">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            கொள்கை அறிக்கை
          </motion.h1>
          
          <motion.div 
            className="h-1 w-16 bg-gradient-to-r from-white/90 to-white/60 mx-auto rounded-full mb-4 xs:mb-5 sm:mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 xs:mb-7 sm:mb-8 text-white/90 leading-relaxed px-2 xs:px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            தமிழக மக்களின் வாழ்க்கைத் தரத்தை உயர்த்துவதற்கான எங்கள் தெளிவான பார்வையும் திட்டங்களும்
          </motion.p>

          <motion.button 
            className="w-44 xs:w-48 sm:w-52 py-2.5 xs:py-3 bg-white text-[#000066] rounded-full text-sm xs:text-base font-bold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            கொள்கைகளை அறிய
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-4 xs:bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          const nextSection = document.getElementById('manifestoPrinciples');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          className="w-4 xs:w-5 h-7 xs:h-8 border-2 border-white/30 rounded-full p-1 mb-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-full h-2 bg-white/80 rounded-full"></div>
        </motion.div>
        <p className="text-xs xs:text-sm text-white/70">கீழே செல்லவும்</p>
      </motion.div>
    </section>
  );
}
