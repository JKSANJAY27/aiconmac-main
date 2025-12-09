// src/app/careers/page.js
"use client";
import React, { useState } from 'react';
import CareersPageContent from '@/components/pages/CareersPage';
import SiteNavbar from '@/components/layout/GlassNavbar';

export default function CareersRoutePage() {

  return (
    <>
      <SiteNavbar isVisible={true} />
      <div className="relative z-10">
        <CareersPageContent />
      </div>
    </>
  );
}