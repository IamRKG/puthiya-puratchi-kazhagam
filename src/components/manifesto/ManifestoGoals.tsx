"use client";

import { motion } from "framer-motion";

const goals = [
  {
    id: 1,
    title: "பொருளாதார இலக்குகள்",
    points: [
      "வேலைவாய்ப்பு உருவாக்கம் மற்றும் தொழில் வளர்ச்சி",
      "விவசாயிகளின் வருமானம் இரட்டிப்பு",
      "சிறு மற்றும் நடுத்தர தொழில்களுக்கு ஊக்கம்",
      "அனைத்து மாவட்டங்களிலும் தொழில் வளர்ச்சி"
    ]
  },
  {
    id: 2,
    title: "சமூக இலக்குகள்",
    points: [
      "அனைவருக்கும் தரமான கல்வி",
      "மருத்துவ வசதிகள் மேம்பாடு",
      "பெண்கள் மேம்பாடு மற்றும் பாதுகாப்பு",
      "சமூக நலத்திட்டங்கள் விரிவாக்கம்"
    ]
  },
  {
    id: 3,
    title: "உள்கட்டமைப்பு இலக்குகள்",
    points: [
      "சாலைகள் மற்றும் பாலங்கள் மேம்பாடு",
      "குடிநீர் மற்றும் மின்சார வசதிகள்",
      "நகர்ப்புற மேம்பாடு திட்டங்கள்",
      "கிராமப்புற அடிப்படை வசதிகள்"
    ]
  },
  {
    id: 4,
    title: "சுற்றுச்சூழல் இலக்குகள்",
    points: [
      "மரம் நடும் திட்டங்கள்",
      "மாசு கட்டுப்பாடு",
      "நீர்நிலைகள் பாதுகாப்பு",
      "புதுப்பிக்கத்தக்க எரிசக்தி ஊக்குவிப்பு"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ManifestoGoals() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#000040] via-[#000060] to-[#000080] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            முக்கிய இலக்குகள்
          </h2>
          <p className="text-lg text-white/90">
            தமிழக மக்களின் வாழ்க்கைத் தரத்தை மேம்படுத்த எங்கள் திட்டங்கள்
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                {goal.title}
              </h3>
              <ul className="space-y-4">
                {goal.points.map((point, index) => (
                  <li key={index} className="flex items-start text-white/90 text-lg">
                    <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
