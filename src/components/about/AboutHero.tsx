"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/about-hero.jpg"
          alt="புதிய புரட்சி கழகம் - எங்களை பற்றி"
          fill
          style={{ objectFit: "cover", objectPosition: "30%" }}
          priority
          className="filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000066]/90 via-[#000099]/90 to-[#0000cc]/90 z-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-30 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            எங்களை பற்றி
          </motion.h1>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-white/90 to-white/60 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            புதிய புரட்சி கழகம் தமிழகத்தின் எதிர்காலத்தை மாற்றியமைக்கும் ஒரு அரசியல் இயக்கம். எங்கள் வரலாறு, நோக்கம் மற்றும் தொலைநோக்குப் பார்வையைப் பற்றி அறிந்து கொள்ளுங்கள்.
          </motion.p>

          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-white to-white/90 text-[#000066] rounded-full text-lg font-bold hover:from-white/95 hover:to-white/85 transition-all shadow-xl hover:shadow-2xl"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          const nextSection = document.getElementById('manifestoPrinciples');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          className="w-5 h-8 border-2 border-white/30 rounded-full p-1 mb-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-full h-2 bg-white/80 rounded-full"></div>
        </motion.div>
        <p className="text-white/70 text-sm">கீழே செல்லவும்</p>
      </motion.div>
    </section>
  );
}
