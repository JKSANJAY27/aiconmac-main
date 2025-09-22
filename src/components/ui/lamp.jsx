// src/components/ui/lamp.jsx
"use client";
import React from "react";
import { motion } from "framer-motion"; // Make sure framer-motion is correctly installed
import { cn } from "@/lib/utils"; // Assuming utils path, adjust if needed

export const LampContainer = ({
  children,
  className
}) => {
  return (
    <div
      // CHANGED: bg-slate-950 to bg-white. Added border-t for visual separation if needed.
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white w-full rounded-md pt-48 pb-24 z-0",
        className
      )}>
      <div
        className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        {/*
          These conic gradients create the "lamp" effect.
          For a light background, we need them to be subtle light colors or transparent
          and the masks to be the background color.
          The previous version used cyan/transparent on slate-950.
          Now, we'll try to make it a subtle light glow on white.
        */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            // CHANGED: Use very light colors for gradient on white background
            "--conic-position": "from 70deg at center top",
            "--tw-gradient-from": "#eff6ff", /* light blue-50 */
            "--tw-gradient-to": "transparent",
            "--tw-gradient-stops": "var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to)", /* light blue-50, light blue-100 */
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] [--conic-position:from_70deg_at_center_top]">
          {/* CHANGED: Masks to white background */}
          <div className="absolute w-[100%] left-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            // CHANGED: Use very light colors for gradient on white background
            "--conic-position": "from 290deg at center top",
            "--tw-gradient-from": "transparent",
            "--tw-gradient-to": "#e0f2fe", /* light blue-100 */
            "--tw-gradient-stops": "var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to)", /* light blue-100, light blue-200 */
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] [--conic-position:from_290deg_at_center_top]">
          {/* CHANGED: Masks to white background */}
          <div className="absolute w-40 h-[100%] right-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        {/* CHANGED: All blur elements and overlay colors to be light/transparent */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white blur-2xl opacity-70"></div> {/* White blur */}
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div> {/* This one can remain subtle */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-blue-100 opacity-50 blur-3xl"></div> {/* Light blue glow */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-blue-100 blur-2xl"></motion.div> {/* Light blue glow */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-300 "></motion.div> {/* Light blue line */}

        {/* This div masks the top part of the lamp effect to create the "glow" only below text */}
        {/* CHANGED: background to white */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white "></div>
      </div>
      {/* Children content wrapper - its position relative to the lamp effect */}
      {/* We might need to adjust this position if content appears too low/high */}
      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};