// components/layout/SiteNavbar.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import HeroNavbar from '@/components/ui/HeroNavbar';
import GlassNavbar from '@/components/layout/GlassNavbar';

export default function SiteNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [showHeroNav, setShowHeroNav] = useState(true);
  const [showGlassNav, setShowGlassNav] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isHomePage) {
      // On homepage: show hero navbar when at top, glass navbar when scrolled
      if (latest < 100) {
        setShowHeroNav(true);
        setShowGlassNav(false);
      } else {
        setShowHeroNav(false);
        setShowGlassNav(true);
      }
    } else {
      // On other pages: always show glass navbar
      setShowHeroNav(false);
      setShowGlassNav(true);
    }
  });

  // Set initial state based on page
  useEffect(() => {
    if (isHomePage) {
      const currentScroll = window.scrollY;
      setShowHeroNav(currentScroll < 100);
      setShowGlassNav(currentScroll >= 100);
    } else {
      setShowHeroNav(false);
      setShowGlassNav(true);
    }
  }, [pathname, isHomePage]);

  return (
    <>
      {/* Show HeroNavbar only on homepage and when at top */}
      {isHomePage && showHeroNav && <HeroNavbar />}
      
      {/* Show GlassNavbar when scrolled on homepage OR always on other pages */}
      {showGlassNav && <GlassNavbar isVisible={true} />}
    </>
  );
}