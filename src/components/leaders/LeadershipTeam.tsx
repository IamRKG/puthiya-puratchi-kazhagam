"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leaders = [
  {
    id: 1,
    name: "தலைவர்",
    role: "கழகத் தலைவர்",
    image: "/leaders/leader1.png",
    bio: "25 ஆண்டுகளுக்கும் மேலாக சமூக சேவையில் ஈடுபட்டுள்ளார். தமிழக மக்களின் நலனுக்காக பாடுபடும் முன்னோடி.",
    achievements: ["சிறந்த சமூக சேவையாளர் விருது", "மக்கள் நலத்திட்டங்கள்"],
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/username"
    }
  },
  {
    id: 2,
    name: "செயலாளர்",
    role: "பொதுச் செயலாளர்",
    image: "/leaders/leader1.png", 
    bio: "20 ஆண்டுகால அரசியல் அனுபவம். கழகத்தின் வளர்ச்சிக்கு பெரும் பங்காற்றியவர்.",
    achievements: ["சிறந்த நிர்வாகி விருது", "மாவட்ட மேம்பாட்டு திட்டங்கள்"],
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/facebook"
    }
  },
  {
    id: 3,
    name: "தலைவர்",
    role: "மகளிர் அணி தலைவர்",
    image: "/leaders/leader1.png",
    bio: "பெண்கள் மேம்பாட்டிற்காக பாடுபடும் முன்னோடி. 15 ஆண்டுகால சமூக சேவை அனுபவம்.",
    achievements: ["பெண்கள் மேம்பாட்டு விருது", "சமூக நல திட்டங்கள்"],
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/username"
    }
  }
];

export default function LeadershipTeam() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#000066] via-[#000099] to-[#0000cc] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">தலைமைப் பொறுப்பாளர்கள்</h2>
          <motion.div 
            className="h-1 w-16 bg-gradient-to-r from-white/90 to-white/60 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/90 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-white/90 text-sm">{leader.role}</p>
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                  {Object.entries(leader.socialMedia).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <SocialIcon platform={platform} />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-white/80 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                
                <div className="space-y-2">
                  {leader.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center text-white/90 text-sm">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="mt-6 w-full bg-white text-[#000066] py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  மேலும் அறிய
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      {platform === 'twitter' && (
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      )}
      {platform === 'facebook' && (
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      )}
    </svg>
  );
}
