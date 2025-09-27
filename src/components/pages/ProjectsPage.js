"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, ArrowRight, Calendar, MapPin } from 'lucide-react';

import { TracingBeam } from '@/components/ui/tracing-beam';
import TiltedCard from '@/components/ui/TiltedCard';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { projects, categories } from '@/data/projects';
import useMediaQuery from '@/hooks/useMediaQuery';

const ProjectsPage = ({ selectedCategory, setSelectedCategory, setSelectedProject }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Museum lighting effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-200/30 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-50/30 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Gallery Header */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-amber-200 bg-amber-50/80 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-light uppercase tracking-wider text-amber-700">
              Curatorial Collection
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extralight text-gray-800 mb-6 tracking-tight"
          >
            Project Gallery
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            A carefully curated exhibition of architectural miniatures, each piece representing 
            the pinnacle of precision craftsmanship and artistic vision.
          </motion.p>

          {/* Museum-style statistics */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">{filteredProjects.length}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Masterpieces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">{categories.length - 1}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Collections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">11+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Years Curating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Filter Categories */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={cardVariants}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative px-8 py-4 rounded-full transition-all duration-300 text-sm font-light tracking-wider uppercase overflow-hidden group ${
                selectedCategory === category.id
                  ? 'text-black shadow-xl'
                  : 'text-gray-600 hover:text-black'
              }`}
              style={{
                background: selectedCategory === category.id
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                backdropFilter: 'blur(15px)',
                border: selectedCategory === category.id
                  ? '1px solid rgba(245, 158, 11, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: selectedCategory === category.id
                  ? '0 8px 32px rgba(245, 158, 11, 0.15)'
                  : '0 4px 16px rgba(0, 0, 0, 0.05)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
              
              <span className="relative z-10">{category.label}</span>
              
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="active-category"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Projects Exhibition */}
      <div className="relative z-10">
        {isDesktop ? (
          <TracingBeam className="px-6">
            <div className="max-w-6xl mx-auto antialiased pt-8 relative">
              {filteredProjects.map((item, index) => (
                <motion.div
                  key={`exhibit-${item.id}`}
                  className="mb-32"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true, amount: 0.2 }}
                  onHoverStart={() => setHoveredProject(item.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Exhibit Label */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center space-x-4">
                      <div
                        className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider"
                        style={{
                          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)',
                          color: 'rgba(245, 158, 11, 0.8)',
                          border: '1px solid rgba(245, 158, 11, 0.2)'
                        }}
                      >
                        {item.badge}
                      </div>
                      
                      {/* Museum-style metadata */}
                      <div className="flex items-center space-x-4 text-xs text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>Est. 2023</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>Dubai Collection</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.h2
                    className="text-4xl md:text-5xl font-extralight text-gray-800 mb-12 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h2>

                  {/* Museum Exhibition Layout */}
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    {/* Featured Artwork with TiltedCard */}
                    <motion.div
                      className={`relative ${
                        index % 2 === 1 ? 'lg:col-start-2' : ''
                      }`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-[500px] w-full">
                        <TiltedCard
                          imageSrc={item.image}
                          altText={item.title}
                          containerHeight="500px"
                          scaleOnHover={1.02}
                          rotateAmplitude={12}
                          overlayContent={
                            <div className="text-center text-white space-y-4">
                              <motion.div
                                className="px-6 py-3 rounded-full font-medium tracking-wider uppercase text-sm flex items-center space-x-2 mx-auto w-fit"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                  backdropFilter: 'blur(15px)',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Eye className="w-4 h-4" />
                                <span>View Details</span>
                              </motion.div>
                            </div>
                          }
                          displayOverlayContent={true}
                          onClick={() => setSelectedProject(item)}
                        />
                      </div>

                      {/* Exhibit placard */}
                      <motion.div
                        className="mt-6 p-4 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-sm text-gray-600 font-light italic text-center">
                          {item.title} — Scale 1:200 — Materials: Precision wood, acrylic, brass detailing
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Curatorial Description */}
                    <motion.div
                      className={`space-y-6 ${
                        index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                      }`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="p-8 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                          backdropFilter: 'blur(15px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
                        }}
                      >
                        <div className="prose prose-lg text-gray-700 font-light leading-relaxed">
                          <div className="mb-6">
                            <h3 className="text-2xl font-light text-gray-800 mb-4">
                              Curatorial Notes
                            </h3>
                            <div className="w-16 h-px bg-amber-300 mb-4" />
                          </div>
                          {item.description}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200/50">
                          <motion.button
                            onClick={() => setSelectedProject(item)}
                            className="flex items-center space-x-2 text-amber-700 hover:text-amber-800 font-medium tracking-wider uppercase text-sm transition-colors group"
                            whileHover={{ x: 5 }}
                          >
                            <span>Explore Piece</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TracingBeam>
        ) : (
          // Mobile Gallery Grid
          <div className="max-w-4xl mx-auto px-6 pt-8">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {filteredProjects.map((item, index) => (
                <motion.div
                  key={`mobile-${item.id}`}
                  variants={cardVariants}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(item)}
                  whileHover={{ y: -8 }}
                >
                  <CardSpotlight className="h-full p-0 overflow-hidden">
                    <div className="relative h-64 mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    
                    <div className="p-6 relative z-20">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
                          style={{
                            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)',
                            color: 'rgba(245, 158, 11, 0.8)',
                            border: '1px solid rgba(245, 158, 11, 0.2)'
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-light text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="text-sm text-gray-600 line-clamp-3 font-light leading-relaxed">
                        {typeof item.description === 'string' 
                          ? item.description 
                          : 'A masterfully crafted architectural model showcasing precision and artistry.'}
                      </div>

                      <div className="mt-4 flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium tracking-wider uppercase">View Details</span>
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="p-12 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 mb-6">
              Commission Your Masterpiece
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
              Ready to see your architectural vision transformed into a museum-quality miniature?
            </p>
            
            <motion.button
              className="px-8 py-4 rounded-full text-white font-medium tracking-wider uppercase text-sm shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #f06123 0%, #d97706 100%)',
                boxShadow: '0 10px 30px rgba(240, 97, 35, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 40px rgba(240, 97, 35, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Commission
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;