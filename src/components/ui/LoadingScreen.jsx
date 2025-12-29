"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ fullScreen = true, message = "Loading..." }) => {
    const containerClass = fullScreen
        ? "fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-amber-50/30"
        : "flex items-center justify-center py-20";

    return (
        <div className={containerClass}>
            {/* Backdrop blur effect for fullscreen */}
            {fullScreen && (
                <div className="absolute inset-0 backdrop-blur-sm bg-white/80" />
            )}

            <div className="relative z-10 flex flex-col items-center space-y-8">
                {/* Museum-style logo animation */}
                <div className="relative">
                    {/* Outer rotating ring */}
                    <motion.div
                        className="absolute inset-0 w-24 h-24 rounded-full border-2 border-amber-200"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Middle pulsing ring */}
                    <motion.div
                        className="absolute inset-2 w-20 h-20 rounded-full border-2 border-amber-400/50"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Inner rotating ring (opposite direction) */}
                    <motion.div
                        className="absolute inset-4 w-16 h-16 rounded-full border-2 border-amber-600"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Center logo */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <motion.div
                            className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg"
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <span className="text-white font-bold text-2xl">A</span>
                        </motion.div>
                    </div>
                </div>

                {/* Loading text with typing effect */}
                <motion.div
                    className="text-center space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.p
                        className="text-gray-700 font-light text-lg tracking-wide"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {message}
                    </motion.p>

                    {/* Animated dots */}
                    <div className="flex items-center justify-center space-x-2">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="w-2 h-2 bg-amber-600 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 1, 0.3]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Museum-style decorative line */}
                <motion.div
                    className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                    animate={{
                        scaleX: [0.5, 1, 0.5],
                        opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
