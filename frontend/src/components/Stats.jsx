import React, { useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "45+", label: "Leaders" },
    { value: "2500+", label: "Valued Clients" },
    { value: "50+", label: "Countries" },
    { value: "1500+", label: "Professionals" },
];

const Stats = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 dark:divide-gray-700">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="relative text-center px-4 group cursor-default"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            {hoveredIdx === idx && (
                                <motion.span
                                    layoutId="stats-pill"
                                    className="absolute inset-y-[-1rem] inset-x-0 z-0 bg-gray-100 dark:bg-gray-700/50 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <div className="relative z-10">
                                <div className="font-display text-4xl font-bold text-corporate-primary dark:text-white mb-1 group-hover:text-corporate-primary/80 dark:group-hover:text-gray-200 transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
