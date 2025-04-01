"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

// Timeline events
const historyEvents = [
  {
    year: "2018",
    title: "கழகத்தின் தோற்றம்",
    description: "புதிய புரட்சி கழகம் தமிழகத்தின் புதிய அரசியல் சக்தியாக உருவாக்கப்பட்டது. மக்களின் குரலாக செயல்படும் நோக்கத்துடன் தொடங்கப்பட்டது.",
    image: "/about/history-2018.jpg"
  },
  {
    year: "2019",
    title: "முதல் மாநாடு",
    description: "சென்னையில் கழகத்தின் முதல் மாநாடு நடைபெற்றது. இதில் கழகத்தின் கொள்கைகள் மற்றும் செயல்திட்டங்கள் அறிவிக்கப்பட்டன.",
    image: "/about/history-2019.png"
  },
  {
    year: "2020",
    title: "மாவட்ட அமைப்புகள்",
    description: "தமிழகம் முழுவதும் மாவட்ட அளவில் கழக அமைப்புகள் உருவாக்கப்பட்டன. கிராமப்புற மக்களின் குரலை கேட்கும் முயற்சிகள் தொடங்கப்பட்டன.",
    image: "/about/history-2020.jpg"
  },
  {
    year: "2021",
    title: "முதல் தேர்தல் பங்கேற்பு",
    description: "சட்டமன்றத் தேர்தலில் கழகம் முதல் முறையாக போட்டியிட்டது. மக்களிடையே நல்ல வரவேற்பைப் பெற்றது.",
    image: "/about/history-2021.jpg"
  },
  {
    year: "2022",
    title: "இளைஞர் அணி",
    description: "கழகத்தின் இளைஞர் அணி உருவாக்கப்பட்டு, இளைஞர்களை அரசியலில் ஈடுபடுத்தும் பணிகள் தொடங்கப்பட்டன.",
    image: "/about/history-2022.jpg"
  },
  {
    year: "2023",
    title: "விரிவாக்கம்",
    description: "கழகத்தின் உறுப்பினர் எண்ணிக்கை 1 லட்சத்தைத் தாண்டியது. கிராமப்புற பகுதிகளில் கழகத்தின் செல்வாக்கு அதிகரித்தது.",
    image: "/about/history-2023.jpg"
  }
];

export default function AboutHistory() {
  return (
    <motion.section 
      className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-0"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#000080]">எங்கள் வரலாறு</h2>
          
          <motion.div 
            className="h-1 w-20 bg-[#000080] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            புதிய புரட்சி கழகத்தின் தோற்றம் முதல் இன்று வரையிலான முக்கிய நிகழ்வுகள் மற்றும் மைல்கற்கள்.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#000080]/20 rounded-full"></div>
          
          <div className="space-y-24">
            {historyEvents.map((event, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                variants={itemVariants}
              >
                {/* Year marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-[#000080] text-white flex items-center justify-center font-bold shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {event.year}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} mb-8 md:mb-0`}>
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 inline-block"
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3 className="text-xl font-bold text-[#000080] mb-3">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </motion.div>
                </div>
                
                {/* Image */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <motion.div 
                    className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg"
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/50 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Final statement */}
        <motion.div 
          className="text-center mt-20 bg-[#000080]/10 p-8 rounded-2xl"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-[#000080] mb-4">எதிர்காலத்தை நோக்கி</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            புதிய புரட்சி கழகம் தொடர்ந்து வளர்ந்து வருகிறது. தமிழகத்தின் அனைத்து மக்களின் நலனுக்காகவும் செயல்படுவதே எங்கள் குறிக்கோள். எங்கள் பயணம் தொடரும்...
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
