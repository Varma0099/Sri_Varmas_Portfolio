/**
 * About page component (JSX)
 * @module About
 */
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award } from 'lucide-react';
import aboutProfileImage from '../assets/about-profile.jpg';

const About = () => {
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

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F5F0] text-[#2C2C2C] px-8 lg:px-16 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* About Me Text */}
              <div className="lg:w-2/3">
                <h2 className="text-5xl font-bold mb-4">About Me</h2>
                <p className="text-xl text-[#8B7355] leading-relaxed">
                  Hi, I'm <span className="font-semibold text-[#2C2C2C]">K V Krishna Sri Varma Chekuri</span>, a passionate Full-Stack Developer & AI/ML Enthusiast based in Bhimavaram, Andhra Pradesh. I specialize in building scalable web applications with a focus on AI/ML integration.
                </p>
              </div>
              
              {/* Profile Image */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <motion.div
                    className="w-56 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={aboutProfileImage}
                      alt="Krishna Sri Varma Chekuri"
                      className="w-full h-full object-cover object-center"
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-5 h-5 bg-[#D4AF37] rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#B8860B] rounded-full"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two-Column Layout for Education and Work Experience */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Education Column */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen size={28} className="text-[#D4AF37]" />
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-[#D4AF37] pl-6">
                  <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Nxtwave Disruptive Technologies</h4>
                  <p className="text-lg text-[#D4AF37] font-semibold mb-2">Industry Ready Certification in Full-stack Development</p>
                  <p className="text-[#8B7355] mb-3">Jan 2023 - Ongoing</p>
                  <p className="text-[#8B7355] text-sm leading-relaxed">
                    Comprehensive full-stack development certification program focusing on modern web technologies, industry best practices, and hands-on project development.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#D4AF37] pl-6">
                  <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">B.Tech in Computer Science Engineering</h4>
                  <p className="text-lg text-[#D4AF37] font-semibold mb-2">Kalasalingam Academy of Research and Education, Virudhunagar</p>
                  <p className="text-[#8B7355] mb-3">2022 - 2026</p>
                  <p className="text-[#8B7355] font-medium mb-3">CGPA: 8.9/10</p>
                  <p className="text-[#8B7355] text-sm leading-relaxed">
                    Comprehensive study of Computer Science fundamentals including Data Structures & Algorithms, Database Management Systems, Machine Learning, Web Development, and Software Engineering.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Work Experience Column */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={28} className="text-[#D4AF37]" />
                <h3 className="text-3xl font-bold">Work Experience</h3>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-[#D4AF37] pl-6">
                  <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Full Stack Developer Intern</h4>
                  <p className="text-lg text-[#D4AF37] font-semibold mb-2">Yashik Yadav & Co</p>
                  <p className="text-[#8B7355] mb-3">June 2025 - Present • Remote</p>
                  <p className="text-[#8B7355] text-sm leading-relaxed">
                    Contributing to enterprise software solutions and client project development. Working with modern web technologies and agile development methodologies. Enhancing frontend and backend modules using React.js and Node.js.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section Divider */}
          <div className="border-t border-[#E8E8E0] my-16"></div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <Award size={28} className="text-[#D4AF37]" />
              <h3 className="text-3xl font-bold">Achievements & Leadership</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "ACM Students Chapter - Web Master",
                  issuer: "Association for Computing Machinery",
                  date: "2023-2025",
                  description: "Managed university ACM chapter website and organized technical workshops/hackathons. Mentored 100+ students in web development technologies and coordinated 10+ events with 200+ participants."
                },
                {
                  title: "IBM-ICE Hackathon Winner (1st Prize)",
                  issuer: "IBM",
                  date: "2024",
                  description: "Led team to develop innovative solution for enterprise workflow automation. Demonstrated expertise in problem-solving with cutting-edge technologies."
                },
                {
                  title: "Google Cloud Study Jams Completion",
                  issuer: "Google Cloud",
                  date: "2024",
                  description: "Earned certificate by completing hands-on cloud deployment challenges. Enhanced skills in Google Cloud technologies and management."
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-[#E8E8E0]"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-[#2C2C2C]">{cert.title}</h4>
                    <span className="text-[#D4AF37] font-semibold">{cert.date}</span>
                  </div>
                  <p className="text-[#D4AF37] font-medium mb-2">{cert.issuer}</p>
                  <p className="text-[#8B7355] text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 