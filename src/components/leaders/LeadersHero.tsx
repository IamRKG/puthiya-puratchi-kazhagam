"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeadersHero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/leaders/hero.jpg"
          alt="புதிய புரட்சி கழகம் - தலைவர்கள்"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
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
            தலைவர்கள்
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
            புதிய புரட்சி கழகத்தின் தலைமைப் பொறுப்பில் உள்ள அர்ப்பணிப்பு மிக்க தலைவர்கள். தமிழக மக்களின் நலனுக்காக பாடுபடும் எங்கள் முன்னோடிகள்.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-white to-white/90 text-[#000066] rounded-full text-lg font-bold hover:from-white/95 hover:to-white/85 transition-all shadow-xl hover:shadow-2xl w-64 sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              தலைவர்களை சந்திக்க
            </motion.button>

            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-white/70 text-white rounded-full text-lg font-medium hover:bg-white/10 transition-all w-64 sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              மேலும் அறிய
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 sm:space-x-16">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">50+</p>
              <p className="text-white/80">மாவட்ட தலைவர்கள்</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">1000+</p>
              <p className="text-white/80">கிளை அமைப்பாளர்கள்</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
