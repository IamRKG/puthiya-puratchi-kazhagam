"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const historyEvents = [
  {
    year: "2018",
    title: "கழகத்தின் தோற்றம்",
    description: "புதிய புரட்சி கழகம் தமிழகத்தின் புதிய அரசியல் சக்தியாக உருவாக்கப்பட்டது.",
    image: "/about/history-2018.jpg"
  },
  {
    year: "2019",
    title: "முதல் மாநாடு",
    description: "சென்னையில் கழகத்தின் முதல் மாநாடு நடைபெற்றது.",
    image: "/about/history-2019.png"
  },
  {
    year: "2020",
    title: "மாவட்ட அமைப்புகள்",
    description: "தமிழகம் முழுவதும் மாவட்ட அளவில் கழக அமைப்புகள் உருவாக்கப்பட்டன.",
    image: "/about/history-2020.jpg"
  },
  {
    year: "2021",
    title: "முதல் தேர்தல்",
    description: "சட்டமன்றத் தேர்தலில் கழகம் முதல் முறையாக போட்டியிட்டது.",
    image: "/about/history-2021.jpg"
  }
];

export default function AboutHistory() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#000066] via-[#000099] to-[#0000cc] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">எங்கள் வரலாறு</h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-white/90 to-white/60 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-white/20"></div>

          {historyEvents.map((event, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col sm:flex-row items-start mb-12 sm:mb-16 relative ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-glow"></div>

              <div className={`pl-12 sm:pl-0 ${
                index % 2 === 0 ? 'sm:pr-12 sm:ml-auto sm:w-1/2' : 'sm:pl-12 sm:w-1/2'
              }`}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center text-white font-bold">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{event.title}</h3>
                  </div>
                  
                  <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/50 to-transparent"></div>
                  </div>
                  
                  <p className="text-white/80">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl backdrop-blur-sm max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-3">எதிர்காலத்தை நோக்கி</h3>
          <p className="text-white/80">
            தமிழகத்தின் அனைத்து மக்களின் நலனுக்காகவும் செயல்படுவதே எங்கள் குறிக்கோள். எங்கள் பயணம் தொடரும்...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
