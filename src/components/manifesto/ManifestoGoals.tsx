"use client";

import { motion } from "framer-motion";

const goals = [
  {
    id: 1,
    title: "கல்வி",
    points: [
      "அனைத்து மாணவர்களுக்கும் தரமான கல்வி",
      "புதிய தொழில்நுட்ப பயிற்சி மையங்கள்",
      "வேலைவாய்ப்பு சார்ந்த திறன் மேம்பாடு",
      "இலவச கல்வி உதவித்தொகை"
    ]
  },
  {
    id: 2,
    title: "வேலைவாய்ப்பு",
    points: [
      "இளைஞர்களுக்கு வேலைவாய்ப்பு உருவாக்கம்",
      "தொழில் முனைவோர் ஊக்குவிப்பு",
      "புதிய தொழில் நிறுவனங்கள்",
      "திறன் மேம்பாட்டு பயிற்சிகள்"
    ]
  },
  {
    id: 3,
    title: "விவசாயம்",
    points: [
      "விவசாயிகளுக்கு நவீன தொழில்நுட்பம்",
      "விவசாய உற்பத்தி பெருக்கம்",
      "இயற்கை விவசாய ஊக்குவிப்பு",
      "விவசாய கடன் தள்ளுபடி"
    ]
  },
  {
    id: 4,
    title: "சுகாதாரம்",
    points: [
      "அனைவருக்கும் தரமான மருத்துவம்",
      "கிராமப்புற சுகாதார மேம்பாடு",
      "இலவச மருத்துவ காப்பீடு",
      "புதிய அரசு மருத்துவமனைகள்"
    ]
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

export default function ManifestoGoals() {
  return (
    <section className="py-16 md:py-24 bg-[#000080] relative overflow-hidden">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {goal.title}
              </h3>
              <ul className="space-y-3">
                {goal.points.map((point, index) => (
                  <li key={index} className="flex items-start text-white/90">
                    <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
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
