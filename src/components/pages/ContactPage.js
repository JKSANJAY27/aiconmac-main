"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, Globe } from 'lucide-react';

const ContactPage = () => {
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
              Architectural Atelier
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extralight text-gray-800 mb-6 tracking-tight"
          >
            Commission Studio
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Transform your architectural vision into museum-quality miniature masterpieces. 
            Our artisans combine traditional craftsmanship with cutting-edge precision.
          </motion.p>

          {/* Studio credentials */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">500+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Commissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">24hr</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-amber-600">15+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Countries</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Commission Request Form */}
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
                <h2 className="text-3xl font-light text-gray-800 mb-4">Commission Request</h2>
                <div className="w-16 h-px bg-amber-300 mb-4" />
                <p className="text-gray-600 font-light">
                  Begin your journey to architectural miniature excellence
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
                    Commission Type
                  </label>
                  <select 
                    className="w-full p-4 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-amber-400 focus:outline-none transition-all font-light"
                    style={{ backdropFilter: 'blur(10px)' }}
                  >
                    <option>Select Commission Type</option>
                    <option>Architectural Scale Model</option>
                    <option>Industrial Prototype</option>
                    <option>Urban Masterplan</option>
                    <option>Precision 3D Printing</option>
                    <option>Executive Gift Models</option>
                    <option>Museum Exhibition Piece</option>
                  </select>
                </motion.div>

                <motion.div variants={cardVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    Project Vision
                  </label>
                  <textarea
                    placeholder="Describe your architectural vision, scale requirements, materials preference, and any special details..."
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
                  Submit Commission Request
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Studio Information */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
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
                <h3 className="text-2xl font-light text-gray-800 mb-4">Atelier Details</h3>
                <div className="w-16 h-px bg-amber-300 mb-4" />
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Direct Line', value: '+1 (555) 123-4567', subValue: 'Available 9AM - 6PM EST' },
                  { icon: Mail, label: 'Studio Email', value: 'commissions@aiconmacmodels.com', subValue: 'Response within 24 hours' },
                  { icon: MapPin, label: 'Design Studio', value: '123 Architecture Quarter', subValue: 'Creative District, New York 10001' },
                  { icon: Clock, label: 'Studio Hours', value: 'Monday - Friday: 9:00 AM - 6:00 PM', subValue: 'Saturday: By appointment' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/30 transition-all cursor-pointer group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-amber-100 p-3 rounded-full group-hover:bg-amber-200 transition-colors">
                      <contact.icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-1">
                        {contact.label}
                      </div>
                      <div className="text-gray-800 font-light">{contact.value}</div>
                      <div className="text-sm text-gray-500 font-light">{contact.subValue}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Studio Credentials */}
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
                <h3 className="text-2xl font-light text-gray-800 mb-4">Studio Excellence</h3>
                <div className="w-16 h-px bg-amber-300 mb-4" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Award, title: 'Award-Winning Craftsmanship', desc: 'International recognition for precision and artistry' },
                  { icon: Globe, title: 'Global Clientele', desc: 'Serving architects and developers worldwide' },
                  { icon: Clock, title: 'Timeless Quality', desc: '15+ years of architectural miniature mastery' }
                ].map((credential, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4">
                    <div className="bg-amber-600 p-2 rounded-lg">
                      <credential.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">{credential.title}</h4>
                      <p className="text-sm text-gray-600 font-light">{credential.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location Map Placeholder */}
            <motion.div
              variants={cardVariants}
              className="rounded-2xl h-64 flex items-center justify-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-amber-100/30" />
              <div className="relative text-center">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <span className="text-amber-700 font-light">Interactive Studio Location</span>
                <p className="text-sm text-amber-600/70 mt-2">Click to view detailed directions</p>
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
              Begin Your Commission
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
              Every architectural masterpiece begins with a conversation. Let's discuss how we can 
              transform your vision into tangible artistry.
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
                Schedule Consultation
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
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;