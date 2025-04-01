"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ManifestoVision() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Left side content */}
          <motion.div 
            className="md:w-1/2 md:pr-12 mt-12 md:mt-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000080] mb-6">
              எங்கள் தொலைநோக்குப் பார்வை
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                தமிழகத்தை உலகளவில் முன்னணி மாநிலமாக உருவாக்குவதே எங்களது குறிக்கோள். அனைத்து மக்களும் கல்வி, வேலைவாய்ப்பு, சுகாதாரம் மற்றும் வாழ்க்கைத் தரத்தில் சிறந்து விளங்க வேண்டும்.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#000080] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>அனைவருக்கும் சமமான வாய்ப்புகள்</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#000080] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>பொருளாதார வளர்ச்சி மற்றும் வேலைவாய்ப்பு</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#000080] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>சமூக நீதி மற்றும் சமத்துவம்</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#000080] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>நவீன தொழில்நுட்ப வளர்ச்சி</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/manifesto/vision.png"
                alt="தொலைநோக்குப் பார்வை"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
