"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#000040] via-[#000060] to-[#000080] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            நம் தமிழகத்தை மாற்றுவோம்
          </h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            புதிய தமிழகத்தை உருவாக்க உங்கள் ஆதரவு தேவை. எங்களுடன் இணைந்து பயணிக்க அழைக்கிறோம்.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a 
              href="/join"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#000080] rounded-full text-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              இப்போதே இணையுங்கள்
            </motion.a>
            
            <motion.a 
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full text-lg font-bold transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              மேலும் தகவல்களுக்கு
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
