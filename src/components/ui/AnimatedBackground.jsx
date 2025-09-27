"use client";

import React from 'react';

const MuseumBackground = ({ scrollY = 0 }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Clean Museum Base - Ultra minimal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Architectural Grid - Museum exhibition style */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="museum-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#1a1a1a" strokeWidth="0.5"/>
              <circle cx="60" cy="60" r="1" fill="#1a1a1a" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#museum-grid)" />
        </svg>
      </div>

      {/* Floating Gallery Frames */}
      <div className="absolute inset-0">
        {/* Large floating frame outline */}
        <div
          className="absolute w-96 h-64 border border-gray-200/40 rounded-sm"
          style={{
            top: '20%', 
            right: '10%',
            transform: `translateY(${scrollY * 0.02}px) rotate(2deg)`,
            zIndex: 1
          }}
        >
          <div className="absolute inset-2 border border-gray-300/20 rounded-sm" />
        </div>

        {/* Medium frame */}
        <div
          className="absolute w-48 h-32 border border-gray-200/30 rounded-sm"
          style={{
            bottom: '25%', 
            left: '15%',
            transform: `translateY(${scrollY * -0.03}px) rotate(-1deg)`,
            zIndex: 1
          }}
        >
          <div className="absolute inset-1 border border-gray-300/15 rounded-sm" />
        </div>

        {/* Small accent frame */}
        <div
          className="absolute w-24 h-36 border border-gray-200/25 rounded-sm"
          style={{
            top: '60%', 
            right: '25%',
            transform: `translateY(${scrollY * 0.04}px) rotate(3deg)`,
            zIndex: 1
          }}
        />
      </div>

      {/* Subtle Exhibition Lighting Effects */}
      <div className="absolute inset-0">
        {/* Top gallery lighting */}
        <div
          className="absolute top-0 left-1/4 w-64 h-32 bg-gradient-to-b from-yellow-50/30 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.01}px) translateX(${scrollY * 0.005}px)`,
            zIndex: 1
          }}
        />
        
        {/* Side lighting accent */}
        <div
          className="absolute right-0 top-1/3 w-48 h-96 bg-gradient-to-l from-blue-50/20 to-transparent blur-2xl"
          style={{
            transform: `translateY(${scrollY * -0.02}px)`,
            zIndex: 1
          }}
        />

        {/* Bottom corner ambient */}
        <div
          className="absolute bottom-0 left-0 w-80 h-40 bg-gradient-to-tr from-gray-100/40 to-transparent blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.015}px)`,
            zIndex: 1
          }}
        />
      </div>

      {/* Architectural Blueprint Elements - Very Subtle */}
      <div className="absolute inset-0">
        {/* Dimension lines */}
        <div
          className="absolute top-1/4 left-1/3 w-48 h-0.5 bg-gradient-to-r from-transparent via-gray-300/20 to-transparent opacity-40"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        />
        <div
          className="absolute top-1/4 left-1/3 w-0.5 h-12 bg-gray-300/20 opacity-40"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        />
        <div
          className="absolute top-1/4 right-1/3 w-0.5 h-12 bg-gray-300/20 opacity-40"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        />

        {/* Center measurement line */}
        <div
          className="absolute top-2/3 right-1/4 w-32 h-0.5 bg-gradient-to-l from-transparent via-gray-300/25 to-transparent opacity-30"
          style={{ transform: `translateY(${scrollY * -0.04}px)` }}
        />
      </div>

      {/* Floating Geometric Precision Elements */}
      <div className="absolute inset-0">
        {/* Compass rose */}
        <div
          className="absolute top-1/6 right-1/5 w-8 h-8 opacity-20"
          style={{ transform: `rotate(${scrollY * 0.05}deg) translateY(${scrollY * 0.08}px)`, zIndex: 2 }}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <circle cx="16" cy="16" r="15" fill="none" stroke="#666" strokeWidth="0.5"/>
            <path d="M16 2 L16 30 M2 16 L30 16" stroke="#666" strokeWidth="0.3"/>
            <circle cx="16" cy="16" r="2" fill="#666" opacity="0.6"/>
          </svg>
        </div>

        {/* Scale ruler */}
        <div
          className="absolute bottom-1/4 left-1/6 w-24 h-3 opacity-15"
          style={{ transform: `translateY(${scrollY * -0.06}px)`, zIndex: 2 }}
        >
          <div className="w-full h-0.5 bg-gray-400 mb-1"/>
          <div className="flex justify-between text-xs">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="w-0.5 h-2 bg-gray-400"/>
            ))}
          </div>
        </div>

        {/* Precision dots */}
        <div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-gray-400/60 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.05}px)`, zIndex: 2 }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 border border-gray-400/40 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.07}px)`, zIndex: 2 }}
        />
        <div
          className="absolute top-2/3 left-2/3 w-1 h-1 bg-gray-400/50 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.03}px)`, zIndex: 2 }}
        />
      </div>

      {/* Museum Information Plaques - Subtle Shadows */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/3 left-1/12 w-32 h-20 bg-white/10 backdrop-blur-sm shadow-lg rounded opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.04}px) rotate(-1deg)`,
            zIndex: 3
          }}
        />
        
        <div
          className="absolute bottom-1/4 right-1/8 w-28 h-16 bg-white/08 backdrop-blur-sm shadow-lg rounded opacity-15"
          style={{
            transform: `translateY(${scrollY * -0.05}px) rotate(2deg)`,
            zIndex: 3
          }}
        />
      </div>

      {/* Ultra-subtle animated overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{ zIndex: 4 }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-gray-800/5"
          style={{
            transform: `translateX(${Math.sin(scrollY * 0.001) * 2}px) translateY(${Math.cos(scrollY * 0.001) * 1}px)`,
            animation: 'museum-ambient 60s ease-in-out infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes museum-ambient {
          0%, 100% { 
            opacity: 0.02; 
            transform: scale(1) rotate(0deg); 
          }
          33% { 
            opacity: 0.03; 
            transform: scale(1.01) rotate(0.5deg); 
          }
          66% { 
            opacity: 0.015; 
            transform: scale(0.99) rotate(-0.3deg); 
          }
        }
      `}</style>
    </div>
  );
};

export default MuseumBackground;