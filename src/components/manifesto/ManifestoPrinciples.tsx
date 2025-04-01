"use client";

import { motion } from "framer-motion";

const principles = [
  {
    id: 1,
    title: "சமூக நீதி",
    description: "அனைத்து மக்களுக்கும் சமமான வாய்ப்புகளும் உரிமைகளும்",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "பொருளாதார வளர்ச்சி",
    description: "அனைவருக்கும் வேலைவாய்ப்பும் பொருளாதார முன்னேற்றமும்",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "கல்வி மேம்பாடு",
    description: "தரமான கல்வியும் திறன் மேம்பாட்டு வாய்ப்புகளும்",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 4,
    title: "சுற்றுச்சூழல் பாதுகாப்பு",
    description: "இயற்கை வளங்களை பாதுகாத்து நிலைத்த வளர்ச்சி",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ManifestoPrinciples() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#000040] via-[#000060] to-[#000080] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            அடிப்படை கொள்கைகள்
          </h2>
          <p className="text-lg text-white/90">
            தமிழக மக்களின் நலனுக்காக நாங்கள் உறுதியாக கடைபிடிக்கும் கொள்கைகள்
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 shadow-xl group"
            >
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center group-hover:from-white/20 group-hover:to-white/10">
                  {principle.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                {principle.title}
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
