"use client";

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

export default function EventsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const events = [
    {
      id: 1,
      date: "25",
      month: "ஜூன்",
      title: "மாவட்ட செயலாளர்கள் கூட்டம்",
      time: "காலை 10:00 மணி",
      location: "கட்சி தலைமை அலுவலகம், சென்னை",
      description: "அனைத்து மாவட்ட செயலாளர்களும் கலந்து கொள்ள வேண்டும்."
    },
    {
      id: 2,
      date: "30",
      month: "ஜூன்",
      title: "பொதுமக்கள் குறைதீர்ப்பு முகாம்",
      time: "காலை 9:00 மணி",
      location: "திருச்சி மாவட்டம்",
      description: "பொதுமக்களின் குறைகளை கேட்டறிந்து தீர்வு காணும் முகாம்."
    },
    {
      id: 3,
      date: "05",
      month: "ஜூலை",
      title: "இளைஞர் அணி மாநாடு",
      time: "காலை 11:00 மணி",
      location: "கோயம்புத்தூர்",
      description: "இளைஞர்களின் பங்களிப்பை அதிகரிக்கும் வகையில் நடைபெறும் மாநாடு."
    },
    {
      id: 4,
      date: "15",
      month: "ஜூலை",
      title: "பொதுக்குழு கூட்டம்",
      time: "காலை 10:30 மணி",
      location: "மதுரை",
      description: "கட்சியின் அடுத்த கட்ட செயல்பாடுகள் குறித்த ஆலோசனை கூட்டம்."
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
            வரவிருக்கும் நிகழ்வுகள்
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
            எங்கள் கட்சியின் வரவிருக்கும் நிகழ்வுகளில் பங்கேற்று தமிழகத்தின் எதிர்காலத்தை வடிவமைக்க உங்களை அழைக்கிறோம்.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "rgba(0, 0, 128, 0.2)"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <motion.div 
                  className="bg-[#000080] text-white p-4 rounded-xl text-center min-w-[90px] h-[90px] flex flex-col justify-center items-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="block text-2xl font-bold">{event.date}</span>
                  <span className="block text-sm">{event.month}</span>
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-[#000080]">{event.title}</h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3 text-gray-600">
                    <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                      <svg className="w-4 h-4 mr-2 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <Link href={`/events/${event.id}`} className="group inline-flex items-center">
                      <span className="text-[#000080] font-medium group-hover:underline">மேலும் விவரங்கள்</span>
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
                      className="h-1 bg-[#000080] rounded-full transition-all duration-500"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredIndex === index ? "3rem" : "0rem" }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
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
          <Link href="/events">
            <motion.button 
              className="bg-[#000080] text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 128, 0.3), 0 10px 10px -5px rgba(0, 0, 128, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              அனைத்து நிகழ்வுகளையும் காண
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
