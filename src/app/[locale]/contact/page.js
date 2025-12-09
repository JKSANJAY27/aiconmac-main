// src/app/contact/page.js
"use client";
import React, { useState } from 'react';
import ContactPageContent from '@/components/pages/ContactPage';
import SiteNavbar from '@/components/layout/GlassNavbar';

export default function ContactRoutePage() {
  return (
    <>
      <SiteNavbar isVisible={true} />
      <div className="relative z-10">
        <ContactPageContent />
      </div>
    </>
  );
}