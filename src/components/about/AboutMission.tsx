"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMission() {
  return (
    <motion.section 
      className="py-16 md:py-24 px-4 sm:px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#000080]">எங்கள் நோக்கம்</h2>
            
            <motion.div 
              className="h-1 w-20 bg-[#000080] rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            
            <p className="text-lg text-gray-700 mb-6">
              புதிய புரட்சி கழகத்தின் முதன்மை நோக்கம் தமிழகத்தின் அனைத்து மக்களுக்கும் சமத்துவம், நீதி மற்றும் வளமான வாழ்க்கையை உறுதி செய்வதாகும்.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              நாங்கள் சமூக நீதி, பொருளாதார வளர்ச்சி, கல்வி மேம்பாடு, சுகாதார வசதிகள் மற்றும் சுற்றுச்சூழல் பாதுகாப்பு ஆகியவற்றில் கவனம் செலுத்துகிறோம்.
            </p>
            
            <p className="text-lg text-gray-700">
              எங்கள் கொள்கைகள் மற்றும் திட்டங்கள் அனைத்தும் மக்களின் நலனை மையமாகக் கொண்டு வடிவமைக்கப்பட்டுள்ளன. தமிழகத்தின் பாரம்பரியத்தையும் கலாச்சாரத்தையும் பாதுகாத்து, அதே நேரத்தில் நவீன முறையில் முன்னேற்றத்தை நோக்கி பயணிப்பதே எங்கள் குறிக்கோள்.
            </p>
          </motion.div>
          
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about/mission.jpg"
              alt="எங்கள் நோக்கம்"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">தமிழகத்தின் எதிர்காலம்</h3>
              <p className="text-white/90">நம் மக்களின் வாழ்க்கைத் தரத்தை உயர்த்துவதே எங்கள் முதன்மை இலக்கு</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
