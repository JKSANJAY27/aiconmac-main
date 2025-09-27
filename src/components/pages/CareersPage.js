"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Palette, Ruler, Award, Users, Lightbulb, Target, Heart } from 'lucide-react';

const CareersPage = () => {
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

  const benefits = [
    { 
      icon: Palette, 
      title: 'Creative Mastery', 
      desc: 'Work on prestigious architectural projects with cutting-edge tools and materials' 
    },
    { 
      icon: Ruler, 
      title: 'Precision Excellence', 
      desc: 'Develop expertise in micro-scale craftsmanship and advanced manufacturing techniques' 
    },
    { 
      icon: Award, 
      title: 'Recognition & Growth', 
      desc: 'Professional development programs and opportunities to showcase your artistry globally' 
    },
    { 
      icon: Users, 
      title: 'Collaborative Atelier', 
      desc: 'Join a team of passionate artisans, architects, and creative technologists' 
    },
    { 
      icon: Lightbulb, 
      title: 'Innovation Lab', 
      desc: 'Access to latest 3D printing, laser cutting, and digital fabrication technologies' 
    },
    { 
      icon: Heart, 
      title: 'Artisan Culture', 
      desc: 'A workplace that values craftsmanship, attention to detail, and artistic vision' 
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-28">
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
          {/* Atelier Header */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-amber-200 bg-amber-50/80 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-light uppercase tracking-wider text-amber-700">
              Master Craftsmen Collective
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extralight text-gray-800 mb-6 tracking-tight"
          >
            Join Our Atelier
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Become part of a distinguished team where architectural vision meets artisan craftsmanship. 
            Shape the future of miniature architecture with precision, passion, and purpose.
          </motion.p>

          {/* Studio metrics */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">25+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Master Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">15</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">98%</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Join Us Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-extralight text-gray-800 mb-6 tracking-tight"
          >
            The Artisan Experience
          </motion.h2>
          <motion.div variants={fadeIn} className="w-24 h-px bg-amber-300 mx-auto mb-8" />
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 font-light max-w-3xl mx-auto"
          >
            Where traditional craftsmanship meets contemporary innovation in the pursuit of 
            architectural miniature excellence.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-8 rounded-2xl text-center group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
              }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.div
                className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <benefit.icon className="w-8 h-8 text-amber-700" />
              </motion.div>
              <h3 className="text-xl font-light text-gray-800 mb-4 group-hover:text-amber-700 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Form */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Application Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <div
              className="p-10 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-light text-gray-800 mb-4">Join Our Team</h2>
                <div className="w-16 h-px bg-amber-300 mb-4" />
                <p className="text-gray-600 font-light">
                  Submit your application to become part of our master craftsmen collective
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={cardVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-amber-400 focus:outline-none transition-all font-light"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </motion.div>
                  <motion.div variants={cardVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-4 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-amber-400 focus:outline-none transition-all font-light"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </motion.div>
                </div>

                <motion.div variants={cardVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-4 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-amber-400 focus:outline-none transition-all font-light"
                    style={{ backdropFilter: 'blur(10px)' }}
                  />
                </motion.div>

                <motion.div variants={cardVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    Specialization Area
                  </label>
                  <select 
                    className="w-full p-4 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-amber-400 focus:outline-none transition-all font-light"
                    style={{ backdropFilter: 'blur(10px)' }}
                  >
                    <option>Select Your Expertise</option>
                    <option>Master Model Maker</option>
                    <option>Precision Laser Technician</option>
                    <option>3D Design Specialist</option>
                    <option>Materials & Finishing Expert</option>
                    <option>Digital Fabrication Engineer</option>
                    <option>Project Management</option>
                    <option>Client Relations</option>
                  </select>
                </motion.div>

                <motion.div variants={cardVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    Portfolio & Resume
                  </label>
                  <motion.label
                    className="border-2 border-dashed border-gray-300/50 rounded-xl p-8 text-center cursor-pointer hover:border-amber-400 transition-all block bg-white/30 backdrop-blur-sm group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4 group-hover:text-amber-500 transition-colors" />
                    <p className="text-gray-600 mb-2 font-light">Upload your portfolio & resume</p>
                    <p className="text-sm text-gray-400 font-light">PDF, DOC, DOCX (Max 10MB)</p>
                  </motion.label>
                </motion.div>

                <motion.div variants={cardVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    Your Artisan Story
                  </label>
                  <textarea
                    placeholder="Tell us about your passion for precision craftsmanship, your experience with architectural models, and why you want to join our atelier..."
                    rows="6"
                    className="w-full p-4 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-amber-400 focus:outline-none transition-all font-light resize-none"
                    style={{ backdropFilter: 'blur(10px)' }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl text-white font-medium tracking-wider uppercase text-sm shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #f06123 0%, #d97706 100%)',
                    boxShadow: '0 10px 30px rgba(240, 97, 35, 0.3)'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 15px 40px rgba(240, 97, 35, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  variants={cardVariants}
                >
                  Submit Application
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Studio Culture & Values */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {/* Studio Culture */}
            <motion.div
              variants={cardVariants}
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Our Atelier Culture</h3>
                <div className="w-16 h-px bg-amber-300 mb-4" />
              </div>

              <div className="space-y-6">
                {[
                  { 
                    title: 'Precision as Philosophy', 
                    desc: 'Every millimeter matters. We believe that exceptional architecture deserves exceptional representation.' 
                  },
                  { 
                    title: 'Innovation Through Tradition', 
                    desc: 'Combining time-honored craftsmanship techniques with cutting-edge digital fabrication.' 
                  },
                  { 
                    title: 'Collaborative Excellence', 
                    desc: 'Ideas flow freely in our open studio environment where every voice contributes to creative solutions.' 
                  }
                ].map((value, index) => (
                  <div key={index} className="p-4 rounded-xl hover:bg-white/30 transition-all">
                    <h4 className="font-medium text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Growth */}
            <motion.div
              variants={cardVariants}
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Growth Pathway</h3>
                <div className="w-16 h-px bg-amber-300 mb-4" />
              </div>

              <div className="space-y-4">
                {[
                  'Apprentice Artisan → Journey Craftsperson → Master Model Maker',
                  'Continuous skill development workshops',
                  'International exhibition opportunities',
                  'Leadership roles in prestigious projects',
                  'Mentorship programs with industry legends'
                ].map((path, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-amber-600 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 font-light text-sm">{path}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Open Positions */}
            <motion.div
              variants={cardVariants}
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Current Openings</h3>
                <div className="w-16 h-px bg-amber-300 mb-4" />
              </div>

              <div className="space-y-3">
                {[
                  { role: 'Senior Model Maker', type: 'Full-time', urgent: true },
                  { role: '3D Design Specialist', type: 'Full-time', urgent: false },
                  { role: 'Precision Finishing Artist', type: 'Contract', urgent: false },
                  { role: 'Project Coordinator', type: 'Full-time', urgent: true }
                ].map((position, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/40">
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">{position.role}</h4>
                      <p className="text-xs text-gray-600">{position.type}</p>
                    </div>
                    {position.urgent && (
                      <span className="px-2 py-1 bg-amber-200 text-amber-800 text-xs rounded-full font-medium">
                        Urgent
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-20">
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
              Craft Your Legacy
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
              Join a team where your artistic vision shapes architectural miniatures that will 
              be treasured for generations. Your precision, our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Apply Now
              </motion.button>
              
              <motion.button
                className="px-8 py-4 rounded-full font-medium tracking-wider uppercase text-sm border border-gray-300 text-gray-700 hover:border-amber-400 hover:text-amber-700 transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Studio Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;