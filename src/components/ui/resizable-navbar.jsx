import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Removed useScroll and useMotionValueEvent
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import logo from "@/images/logo.jpg";
import Image from 'next/image';

// ... Navbar wrapper component (no change here) ...
export const Navbar = ({ children, className }) => (
    <div className={cn("fixed inset-x-0 top-0 z-50", className)}>
      <div className="p-4">{children}</div>
    </div>
);

// --- UPDATED NavBody Component ---
export const NavBody = ({ children, className }) => (
  // We've changed the background to a solid white and removed the blur/opacity
  // This makes the current logo with its white background look clean and integrated.
  <div className={cn("relative mx-auto hidden max-w-7xl flex-row items-center justify-between self-start rounded-full bg-white px-4 py-2 shadow-lg lg:flex", className)}>
    {children}
  </div>
);

// --- UPDATED NavItems Component ---
export const NavItems = ({ items }) => {
  const [hovered, setHovered] = useState(null);
  
  return (
    // The onMouseLeave on the parent container is important to clear the hover effect
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 font-medium lg:flex"
    >
      {items.map((item, idx) => (
        <Link
          key={`link-${idx}`}
          href={item.link}
          // onMouseEnter sets which item is currently hovered
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2 text-base text-dark-gray transition-colors hover:text-orange"
        >
          {/* --- THIS IS THE ANIMATION LOGIC --- */}
          {/* We check if the current item is the one being hovered */}
          {hovered === idx && (
            <motion.div
              // The 'layoutId' is the key. It tells Framer Motion to animate
              // this element as it moves between different links.
              layoutId="hovered-backdrop"
              className="absolute inset-0 z-0 h-full w-full rounded-full bg-gray-100"
              // You can add a subtle transition effect if you like
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          {/* The z-10 on the text ensures it appears above the hover backdrop */}
          <span className="relative z-10">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};


// NavbarLogo component (no change here)
export const NavbarLogo = () => (
    <Link href="/" className="relative z-20 flex items-center">
      <Image src={logo} alt="Aiconmac Logo" className="h-12 w-auto" />
    </Link>
);


// --- UPDATED NavbarButton Component ---
export const NavbarButton = ({ children, to, onClick, className }) => {
  // CHANGED: text-sm is now text-base
  const commonClasses = "relative z-20 rounded-full bg-orange px-6 py-2 text-base font-semibold text-black transition-colors hover:bg-opacity-90";
  
  if (to) {
    return (
      <Link href={to} className={cn(commonClasses, className)} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={cn(commonClasses, className)}>
      {children}
    </button>
  );
};


// --- Mobile Navigation ---
// Also updated mobile background to solid white for consistency
export const MobileNav = ({ children, className }) => (
  <div className={cn("relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-white px-4 py-3 shadow-md lg:hidden", className)}>
    {children}
  </div>
);

// The rest of the file (MobileNavHeader, MobileNavToggle, MobileNavMenu) remains the same
// ...
export const MobileNavHeader = ({ children }) => (
    <div className="flex w-full flex-row items-center justify-between">
      {children}
    </div>
);
  
export const MobileNavToggle = ({ isOpen, onClick }) => (
    <button onClick={onClick} className="relative z-50 text-dark-gray">
      {isOpen ? <IconX /> : <IconMenu2 />}
    </button>
);

export const MobileNavMenu = ({ isOpen, children }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute inset-x-0 top-full mt-px flex w-full flex-col items-start gap-4 rounded-b-lg bg-white px-4 py-6 shadow-xl"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
);