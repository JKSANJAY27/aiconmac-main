"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '@/components/ui/LoadingScreen';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import PageLoader from '@/components/ui/PageLoader';

/**
 * Demo page to showcase all loading components
 * This can be removed after testing
 */
const LoadingDemo = () => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    const [showPageLoader, setShowPageLoader] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30 p-8">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extralight text-gray-800 mb-4">
                        Loading Components <span className="font-light text-amber-600">Gallery</span>
                    </h1>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
                </div>

                {/* Full Screen Loader Demo */}
                <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8">
                    <h2 className="text-2xl font-light text-gray-800 mb-4">Full Screen Loader</h2>
                    <p className="text-gray-600 mb-6 font-light">
                        Use this for initial page loads or major data fetching operations.
                    </p>
                    <button
                        onClick={() => {
                            setShowFullScreen(true);
                            setTimeout(() => setShowFullScreen(false), 3000);
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                        Show Full Screen Loader (3s)
                    </button>

                    {/* Code example */}
                    <div className="mt-6 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm font-mono">
                            {`import LoadingScreen from '@/components/ui/LoadingScreen';

// Usage:
{isLoading && <LoadingScreen message="Loading your content..." />}`}
                        </pre>
                    </div>
                </section>

                {/* Inline Spinners Demo */}
                <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8">
                    <h2 className="text-2xl font-light text-gray-800 mb-4">Inline Spinners</h2>
                    <p className="text-gray-600 mb-6 font-light">
                        Use these for buttons, cards, or inline loading states.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Small */}
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <LoadingSpinner size="sm" color="amber" />
                            <p className="mt-4 text-sm text-gray-600">Small</p>
                        </div>

                        {/* Medium */}
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <LoadingSpinner size="md" color="amber" />
                            <p className="mt-4 text-sm text-gray-600">Medium</p>
                        </div>

                        {/* Large */}
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <LoadingSpinner size="lg" color="amber" />
                            <p className="mt-4 text-sm text-gray-600">Large</p>
                        </div>

                        {/* XL */}
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <LoadingSpinner size="xl" color="amber" />
                            <p className="mt-4 text-sm text-gray-600">Extra Large</p>
                        </div>
                    </div>

                    {/* Color variants */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <LoadingSpinner size="md" color="amber" />
                            <p className="mt-4 text-sm text-gray-600">Amber (Default)</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <LoadingSpinner size="md" color="gray" />
                            <p className="mt-4 text-sm text-gray-600">Gray</p>
                        </div>

                        <div className="text-center p-6 bg-gray-900 rounded-lg">
                            <LoadingSpinner size="md" color="white" />
                            <p className="mt-4 text-sm text-white">White</p>
                        </div>
                    </div>

                    {/* Code example */}
                    <div className="mt-6 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm font-mono">
                            {`import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Usage:
<LoadingSpinner size="md" color="amber" />
<LoadingSpinner size="lg" color="white" />`}
                        </pre>
                    </div>
                </section>

                {/* Page Loader Demo */}
                <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8">
                    <h2 className="text-2xl font-light text-gray-800 mb-4">Page Transition Loader</h2>
                    <p className="text-gray-600 mb-6 font-light">
                        Wrap your page content with this component for smooth loading transitions.
                    </p>
                    <button
                        onClick={() => {
                            setShowPageLoader(true);
                            setTimeout(() => setShowPageLoader(false), 3000);
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                        Show Page Loader (3s)
                    </button>

                    {/* Code example */}
                    <div className="mt-6 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm font-mono">
                            {`import PageLoader from '@/components/ui/PageLoader';

// Usage:
<PageLoader isLoading={isLoading}>
  <YourPageContent />
</PageLoader>`}
                        </pre>
                    </div>
                </section>

                {/* Button Examples */}
                <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8">
                    <h2 className="text-2xl font-light text-gray-800 mb-4">Loading Buttons</h2>
                    <p className="text-gray-600 mb-6 font-light">
                        Examples of buttons with loading states.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg">
                            <LoadingSpinner size="sm" color="white" />
                            <span>Loading...</span>
                        </button>

                        <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg">
                            <LoadingSpinner size="sm" color="gray" />
                            <span>Processing</span>
                        </button>

                        <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-amber-500 text-amber-600 rounded-lg">
                            <LoadingSpinner size="sm" color="amber" />
                            <span>Submitting</span>
                        </button>
                    </div>
                </section>
            </div>

            {/* Render loaders */}
            {showFullScreen && <LoadingScreen message="Loading your gallery..." />}

            <PageLoader isLoading={showPageLoader}>
                <div className="hidden">Content would go here</div>
            </PageLoader>
        </div>
    );
};

export default LoadingDemo;
