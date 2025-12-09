// src/app/layout.js
import React from 'react';
import { Inter } from 'next/font/google';
import '../globals.css';
import Footer from '@/components/layout/Footer.jsx';
import AnimatedBackground from '@/components/ui/AnimatedBackground.jsx';
import ConditionalNavbar from '@/components/layout/ConditionalNavbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AICON MAC MODELS - Precision in Miniature',
  description: 'Crafting intricate architectural models with unparalleled detail and artistic excellence.',
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.className} min-h-screen min-w-screen relative`}>
        <NextIntlClientProvider messages={messages}>
          <ConditionalNavbar />
          <AnimatedBackground />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}