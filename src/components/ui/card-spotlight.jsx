// src/components/ui/card-spotlight.jsx
"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion"; // Changed from "motion/react"
import React, { useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "@/lib/utils"; // Assuming utils path, adjust if needed

export const CardSpotlight = ({
  children,
  radius = 350,
  // MODIFIED: Default color to a light subtle glow
  spotlightColor = "rgba(100, 150, 255, 0.1)", // Light blueish glow for white background
  // MODIFIED: New props for background and border, with light defaults
  cardBg = "white", // Default to white background
  cardBorder = "gray-200", // Default to a light gray border
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        // MODIFIED: Removed hardcoded bg-black and border-neutral-800.
        // Now uses the `cardBg` and `cardBorder` props, falling back to Tailwind defaults if prop is "white" or "gray-200" etc.
        `group/spotlight p-6 rounded-md relative border border-${cardBorder} bg-${cardBg} overflow-hidden`,
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: spotlightColor, // Use the prop's value (defaulted to light)
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}>
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246], // Blue (can be adjusted for a lighter feel too)
              [139, 92, 246], // Purple (can be adjusted for a lighter feel too)
            ]}
            dotSize={3} />
        )}
      </motion.div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};