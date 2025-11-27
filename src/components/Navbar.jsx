import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { brandInfo, locations, socialLinks } from '../data/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於我們', href: '#about' },
    { name: '美味菜單', href: '#menu' },
    { name: '媒體報導', href: '#media' },
    { name: '顧客好評', href: '#reviews' },
    { name: '分店資訊', href: '#locations' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-accent tracking-widest">
          {brandInfo.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent transition-colors duration-300 text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href={socialLinks.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm font-medium"
          >
            立即訂位
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md shadow-xl md:hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={socialLinks.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                立即訂位
              </a>
              
              {/* Mobile Location Quick Info */}
              <div className="mt-8 pt-8 border-t border-gray-700 w-3/4 text-center">
                <p className="text-accent mb-4 font-bold">分店資訊</p>
                {locations.map((loc) => (
                  <div key={loc.id} className="mb-4 text-gray-300 text-sm">
                    <p className="font-bold text-white">{loc.name}</p>
                    <p className="flex justify-center items-center gap-2 mt-1">
                      <FaPhone className="text-accent" /> {loc.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
