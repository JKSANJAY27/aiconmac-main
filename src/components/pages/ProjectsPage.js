// src/components/pages/ProjectsPage.js
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // For optimized images

import { TracingBeam } from '@/components/ui/tracing-beam';
import TiltedCard from '@/components/ui/TiltedCard'; // Make sure this path is correct
import { projects, categories } from '@/data/projects'; // Import data and categories

const ProjectsPage = ({ selectedCategory, setSelectedCategory, setSelectedProject }) => {
  // Use the projects data from the central source
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <div className="bg-transparent"> {/* Ensure overall page background is white */}
      <div className="container mx-auto pt-40 pb-10 text-center relative"> {/* Added z-10 to be above AnimatedBackground */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#464646]" // Use your dark-gray color
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Our Portfolio
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          A showcase of precision, craftsmanship, and dedication.
        </motion.p>

        {/* Filter Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12 mb-16" // Adjusted margins
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all text-base ${
                selectedCategory === category.id
                  ? 'bg-[#f06123] text-white shadow-md'
                  : 'bg-white text-[#464646] border border-gray-200 hover:border-[#f06123] hover:shadow-sm'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </div>

      <TracingBeam className="px-6 relative z-10"> {/* Also added z-10 for TracingBeam */}
          <div className="max-w-4xl mx-auto antialiased pt-4 relative">
              {filteredProjects.map((item, index) => (
                  <motion.div
                      key={`content-${item.id}`} // Use item.id for unique key
                      className="mb-20 md:mb-32" // Increased bottom margin
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true, amount: 0.2 }} // Animate as it comes into view
                  >
                      {/* The badge and title for each section */}
                      <motion.h2
                        className="bg-[#f06123] text-white rounded-full text-sm w-fit px-4 py-1 mb-4 capitalize" // Used hex color, added capitalize
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                          {item.badge}
                      </motion.h2>
                      <motion.p
                        className="text-3xl font-bold text-[#464646] mb-8" // Used hex color
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                          {item.title}
                      </motion.p>

                      {/* Two-column layout for image and description */}
                      <div className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}> {/* Alternating layout */}
                          {/* Left/Right Column: Tilted Card */}
                          <motion.div
                            className="w-full h-[300px] md:h-[400px] relative" // Added relative for TiltedCard's children
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <TiltedCard
                                imageSrc={item.image} // Pass image module
                                altText={item.title}
                                overlayContent={
                                    <p className="text-white text-xl font-bold text-center">
                                        {item.title}
                                    </p>
                                }
                                // Optionally add an onClick to open the ProjectDetail modal
                                onClick={() => setSelectedProject(item)}
                            />
                          </motion.div>
                          {/* Right/Left Column: Description */}
                          <motion.div
                            className="text-base text-gray-600 prose prose-lg"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                              {item.description}
                          </motion.div>
                      </div>
                  </motion.div>
              ))}
          </div>
      </TracingBeam>
    </div>
  );
};

export default ProjectsPage;