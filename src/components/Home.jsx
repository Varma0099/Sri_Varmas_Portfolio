/**
 * Home page component (JSX)
 * @module Home
 */

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Globe, Database, Zap, Smartphone, Code, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  // Animation variants
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

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
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

  const projectCardVariants = {
    hidden: (index) => ({ 
      x: index % 2 === 0 ? -100 : 100, 
      opacity: 0 
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F5F0] text-[#2C2C2C]">
      {/* Profile Section */}
      <section className="w-full px-8 lg:px-16 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div
                  className="w-60 h-80 lg:w-72 lg:h-96 overflow-hidden shadow-2xl border-4 border-[#D4AF37]"
                  style={{
                    borderRadius: '24px 24px 0 0'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={profileImage}
                    alt="K V Krishna Sri Varma Chekuri"
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#D4AF37] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#B8860B] rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Profile Content */}
            <motion.div 
              className="lg:w-1/2 space-y-8"
              variants={itemVariants}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-4">
                  K V Krishna Sri Varma Chekuri
                </h1>
                <motion.h2 
                  className="text-2xl lg:text-3xl text-[#D4AF37] font-semibold mb-6"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Full-Stack Developer & AI Enthusiast
                </motion.h2>
              </motion.div>

              <motion.p 
                className="text-xl text-[#8B7355] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Passionate about creating innovative digital solutions that bridge the gap between cutting-edge technology and user experience. Specializing in full-stack development, AI/ML integration, and building scalable applications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="mailto:krishnasrivarmachekuri@gmail.com"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Get In Touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                className="flex gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { icon: <Github size={24} />, href: "https://github.com/Varma0099", label: "GitHub" },
                  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/k-v-krishna-sri-varma-chekuri-5b0120263", label: "LinkedIn" },
                  { icon: <Mail size={24} />, href: "mailto:krishnasrivarmachekuri@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-white transition-all duration-300 p-3 rounded-full bg-white/50 backdrop-blur-sm hover:shadow-lg hover:bg-amber-500"
                    whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Enhanced with Creative Animations */}
      <section className="w-full px-8 lg:px-16 py-24 lg:py-32 bg-gradient-to-br from-[#F5F5F0] to-[#E8E8E0]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20" 
            variants={itemVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">Explore my latest work showcasing innovative solutions and cutting-edge technologies</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="space-y-16"
          >
            {[
              {
                title: "QGenie: AI-Based Question Paper Generator",
                description: "Built an AI-powered tool to generate question papers based on Bloom's Taxonomy. Integrated Flask backend with HTML/JavaScript frontend for seamless user interaction.",
                tech: ["Gemini API", "Python", "Flask", "HTML", "JavaScript"],
                image: "/src/assets/projects/qgenie-screenshot.png",
                liveUrl: "#",
                features: ["AI-Powered Generation", "Bloom's Taxonomy", "Flask Backend", "Interactive Frontend"],
                status: "Live"
              },
              {
                title: "Basketball Highlight Auto-Cropper",
                description: "Created a tool to process basketball videos into 9:16 format for social media. Utilized OpenCV for automated video cropping and highlight extraction.",
                tech: ["OpenCV", "Python", "NumPy"],
                image: "/src/assets/projects/basketball-cropper.png",
                liveUrl: "#",
                features: ["Video Processing", "Auto Cropping", "9:16 Format", "Highlight Extraction"],
                status: "Live"
              },
              {
                title: "Hospo: AI-Powered Healthcare Platform",
                description: "Comprehensive healthcare solution with appointment scheduling, telemedicine, and AI analytics. Developed ML models for disease prediction and medicine tracking system.",
                tech: ["React.js", "Node.js", "Python", "Machine Learning", "Data Analytics"],
                image: "/src/assets/projects/hospo-platform.png",
                liveUrl: "https://hospo-ten.vercel.app/",
                features: ["Appointment Scheduling", "Telemedicine", "AI Analytics", "Disease Prediction"],
                status: "Live"
              },
              {
                title: "Nxt Watch (YouTube Clone)",
                description: "Developed a YouTube alternative with user authentication, video browsing by categories (Trending, Gaming), and saved videos functionality. Implemented secure login with JWT tokens.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "React Router", "REST API", "JWT"],
                image: "/src/assets/projects/nxtwatch-clone.png",
                liveUrl: "https://varmanxtwatch9.ccbp.tech/",
                features: ["User Authentication", "Video Categories", "Saved Videos", "JWT Security"],
                status: "Live"
              },
              {
                title: "Tasty Kitchens (Swiggy/Zomato Clone)",
                description: "Built food delivery platform with restaurant listings, shopping cart, and checkout functionality. Created responsive UI with React Slick carousel and Figma-based component design.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "React Slick", "Figma", "REST API"],
                image: "/src/assets/projects/tasty-kitchens.png",
                liveUrl: "https://sritastykitapp.ccbp.tech/login",
                features: ["Restaurant Listings", "Shopping Cart", "Checkout System", "Responsive Design"],
                status: "Live"
              },
              {
                title: "Jobby App (Job Search Platform)",
                description: "Developed job portal with authentication, job listings, and application tracking. Implemented protected routes with JWT authentication and persistent login state.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "React Router", "REST API", "JWT"],
                image: "/src/assets/projects/jobby-app.png",
                liveUrl: "https://varmajobbyapp99.ccbp.tech/",
                features: ["Job Listings", "Application Tracking", "Protected Routes", "JWT Authentication"],
                status: "Live"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row gap-12 items-center`}
              >
                {/* Project Image with Hover Effects */}
                <motion.div 
                  className="lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Live Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      {project.status}
                    </motion.div>
                    
                    {/* Hover Overlay with Buttons */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.button
                        className="bg-white text-[#2C2C2C] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div 
                  className="lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.h3 
                    className="text-3xl font-bold text-[#2C2C2C] group-hover:text-[#D4AF37] transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-[#8B7355] leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack with Animated Icons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="text-lg font-semibold text-[#2C2C2C] mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-medium border border-[#D4AF37]/20"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.8 + techIndex * 0.1, type: "spring", stiffness: 200 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="text-lg font-semibold text-[#2C2C2C] mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2 text-[#8B7355]"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + featureIndex * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-[#D4AF37] rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                          />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors duration-300 shadow-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section - New Classic Layout */}
      <section className="w-full px-8 lg:px-16 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16" 
            variants={itemVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">A snapshot of the tools and technologies I use to bring ideas to life.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {[
              {
                category: "Programming Languages",
                icon: <Code size={24} />,
                skills: ["Python", "C++", "JavaScript"]
              },
              {
                category: "AI/ML",
                icon: <Zap size={24} />,
                skills: ["Machine Learning", "Deep Learning", "Generative AI", "Fine-Tuning Techniques", "Retrieval-Augmented Generation (RAG)", "LLM Applications"]
              },
              {
                category: "LLM & Frameworks",
                icon: <Globe size={24} />,
                skills: ["Langchain", "Gemini", "LLaMA"]
              },
              {
                category: "Vector Databases",
                icon: <Database size={24} />,
                skills: ["Pinecone", "FAISS"]
              },
              {
                category: "Full-Stack Web Development",
                icon: <Code size={24} />,
                skills: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "Bootstrap"]
              },
              {
                category: "Databases & Storage",
                icon: <Database size={24} />,
                skills: ["MongoDB", "SQLite", "Local Storage"]
              },
              {
                category: "Dev Tools & Engineering Practices",
                icon: <Smartphone size={24} />,
                skills: ["Git", "GitHub", "JWT Authentication", "Docker", "VS Code"]
              },
              {
                category: "Foundational CS",
                icon: <Globe size={24} />,
                skills: ["Data Structures & Algorithms", "Problem Solving"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#D4AF37]">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C2C2C]">{category.category}</h3>
                </div>
                
                <ul className="space-y-3 text-lg text-[#8B7355]">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:top-1 before:text-[#D4AF37] before:text-sm"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 