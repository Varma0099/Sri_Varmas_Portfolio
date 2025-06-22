import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// @ts-ignore
import Home from './components/Home';
// @ts-ignore
import About from './components/About';
// @ts-ignore
import Contact from './components/Contact';

// Navbar component with active link detection
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#F5F5F0]/95 backdrop-blur-sm border-b border-[#D4AF37]/30"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="flex justify-between items-center py-6 px-8 w-full">
        {/* Logo/Brand */}
        <motion.div 
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent">
            Sri Varma
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 font-medium text-lg">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`capitalize hover:text-[#D4AF37] transition-colors duration-300 relative group ${
                  isActive(item.path) ? 'text-[#D4AF37]' : 'text-[#2C2C2C]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 text-[#2C2C2C] hover:text-[#D4AF37] transition-colors duration-300" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#F5F5F0]/95 backdrop-blur-sm border-t border-[#D4AF37]/30"
          >
            <div className="py-6 px-8">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block w-full text-left capitalize hover:text-[#D4AF37] transition-all duration-300 text-lg ${
                        isActive(item.path) ? 'text-[#D4AF37] font-semibold' : 'text-[#2C2C2C]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5F0] text-[#2C2C2C]">
        <Navbar />
        <main className="pt-24 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      
    </div>
    </Router>
  );
}

export default App;
