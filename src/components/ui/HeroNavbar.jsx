import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.jpg'; // Adjust path as needed

const HeroNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" }
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-sm relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Desktop Hero Header */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left: Logo and Branding */}
          <motion.div 
            className="flex items-center space-x-8"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/" className="group flex items-center space-x-4">
              <div className="relative">
                <motion.div 
                  className="p-2 rounded-xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200/50 group-hover:from-amber-100 group-hover:to-orange-200 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image src={logo} alt="Aiconmac Logo" className="h-10 w-auto" />
                </motion.div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-extralight text-gray-900 tracking-wide group-hover:text-amber-700 transition-colors">
                  AICONMAC
                </h1>
                <p className="text-sm text-gray-500 font-light tracking-wider uppercase">
                  Architectural Gallery
                </p>
              </div>
            </Link>
          </motion.div>
          
          {/* Center: Tagline with Animation */}
          <motion.div 
            className="text-center max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="text-gray-600 font-light leading-relaxed text-base">
              Curating architectural dreams into{' '}
              <span className="relative">
                <span className="text-amber-600 font-normal">museum-quality</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400/60"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
              {' '}masterpieces.
            </div>
          </motion.div>
          
          {/* Right: Navigation and Stats */}
          <motion.div 
            className="flex items-center space-x-8"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`group px-4 py-2 text-sm font-light tracking-wider uppercase transition-all duration-300 ${
                      item.active 
                        ? 'text-amber-600 border-b-2 border-amber-600' 
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>

                </motion.div>
              ))}
            </div>
            
            {/* Contact Button with Icon */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <Link
                href="/contact"
                className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-sm font-medium rounded-xl uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 group" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Hero Header */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo and Branding for Mobile */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/" className="group flex items-center space-x-2">
              <Image src={logo} alt="Aiconmac Logo" className="h-8 w-auto" />
              <div>
                <h1 className="text-xl font-extralight text-gray-800">AICONMAC</h1>
                <p className="text-xs text-gray-500">Architectural Gallery</p>
              </div>
            </Link>
          </motion.div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mt-6 pt-6 border-t border-gray-200"
            >
              <div className="space-y-4">
                <div className="text-gray-600 font-light text-sm leading-relaxed">
                  Curating architectural dreams into museum-quality masterpieces since 2013.
                </div>
                
                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block py-2 text-gray-700 hover:text-gray-900 font-light uppercase tracking-wider transition-colors ${item.active && 'text-amber-600'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="block w-full py-3 mt-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-center text-sm font-light uppercase tracking-wider transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
                
                {/* Mobile Stats */}
                <div className="flex justify-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-xl font-extralight text-amber-600">1200+</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">Works</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-extralight text-amber-600">11+</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default HeroNavbar;