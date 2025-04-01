"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    id: "leader1",
    name: "",
    role: "தலைவர்",
    bio: "புதிய புரட்சி கழகத்தின் நிறுவனர் மற்றும் தலைவர். 25 ஆண்டுகளுக்கும் மேலாக சமூக சேவையில் ஈடுபட்டுள்ளார்.",
    image: "/team/leader1.png",
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username"
    }
  },
  {
    id: "leader2",
    name: "",
    role: "துணைத் தலைவர்",
    bio: "கல்வியாளராக பணியாற்றிய பின்னர் அரசியலில் நுழைந்தவர். பெண்கள் மற்றும் குழந்தைகள் நலனுக்காக குரல் கொடுத்து வருகிறார். சமூக நீதிக்காக போராடும் முன்னணி குரல்.",
    image: "/team/leader2.png",
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username"
    }
  },
  {
    id: "leader3",
    name: "",
    role: "பொதுச் செயலாளர்",
    bio: "பொருளாதார வல்லுநராக பணியாற்றிய அனுபவம் கொண்டவர். கழகத்தின் கொள்கைகள் மற்றும் திட்டங்களை வடிவமைப்பதில் முக்கிய பங்கு வகிக்கிறார்.",
    image: "/team/leader3.png",
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username"
    }
  },
  {
    id: "leader4",
    name: "",
    role: "பொருளாளர்",
    bio: "நிதி மேலாண்மையில் நிபுணத்துவம் பெற்றவர். கழகத்தின் நிதி விவகாரங்களை திறம்பட நிர்வகித்து வருகிறார். வெளிப்படைத்தன்மை மற்றும் பொறுப்புணர்வுக்கு பெயர் பெற்றவர்.",
    image: "/team/leader4.png",
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username"
    }
  },
  {
    id: "leader5",
    name: "",
    role: "மகளிர் அணித் தலைவர்",
    bio: "பெண்கள் உரிமைக்காக போராடும் சமூக ஆர்வலர். கழகத்தின் மகளிர் அணியை வழிநடத்துகிறார். பெண்கள் அதிகாரம் பெறுவதற்கான பல திட்டங்களை முன்னெடுத்துள்ளார்.",
    image: "/team/leader5.png",
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username"
    }
  },
  {
    id: "leader6",
    name: "",
    role: "இளைஞர் அணித் தலைவர்",
    bio: "இளைஞர்களின் குரலாக செயல்படும் துடிப்பான தலைவர். இளைஞர்களை அரசியலில் ஈடுபடுத்துவதற்கான பல முயற்சிகளை முன்னெடுத்து வருகிறார்.",
    image: "/team/leader6.png",
    socialMedia: {
      twitter: "https://twitter.com/username",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username"
    }
  }
];

export default function AboutTeam() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">எங்கள் தலைவர்கள்</h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-white/90 to-white/60 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name || member.role}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/80 to-transparent"></div>
                
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {Object.entries(member.socialMedia).map(([platform, url]) => (
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
                <h3 className="text-xl font-bold text-white mb-2">{member.role}</h3>
                <p className="text-white/80 line-clamp-3 mb-4">{member.bio}</p>
                
                <button
                  onClick={() => {
                    setSelectedMember(member);
                    setShowModal(true);
                  }}
                  className="text-white/90 hover:text-white font-medium flex items-center group/btn"
                >
                  மேலும் அறிய 
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showModal && selectedMember && (
            <TeamMemberModal
              member={selectedMember}
              onClose={() => setShowModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  // Social media icons remain the same
  return platform; // Replace with actual icon components
}

function TeamMemberModal({ member, onClose }: { member: typeof teamMembers[0], onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-gradient-to-br from-[#000066] to-[#000099] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <Image
            src={member.image}
            alt={member.name || member.role}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/90 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-white mb-1">{member.role}</h3>
            <p className="text-white/90">{member.name}</p>
          </div>
        </div>
        
        <div className="p-6 sm:p-8">
          <p className="text-white/90 text-lg leading-relaxed mb-6">{member.bio}</p>
          
          <div className="flex space-x-4">
            {Object.entries(member.socialMedia).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#000066] px-4 py-2 rounded-full hover:bg-white/90 transition-colors flex items-center space-x-2"
              >
                <SocialIcon platform={platform} />
                <span className="capitalize">{platform}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
