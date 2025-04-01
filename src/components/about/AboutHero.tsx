"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[65vh] xs:h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/about-hero.jpg"
          alt="புதிய புரட்சி கழகம் - எங்களை பற்றி"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "27%" }}
          priority
          className="filter brightness-75"
        />
     <div className="absolute inset-0 bg-gradient-to-br from-[#000050]/75 via-[#000080]/80 to-[#0000a0]/75 backdrop-blur-[2px] z-10"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 z-30 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            எங்களை பற்றி
          </motion.h1>
          
          <motion.div 
            className="h-1 w-16 bg-gradient-to-r from-white/90 to-white/60 mx-auto rounded-full mb-4 xs:mb-5 sm:mb-6 md:mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 xs:mb-7 sm:mb-8 md:mb-10 text-white/90 leading-relaxed px-2 xs:px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            புதிய புரட்சி கழகம் தமிழகத்தின் எதிர்காலத்தை மாற்றியமைக்கும் ஒரு அரசியல் இயக்கம். எங்கள் வரலாறு, நோக்கம் மற்றும் தொலைநோக்குப் பார்வையைப் பற்றி அறிந்து கொள்ளுங்கள்.
          </motion.p>

          <motion.button
            className="w-44 xs:w-48 sm:w-52 md:w-56 py-2.5 xs:py-3 sm:py-3.5 bg-white text-[#000066] rounded-full text-sm xs:text-base font-bold shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            மேலும் அறிய
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 xs:bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          const nextSection = document.getElementById('manifestoPrinciples');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          className="w-4 xs:w-5 sm:w-6 h-7 xs:h-8 sm:h-9 border-2 border-white/30 rounded-full p-1 mb-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-full h-2 bg-white/80 rounded-full"></div>
        </motion.div>
        <p className="text-xs xs:text-sm sm:text-base text-white/70">கீழே செல்லவும்</p>
      </motion.div>

     
    </section>
  );
}
