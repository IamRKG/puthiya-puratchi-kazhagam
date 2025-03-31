"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants consistent with other components
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

export default function LeadersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const leaders = [
    {
      id: 1,
      image: "/leaders/leader.png",
      name: "",
      position: "தலைவர்",
      quote: "தமிழகத்தின் எதிர்காலம் நம் கைகளில் உள்ளது."
    },
    {
      id: 2,
      image: "/leaders/leader.png",
      name: "",
      position: "பொதுச் செயலாளர்",
      quote: "ஒற்றுமையே நம் வலிமை."
    },
    {
      id: 3,
      image: "/leaders/leader.png",
      name: "",
      position: "பொருளாளர்",
      quote: "பொருளாதார சுதந்திரமே உண்மையான சுதந்திரம்."
    },
    {
      id: 4,
      image: "/leaders/leader.png",
      name: "",
      position: "இளைஞர் அணி தலைவர்",
      quote: "இளைஞர்களின் சக்தியே நாட்டின் எதிர்காலம்."
    }
  ];

  return (
    <motion.section 
      className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#000080]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            எங்கள் தலைவர்கள்
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-[#000080] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            புதிய புரட்சி கழகத்தின் தலைவர்கள் தமிழகத்தின் மேம்பாட்டிற்காக அயராது உழைக்கும் அர்ப்பணிப்புள்ள தலைவர்கள்.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "rgba(0, 0, 128, 0.2)",
                y: -5
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPYe0YQ1AAAAABJRU5ErkJggg=="
                    className="transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                    <p className="text-white/80 text-sm">{leader.position}</p>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">&quot;{leader.quote}&quot;</p>
                
                <motion.div 
                  className={`h-1 w-0 bg-[#000080] rounded-full mt-4 transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                  animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/leaders">
            <motion.button 
              className="bg-[#000080] text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 128, 0.3), 0 10px 10px -5px rgba(0, 0, 128, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              அனைத்து தலைவர்களையும் காண
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
