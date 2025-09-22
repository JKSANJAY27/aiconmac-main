// src/components/pages/Homepage.js
"use client"; // This component uses client-side hooks like useState and motion

import React, { useState } from 'react';
import Link from 'next/link'; // Use next/link
import Image from 'next/image'; // For optimized images
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Import the new UI components (ensure these files exist in src/components/ui)
import { LampContainer } from '@/components/ui/lamp';
import TextType from '@/components/ui/typing-animation';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { CardSpotlight } from '@/components/ui/card-spotlight';

// Import images. For background-image, direct import as string is fine.
// For <Image /> component, you'd import the module.
// In Next.js with app router, you'd place these in `public/images`
// and reference them directly: `/images/img2.jpg`
// However, since your existing code imports them, let's assume they are handled like this for now.
// For a production Next.js app, consider moving these to `public` and using `/images/name.jpg`
import img2 from '@/images/img2.jpg'; // This assumes '@/images' path is set up, or it's a direct relative path
import img1 from '@/images/img1.jpg';
import img3 from '@/images/img3.jpg';
import img4 from '@/images/img4.jpg';
import img5 from '@/images/img5.jpg';


// For the interactive services section
const serviceImages = {
  master: img3, // Using imported image modules
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

// Feature cards data
const features = [
  {
    title: "Precision Crafted",
    description: "Every detail meticulously designed and executed",
    items: [
      "Advanced 3D modeling technology",
      "Hand-crafted finishing touches",
      "Quality control at every stage",
      "Perfect scale accuracy"
    ]
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
    items: [
      "Streamlined production process",
      "Dedicated project managers",
      "Real-time progress updates",
      "Express delivery options"
    ]
  },
  {
    title: "Award Winning",
    description: "Recognized excellence in model making",
    items: [
      "Industry recognition awards",
      "Client satisfaction guarantee",
      "Premium material selection",
      "Innovative design solutions"
    ]
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with decades of experience",
    items: [
      "40+ skilled craftsmen",
      "Architectural design expertise",
      "Continuous skill development",
      "Collaborative approach"
    ]
  }
];

const Homepage = () => {
  // State to manage which service image is visible in the interactive section
  const [activeServiceImage, setActiveServiceImage] = useState(serviceImages.master);

  // Data for the services section
  const services = [
    {
      id: 'master',
      title: 'Master Planning Models',
      description: "Large-scale models for a comprehensive overview of your project's layout.",
      img: serviceImages.master,
    },
    {
      id: 'architectural',
      title: 'Architectural Models',
      description: 'Detailed models showcasing exterior and interior designs with precision.',
      img: serviceImages.architectural,
    },
    {
      id: 'industrial',
      title: 'Industrial Models',
      description: 'Specialized models for industrial facilities and complex machinery.',
      img: serviceImages.industrial,
    },
  ];

  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  // CheckIcon component (Moved inside Homepage or create as a separate utility component if reused)
  const CheckIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-cyan-400 mt-1 shrink-0">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l-.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
          fill="currentColor"
          strokeWidth="0" />
      </svg>
    );
  };

  // Feature item component
  const FeatureItem = ({ title }) => {
    return (
      <li className="flex gap-2 items-start">
        <CheckIcon />
        <p className="text-gray-700 text-sm">{title}</p>
      </li>
    );
  };

  return (
    // FIXED: Removed overflow-x-hidden from main container
    <div className="w-full">
      {/* Enhanced Hero Section with Background */}
      <div className="relative w-full">
        {/* Enhanced Background with Parallax Effect */}
        <div className="absolute inset-0">
          {/* Background Image with subtle animation */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: `url(${img2.src || img2})` }} // Use .src if img2 is a module, otherwise direct
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
          
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-orange-900/20"></div>
          
          {/* Animated Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large decorative circles */}
            <motion.div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full border border-cyan-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-1/3 -left-32 w-48 h-48 rounded-full border border-orange-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${20 + (i * 10)}%`,
                }}
                animate={{
                    y: [-20, 20, -20],
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                }}
                />
            ))}
          </div>

          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Enhanced Hero Content */}
        <motion.section 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            className="relative h-screen min-h-[700px] z-10 flex items-center justify-center pt-14 sm:pt-18 md:pt-22 bg-transparent"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 relative z-20"
            >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Crafting Excellence Since 2013</span>
            </motion.div>

            {/* Enhanced Main Title */}
            <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Precision in
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Miniature
                </span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 leading-relaxed px-4"
            >
                We craft <span className="text-cyan-400 font-semibold">stunningly detailed</span> architectural models that bring your vision to life with{' '}
                <span className="text-orange-400 font-semibold">unmatched precision</span>.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 mb-12"
            >
                {[
                { number: "1200+", label: "Models Delivered" },
                { number: "11+", label: "Years Experience" },
                { number: "40+", label: "Expert Team" }
                ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                    <motion.div
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                    >
                    {stat.number}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
                ))}
            </motion.div>

            {/* Enhanced Call to Action */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <Link 
                    href="/projects" // Changed to href for next/link
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 overflow-hidden text-sm sm:text-base"
                >
                    <span className="relative z-10 text-white">View Our Work</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                </motion.div>

                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <Link
                    href="/contact" // Changed to href for next/link
                    className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
                >
                    <span>Get Quote</span>
                </Link>
                </motion.div>
            </motion.div>
            </div>
        </motion.section>
      </div>

      {/* Lamp Animation Section - It has its own dark background */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn}
        className="relative z-10 w-full"
      >
        <LampContainer>
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <TextType
              text={[
                "Crafting Dreams in Scale",
                "Where Vision Meets Reality",
                "Excellence in Every Detail"
              ]}
              as="h2"
              className="bg-gradient-to-br from-gray-700 to-gray-900 bg-clip-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent mb-6"
              typingSpeed={80}
              pauseDuration={3000}
              deletingSpeed={50}
              textColors={['#4a5568', '#2d3748', '#1a202c']}
              showCursor={true}
              cursorCharacter="_"
              cursorClassName="text-blue-500"
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-700 mb-8 sm:mb-12 leading-relaxed"
            >
              Over 1200 models delivered with unmatched precision and artistry since 2013. 
              We transform architectural visions into stunning physical masterpieces that inspire and impress.
            </motion.p>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">1200+</div>
                <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">Models Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">40+</div>
                <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">Skilled Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">11+</div>
                <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Key Features with CardSpotlight - Fixed container */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + (index * 0.1), duration: 0.6 }}
                >
                  <CardSpotlight className="h-auto min-h-[280px] w-full p-4 sm:p-6">
                    <p className="text-lg sm:text-xl font-bold relative z-20 mt-2 text-gray-800 mb-2">
                      {feature.title}
                    </p>
                    <p className="text-gray-600 relative z-20 text-sm mb-4">
                      {feature.description}
                    </p>
                    <div className="text-gray-600 relative z-20">
                      <ul className="list-none mt-2 space-y-2">
                        {feature.items.map((item, itemIndex) => (
                          <FeatureItem key={itemIndex} title={item} />
                        ))}
                      </ul>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action - Fixed button colors */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="/projects" // Changed to href for next/link
                style={{ color: 'white' }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-blue-500/25 text-sm sm:text-base"
              >
                Explore Our Portfolio
              </Link>
              <Link 
                href="/contact" // Changed to href for next/link
                className="border border-gray-400 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </LampContainer>
      </motion.section>

      {/* All Other Sections with White/Light Background */}
      <div className="bg-transparent relative z-20 w-full"> {/* This wrapper ensures white background */}
        {/* About Us Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }} // Use amount for better trigger
          className="py-12 md:py-32 bg-transparent w-full" // Explicitly white
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div className="md:pr-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-4">About Aiconmac</h2> {/* Use your dark-gray color variable */}
                  <p className="text-gray-600 text-base sm:text-lg mb-4">
                    Established in 2013, AICONMAC is a leading architectural model making company based in Dubai, UAE. We combine traditional craftsmanship with the latest technologies to create models of exceptional detail and accuracy.
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    With over a decade of experience and a team of 40+ skilled professionals, we've proudly delivered over 1200 high-quality models to a diverse clientele.
                  </p>
                </motion.div>
              </div>
              <motion.div 
                className="relative w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-gray-100 rounded-lg z-0"></div>
                {/* Use Next.js Image component for img1 */}
                <Image 
                  src={img1} 
                  alt="Architectural Model of a Mosque" 
                  width={700} // Provide actual or estimated width
                  height={500} // Provide actual or estimated height
                  className="relative rounded-lg shadow-xl z-10 transform hover:scale-105 transition-transform duration-500 w-full h-auto" 
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Services Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true }}
          className="py-12 md:py-32 bg-gray-50 w-full"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray mb-4">Our Services</h2>
              <TextType
                text="From grand urban landscapes to intricate building details, we provide the model for your success."
                as="p"
                className="text-dark-gray max-w-2xl mx-auto text-base sm:text-lg"
                typingSpeed={30}
                textColors={['#000000']}
                startOnVisible={true}
                showCursor={false}
              />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left side: List of services */}
              <motion.div 
                className="flex flex-col gap-4 order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    onMouseEnter={() => setActiveServiceImage(service.img)}
                    className="group p-4 sm:p-6 border-l-4 border-black hover:border-orange hover:bg-white rounded-r-lg transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl sm:text-2xl font-semibold text-dark-gray">{service.title}</h3>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-orange transition-colors" />
                    </div>
                    <p className="mt-2 text-gray-500 text-sm sm:text-base">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
              {/* Right side: Image that changes on hover */}
              <motion.div 
                className="h-64 sm:h-80 md:h-96 w-full rounded-lg shadow-xl overflow-hidden order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-110"
                  style={{ backgroundImage: `url(${activeServiceImage.src})` }}
                  key={activeServiceImage}
                ></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Client Testimonials with Infinite Moving Cards */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 sm:py-24 md:py-32 bg-transparent w-full" // Change from slate-950 to a light background, e.g., gray-50 or white
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-4">What Our Clients Say</h2> {/* Changed text color */}
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"> {/* Changed text color */}
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

        {/* Featured Projects Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 sm:py-24 md:py-32 bg-white w-full" // Explicitly white
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-[#464646] text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Project Cards with enhanced animations */}
              {[
                { img: img3, title: "Luxury Villa Complex" },
                { img: img4, title: "Downtown Tower" },
                { img: img5, title: "Coastal Resort" }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Link href="/projects" className="group block relative rounded-lg overflow-hidden shadow-lg">
                    {/* Use Next.js Image component for project images */}
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      width={600} // Provide width
                      height={400} // Provide height
                      className="w-full h-60 sm:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 p-4 sm:p-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-white text-xl sm:text-2xl font-bold">{project.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="text-center mt-12 sm:mt-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/projects" // Changed to href for next/link
                className="bg-[#464646] text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-gray-700 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg"
              >
                See All Projects
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Homepage;