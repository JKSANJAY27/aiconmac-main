"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Smaller inline loading spinner for use within components
 */
const LoadingSpinner = ({ size = "md", color = "amber" }) => {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16"
    };

    const colorClasses = {
        amber: {
            outer: "border-amber-200",
            middle: "border-amber-400",
            inner: "border-amber-600"
        },
        gray: {
            outer: "border-gray-200",
            middle: "border-gray-400",
            inner: "border-gray-600"
        },
        white: {
            outer: "border-white/30",
            middle: "border-white/60",
            inner: "border-white"
        }
    };

    const selectedSize = sizeClasses[size] || sizeClasses.md;
    const selectedColor = colorClasses[color] || colorClasses.amber;

    return (
        <div className="relative inline-flex items-center justify-center">
            <div className={`relative ${selectedSize}`}>
                {/* Outer ring */}
                <motion.div
                    className={`absolute inset-0 rounded-full border-2 ${selectedColor.outer}`}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Middle ring */}
                <motion.div
                    className={`absolute inset-1 rounded-full border-2 ${selectedColor.middle}`}
                    animate={{
                        rotate: -360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        rotate: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />

                {/* Inner dot */}
                <motion.div
                    className={`absolute inset-0 m-auto w-1/3 h-1/3 rounded-full bg-gradient-to-br from-amber-500 to-orange-600`}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
};

export default LoadingSpinner;
