"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Array of placeholder images for the carousel
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

// Improved animation variants with better image visibility
const imageVariants = {
  enter: { 
    opacity: 0, 
    scale: 1.1
  },
  center: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1.5, 
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1.05,
    transition: { 
      duration: 0.8, 
      ease: "easeInOut" 
    }
  }
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  // Pause autoplay when user interacts with carousel
  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  // Navigation functions
  const goToNextSlide = useCallback(() => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, [pauseAutoPlay]);

  const goToPrevSlide = useCallback(() => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }, [pauseAutoPlay]);

  const goToSlide = useCallback((index:any) => {
    pauseAutoPlay();
    setCurrentSlide(index);
  }, [pauseAutoPlay]);

  return (
    <section 
      className="relative h-[75vh] md:h-[90vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background gradient overlay - adjusted for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000050]/70 to-[#0000a0]/70 z-10"></div>
      
      {/* Background carousel with improved visibility */}
      <AnimatePresence mode="wait">
        {carouselImages.map((image, index) => (
          index === currentSlide && (
            <motion.div 
              key={index} 
              className="absolute inset-0 z-0 flex items-center justify-center"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                style={{ 
                  objectFit: "cover", 
                  objectPosition: "center" 
                }}
                priority={index === 0}
                className="filter brightness-75" // Increased brightness for better visibility
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-20"></div>
      
      {/* Top and bottom gradients for better text readability */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-20"></div>

      {/* Carousel navigation arrows */}
      <motion.button 
        onClick={goToPrevSlide}
        className="absolute left-6 md:left-10 z-30 bg-white/15 hover:bg-white/25 text-white rounded-full p-3 md:p-4 backdrop-blur-sm border border-white/20"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button 
        onClick={goToNextSlide}
        className="absolute right-6 md:right-10 z-30 bg-white/15 hover:bg-white/25 text-white rounded-full p-3 md:p-4 backdrop-blur-sm border border-white/20"
        aria-label="Next slide"
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
        <div className="flex items-center space-x-2 bg-[#000040]/40 backdrop-blur-sm px-4 py-2 rounded-full">
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white w-10 h-2.5" 
                  : "bg-white/40 w-2.5 h-2.5 hover:bg-white/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-30 relative">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Slide-specific content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <motion.h2 
                className="text-xl md:text-2xl font-medium text-white mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {carouselImages[currentSlide].title}
              </motion.h2>
              <motion.p
                className="text-lg text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {carouselImages[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            புதிய புரட்சி கழகம்
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 md:mb-10 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            தமிழகத்தின் புதிய நம்பிக்கை
          </motion.p>
          
          {/* Button container */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button 
              className="bg-white text-[#000080] px-8 py-3.5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-white/95 transition-all w-64 sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              எங்களுடன் இணையுங்கள்
            </motion.button>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={carouselImages[currentSlide].cta.link}>
                  <motion.button 
                    className="bg-transparent border-2 border-white/70 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {carouselImages[currentSlide].cta.text}
                  </motion.button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Slide counter */}
      <div className="absolute top-8 right-8 z-30 bg-[#000040]/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        <span className="text-white font-bold">{currentSlide + 1}</span>
        <span className="mx-1 text-white/70">/</span>
        <span className="text-white/70">{carouselImages.length}</span>
      </div>
    </section>
  );
}
