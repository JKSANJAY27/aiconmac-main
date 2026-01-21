"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const ClientsGrid = ({ clients }) => {
    const t = useTranslations('ClientsPage');

    if (!clients || clients.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-500 font-light">{t('noClients')}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {clients.map((client, index) => (
                <motion.div
                    key={client.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="relative bg-white aspect-square p-8 flex flex-col items-center justify-between border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-none group-hover:-translate-y-2">
                        {/* Ambient background wash */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 w-full h-32 md:h-40 flex items-center justify-center">
                            {client.logo ? (
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            ) : (
                                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 transition-colors group-hover:border-amber-200">
                                    <span className="text-gray-300 text-[10px] uppercase tracking-tighter font-light">
                                        No Image
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="relative z-10 w-full pt-6 border-t border-gray-50 text-center">
                            <span className="text-xs md:text-sm font-light text-gray-500 group-hover:text-gray-800 uppercase tracking-[0.2em] transition-colors duration-300 block mb-2 px-2">
                                {client.name}
                            </span>
                            {/* Museum accent line */}
                            <div className="w-8 h-0.5 bg-amber-400/0 group-hover:bg-amber-400 mx-auto transition-all duration-500" />
                        </div>

                        {/* Corner museum bracket */}
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-gray-100 group-hover:border-amber-200/50 transition-colors duration-500" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ClientsGrid;
