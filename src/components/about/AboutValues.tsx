"use client";

import { motion } from "framer-motion";

const coreValues = [
  {
    id: "unity",
    title: "ஒற்றுமை",
    description: "சாதி, மதம், மொழி வேறுபாடுகளைக் கடந்து அனைத்து தமிழர்களும் ஒன்றிணைந்து செயல்படுவதே எங்கள் முதல் கொள்கை.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">எங்கள் அடிப்படை மதிப்புகள்</h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-white/90 to-white/60 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mb-4 text-white/90 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90">
                {value.title}
              </h3>
              <p className="text-white/80 leading-relaxed group-hover:text-white/90">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-3">எங்கள் உறுதிமொழி</h3>
          <p className="text-white/90">
          &quot;தமிழகத்தின் மக்களுக்காக, தமிழகத்தின் மக்களால், தமிழகத்தின் மக்களே&quot; என்ற கொள்கையுடன் செயல்படுவதே எங்கள் உறுதிமொழி.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
