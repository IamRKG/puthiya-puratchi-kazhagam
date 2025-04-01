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
    <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 relative">
        <motion.div 
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#000080] mb-4">எங்கள் தலைவர்கள்</h2>
          <motion.div 
            className="h-1 w-16 xs:w-20 sm:w-24 bg-gradient-to-r from-[#000080] to-[#000080]/60 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-[#000050]/90 via-[#000080]/90 to-[#0000a0]/90 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-xl hover:shadow-2xl"
            >
              <div className="relative h-56 xs:h-64 sm:h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name || member.role}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000050]/90 via-[#000080]/50 to-transparent"></div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  {Object.entries(member.socialMedia).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <SocialIcon platform={platform} />
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{member.role}</h3>
                <p className="text-white/90 line-clamp-3 mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="flex justify-between items-center">
                  <motion.button 
                    className="bg-white/10 text-white px-4 py-2 rounded-full font-medium hover:bg-white/20 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedMember(member);
                      setShowModal(true);
                    }}
                  >
                    மேலும் அறிய
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>

                  <div className="flex space-x-3">
                    {Object.entries(member.socialMedia).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-2.5 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <SocialIcon platform={platform} />
                      </motion.a>
                    ))}
                  </div>
                </div>
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
  switch (platform) {
    case 'facebook':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    default:
      return null;
  }
}


function TeamMemberModal({ member, onClose }: { member: typeof teamMembers[0], onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 xs:p-5 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-gradient-to-br from-[#000080] to-[#000099] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 xs:h-64 sm:h-72 md:h-80">
          <Image
            src={member.image}
            alt={member.name || member.role}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/90 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            <svg className="w-5 h-5 xs:w-6 xs:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="absolute bottom-4 xs:bottom-6 left-4 xs:left-6">
            <h3 className="text-xl xs:text-2xl font-bold text-white mb-1">{member.role}</h3>
            <p className="text-sm xs:text-base text-white/90">{member.name}</p>
          </div>
        </div>
        
        <div className="p-4 xs:p-6 sm:p-8">
          <p className="text-white/90 text-sm xs:text-base sm:text-lg leading-relaxed mb-6">{member.bio}</p>
          
          <div className="flex gap-3">
            {Object.entries(member.socialMedia).map(([platform, url]) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#000080] p-3 rounded-full hover:bg-white/90 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcon platform={platform} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
