import React, { useState } from "react";
import Link from "next/link";

// Import the UI building blocks from your resizable-navbar file
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"; // Adjusted import path

export default function SiteNavbar() {
  // Define the navigation items for your site
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Careers", link: "/careers" },
  ];

  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to close the menu, useful for mobile navigation
  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* --- Desktop Navigation --- */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton to="/contact">Contact Us</NavbarButton>
        </NavBody>

        {/* --- Mobile Navigation --- */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {/* Map over items to create links */}
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                passHref
                onClick={handleMenuClose} // Close menu on link click
                className="w-full py-2 text-lg font-medium text-dark-gray hover:text-orange"
              >
                {item.name}
              </Link>
            ))}
            {/* Separator and Contact button for mobile */}
            <div className="mt-2 w-full border-t border-gray-200 pt-4">
              <NavbarButton
                to="/contact"
                onClick={handleMenuClose} // Close menu on button click
                className="w-full text-center text-black"
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}