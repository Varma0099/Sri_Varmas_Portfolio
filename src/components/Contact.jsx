/**
 * Contact page component (JSX)
 * @module Contact
 */

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F5F0] text-[#2C2C2C] px-8 lg:px-16 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-5xl font-bold mb-12 text-center" variants={itemVariants}>Contact</motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#D4AF37]" />
                  <span className="text-[#8B7355]">krishnasrivarmachekuri@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#D4AF37]" />
                  <span className="text-[#8B7355]">+91 9494343299</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#D4AF37]" />
                  <span className="text-[#8B7355]">Bhimavaram, Andhra Pradesh, 534126</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <motion.a
                  href="https://github.com/Varma0099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2C2C2C] rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/k-v-krishna-sri-varma-chekuri-5b0120263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
            <motion.form className="space-y-6" variants={itemVariants}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full border-2 border-[#E8E8E0] rounded-lg px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 bg-white" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full border-2 border-[#E8E8E0] rounded-lg px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 bg-white" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={6} 
                  className="w-full border-2 border-[#E8E8E0] rounded-lg px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 resize-none bg-white" 
                />
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 