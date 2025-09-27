"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import the new components
// Import the navbar components
import HeroNavbar from '@/components/ui/HeroNavbar';

// Import the new carousel
import EnhancedCarousel from '@/components/ui/HeroCarousel';
import MuseumBackground from '@/components/ui/AnimatedBackground';
import { LampContainer } from '@/components/ui/lamp';
import TextType from '@/components/ui/typing-animation';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { CardSpotlight } from '@/components/ui/card-spotlight';

// Import images
import img2 from '@/images/img2.jpg';
import img1 from '@/images/img1.jpg';
import img3 from '@/images/img3.jpg';
import img4 from '@/images/img4.jpg';
import img5 from '@/images/img5.jpg';

// For the interactive services section
const serviceImages = {
  master: img3,
  architectural: img4,
  industrial: img5,
};

// Testimonials data for the infinite moving cards
const testimonials = [
  {
    quote: "AICONMAC delivered an incredibly detailed architectural model that helped us secure major funding for our project. Their attention to detail is unmatched.",
    name: "Sarah Al-Rashid",
    title: "Project Manager, Dubai Development Authority"
  },
  {
    quote: "The precision and craftsmanship in their industrial models exceeded our expectations. Every component was perfectly scaled and beautifully finished.",
    name: "Michael Chen",
    title: "Chief Engineer, Gulf Industries"
  },
  {
    quote: "Working with AICONMAC transformed how we present our architectural concepts to clients. Their models are true works of art.",
    name: "Fatima Al-Zahra",
    title: "Senior Architect, Emirates Design Studio"
  },
  {
    quote: "The master planning model they created for our urban development project was instrumental in gaining stakeholder approval.",
    name: "James Rodriguez",
    title: "Urban Planning Director, Metro Development Corp"
  },
  {
    quote: "Their ability to translate complex architectural drawings into stunning physical models is remarkable. Highly recommended.",
    name: "Aisha Patel",
    title: "Design Director, Skyline Architecture"
  }
];

// Feature cards data - Museum themed
const features = [
  {
    title: "Museum Quality",
    description: "Exhibition-grade models with impeccable detail",
    items: [
      "Archival materials and finishes",
      "Professional presentation standards",
      "Climate-resistant construction",
      "Collector-worthy craftsmanship"
    ]
  },
  {
    title: "Precision Engineering",
    description: "Technical accuracy meets artistic excellence",
    items: [
      "CAD-driven precision manufacturing",
      "Scale-perfect proportions",
      "Engineering-grade tolerances",
      "Quality control protocols"
    ]
  },
  {
    title: "Curated Experience",
    description: "Thoughtful design process from concept to completion",
    items: [
      "Collaborative design sessions",
      "Progress documentation",
      "Expert consultation",
      "Custom presentation solutions"
    ]
  },
  {
    title: "Legacy Collection",
    description: "Building tomorrow's architectural heritage today",
    items: [
      "11+ years of masterpieces",
      "1200+ models in portfolios worldwide",
      "Award-winning recognition",
      "Industry-leading innovation"
    ]
  }
];

// Interactive services data
const services = [
  {
    id: 'master',
    title: 'Master Planning Models',
    description: "Comprehensive urban visions that capture the grand scale of development projects with museum-quality presentation.",
    img: serviceImages.master,
  },
  {
    id: 'architectural',
    title: 'Architectural Models',
    description: 'Detailed building models showcasing both exterior beauty and interior sophistication in exhibition-ready formats.',
    img: serviceImages.architectural,
  },
  {
    id: 'industrial',
    title: 'Industrial Models',
    description: 'Complex facility models that communicate technical excellence and operational flow with artistic precision.',
    img: serviceImages.industrial,
  },
];

const Homepage = () => {
  const [activeServiceImage, setActiveServiceImage] = useState(serviceImages.master);
  const [scrollY, setScrollY] = useState(0);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  // CheckIcon component
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-amber-600 mt-1 shrink-0">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l-.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0" />
    </svg>
  );

  // Feature item component
  const FeatureItem = ({ title }) => (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-gray-700 text-sm font-light">{title}</p>
    </li>
  );

  return (
    <div className="w-full relative">
      <HeroNavbar />
      {/* Museum Background */}
      <MuseumBackground scrollY={scrollY} />
      <div className="relative w-full">
        <EnhancedCarousel />
      </div>

      {/* Lamp Animation Section - Museum Gallery Style */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn}
        className="relative z-10 w-full"
      >
        <LampContainer>
          <div className="max-w-6xl mx-auto text-center px-2 sm:px-4 lg:px-6">
            {/* Museum-style section header */}
            <div className="mb-8">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-6" />
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                Master Craftsmanship
              </span>
            </div>

            <TextType
              text={[
                "Curating Architectural Dreams",
                "Where Vision Becomes Art",
                "Excellence in Every Detail"
              ]}
              as="h2"
              className="bg-gradient-to-br from-gray-700 to-gray-900 bg-clip-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-transparent mb-8"
              typingSpeed={80}
              pauseDuration={3000}
              deletingSpeed={50}
              textColors={['#4a5568', '#2d3748', '#1a202c']}
              showCursor={true}
              cursorCharacter="_"
              cursorClassName="text-amber-600"
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-gray-600 mb-12 sm:mb-16 leading-relaxed font-light"
            >
              Over 1200 architectural masterpieces curated with museum-quality precision since 2013. 
              Each model represents a perfect synthesis of traditional craftsmanship and contemporary innovation, 
              transforming architectural visions into tangible works of art.
            </motion.p>

            {/* Museum-style stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20"
            >
              <div className="text-center relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extralight text-amber-600 mb-3">1200+</div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-light">Masterpieces Created</div>
                <div className="w-12 h-0.5 bg-amber-400/50 mx-auto mt-3" />
              </div>
              <div className="text-center relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extralight text-amber-600 mb-3">40+</div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-light">Master Artisans</div>
                <div className="w-12 h-0.5 bg-amber-400/50 mx-auto mt-3" />
              </div>
              <div className="text-center relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extralight text-amber-600 mb-3">11+</div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-light">Years of Excellence</div>
                <div className="w-12 h-0.5 bg-amber-400/50 mx-auto mt-3" />
              </div>
            </motion.div>

            {/* Museum-quality features with CardSpotlight */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + (index * 0.1), duration: 0.6 }}
                >
                  <CardSpotlight className="h-auto min-h-[320px] w-full p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                    <div className="mb-4">
                      <div className="w-8 h-0.5 bg-amber-400 mb-3" />
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                        Premium Service
                      </span>
                    </div>
                    <p className="text-lg sm:text-xl font-light relative z-20 mt-2 text-gray-800 mb-3">
                      {feature.title}
                    </p>
                    <p className="text-gray-600 relative z-20 text-sm mb-6 font-light leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="text-gray-600 relative z-20">
                      <ul className="list-none mt-2 space-y-3">
                        {feature.items.map((item, itemIndex) => (
                          <FeatureItem key={itemIndex} title={item} />
                        ))}
                      </ul>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </motion.div>

            {/* Museum-style call to action */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link 
                href="/projects"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-light py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-amber-500/25 text-sm sm:text-base uppercase tracking-wider"
              >
                Explore Our Collection
              </Link>
              <Link 
                href="/contact"
                className="border border-gray-300 hover:border-amber-500 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-amber-600 font-light py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 text-sm sm:text-base uppercase tracking-wider"
              >
                Commission Artwork
              </Link>
            </motion.div>
          </div>
        </LampContainer>
      </motion.section>

      {/* All Other Sections with Museum Theme */}
      <div className="bg-transparent backdrop-blur-sm relative z-20 w-full">
        {/* About Us Section - Museum Style */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 md:py-32 bg-transparent backdrop-blur-sm w-full"
        >
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
              <div className="md:pr-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Museum-style section header */}
                  <div className="mb-8">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mb-4" />
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                      About the Atelier
                    </span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#464646] mb-8 leading-tight">
                    Aiconmac<br />
                    <span className="font-light text-gray-600">Architectural Gallery</span>
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                      Established in 2013 as Dubai's premier architectural model atelier, AICONMAC combines 
                      traditional craftsmanship with museum-quality presentation standards. Each piece in our 
                      collection represents a meticulous fusion of art, architecture, and precision engineering.
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed font-light">
                      Our gallery of 40+ master artisans has curated over 1200 architectural masterpieces, 
                      establishing a legacy that transcends borders and transforms the way architectural 
                      visions are presented and preserved.
                    </p>
                  </div>
                  
                  {/* Museum-style stats */}
                  <div className="mt-12 grid grid-cols-3 gap-8">
                    {[
                      { value: "1200+", label: "Curated Works" },
                      { value: "40+", label: "Master Artisans" },
                      { value: "11+", label: "Years of Excellence" }
                    ].map((stat, index) => (
                      <div key={stat.label} className="text-center relative">
                        <div className="text-2xl md:text-3xl font-extralight text-amber-600 mb-2">{stat.value}</div>
                        <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-light">{stat.label}</div>
                        <div className="w-8 h-0.5 bg-amber-400/50 mx-auto mt-2" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="relative w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Museum-style exhibition frame */}
                <div className="relative bg-transparent p-6 shadow-2xl border border-gray-100">
                  <div className="absolute -inset-6 bg-gradient-to-br from-amber-50 via-white to-gray-50 -z-10" />
                  <Image 
                    src={img1} 
                    alt="Featured Architectural Model" 
                    width={700}
                    height={500}
                    className="w-full h-auto grayscale-[10%] contrast-110 transform hover:scale-105 transition-transform duration-700" 
                  />
                  
                  {/* Museum exhibition label */}
                  <div className="mt-6 px-2 border-t border-gray-100 pt-4">
                    <div className="text-sm font-light text-gray-800 mb-1">Featured Masterpiece</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                      Precision Architectural Model — Mixed Media, Scale 1:200
                    </div>
                    <div className="text-xs text-gray-400 mt-2 font-light">
                      From the AICONMAC Collection, Dubai
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Section - Gallery Exhibition Style */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true }}
          className="py-20 md:py-32 bg-gray-50/80 backdrop-blur-sm w-full"
        >
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            {/* Gallery-style header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                  Collection Overview
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#464646] mb-8">
                Our <span className="font-light text-gray-600">Specializations</span>
              </h2>
              <TextType
                text="From grand urban landscapes to intricate building details, we curate the models for architectural excellence."
                as="p"
                className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg font-light"
                typingSpeed={30}
                textColors={['#6b7280']}
                startOnVisible={true}
                showCursor={false}
              />
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
              {/* Services Exhibition Menu */}
              <motion.div 
                className="space-y-8 order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    onMouseEnter={() => setActiveServiceImage(service.img)}
                    className="group cursor-pointer relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="border-l-4 border-gray-200 group-hover:border-amber-500 pl-6 py-6 group-hover:bg-white/60 backdrop-blur-sm rounded-r-lg transition-all duration-500">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl sm:text-2xl font-light text-[#464646] group-hover:text-gray-800 transition-colors">
                          {service.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-amber-600 transform group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed font-light">
                        {service.description}
                      </p>
                      {/* Museum-style accent line */}
                      <div className="w-8 h-0.5 bg-amber-400/0 group-hover:bg-amber-400 transition-all duration-500 mt-4" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Gallery Display Case */}
              <motion.div 
                className="relative h-96 md:h-[500px] w-full order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Museum-style display case with lighting */}
                <div className="relative h-full bg-white shadow-2xl overflow-hidden border border-gray-100">
                  <div className="absolute inset-0 p-8 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
                    <div
                      className="w-full h-full bg-cover bg-center transition-all duration-700 ease-out grayscale-[5%] contrast-110 rounded-sm"
                      style={{ backgroundImage: `url(${activeServiceImage.src})` }}
                    />
                  </div>
                  
                  {/* Gallery spotlight effect */}
                  <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-amber-50/50 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
                  
                  {/* Museum information placard */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 border border-gray-200/50">
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                      Featured Work — Interactive Display
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Client Testimonials - Refined Museum Style */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 md:py-32 bg-white/95 backdrop-blur-sm w-full"
        >
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="mb-6">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4" />
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                  Client Testimonials
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extralight text-[#464646] mb-6">
                Voices from Our <span className="font-light text-gray-600">Collection</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
                Trusted by leading architects, developers, and designers across the UAE and beyond.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                pauseOnHover={true}
                className="mb-8"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Projects Section - Gallery Grid */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 md:py-32 bg-gray-50/50 backdrop-blur-sm w-full"
        >
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4" />
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                  Exhibition Highlights
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extralight text-[#464646] mb-8">
                Featured <span className="font-light text-gray-600">Masterpieces</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg font-light leading-relaxed">
                A curated selection of our most distinguished architectural models, each representing 
                the pinnacle of craftsmanship and artistic excellence.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                { img: img3, title: "Urban Planning Masterpiece", medium: "Scale 1:500 — Mixed Media", year: "2023" },
                { img: img4, title: "Contemporary Architecture", medium: "Scale 1:200 — Premium Materials", year: "2023" },
                { img: img5, title: "Industrial Complex Model", medium: "Scale 1:1000 — Technical Precision", year: "2024" }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href="/projects" className="block">
                    {/* Museum exhibition frame */}
                    <div className="relative bg-white p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                      {/* Ambient lighting effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-white to-gray-50/30 group-hover:from-amber-50/40 transition-all duration-500" />
                      
                      <div className="relative z-10">
                        <Image 
                          src={project.img} 
                          alt={project.title} 
                          width={600}
                          height={400}
                          className="w-full h-64 sm:h-80 object-cover grayscale-[8%] group-hover:grayscale-0 contrast-105 group-hover:contrast-110 transition-all duration-700" 
                        />
                        
                        {/* Museum exhibition label */}
                        <div className="mt-6 px-2 border-t border-gray-100 pt-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-light text-[#464646] group-hover:text-gray-800 transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-xs text-gray-400 font-light">{project.year}</span>
                          </div>
                          <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-light mb-2">
                            {project.medium}
                          </p>
                          <div className="text-xs text-gray-400 font-light">
                            From the AICONMAC Collection
                          </div>
                          {/* Museum accent line */}
                          <div className="w-8 h-0.5 bg-amber-400/0 group-hover:bg-amber-400 transition-all duration-500 mt-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm hover:bg-white text-[#464646] hover:text-amber-600 font-light rounded-none border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 text-base uppercase tracking-[0.15em] group"
              >
                View Complete Collection
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Section - Museum Contact */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 md:py-32 bg-white/95 backdrop-blur-sm w-full"
        >
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                    Commission Your Masterpiece
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#464646] mb-8 leading-tight">
                  Ready to Create Your<br />
                  <span className="font-light text-amber-600">Architectural Legacy?</span>
                </h2>
                
                <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                  Transform your architectural vision into a museum-quality masterpiece. 
                  Our master artisans are ready to bring your dreams to life with unparalleled precision and artistry.
                </p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-light py-4 px-8 rounded-none transition-all duration-300 hover:shadow-xl shadow-amber-500/25 text-base uppercase tracking-[0.15em] group"
                    >
                      Start Your Commission
                      <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="/projects"
                      className="border border-gray-300 hover:border-amber-500 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-amber-600 font-light py-4 px-8 rounded-none transition-all duration-300 text-base uppercase tracking-[0.15em]"
                    >
                      View Our Portfolio
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Homepage;