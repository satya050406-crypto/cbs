
import React from 'react';

const QuoteSection = () => {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
                </svg>
            </div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <span className="material-icons text-6xl text-corporate-secondary mb-6 opacity-80">format_quote</span>
                <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight mb-8">
                    Our success is built on a foundation of integrity, expertise, and client-centricity.
                </h2>
                <div className="w-16 h-1 bg-corporate-secondary mx-auto rounded-full"></div>
            </div>
        </section>
    );
};

export default QuoteSection;
