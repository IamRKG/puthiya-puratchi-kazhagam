"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const carouselImages = [
  {
    src: "/carousel/slide1.png",
    alt: "Party Rally",
    title: "ஒன்றிணைந்த தமிழகம்",
    subtitle: "நம் மக்களுக்காக ஒன்றிணைவோம்",
    cta: {
      text: "மேலும் அறிய",
      link: "/about"
    }
  },
  {
    src: "/carousel/slide2.jpg",
    alt: "Community Event",
    title: "சமூக மாற்றம்",
    subtitle: "புதிய தமிழகத்தை உருவாக்குவோம்",
    cta: {
      text: "எங்கள் கொள்கைகள்",
      link: "/manifesto"
    }
  },
  {
    src: "/carousel/slide3.jpg",
    alt: "Party Leaders",
    title: "தலைமைத்துவம்",
    subtitle: "வழிகாட்டும் தலைவர்கள்",
    cta: {
      text: "தலைவர்களை சந்திக்க",
      link: "/leaders"
    }
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToNextSlide = useCallback(() => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, [pauseAutoPlay]);

  const goToPrevSlide = useCallback(() => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }, [pauseAutoPlay]);

  const goToSlide = useCallback((index: number) => {
    pauseAutoPlay();
    setCurrentSlide(index);
  }, [pauseAutoPlay]);

  return (
    <section 
      className="relative h-[70vh] xs:h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#000050]/75 via-[#000080]/80 to-[#0000a0]/75 backdrop-blur-[2px] z-10"></div>
      
      <AnimatePresence mode="wait">
        {carouselImages.map((image, index) => (
          index === currentSlide && (
            <motion.div 
              key={index} 
              className="absolute inset-0 z-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority={index === 0}
                className="filter brightness-75"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 z-30 relative">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-4 xs:mb-5 sm:mb-6 md:mb-8"
            >
              <motion.h2 
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-2 xs:mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {carouselImages[currentSlide].title}
              </motion.h2>
              <motion.p
                className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {carouselImages[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            புதிய புரட்சி கழகம்
          </motion.h1>
          
          <motion.p 
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 xs:mb-7 sm:mb-8 md:mb-10 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            தமிழகத்தின் புதிய நம்பிக்கை
          </motion.p>
          
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-5">
            <motion.button 
              className="w-52 xs:w-48 sm:w-52 md:w-56 py-2.5 xs:py-3 sm:py-3.5 bg-white text-[#000080] rounded-full text-sm xs:text-base font-bold shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              எங்களுடன் இணையுங்கள்
            </motion.button>
            
            <Link href={carouselImages[currentSlide].cta.link}>
              <motion.button 
                className="w-52 xs:w-48 sm:w-52 md:w-56 py-2.5 xs:py-3 sm:py-3.5 bg-transparent border-2 border-white/70 text-white rounded-full text-sm xs:text-base font-medium hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {carouselImages[currentSlide].cta.text}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      

      <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 left-0 right-0 flex justify-center z-30">
        <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 xs:px-4 xs:py-2 rounded-full">
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white w-8 xs:w-10 h-2 xs:h-2.5" 
                  : "bg-white/40 w-2 xs:w-2.5 h-2 xs:h-2.5 hover:bg-white/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      <NavigationArrows 
        onPrevClick={goToPrevSlide} 
        onNextClick={goToNextSlide} 
      />
      
      <motion.div 
        className="absolute bottom-12 xs:bottom-15 sm:bottom-18 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          const nextSection = document.getElementById('missionSection');
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

function NavigationArrows({ onPrevClick, onNextClick }: { onPrevClick: () => void, onNextClick: () => void }) {
  return (
    <>
      <motion.button 
        onClick={onPrevClick}
        className="absolute left-2 xs:left-4 sm:left-6 md:left-8 z-40 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 xs:p-3 backdrop-blur-sm border border-white/20"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button 
        onClick={onNextClick}
        className="absolute right-2 xs:right-4 sm:right-6 md:right-8 z-40 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 xs:p-3 backdrop-blur-sm border border-white/20"
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </>
  );
}
