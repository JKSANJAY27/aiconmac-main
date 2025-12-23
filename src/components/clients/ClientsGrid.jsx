"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const ClientsGrid = ({ clients }) => {
    if (!clients || clients.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-500 font-light">No clients found to display.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {clients.map((client, index) => (
                <motion.div
                    key={client.id || index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="aspect-square"
                >
                    <CardSpotlight className="h-full w-full p-6 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-amber-400/50 transition-colors duration-500">
                        <div className="relative w-full h-2/3 mb-4">
                            {client.logo ? (
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain p-2"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-md text-gray-400">
                                    No Logo
                                </div>
                            )}
                        </div>
                        <p className="text-center text-gray-700 font-light uppercase tracking-wider text-sm">
                            {client.name}
                        </p>
                    </CardSpotlight>
                </motion.div>
            ))}
        </div>
    );
};

export default ClientsGrid;
