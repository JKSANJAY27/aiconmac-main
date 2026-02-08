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

                    <div className="relative flex flex-col items-center space-y-6">
                        {/* Clean Logo Animation */}
                        <div className="relative flex items-center justify-center">
                            <motion.div
                                className="relative w-20 h-20 bg-white rounded-xl shadow-lg p-3 flex items-center justify-center overflow-hidden"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    boxShadow: [
                                        "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                        "0 15px 20px -5px rgba(245, 158, 11, 0.25)",
                                        "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                    ]
                                }}
                                transition={{
                                    duration: 0.4,
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
