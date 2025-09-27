import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Import your actual images
import img1 from '@/images/img1.jpg';
import img2 from '@/images/img2.jpg';
import img3 from '@/images/img3.jpg';
import img4 from '@/images/img4.jpg';
import img5 from '@/images/img5.jpg';

const EnhancedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const services = [
    {
      title: "Master Planning Models",
      subtitle: "Urban Vision Curation",
      description: "Comprehensive development models that capture the essence of entire urban landscapes with museum-quality precision.",
      image: img3,
      category: "URBAN PLANNING"
    },
    {
      title: "Architectural Models", 
      subtitle: "Precision in Every Detail",
      description: "Museum-quality architectural representations with meticulous craftsmanship and attention to detail.",
      image: img4,
      category: "ARCHITECTURE"
    },
    {
      title: "Industrial Models",
      subtitle: "Complex Engineering Made Clear", 
      description: "Detailed industrial facility models showcasing technical excellence and operational clarity.",
      image: img5,
      category: "INDUSTRIAL"
    },
    {
      title: "Commercial Developments",
      subtitle: "Business Visions Realized",
      description: "Sophisticated commercial project models designed for investors and stakeholders.",
      image: img1,
      category: "COMMERCIAL"
    },
    {
      title: "Residential Complexes",
      subtitle: "Dream Homes in Miniature",
      description: "Elegant residential models showcasing lifestyle, luxury, and architectural beauty.",
      image: img2,
      category: "RESIDENTIAL"
    }
  ];

  const DRAG_BUFFER = 50;
  const VELOCITY_THRESHOLD = 500;
  const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

  // Auto-advance carousel
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % services.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, isHovered, services.length]);

  // Mouse hover handlers
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => {
        setIsHovered(true);
        setIsAutoPlaying(false);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
        setIsAutoPlaying(true);
      };
      
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => (prev + 1) % services.length);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="w-full bg-white">
      {/* Image Section */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: '400px' }}
      >
        {/* Improved background transition without white flash */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ 
                opacity: { duration: 0.6, ease: "easeInOut" },
                scale: { duration: 1.2, ease: "easeInOut" }
              }}
            >
              <div className="absolute inset-0 bg-black/20 z-10" />
              <Image
                src={services[currentIndex].image}
                alt={services[currentIndex].title}
                fill
                className="object-cover"
                priority
                placeholder="blur"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-4 flex items-center z-30">
          <motion.button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        <div className="absolute inset-y-0 right-4 flex items-center z-30">
          <motion.button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Bottom Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center space-x-3">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative overflow-hidden"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`w-12 h-1 rounded-full transition-all duration-500 ${
                  currentIndex === index 
                    ? 'bg-white shadow-lg shadow-white/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}>
                  {currentIndex === index && (
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-400 to-white rounded-full"
                      layoutId="active-progress"
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Drag functionality for mobile */}
        <motion.div
          className="absolute inset-0 z-20"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        />
      </div>

      {/* Text Content Section Below Images */}
      <div className="w-full bg-white py-12 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              {/* Category Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 mb-6 rounded-none border border-gray-200 bg-gray-50"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                <span className="text-sm font-light uppercase tracking-[0.2em] text-gray-600">
                  {services[currentIndex].category}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-6 leading-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {services[currentIndex].title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="text-xl sm:text-2xl text-amber-600 font-light mb-8 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {services[currentIndex].subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-base sm:text-lg max-w-4xl mx-auto text-gray-600 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {services[currentIndex].description}
              </motion.p>

              {/* Counter */}
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-center space-x-4 text-gray-500">
                  <span className="text-sm font-light">
                    {String(currentIndex + 1).padStart(2, '0')} of {String(services.length).padStart(2, '0')}
                  </span>
                  <div className="w-0.5 h-4 bg-gray-300" />
                  <span className="text-xs uppercase tracking-[0.15em] font-light">
                    Premium Models Collection
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCarousel;