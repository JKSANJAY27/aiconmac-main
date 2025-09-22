// src/app/careers/page.js
"use client"; 
import React, { useState } from 'react';
import CareersPageContent from '@/components/pages/CareersPage';
import SiteNavbar from '@/components/layout/Navbar';

export default function CareersRoutePage() {

  return (
    <>
      <SiteNavbar />
      <div className="relative z-10">
        <CareersPageContent />
      </div>
    </>
  );
}