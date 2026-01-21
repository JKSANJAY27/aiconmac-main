"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Home, Compass, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    const t = useTranslations('NotFound');

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="min-h-[80vh] relative overflow-hidden flex items-center justify-center pt-20">
            {/* Museum lighting effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto"
                >
                    {/* Icon/Visual Element */}
                    <motion.div
                        variants={fadeIn}
                        className="inline-flex items-center justify-center w-24 h-24 mb-12 rounded-full border border-amber-200 bg-amber-50/80 backdrop-blur-sm"
                    >
                        <AlertTriangle className="w-10 h-10 text-amber-600 font-light" />
                    </motion.div>

                    {/* Error Code Label */}
                    <motion.div
                        variants={fadeIn}
                        className="mb-6"
                    >
                        <span className="text-sm font-light uppercase tracking-[0.3em] text-amber-700 bg-amber-50 px-4 py-2 border border-amber-100/50">
                            {t('errorCode')}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-extralight text-gray-800 mb-8 tracking-tight"
                    >
                        {t('title')}
                    </motion.h1>

                    <motion.div
                        variants={fadeIn}
                        className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
                    />

                    <motion.p
                        variants={fadeIn}
                        className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12"
                    >
                        {t('description')}
                    </motion.p>

                    <motion.div
                        variants={fadeIn}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Link
                            href="/"
                            className="group flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-light py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-amber-500/25 text-sm uppercase tracking-widest"
                        >
                            <Home className="w-4 h-4" />
                            <span>{t('backHome')}</span>
                        </Link>

                        <Link
                            href="/projects"
                            className="group flex items-center space-x-3 border border-gray-300 hover:border-amber-500 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-amber-600 font-light py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 text-sm uppercase tracking-widest"
                        >
                            <Compass className="w-4 h-4" />
                            <span>{t('exploreProjects')}</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Museum Floor Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />
        </div>
    );
}
