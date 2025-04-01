"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMission() {
  return (
    <motion.section 
      className="py-12 bg-gradient-to-br from-[#000066] via-[#000099] to-[#0000cc] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">எங்கள் நோக்கம்</h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-white/90 to-white/60 rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            
            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed">
                புதிய புரட்சி கழகத்தின் முதன்மை நோக்கம் தமிழகத்தின் அனைத்து மக்களுக்கும் சமத்துவம், நீதி மற்றும் வளமான வாழ்க்கையை உறுதி செய்வதாகும்.
              </p>
              
              <p className="text-white/90 leading-relaxed">
                நாங்கள் சமூக நீதி, பொருளாதார வளர்ச்சி, கல்வி மேம்பாடு, சுகாதார வசதிகள் மற்றும் சுற்றுச்சூழல் பாதுகாப்பு ஆகியவற்றில் கவனம் செலுத்துகிறோம்.
              </p>
              
              <p className="text-white/90 leading-relaxed">
                எங்கள் கொள்கைகள் மற்றும் திட்டங்கள் அனைத்தும் மக்களின் நலனை மையமாகக் கொண்டு வடிவமைக்கப்பட்டுள்ளன.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about/mission.jpg"
              alt="எங்கள் நோக்கம்"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">தமிழகத்தின் எதிர்காலம்</h3>
              <p className="text-white/90">நம் மக்களின் வாழ்க்கைத் தரத்தை உயர்த்துவதே எங்கள் முதன்மை இலக்கு</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
