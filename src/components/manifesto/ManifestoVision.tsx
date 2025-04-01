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
    <section className="relative py-12 bg-gradient-to-br from-[#000066] via-[#000099] to-[#0000cc] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-6">
          <motion.div 
            className="w-full md:w-1/2 md:pr-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              எங்கள் தொலைநோக்குப் பார்வை
            </h2>
            
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                தமிழகத்தை உலகளவில் முன்னணி மாநிலமாக உருவாக்குவதே எங்களது குறிக்கோள்.
              </p>
              
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-full p-1.5 mr-3 mt-1 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90 group-hover:text-white transition-colors">{point}</span>
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
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/manifesto/vision.png"
                alt="தொலைநோக்குப் பார்வை"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
