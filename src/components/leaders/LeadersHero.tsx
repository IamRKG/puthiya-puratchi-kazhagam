"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeadersHero() {
  return (
    <section className="relative h-[65vh] xs:h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/leaders/leader1.png"
          alt="புதிய புரட்சி கழகம் - தலைவர்கள்"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000050]/75 via-[#000080]/80 to-[#0000a0]/75 backdrop-blur-[2px] z-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      {/* Content */}
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
            தலைவர்கள்
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
            புதிய புரட்சி கழகத்தின் தலைமைப் பொறுப்பில் உள்ள அர்ப்பணிப்பு மிக்க தலைவர்கள். தமிழக மக்களின் நலனுக்காக பாடுபடும் எங்கள் முன்னோடிகள்.
          </motion.p>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4">
            <motion.button
              className="w-44 xs:w-48 sm:w-52 py-2.5 xs:py-3 bg-white text-[#000066] rounded-full text-sm xs:text-base font-bold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              தலைவர்களை சந்திக்க
            </motion.button>

            <motion.button
              className="w-44 xs:w-48 sm:w-52 py-2.5 xs:py-3 bg-transparent border border-white/70 text-white rounded-full text-sm xs:text-base font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              மேலும் அறிய
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Stats Section - Mobile Responsive */}
      <div className="absolute bottom-5 xs:bottom-6 sm:bottom-8 left-0 right-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 xs:gap-8 sm:gap-10 md:gap-12">
            <div className="text-center">
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 xs:mb-2">50+</p>
              <p className="text-xs xs:text-sm sm:text-base text-white/80">மாவட்ட தலைவர்கள்</p>
            </div>
            <div className="text-center">
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 xs:mb-2">1000+</p>
              <p className="text-xs xs:text-sm sm:text-base text-white/80">கிளை அமைப்பாளர்கள்</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
