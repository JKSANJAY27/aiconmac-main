// src/app/page.js
"use client"; 

import React, { useState } from 'react';

import SiteNavbar from '@/components/layout/Navbar';

// Import the new Homepage content component
import HomepageContent from '@/components/pages/Homepage'; 

export default function HomePage() {

  return (
    <>
      <SiteNavbar />
      {/* Homepage content with the new design */}
      <div className="relative z-10">
        <HomepageContent />
      </div>
    </>
  );
}