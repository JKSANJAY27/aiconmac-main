// src/components/modals/ProjectDetail.js
import React from 'react';
import { X } from 'lucide-react';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-60 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-95 animate-fade-in-up">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#464646] mb-2">{project.title}</h2>
              <span className="text-[#f06123] font-medium capitalize">
                {project.category.replace('-', ' ')}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-full transition-colors"
              aria-label="Close project details"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-2xl mb-6 flex items-center justify-center">
            {/* Replace with actual image/carousel component */}
            <span className="text-gray-400">Project Gallery for {project.title}</span>
          </div>
          
          <div className="prose max-w-none mb-6">
            <p className="text-gray-600 text-lg">
              {project.description || "Detailed project description showcasing the intricate craftsmanship and attention to detail that went into creating this architectural model. Our team utilized advanced techniques and premium materials to ensure every element was perfectly scaled and positioned."}
            </p>
            {/* Add more details here as needed */}
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>Client: Specific Client Name</li>
              <li>Location: Project Location</li>
              <li>Year: 2024</li>
              <li>Scale: 1:100</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-gray-100 h-32 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">Detail Image {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;