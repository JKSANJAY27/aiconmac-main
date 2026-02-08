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
                {/* Clean Logo Animation */}
                <div className="relative flex items-center justify-center mb-4">
                    <motion.div
                        className="relative w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            boxShadow: [
                                "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                "0 20px 25px -5px rgba(245, 158, 11, 0.25)",
                                "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                            ]
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            boxShadow: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <img
                            src="/images/loader-logo.jpg"
                            alt="Aiconmac"
                            className="w-full h-full object-contain"
                        />

                        {/* Shimmer overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{
                                x: ['-100%', '200%']
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 0.5
                            }}
                        />
                    </motion.div>
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
