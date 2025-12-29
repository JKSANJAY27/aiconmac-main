"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Page transition loader with elegant fade effect
 */
const PageLoader = ({ isLoading, children }) => {
    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-amber-50/30"
                >
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/80" />

                    <div className="relative z-10 flex flex-col items-center space-y-6">
                        {/* Animated gallery frame */}
                        <motion.div
                            className="relative w-32 h-32"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Outer frame */}
                            <motion.div
                                className="absolute inset-0 border-4 border-amber-200 rounded-sm"
                                animate={{
                                    rotate: [0, 90, 180, 270, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Inner frame */}
                            <motion.div
                                className="absolute inset-4 border-2 border-amber-400 rounded-sm"
                                animate={{
                                    rotate: [360, 270, 180, 90, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Center logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-xl"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <span className="text-white font-bold text-3xl">A</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Loading text */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-gray-600 font-light text-sm uppercase tracking-[0.3em]">
                                Loading Gallery
                            </p>

                            {/* Progress bar */}
                            <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-amber-400 via-amber-600 to-orange-600"
                                    animate={{
                                        x: ["-100%", "100%"]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
