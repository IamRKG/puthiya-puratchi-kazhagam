"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants consistent with other components
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

// Core values data
const coreValues = [
  {
    id: "unity",
    title: "ஒற்றுமை",
    description: "சாதி, மதம், மொழி வேறுபாடுகளைக் கடந்து அனைத்து தமிழர்களும் ஒன்றிணைந்து செயல்படுவதே எங்கள் முதல் கொள்கை.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: "equality",
    title: "சமத்துவம்",
    description: "அனைத்து மக்களுக்கும் சம வாய்ப்புகளும் உரிமைகளும் கிடைக்க வேண்டும் என்பதில் நாங்கள் உறுதியாக இருக்கிறோம்.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: "progress",
    title: "முன்னேற்றம்",
    description: "தமிழகத்தின் தொழில், விவசாயம், கல்வி மற்றும் சுகாதாரத் துறைகளில் தொடர்ச்சியான முன்னேற்றத்திற்காக பாடுபடுகிறோம்.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: "transparency",
    title: "வெளிப்படைத்தன்மை",
    description: "அரசியலில் வெளிப்படைத்தன்மை மற்றும் பொறுப்புணர்வு மிகவும் அவசியம். எங்கள் செயல்பாடுகள் அனைத்தும் வெளிப்படையாக இருக்கும்.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "environment",
    title: "சுற்றுச்சூழல் பாதுகாப்பு",
    description: "இயற்கை வளங்களைப் பாதுகாத்து, நிலைத்த வளர்ச்சியை உறுதி செய்வதே எங்கள் முக்கிய நோக்கங்களில் ஒன்று.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "culture",
    title: "கலாச்சார பாதுகாப்பு",
    description: "தமிழ் மொழி, கலை, பண்பாடு மற்றும் பாரம்பரியத்தைப் பாதுகாத்து வளர்ப்பதில் நாங்கள் உறுதியாக இருக்கிறோம்.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export default function AboutValues() {
  const [activeValue, setActiveValue] = useState<string | null>(null);

  return (
    <motion.section 
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#000080] text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">எங்கள் அடிப்படை மதிப்புகள்</h2>
          
          <motion.div 
            className="h-1 w-20 bg-white mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            புதிய புரட்சி கழகத்தின் அடிப்படை மதிப்புகள் மற்றும் கொள்கைகள் எங்கள் அனைத்து செயல்பாடுகளையும் வழிநடத்துகின்றன.
          </p>
        </motion.div>
        
        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coreValues.map((value) => (
            <motion.div 
              key={value.id}
              className={`bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 transition-all duration-300 ${
                activeValue === value.id ? 'bg-white/20 scale-105 shadow-xl' : 'hover:bg-white/15 hover:scale-102'
              }`}
              variants={itemVariants}
              onMouseEnter={() => setActiveValue(value.id)}
              onMouseLeave={() => setActiveValue(null)}
              whileHover={{ y: -5 }}
            >
              <div className="text-white/90 mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Values statement */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 inline-block max-w-3xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4">எங்கள் உறுதிமொழி</h3>
            <p className="text-lg text-white/90">
            &quot;தமிழகத்தின் மக்களுக்காக, தமிழகத்தின் மக்களால், தமிழகத்தின் மக்களே&quot; என்ற கொள்கையுடன் செயல்படுவதே எங்கள் உறுதிமொழி.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
