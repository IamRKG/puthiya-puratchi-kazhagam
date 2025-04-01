"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const visionPoints = [
  {
    id: 1,
    title: "சமூக நீதி",
    description: "அனைத்து மக்களுக்கும் சமத்துவம் மற்றும் நீதி வழங்குவதே எங்கள் முதன்மை நோக்கம்.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: 2,
    title: "பொருளாதார வளர்ச்சி",
    description: "தமிழக மக்களின் வாழ்க்கைத் தரத்தை உயர்த்துவதற்கான திட்டங்களை செயல்படுத்துதல்.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "கல்வி மேம்பாடு",
    description: "அனைத்து மாணவர்களுக்கும் தரமான கல்வி கிடைப்பதை உறுதி செய்தல்.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      </svg>
    )
  }
];

export default function LeadershipVision() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#000066]/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12">
          {/* Left side with vision points */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#000066] mb-4">தலைமையின் தொலைநோக்கு</h2>
            <motion.div 
              className="h-1 w-16 bg-[#000066] rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            
            <div className="space-y-5">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start p-5 bg-gradient-to-r from-[#000066]/5 to-transparent rounded-xl hover:from-[#000066]/10 transition-all"
                >
                  <div className="text-[#000066] mr-4 mt-1">{point.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#000066] mb-2">{point.title}</h3>
                    <p className="text-[#000066]/80 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side with image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/leaders/leader1.png"
                alt="தலைமையின் தொலைநோக்கு"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <blockquote className="text-xl md:text-2xl font-medium italic mb-3 text-white">
                  "தமிழகத்தின் எதிர்காலத்தை மாற்றியமைப்போம்"
                </blockquote>
                <p className="text-white/90 text-sm">- கழகத் தலைவர்</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
