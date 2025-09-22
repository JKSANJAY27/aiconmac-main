// src/app/projects/page.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import ProjectsPageContent from '@/components/pages/ProjectsPage'; // Renamed for clarity, though original name works
import ProjectDetail from '@/components/modals/ProjectDetail';
import SiteNavbar from '@/components/layout/Navbar';

export default function ProjectsRoutePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all'); // State for filtering
  const [selectedProject, setSelectedProject] = useState(null); // State for modal

  return (
    <>
      <SiteNavbar />
      {/* Ensure main content wrapper allows space for fixed header and is above AnimatedBackground */}
      <div className="relative z-10 pt-16 md:pt-24 min-h-screen"> {/* Added pt and min-h-screen */}
        <ProjectsPageContent
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedProject={setSelectedProject} // Pass down the modal setter
        />
      </div>
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}