"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PartyFlag from "./PartyFlag";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "முகப்பு" },
    { href: "/about", label: "எங்களை பற்றி" },
    { href: "/manifesto", label: "கொள்கைகள்" },
    { href: "/leaders", label: "தலைவர்கள்" },
    { href: "/events", label: "நிகழ்வுகள்" },
    { href: "/contact", label: "தொடர்புக்கு" }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 py-3 px-6 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <PartyFlag width={45} height={45} className="mr-3" />
            <div className="text-lg sm:text-xl font-bold text-[#000080]">
              <span className="hidden sm:inline">புதிய புரட்சி கழகம்</span>
              <span className="sm:hidden">புதிய புரட்சி கழகம்</span>
              {/* பு.பு.க  */}
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden flex items-center text-[#000080]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-1 lg:space-x-6 text-lg">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link 
                  href={link.href} 
                  className="px-3 py-2 rounded-md text-[#000080] hover:text-[#0000b3] transition-colors"
                >
                  {link.label}
                </Link>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#0000b3] w-0 group-hover:w-full transition-all duration-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-2 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col text-lg overflow-hidden">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50"
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 text-[#000080] hover:text-[#0000b3] border-b border-gray-100"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
