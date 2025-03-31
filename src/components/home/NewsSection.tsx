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

export default function NewsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const newsItems = [
    {
      id: 1,
      image: "/news/news-1.png",
      date: "மே 15, 2025",
      title: "கட்சியின் புதிய திட்டங்கள் அறிவிப்பு",
      summary: "புதிய புரட்சி கழகம் அடுத்த ஆண்டுக்கான திட்டங்களை அறிவித்தது."
    },
    {
      id: 2,
      image: "/news/news-1.png",
      date: "ஏப்ரல் 28, 2025",
      title: "மாநில மாநாடு வெற்றிகரமாக நிறைவு",
      summary: "சென்னையில் நடைபெற்ற மாநில மாநாடு வெற்றிகரமாக நிறைவடைந்தது."
    },
    {
      id: 3,
      image: "/news/news-1.png",
      date: "மார்ச் 10, 2025",
      title: "விவசாயிகள் நலனுக்கான புதிய திட்டம்",
      summary: "விவசாயிகள் நலனுக்கான புதிய திட்டத்தை கட்சி அறிவித்துள்ளது."
    }
  ];

  return (
    <motion.section 
      className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white"
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
            சமீபத்திய செய்திகள்
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
            எங்கள் கட்சியின் சமீபத்திய செயல்பாடுகள் மற்றும் முக்கிய அறிவிப்புகளை இங்கே காணலாம்.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "rgba(0, 0, 128, 0.2)"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative h-52 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPYe0YQ1AAAAABJRU5ErkJggg=="
                    className="transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#000080] text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  {item.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#000080]">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                
                <div className="flex justify-between items-center">
                  <Link href={`/news/${item.id}`} className="group inline-flex items-center">
                    <span className="text-[#000080] font-medium group-hover:underline">மேலும் படிக்க</span>
                    <motion.span 
                      className="inline-block ml-1"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </Link>
                  
                  <motion.div 
                    className={`h-1 w-0 bg-[#000080] rounded-full transition-all duration-500 ${
                      hoveredIndex === index ? "w-12" : "w-0"
                    }`}
                    animate={{ width: hoveredIndex === index ? "3rem" : "0rem" }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
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
          <Link href="/news">
            <motion.button 
              className="bg-[#000080] text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 128, 0.3), 0 10px 10px -5px rgba(0, 0, 128, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              அனைத்து செய்திகளையும் காண
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
