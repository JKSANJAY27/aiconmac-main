// src/components/layout/AnimatedBackground.js
"use client"; // Retain use client if using Framer Motion or other hooks

import React from 'react';
// import { motion } from 'framer-motion'; // Only if you plan to use Framer Motion for these animations

const AnimatedBackground = ({ scrollY }) => { // <-- Reintroduce scrollY prop
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Gradient Background - Subtle, almost white, with hints of blue/gray */}
      {/* This ensures a smooth transition and provides the initial "shades of white" */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/80 to-blue-50/80"></div>

      {/* Geometric Grid Pattern - Very Subtle */}
      <div className="absolute inset-0 opacity-20"> {/* Reduced opacity */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> {/* Larger grid size */}
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#f0f4f8" strokeWidth="0.3"/> {/* Lighter, thinner lines */}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Architectural/Abstract Elements (Layer 1 - further back) */}
      <div className="absolute inset-0">
        {/* Large, slow-moving blurred circle */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-100/30 filter blur-3xl animate-float-slow"
          style={{
            top: '15%', left: '-10%',
            transform: `translateY(${scrollY * 0.05}px) translateX(${scrollY * 0.02}px)`, // Subtle scroll effect
            zIndex: 1
          }}
        ></div>
        {/* Large, slow-moving blurred rectangle */}
        <div
          className="absolute w-[400px] h-[300px] bg-slate-100/30 filter blur-3xl animate-gradient-shift-slow"
          style={{
            bottom: '10%', right: '-15%', transform: `translateY(${scrollY * -0.07}px) translateX(${scrollY * 0.03}px) rotate(15deg)`,
            zIndex: 1
          }}
        ></div>

        {/* Blueprint Lines - Very subtle pulse, longer duration */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-0.5 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent animate-pulse-longer opacity-20"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }} // Scroll effect
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-72 h-0.5 bg-gradient-to-l from-transparent via-slate-200/50 to-transparent animate-pulse-longer animation-delay-1500 opacity-20"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }} // Scroll effect
        ></div>
      </div>

      {/* Geometric Shapes & Floating Dots (Layer 2 - mid-ground) */}
      <div className="absolute inset-0">
        {/* Rotating Square */}
        <div
          className="absolute top-1/6 right-1/6 w-6 h-6 border border-blue-200/70 rotate-45 animate-spin-medium opacity-50"
          style={{ transform: `rotate(45deg) translateY(${scrollY * 0.1}px)`, zIndex: 2 }}
        ></div>
        {/* Rotating Triangle (custom shape) */}
        <div
          className="absolute bottom-1/4 left-1/5 w-5 h-5 border-l border-b border-slate-200/70 rotate-12 animate-spin-reverse-medium opacity-40"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', transform: `translateY(${scrollY * -0.06}px) rotate(12deg)`, zIndex: 2 }}
        ></div>
        {/* Small pulsing circle */}
        <div
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-gray-200/60 rounded-full animate-pulse-dot opacity-40"
          style={{ transform: `translateY(${scrollY * 0.04}px)`, zIndex: 2 }}
        ></div>

        {/* Floating Precision Dots - slightly larger, softer colors */}
        <div
          className="absolute top-1/3 left-1/6 w-1.5 h-1.5 bg-blue-300/70 rounded-full animate-float-medium opacity-50"
          style={{ transform: `translateY(${scrollY * 0.07}px)`, zIndex: 2 }}
        ></div>
        <div
          className="absolute bottom-1/5 right-1/5 w-1.5 h-1.5 bg-slate-300/70 rounded-full animate-float-reverse-medium opacity-40"
          style={{ transform: `translateY(${scrollY * -0.08}px)`, zIndex: 2 }}
        ></div>
      </div>

      {/* Subtle Moving Gradients (Layer 3 - foreground) */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/10 via-transparent to-slate-100/10 animate-gradient-shift-fast"
          style={{ zIndex: 3 }}
        ></div>
        <div
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-100/8 via-transparent to-blue-50/8 animate-gradient-shift-fast-reverse"
          style={{ zIndex: 3 }}
        ></div>
      </div>

      {/* Technical Drawing Inspiration - Very low opacity, minimal animation */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        style={{ transform: `translate(-50%, -50%) rotate(${scrollY * 0.01}deg)`, zIndex: 4 }} // Subtle scroll rotate
      >
        <svg width="600" height="400" viewBox="0 0 400 300" className="animate-draw-subtle">
          <g stroke="#94a3b8" strokeWidth="0.3" fill="none"> {/* Lighter stroke */}
            <rect x="50" y="50" width="120" height="80" className="animate-dash-array-subtle" strokeDasharray="6,6" />
            <rect x="200" y="100" width="80" height="60" className="animate-dash-array-subtle-reverse" strokeDasharray="5,5" />
            <circle cx="320" cy="80" r="25" className="animate-dash-array-subtle" strokeDasharray="4,4" />
            <line x1="170" y1="90" x2="200" y2="130" className="animate-pulse-subtle" />
            <line x1="280" y1="130" x2="295" y2="80" className="animate-pulse-subtle" opacity="0.6" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        /* Animation Base */
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes float-reverse { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(8px); } }
        @keyframes gradient-shift { 0%, 100% { transform: translateX(0) translateY(0); } 25% { transform: translateX(2px) translateY(-2px); } 50% { transform: translateX(-1px) translateY(-3px); } 75% { transform: translateX(1px) translateY(2px); } }
        @keyframes gradient-shift-reverse { 0%, 100% { transform: translateX(0) translateY(0); } 25% { transform: translateX(-2px) translateY(2px); } 50% { transform: translateX(1px) translateY(3px); } 75% { transform: translateX(-1px) translateY(-2px); } }
        @keyframes pulse-longer { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.4; } }
        @keyframes pulse-dot { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.2); opacity: 0.6; } }
        @keyframes dash-array { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 100; } } /* Longer dash for subtle effect */

        /* Custom Animation Delays/Durations */
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }

        /* Applied Animations */
        .animate-spin-slow { animation: spin-slow 40s linear infinite; } /* Slower */
        .animate-spin-medium { animation: spin-slow 30s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 45s linear infinite; } /* Slower */
        .animate-spin-reverse-medium { animation: spin-reverse 35s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; } /* Slower */
        .animate-float-slow { animation: float 10s ease-in-out infinite; } /* Slower */
        .animate-float-medium { animation: float 7s ease-in-out infinite; }
        .animate-float-reverse-medium { animation: float-reverse 9s ease-in-out infinite; }
        .animate-gradient-shift-slow { animation: gradient-shift 25s ease-in-out infinite; } /* Slower */
        .animate-gradient-shift-fast { animation: gradient-shift 15s ease-in-out infinite; }
        .animate-gradient-shift-fast-reverse { animation: gradient-shift-reverse 18s ease-in-out infinite; }
        .animate-dash-array-subtle { animation: dash-array 10s linear infinite; } /* Longer duration for subtlety */
        .animate-dash-array-subtle-reverse { animation: dash-array 12s linear infinite reverse; } /* Longer duration for subtlety */
        .animate-pulse-longer { animation: pulse-longer 4s ease-in-out infinite; }
        .animate-pulse-subtle { animation: pulse-longer 5s ease-in-out infinite; } /* Re-using pulse-longer but can define new if needed */
        .animate-draw-subtle { animation: none; } /* Keeping SVG animation off by default for background subtlety */
      `}</style>
    </div>
  );
};

export default AnimatedBackground;