"use client";

import { usePathname } from 'next/navigation';
import SiteNavbar from './SiteNavbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Only render SiteNavbar on non-homepage routes
  if (isHomePage) {
    return null;
  }

  return <SiteNavbar />;
}