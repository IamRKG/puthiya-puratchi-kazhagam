"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const galleryImages = [
  {
    id: 1,
    src: "/gallery/event1.png",
    alt: "மாநில மாநாடு",
    caption: "சென்னை மாநில மாநாடு - 2024"
  },
  {
    id: 2,
    src: "/gallery/event2.png",
    alt: "இளைஞர் சந்திப்பு",
    caption: "கோவை இளைஞர் சந்திப்பு நிகழ்வு"
  },
  {
    id: 3,
    src: "/gallery/event3.png",
    alt: "விவசாயிகள் கூட்டம்",
    caption: "தஞ்சாவூர் விவசாயிகள் மாநாடு"
  },
  {
    id: 4,
    src: "/gallery/event4.png",
    alt: "மகளிர் மாநாடு",
    caption: "மதுரை மகளிர் மாநாடு"
  },
  {
    id: 5,
    src: "/gallery/event5.png",
    alt: "கலை நிகழ்ச்சி",
    caption: "திருச்சி கலை & கலாச்சார விழா"
  },
  {
    id: 6,
    src: "/gallery/event6.png",
    alt: "தொழிலாளர் கூட்டம்",
    caption: "சேலம் தொழிலாளர் உரிமைகள் மாநாடு"
  },
  {
    id: 7,
    src: "/gallery/event7.png",
    alt: "மாணவர் சந்திப்பு",
    caption: "திருநெல்வேலி மாணவர் திறன் மேம்பாட்டு முகாம்"
  },
  {
    id: 8,
    src: "/gallery/event8.png",
    alt: "பொதுக்கூட்டம்",
    caption: "ஈரோடு பொதுக்கூட்டம்"
  },
  {
    id: 9,
    src: "/gallery/event9.png",
    alt: "கிராம சந்திப்பு",
    caption: "கிராம மக்கள் சந்திப்பு நிகழ்வு"
  },
  {
    id: 10,
    src: "/gallery/event10.png",
    alt: "சுற்றுச்சூழல் விழிப்புணர்வு",
    caption: "சுற்றுச்சூழல் பாதுகாப்பு விழிப்புணர்வு நிகழ்வு"
  },
  {
    id: 11,
    src: "/gallery/event11.png",
    alt: "இளைஞர் விளையாட்டு போட்டி",
    caption: "மாநில அளவிலான விளையாட்டு போட்டிகள்"
  },
  {
    id: 12,
    src: "/gallery/event12.png",
    alt: "மருத்துவ முகாம்",
    caption: "இலவச மருத்துவ முகாம்"
  }
];

export default function EventsGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
        <motion.div 
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#000080] mb-3 xs:mb-4">புகைப்பட தொகுப்பு</h2>
          <motion.div 
            className="h-1 w-16 xs:w-20 bg-[#000080] mx-auto rounded-full mb-4 xs:mb-5 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-base xs:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            எங்கள் நிகழ்வுகளின் மறக்க முடியாத தருணங்கள்
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative aspect-square rounded-lg xs:rounded-xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/90 via-[#000080]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4">
                  <h3 className="text-white font-medium text-base xs:text-lg mb-0.5 xs:mb-1">{image.alt}</h3>
                  <p className="text-white/90 text-xs xs:text-sm line-clamp-2">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 xs:p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 text-white/80 hover:text-white z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              className="relative w-full max-h-[80vh] aspect-[4/3] xs:aspect-[16/9] rounded-lg xs:rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3 xs:p-4">
                <h3 className="text-white font-medium text-lg xs:text-xl mb-1">{selectedImage.alt}</h3>
                <p className="text-white/90 text-sm xs:text-base">{selectedImage.caption}</p>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs xs:text-sm">
              மூட கிளிக் செய்யவும்
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}