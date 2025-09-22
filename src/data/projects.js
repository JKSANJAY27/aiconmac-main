// src/data/projects.js

// Using image modules as it's best practice for Next.js Image component
// Assume these are in src/images. For public/, paths would be '/images/img1.jpg'
import img1Module from '@/images/img1.jpg';
import img3Module from '@/images/img3.jpg';
import img4Module from '@/images/img4.jpg';
import img5Module from '@/images/img5.jpg';

export const projects = [
  {
    id: 1, // Add id for filtering
    title: "Luxury Villa Complex",
    description: (
      <p>
        An exclusive residential project featuring state-of-the-art amenities. Our detailed models helped the developers visualize the space, leading to significant design improvements and successful pre-sales.
      </p>
    ),
    badge: "Residential",
    category: "architectural", // Match filter category
    image: img3Module, // Use image module
  },
  {
    id: 2,
    title: "Downtown Skyscraper",
    description: (
      <p>
        A landmark commercial tower in the heart of the city. We produced a 1:100 scale architectural model with full interior lighting to showcase the building&rsquo;s grandeur for investor presentations.
      </p>
    ),
    badge: "Commercial",
    category: "architectural", // Match filter category
    image: img4Module, // Use image module
  },
  {
    id: 3,
    title: "Coastal Resort &amp; Spa",
    description: (
      <p>
        This master planning model for a luxury coastal resort included villas, a hotel, and recreational facilities. The model was instrumental in securing regulatory approvals and marketing the destination to international partners.
      </p>
    ),
    badge: "Master Planning",
    category: "masterplan", // Match filter category
    image: img5Module, // Use image module
  },
  {
    id: 4,
    title: "Grand Mosque Replica",
    description: (
      <p>
        A highly intricate and culturally significant project. We utilized a combination of 3D printing for the complex geometric patterns and traditional craftsmanship for the finishing touches, resulting in a museum-quality piece.
      </p>
    ),
    badge: "Cultural",
    category: "architectural", // Match filter category
    image: img1Module, // Use image module
  },
  // Add other projects you had previously, ensuring they have an 'id', 'title', 'category', 'description', and 'image'
  {
    id: 5,
    title: 'Industrial Facility Model',
    description: (
      <p>
        A comprehensive model of an industrial plant, highlighting complex machinery and logistical pathways. Designed for clarity and precision.
      </p>
    ),
    badge: "Industrial",
    category: 'industrial',
    image: img4Module, // Example image, update as needed
  },
  {
    id: 6,
    title: '3D Printed Prototype',
    description: (
      <p>
        Rapid prototyping services delivering high-fidelity 3D printed models for design verification and presentation.
      </p>
    ),
    badge: "Prototype",
    category: '3d-printing',
    image: img5Module, // Example image, update as needed
  },
  {
    id: 7,
    title: 'Corporate Gift Model',
    description: (
      <p>
        Unique, custom-made miniature models perfect as corporate gifts, symbolizing achievements and partnerships.
      </p>
    ),
    badge: "Gift",
    category: 'business-gifts',
    image: img3Module, // Example image, update as needed
  },
];

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'architectural', label: 'Architectural' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'masterplan', label: 'Masterplan' },
  { id: '3d-printing', label: '3D Printing' },
  { id: 'business-gifts', label: 'Business Gifts' }
];