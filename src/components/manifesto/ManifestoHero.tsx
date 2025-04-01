"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ManifestoHero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center bg-gradient-to-br from-[#000040] via-[#000060] to-[#000080] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
      
      <div className="absolute inset-0">
        <Image
          src="/manifesto/manifesto-hero.jpg"
          alt="கொள்கை அறிக்கை"
          style={{ objectFit: "cover", opacity: 0.6, objectPosition: "top" }}
          fill
          priority
          className="object-cover opacity-20 mt-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000066]/70 via-[#000099]/70 to-[#0000cc]/70"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              கொள்கை அறிக்கை
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              தமிழக மக்களின் வாழ்க்கைத் தரத்தை உயர்த்துவதற்கான எங்கள் தெளிவான பார்வையும் திட்டங்களும்
            </p>
            
            <motion.button 
              className="mt-4 px-8 py-3 bg-white text-[#000060] rounded-full text-lg font-bold hover:bg-white/90 transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              கொள்கைகளை அறிய
            </motion.button>
          </motion.div>
        </div>
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
