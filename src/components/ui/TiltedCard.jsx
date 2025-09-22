// src/components/ui/TiltedCard.js
"use client";
import React, { useRef, useState } from "react";
import Image from 'next/image'; // <-- Import Next.js Image component
import { motion, useMotionValue, useSpring } from "framer-motion"; // Use framer-motion directly

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc, // This will now expect a Next.js image module
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%", // This prop is not directly used for width, see below
  // The image should take full size of its parent for `layout="fill"` or `objectFit="cover"`
  // imageHeight, imageWidth are not typically needed when using layout="fill"
  scaleOnHover = 1.03, // Adjusted slightly for less aggressive scale
  rotateAmplitude = 14,
  showMobileWarning = false, // Default to false, usually handled globally
  showTooltip = false, // Default to false, often too distracting
  overlayContent = null,
  displayOverlayContent = true, // Default to true as per your usage in ProjectsPage
  onClick, // Added onClick prop for event handling
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0); // For tooltip opacity
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    // Cap velocity to prevent extreme rotations
    rotateFigcaption.set(Math.max(-20, Math.min(20, -velocityY * 0.6))); // Capped rotation for stability
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    setLastY(0); // Reset lastY on mouse leave
  }

  return (
    <motion.figure // Wrap figure with motion.div for transitions
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight, // Use containerHeight
        // width: containerWidth, // Removed, let parent control width
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} // Pass onClick to the figure
    >
      {/* The main image container - uses full width/height of figure */}
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] rounded-[15px] overflow-hidden" // Added overflow-hidden to clip image
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        <Image // <-- Use Next.js Image component
          src={imageSrc} // Pass the image module directly
          alt={altText}
          layout="fill" // Fill the parent container (motion.div)
          objectFit="cover" // Cover the area without distortion
          className="absolute top-0 left-0 will-change-transform [transform:translateZ(0)]" // Remove explicit width/height
        />

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute inset-0 z-[2] will-change-transform [transform:translateZ(30px)] flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Added bg-black/50 for default overlay, full flex center
            style={{ opacity }} // Control opacity here with motion value
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && captionText && ( // Only show if captionText exists
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block whitespace-nowrap" // Added whitespace-nowrap
          style={{
            x,
            y,
            opacity, // Controlled by motion value
            rotate: rotateFigcaption,
            transformOrigin: "bottom left", // Adjust transform origin for more natural rotation
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </motion.figure>
  );
}