"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const visionPoints = [
  "அனைவருக்கும் சமமான வாய்ப்புகள்",
  "பொருளாதார வளர்ச்சி மற்றும் வேலைவாய்ப்பு",
  "சமூக நீதி மற்றும் சமத்துவம்",
  "நவீன தொழில்நுட்ப வளர்ச்சி",
  "கல்வி மற்றும் திறன் மேம்பாடு"
];

export default function ManifestoVision() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#000040] via-[#000060] to-[#000080] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <motion.div 
            className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              எங்கள் தொலைநோக்குப் பார்வை
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                தமிழகத்தை உலகளவில் முன்னணி மாநிலமாக உருவாக்குவதே எங்களது குறிக்கோள். அனைத்து மக்களும் கல்வி, வேலைவாய்ப்பு, சுகாதாரம் மற்றும் வாழ்க்கைத் தரத்தில் சிறந்து விளங்க வேண்டும்.
              </p>
              
              <ul className="space-y-4">
                {visionPoints.map((point, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-full p-1 mr-4 mt-1">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-white/90">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/manifesto/vision.png"
                alt="தொலைநோக்குப் பார்வை"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
