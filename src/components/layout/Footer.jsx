import React from 'react';
import Link from 'next/link';
import logo from '@/images/logo.jpg'; // Make sure the path to your logo is correct
import { Linkedin, Twitter, Instagram } from 'lucide-react'; // Using lucide-react icons
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-[#464646] relative z-30 p-4">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Branding & Logo */}
          <div className="md:col-span-4">
            <Link href="/" className="mb-4 inline-block">
              {/* Using a white/light version of the logo would be ideal here */}
              <Image src={logo} alt="Aiconmac Logo" className="h-12 w-auto bg-white rounded-md p-1" />
            </Link>
            <p className="text-gray-400 pr-4">Leading the way in architectural model making, we turn complex visions into tangible realities.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-orange transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-orange transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-orange transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:info@aiconmac.com" className="hover:text-orange transition-colors">info@aiconmac.com</a></li>
              <li><a href="tel:+971551234567" className="hover:text-orange transition-colors">+971 55 123 4567</a></li>
              <li>Industrial Area 15, Sharjah, UAE</li>
            </ul>
          </div>

          {/* Column 4: Call to Action */}
          <div className="md:col-span-3 bg-gray-800 p-6 rounded-lg">
             <h3 className="text-lg font-semibold text-white mb-3">Have a project in mind?</h3>
             <p className="text-gray-400 mb-4 text-sm">Let's create something extraordinary together.</p>
             <Link href="/contact" className="bg-orange text-white font-bold py-2 px-4 rounded-md inline-block hover:bg-opacity-90 transition-all">
                Start a Conversation
             </Link>
          </div>

        </div>

        {/* Bottom bar: Copyright & Socials */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Aiconmac. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-orange transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-orange transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-orange transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;