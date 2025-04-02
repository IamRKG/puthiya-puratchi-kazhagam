"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
};

const pastEvents = [
  {
    id: 1,
    title: "மாநில மாநாடு",
    date: "2024-01-10",
    location: "மதுரை",
    description: "தமிழக மாநில அளவிலான கட்சி மாநாடு - மக்கள் நலத்திட்டங்கள் அறிவிப்பு",
    image: "/events/conference.jpg",
    attendees: 1500,
  },
  {
    id: 2,
    title: "இளைஞர் திறன் மேம்பாட்டு முகாம்",
    date: "2024-01-05",
    location: "கோயம்புத்தூர்",
    description: "இளைஞர்களுக்கான வேலைவாய்ப்பு பயிற்சி மற்றும் திறன் மேம்பாட்டு முகாம்",
    image: "/events/youth-camp.jpg",
    attendees: 800,
  },
  {
    id: 3,
    title: "விவசாயிகள் மாநாடு",
    date: "2023-12-20",
    location: "தஞ்சாவூர்",
    description: "விவசாயிகளுக்கான சிறப்பு மானியங்கள் மற்றும் உதவித்திட்டங்கள் அறிவிப்பு",
    image: "/events/farmers-meet.jpg",
    attendees: 2000,
  },
  {
    id: 4,
    title: "மகளிர் சுயஉதவி குழு மாநாடு",
    date: "2023-12-15",
    location: "திருச்சி",
    description: "மகளிர் சுய உதவி குழுக்களுக்கான கடனுதவி மற்றும் தொழில் ஆலோசனை",
    image: "/events/women-conference.jpg",
    attendees: 1200,
  },
  {
    id: 5,
    title: "கல்வி உதவித்தொகை விழா",
    date: "2023-12-01",
    location: "சேலம்",
    description: "மாணவர்களுக்கான கல்வி உதவித்தொகை வழங்கும் விழா",
    image: "/events/education-event.jpg",
    attendees: 500,
  },
  {
    id: 6,
    title: "தொழிலாளர் உரிமை மாநாடு",
    date: "2023-11-25",
    location: "சென்னை",
    description: "தொழிலாளர் நல உரிமைகள் மற்றும் பாதுகாப்பு குறித்த மாநாடு",
    image: "/events/workers-rights.jpg",
    attendees: 1800,
  }
];

export default function PastEvents() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000080] mb-4">முந்தைய நிகழ்வுகள்</h2>
          <motion.div 
            className="h-1 w-20 bg-[#000080] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            எங்கள் வெற்றிகரமான நிகழ்வுகளின் தொகுப்பு - மக்களுடன் இணைந்த பயணம்
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pastEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm bg-[#000080]/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {new Date(event.date).toLocaleDateString('ta-IN')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#000080] mb-3 group-hover:text-[#000080]/80 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                      </path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                      </path>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                      </path>
                    </svg>
                    <span>{event.attendees.toLocaleString()}</span>
                  </div>
                </div>

                <Link href={`/events/${event.id}`} className="mt-4 inline-flex items-center text-[#000080] font-medium group">
                  <span>மேலும் விவரங்கள்</span>
                  <motion.span 
                    className="ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
