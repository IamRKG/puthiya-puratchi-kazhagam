"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants for consistent styling with other components
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

// Mission items with icons for visual enhancement
const missionItems = [
  {
    title: "சமூக நீதி",
    description: "அனைவருக்கும் சமத்துவம் மற்றும் நீதி வழங்குவதே எங்கள் முதன்மை நோக்கம்.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" // Shield icon
  },
  {
    title: "பொருளாதார வளர்ச்சி",
    description: "அனைத்து மக்களுக்கும் வேலைவாய்ப்பு மற்றும் பொருளாதார முன்னேற்றம்.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Currency icon
  },
  {
    title: "கல்வி மேம்பாடு",
    description: "அனைவருக்கும் தரமான கல்வி கிடைப்பதை உறுதி செய்தல்.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" // Academic cap icon
  },
  {
    title: "சுகாதார பாதுகாப்பு",
    description: "அனைத்து மக்களுக்கும் தரமான மருத்துவ சேவைகள் கிடைப்பதை உறுதி செய்தல்.",
    icon: "M4.5 12.75l6 6 9-13.5" // Health icon
  }
];

export default function MissionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-100">
      <motion.div 
        className="container mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#000080]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            எங்கள் நோக்கம்
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
            தமிழகத்தின் மக்களுக்காக நாங்கள் உறுதியுடன் செயல்படுகிறோம். எங்கள் கொள்கைகள் மற்றும் நோக்கங்கள் மக்களின் நலனுக்காக வடிவமைக்கப்பட்டுள்ளன.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {missionItems.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 ${
                hoveredIndex === index ? "transform -translate-y-2" : ""
              }`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "rgba(0, 0, 128, 0.2)"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-[#000080]/10 p-3 rounded-full inline-block">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-7 w-7 text-[#000080]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                </div>
                <motion.h3 
                  className="text-xl font-bold mb-3 text-[#000080]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 flex-grow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {item.description}
                </motion.p>
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
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-[#000080] text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 128, 0.3), 0 10px 10px -5px rgba(0, 0, 128, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            எங்கள் கொள்கைகளை அறிய
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
