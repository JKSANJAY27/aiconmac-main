// src/components/modals/ProjectDetail.js
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Image from 'next/image';

const ProjectDetail = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) return null;

  const allImages = project.images || [];
  const hasMultipleImages = allImages.length > 1;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const openFullscreen = (index) => {
    setSelectedImageIndex(index);
    setIsFullscreen(true);
  };

  return (
    <>
      {/* Main Modal */}
      <AnimatePresence>
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 transition-all shadow-lg"
                aria-label="Close project details"
              >
                <X size={24} />
              </button>

              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-extralight text-gray-800 mb-3 tracking-tight">
                    {project.title}
                  </h2>
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
                    style={{
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)',
                      color: 'rgba(245, 158, 11, 0.8)',
                      border: '1px solid rgba(245, 158, 11, 0.2)'
                    }}
                  >
                    {project.category?.replace('-', ' ') || 'Featured'}
                  </span>
                </div>

                {/* Main Image Gallery */}
                {allImages.length > 0 && (
                  <div className="mb-8 relative group">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                      <Image
                        src={allImages[selectedImageIndex]?.url || '/images/placeholder.jpg'}
                        alt={allImages[selectedImageIndex]?.altText || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        className="object-cover"
                        priority
                      />

                      {/* Fullscreen Button */}
                      <button
                        onClick={() => openFullscreen(selectedImageIndex)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="View fullscreen"
                      >
                        <Maximize2 size={20} />
                      </button>

                      {/* Navigation Arrows */}
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Next image"
                          >
                            <ChevronRight size={24} />
                          </button>
                        </>
                      )}

                      {/* Image Counter */}
                      {hasMultipleImages && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-sm font-medium">
                          {selectedImageIndex + 1} / {allImages.length}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-gray-800 mb-4">Curatorial Notes</h3>
                  <div className="w-16 h-px bg-amber-300 mb-6" />
                  <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed">
                    {project.description || "Detailed project description showcasing the intricate craftsmanship and attention to detail that went into creating this architectural model. Our team utilized advanced techniques and premium materials to ensure every element was perfectly scaled and positioned."}
                  </div>
                </div>

                {/* Additional Images Grid */}
                {allImages.length > 1 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-light text-gray-800 mb-4">Project Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {allImages.map((image, index) => (
                        <motion.div
                          key={index}
                          className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => openFullscreen(index)}
                        >
                          <Image
                            src={image.url}
                            alt={image.altText || `${project.title} - Image ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                          </div>
                          {index === selectedImageIndex && (
                            <div className="absolute inset-0 border-4 border-amber-500 rounded-xl" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Client</div>
                    <div className="text-gray-800 font-light">Specific Client Name</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</div>
                    <div className="text-gray-800 font-light">Dubai Collection</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Year</div>
                    <div className="text-gray-800 font-light">
                      {project.createdAt ? new Date(project.createdAt).getFullYear() : '2024'}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Scale</div>
                    <div className="text-gray-800 font-light">1:200</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              aria-label="Exit fullscreen"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <div className="relative max-w-7xl max-h-full w-full h-full">
                <Image
                  src={allImages[selectedImageIndex]?.url || '/images/placeholder.jpg'}
                  alt={allImages[selectedImageIndex]?.altText || project.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            {/* Navigation */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                  {selectedImageIndex + 1} / {allImages.length}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;