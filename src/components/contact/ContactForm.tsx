"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  type SubmitStatus = 'idle' | 'success' | 'error';
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setSubmitStatus('success' as SubmitStatus);
      setFormData({
        name: "",
        email: "",
        phone: "",
        district: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus(error as SubmitStatus);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };  const inputStyles = "w-full px-4 py-2.5 xs:py-3 rounded-lg border border-gray-300 focus:border-[#000080] focus:ring-2 focus:ring-[#000080]/20 outline-none transition-all text-sm xs:text-base text-gray-800 placeholder:text-gray-400 placeholder:text-sm xs:placeholder:text-base";

  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50" id="contactForm">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#000080] mb-3 xs:mb-4">எங்களுடன் தொடர்பு கொள்ள</h2>
            <motion.div 
              className="h-1 w-16 xs:w-20 bg-[#000080] mx-auto rounded-full mb-4 xs:mb-5"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            <p className="text-sm xs:text-base text-gray-600 max-w-2xl mx-auto px-2">
              உங்கள் விவரங்களை பதிவு செய்யுங்கள். நாங்கள் விரைவில் தொடர்பு கொள்கிறோம்.
            </p>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4 xs:space-y-5 sm:space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
              <motion.div 
                className="group"
                whileHover={{ scale: 1.01 }}
              >
                <label className="block text-gray-700 text-sm xs:text-base mb-1.5 xs:mb-2 font-medium">உங்கள் முழு பெயர்</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="பெயரை உள்ளிடவும்"
                  className={inputStyles}
                  required
                />
              </motion.div>

              <motion.div 
                className="group"
                whileHover={{ scale: 1.01 }}
              >
                <label className="block text-gray-700 text-sm xs:text-base mb-1.5 xs:mb-2 font-medium">மின்னஞ்சல் முகவரி</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className={inputStyles}
                  required
                />
              </motion.div>

              <motion.div 
                className="group"
                whileHover={{ scale: 1.01 }}
              >
                <label className="block text-gray-700 text-sm xs:text-base mb-1.5 xs:mb-2 font-medium">கைபேசி எண்</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputStyles}
                  required
                />
              </motion.div>

              <motion.div 
                className="group"
                whileHover={{ scale: 1.01 }}
              >
                <label className="block text-gray-700 text-sm xs:text-base mb-1.5 xs:mb-2 font-medium">உங்கள் மாவட்டம்</label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                >
                  <option value="">மாவட்டத்தை தேர்வு செய்க</option>
                  <option value="chennai">சென்னை மாவட்டம்</option>
                  <option value="madurai">மதுரை மாவட்டம்</option>
                  <option value="coimbatore">கோயம்புத்தூர் மாவட்டம்</option>
                  <option value="trichy">திருச்சி மாவட்டம்</option>
                  <option value="salem">சேலம் மாவட்டம்</option>
                  <option value="tirunelveli">திருநெல்வேலி மாவட்டம்</option>
                  <option value="erode">ஈரோடு மாவட்டம்</option>
                  <option value="vellore">வேலூர் மாவட்டம்</option>
                </select>
              </motion.div>
            </div>

            <motion.div 
              className="group"
              whileHover={{ scale: 1.01 }}
            >
              <label className="block text-gray-700 text-sm xs:text-base mb-1.5 xs:mb-2 font-medium">உங்கள் கருத்து அல்லது செய்தி</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="உங்கள் கருத்துக்களை இங்கே பதிவு செய்யவும்..."
                className={inputStyles}
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 xs:py-3.5 sm:py-4 rounded-lg font-bold text-sm xs:text-base sm:text-lg shadow-lg transition-all ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#000080] hover:bg-[#000090] hover:shadow-xl'
              } text-white`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'அனுப்புகிறது...' : 'அனுப்பவும்'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-center font-medium"
              >
                வெற்றிகரமாக அனுப்பப்பட்டது!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-center font-medium"
              >
                ஏதோ தவறு நடந்துவிட்டது. மீண்டும் முயற்சிக்கவும்.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
