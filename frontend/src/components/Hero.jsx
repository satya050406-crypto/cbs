
import React from 'react';

const Hero = () => {
    return (
        <header className="relative bg-gray-900 h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Corporate team meeting in modern office"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5RIyvrtvvmdkte8WA1aT-LFoHWoJQKI_KwpZqvzh0A273uYKdDv0UPLC30JA05NAL0eSnlzXsQihlsbQACIVz4ZWsoEYKG4oe-UP9R2Rm5onQ0szaGvlVxdhcMihmyo66fQWR6nacA0qdJ_ndZnZYjFVp2VNK1LinlnFJ0J4VpHHi7PEttbChzI9i6fo5VWlwHZyJyWTGf4yjY4Q2MT0JCcAQCgLWjucEbk5swGzbx28bJLyVnvVjTlWUPGZvLp5oQ3uxltmGr5O9"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-corporate-secondary/20 text-corporate-secondary border border-corporate-secondary/30 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">Our Newsletter</span>
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Sustainability Watch <br />
                        <span className="italic font-light text-gray-300">August, 2025</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl font-light">
                        Empowering excellence every step of the way. We navigate complex financial landscapes to secure your future.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#" className="px-8 py-3 bg-white text-corporate-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg flex items-center">
                            View More <span className="material-icons text-sm ml-2">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
