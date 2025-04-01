"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ManifestoHero() {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000040]/60 to-[#000080]/60 z-10"></div>
      
      {/* Background Image */}
      <Image
        src="/manifesto/manifesto-hero.jpg"
        alt="புதிய புரட்சி கழகம் - கொள்கைகள்"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "top" }}
        priority
        className="filter brightness-50"
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            எங்கள் கொள்கைகள்
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            தமிழகத்தின் வளர்ச்சிக்கான எங்கள் தொலைநோக்குப் பார்வை மற்றும் செயல்திட்டங்கள்
          </motion.p>
        </div>
      </div>
    </section>
  );
}
