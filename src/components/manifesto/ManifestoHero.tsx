"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ManifestoHero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] bg-gradient-to-br from-[#000040] via-[#000060] to-[#000080] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/manifesto/manifesto-hero.jpg"
          alt="கொள்கை அறிக்கை"
          fill
          priority
          className="object-cover opacity-20"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000040]/50 via-transparent to-[#000040]/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative h-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              கொள்கை அறிக்கை
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              தமிழக மக்களின் வாழ்க்கைத் தரத்தை உயர்த்துவதற்கான எங்கள் தெளிவான பார்வையும் திட்டங்களும்
            </p>
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#000080] rounded-full text-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              கொள்கைகளை அறிய
            </motion.button>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => {
          const nextSection = document.getElementById('manifestoPrinciples');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full p-1 hover:border-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-full h-3 bg-white/80 rounded-full"></div>
        </motion.div>
        <p className="text-white/70 text-sm mt-2 text-center hover:text-white/90 transition-colors ">கீழே செல்லவும்</p>
      </motion.div>
    </section>
  );
}
