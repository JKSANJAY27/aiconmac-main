// src/app/layout.js
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css'; 
import Footer from '@/components/layout/Footer.jsx';
import AnimatedBackground from '@/components/ui/AnimatedBackground.jsx';
import ConditionalNavbar from '@/components/layout/ConditionalNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AICON MAC MODELS - Precision in Miniature',
  description: 'Crafting intricate architectural models with unparalleled detail and artistic excellence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen min-w-screen relative`}>
        <ConditionalNavbar />
        <AnimatedBackground />
        {children} 
        <Footer />
      </body>
    </html>
  );
}