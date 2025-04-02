"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

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

const upcomingEvents = [
  {
    id: 1,
    title: "பொதுக்கூட்டம்",
    date: "2024-02-15",
    time: "18:00",
    location: "சென்னை",
    description: "தமிழக மக்களின் நலன் குறித்த கலந்துரையாடல்",
    category: "மாநாடு"
  },
  {
    id: 2,
    title: "இளைஞர் சந்திப்பு",
    date: "2024-02-20",
    time: "10:00",
    location: "கோயம்புத்தூர்",
    description: "இளைஞர்களுக்கான வேலைவாய்ப்பு குறித்த விவாதம்",
    category: "இளைஞர் அணி"
  },
  {
    id: 3,
    title: "விவசாயிகள் கூட்டம்",
    date: "2024-02-25",
    time: "11:00",
    location: "தஞ்சாவூர்",
    description: "விவசாயிகளின் பிரச்சினைகள் குறித்த ஆலோசனை",
    category: "விவசாயம்"
  },
  {
    id: 4,
    title: "மகளிர் மாநாடு",
    date: "2024-03-01",
    time: "15:00",
    location: "மதுரை",
    description: "பெண்கள் முன்னேற்றத்திற்கான திட்டங்கள்",
    category: "மகளிர் அணி"
  },
  {
    id: 5,
    title: "தொழிலாளர் சந்திப்பு",
    date: "2024-03-05",
    time: "17:00",
    location: "திருச்சி",
    description: "தொழிலாளர் நல உரிமைகள் குறித்த விவாதம்",
    category: "தொழிலாளர்"
  },
  {
    id: 6,
    title: "கலை நிகழ்ச்சி",
    date: "2024-03-10",
    time: "18:30",
    location: "சேலம்",
    description: "கலைஞர்களின் கலை நிகழ்ச்சிகள்",
    category: "கலை & கலாச்சாரம்"
  }
];

export default function UpcomingEvents() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            எங்கள் கட்சியின் வரவிருக்கும் நிகழ்வுகளில் பங்கேற்று தமிழகத்தின் எதிர்காலத்தை வடிவமைக்க உங்களை அழைக்கிறோம்
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {upcomingEvents.map((event, index) => (
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
                  <span className="block text-2xl font-bold">{new Date(event.date).getDate()}</span>
                  <span className="block text-sm">{new Date(event.date).toLocaleString('ta-IN', { month: 'short' })}</span>
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-[#000080]">{event.title}</h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3 text-gray-600">
                    <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                      <svg className="w-4 h-4 mr-2 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          ))}        </motion.div>
      </div>
    </motion.section>
  );
}
