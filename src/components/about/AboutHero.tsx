"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/about-hero.jpg"
          alt="புதிய புரட்சி கழகம் - எங்களை பற்றி"
          fill
          style={{ objectFit: "cover", objectPosition: "30%" }}
          priority
          className="filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000050]/70 to-[#0000a0]/70 z-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-30 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            எங்களை பற்றி
          </motion.h1>
          
          <motion.div 
            className="h-1 w-20 bg-white mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            புதிய புரட்சி கழகம் தமிழகத்தின் எதிர்காலத்தை மாற்றியமைக்கும் ஒரு அரசியல் இயக்கம். எங்கள் வரலாறு, நோக்கம் மற்றும் தொலைநோக்குப் பார்வையைப் பற்றி அறிந்து கொள்ளுங்கள்.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
