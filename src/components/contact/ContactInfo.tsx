"use client";

import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "தொலைபேசி",
    details: ["+91 98765 43210", "+91 98765 43211"],
    link: "tel:+919876543210"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "மின்னஞ்சல்",
    details: ["info@ppk.org", "contact@ppk.org"],
    link: "mailto:info@ppk.org"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "முகவரி",
    details: ["42, அண்ணா சாலை", "சென்னை - 600001", "தமிழ்நாடு"],
    link: "https://maps.google.com"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "வேலை நேரம்",
    details: ["திங்கள் - சனி", "காலை 9:00 - மாலை 6:00"],
    link: null
  }
];

export default function ContactInfo() {
  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
        <motion.div 
          className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#000080] mb-3 xs:mb-4">தொடர்பு விவரங்கள்</h2>
          <motion.div 
            className="h-1 w-16 xs:w-20 bg-[#000080] mx-auto rounded-full mb-4 xs:mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              className="bg-white p-4 xs:p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#000080]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 128, 0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <div className="flex items-center mb-4">
                <span className="text-[#000080] mr-3 bg-[#000080]/5 p-2 rounded-lg">
                  {detail.icon}
                </span>
                <h3 className="text-base xs:text-lg font-bold text-[#000080]">{detail.title}</h3>
              </div>
              
              {detail.link ? (
                <a 
                  href={detail.link}
                  className="block text-gray-600 hover:text-[#000080] transition-colors"
                >
                  {detail.details.map((line, i) => (
                    <p key={i} className="text-sm xs:text-base mb-1">{line}</p>
                  ))}
                </a>
              ) : (
                detail.details.map((line, i) => (
                  <p key={i} className="text-sm xs:text-base text-gray-600 mb-1">{line}</p>
                ))
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
