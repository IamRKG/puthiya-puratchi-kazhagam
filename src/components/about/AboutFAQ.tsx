"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    id: 1,
    question: "புதிய புரட்சி கழகத்தின் முக்கிய நோக்கங்கள் என்ன?",
    answer: "தமிழகத்தின் சமூக, பொருளாதார மற்றும் கலாச்சார மேம்பாட்டிற்காக செயல்படுவதே எங்கள் முக்கிய நோக்கம். சமூக நீதி, சமத்துவம், மற்றும் வளர்ச்சி ஆகியவற்றை உறுதி செய்வதற்காக பாடுபடுகிறோம்."
  },
  {
    id: 2,
    question: "கழகத்தில் எப்படி உறுப்பினராக இணையலாம்?",
    answer: "எங்கள் இணையதளத்தில் உள்ள விண்ணப்பத்தை பூர்த்தி செய்து சமர்ப்பிக்கலாம். அல்லது உங்கள் பகுதியில் உள்ள கழக அலுவலகத்தை நேரில் சென்று சந்திக்கலாம். உறுப்பினர் சேர்க்கை குறித்த விவரங்களுக்கு எங்களை தொடர்பு கொள்ளவும்."
  },
  {
    id: 3,
    question: "கழகத்தின் கொள்கைகள் மற்றும் திட்டங்கள் பற்றி எப்படி அறிந்து கொள்வது?",
    answer: "எங்கள் கொள்கை விளக்க கையேடு மற்றும் செயல்திட்ட அறிக்கைகளை இணையதளத்தில் பார்வையிடலாம். மேலும் எங்கள் பொதுக்கூட்டங்கள் மற்றும் கலந்துரையாடல் நிகழ்வுகளில் கலந்து கொண்டு நேரடியாக தெரிந்து கொள்ளலாம்."
  },
  {
    id: 4,
    question: "இளைஞர்களுக்கான வாய்ப்புகள் என்னென்ன உள்ளன?",
    answer: "இளைஞர் அணியில் இணைந்து செயல்படலாம். தலைமைப் பயிற்சி, அரசியல் கல்வி, சமூக சேவை போன்ற பல்வேறு திட்டங்களில் பங்கேற்கலாம். இளைஞர்களின் திறன் மேம்பாட்டிற்கான பயிற்சிகளும் வழங்கப்படுகின்றன."
  },
  {
    id: 5,
    question: "கழகத்தின் சமூக சேவை திட்டங்களில் எப்படி பங்கேற்பது?",
    answer: "எங்கள் தன்னார்வலர் குழுவில் இணையலாம். கல்வி உதவி, சுகாதார முகாம்கள், சுற்றுச்சூழல் பாதுகாப்பு போன்ற பல்வேறு சமூக சேவை திட்டங்களில் பங்கேற்கலாம். உங்கள் பகுதியில் உள்ள கழக பிரதிநிதிகளை தொடர்பு கொள்ளவும்."
  },
  {
    id: 6,
    question: "கழகத்திற்கு நன்கொடை அளிக்க முடியுமா?",
    answer: "ஆம், எங்கள் வலைதளத்தில் உள்ள பாதுகாப்பான ஆன்லைன் பேமெண்ட் முறை மூலம் நன்கொடை அளிக்கலாம். அல்லது நேரடியாக கழக அலுவலகத்தில் செலுத்தலாம். அனைத்து நன்கொடைகளுக்கும் முறையான ரசீது வழங்கப்படும்."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function AboutFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <motion.section 
      className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 z-0"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#000080]">அடிக்கடி கேட்கப்படும் கேள்விகள்</h2>
          
          <motion.div 
            className="h-1 w-20 bg-[#000080] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            புதிய புரட்சி கழகம் குறித்த பொதுவான கேள்விகளுக்கான விளக்கங்களை இங்கே காணலாம்.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-[#000080]">{item.question}</span>
                <motion.span
                  animate={{ rotate: openItem === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#000080]"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact section */}
        <motion.div 
          className="mt-16 text-center bg-[#000080]/5 p-8 rounded-2xl border border-[#000080]/10"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-[#000080] mb-4">
            உங்கள் கேள்விகளுக்கு பதில் கிடைக்கவில்லையா?
          </h3>
          <p className="text-gray-700 mb-6">
            எங்களை நேரடியாக தொடர்பு கொள்ளவும். உங்கள் சந்தேகங்களை தெளிவுபடுத்த நாங்கள் தயாராக உள்ளோம்.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-[#000080] text-white rounded-full font-medium hover:bg-[#0000b3] transition-colors"
          >
            தொடர்பு கொள்ள
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
