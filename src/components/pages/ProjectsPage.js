// src/components/pages/ProjectsPage.js
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { TracingBeam } from '@/components/ui/tracing-beam';
import TiltedCard from '@/components/ui/TiltedCard';
import { projects, categories } from '@/data/projects';
import useMediaQuery from '@/hooks/useMediaQuery'; // Import the new hook

const ProjectsPage = ({ selectedCategory, setSelectedCategory, setSelectedProject }) => {
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const isDesktop = useMediaQuery('(min-width: 1024px)'); // Define desktop breakpoint (lg)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <div className="bg-transparent">
      <div className="container mx-auto pb-10 text-center relative"> {/* REMOVED pt-40 */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#464646] pt-10" // ADDED pt-10 for minimal spacing *within* the content
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
          className="flex flex-wrap justify-center gap-4 mt-12 mb-16"
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

      {/* TracingBeam rendered conditionally */}
      {isDesktop ? (
        <TracingBeam className="px-6 relative z-10">
            <div className="max-w-4xl mx-auto antialiased pt-4 relative">
                {filteredProjects.map((item, index) => (
                    <motion.div
                        key={`content-${item.id}`}
                        className="mb-20 md:mb-32"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* The badge and title for each section */}
                        <motion.h2
                          className="bg-[#f06123] text-white rounded-full text-sm w-fit px-4 py-1 mb-4 capitalize"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                            {item.badge}
                        </motion.h2>
                        <motion.p
                          className="text-3xl font-bold text-[#464646] mb-8"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                            {item.title}
                        </motion.p>

                        {/* Two-column layout for image and description */}
                        <div className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Left/Right Column: Tilted Card */}
                            <motion.div
                              className="w-full h-[300px] md:h-[400px] relative"
                              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                            >
                              <TiltedCard
                                  imageSrc={item.image}
                                  altText={item.title}
                                  overlayContent={
                                      <p className="text-white text-xl font-bold text-center">
                                          {item.title}
                                      </p>
                                  }
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
      ) : (
        // Fallback for non-desktop screens (simple grid)
        <div className="max-w-4xl mx-auto px-6 pt-4 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10"> {/* Adjusted grid for smaller screens */}
            {filteredProjects.map((item) => (
              <motion.div
                key={`content-${item.id}`}
                className="mb-10"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => setSelectedProject(item)} // Click whole card to open modal
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-[#464646] mb-2">{item.title}</h2>
                    <span className="bg-[#f06123] text-white rounded-full text-xs w-fit px-3 py-1 capitalize">
                      {item.badge}
                    </span>
                    <div className="mt-3 text-sm text-gray-600 line-clamp-3">{item.description}</div> {/* Show snippet */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;