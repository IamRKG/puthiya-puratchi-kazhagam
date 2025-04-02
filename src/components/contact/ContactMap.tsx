"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="relative h-[400px] md:h-[500px]">
      <motion.div 
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale"
        ></iframe>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
}
