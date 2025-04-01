"use client";

import { motion } from "framer-motion";

const goals = [
  {
    id: 1,
    title: "பொருளாதார இலக்குகள்",
    points: [
      "வேலைவாய்ப்பு உருவாக்கம்",
      "விவசாயிகளின் வருமானம் இரட்டிப்பு",
      "சிறு மற்றும் நடுத்தர தொழில்களுக்கு ஊக்கம்",
      "தொழில் வளர்ச்சி"
    ]
  },
  {
    id: 2,
    title: "சமூக இலக்குகள்",
    points: [
      "அனைவருக்கும் தரமான கல்வி",
      "மருத்துவ வசதிகள் மேம்பாடு",
      "பெண்கள் மேம்பாடு மற்றும் பாதுகாப்பு",
      "சமூக நலத்திட்டங்கள்"
    ]
  },
  {
    id: 3,
    title: "உள்கட்டமைப்பு இலக்குகள்",
    points: [
      "சாலைகள் மற்றும் பாலங்கள்",
      "குடிநீர் மற்றும் மின்சார வசதிகள்",
      "நகர்ப்புற மேம்பாடு",
      "கிராமப்புற வசதிகள்"
    ]
  },
  {
    id: 4,
    title: "சுற்றுச்சூழல் இலக்குகள்",
    points: [
      "மரம் நடும் திட்டங்கள்",
      "மாசு கட்டுப்பாடு",
      "நீர்நிலைகள் பாதுகாப்பு",
      "புதுப்பிக்கத்தக்க எரிசக்தி"
    ]
  }
];


export default function ManifestoGoals() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-[#000066] via-[#000099] to-[#0000cc] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            முக்கிய இலக்குகள்
          </h2>
          <p className="text-base sm:text-lg text-white/80">
            தமிழக மக்களின் வாழ்க்கைத் தரத்தை மேம்படுத்த எங்கள் திட்டங்கள்
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                {goal.title}
              </h3>
              <ul className="space-y-3">
                {goal.points.map((point, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-full p-1.5 mr-3 mt-1 group-hover/item:scale-110 transition-transform">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 group-hover/item:text-white transition-colors">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
