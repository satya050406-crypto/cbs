
import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-20 lg:py-28 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 items-center">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">About Us</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
                            Empowering businesses with <span className="relative inline-block px-2">
                                <span className="relative z-10 text-corporate-primary">unmatched expertise</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-corporate-secondary/30 -z-0"></span>
                            </span> and innovative solutions.
                        </h2>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8 mx-auto text-left md:text-center">
                            <p className="mb-4">
                                Nangia & Co LLP is a premier professional services firm, which since the last 4 decades continues to add value to the business of its expansive clientele that has included some of the largest Indian business houses and Fortune 500 multinational companies.
                            </p>
                            <p>
                                We are one of the leading Tax advisory firms in India, catering services to diverse sectors on a wide range of matters relating to Audit and Assurance, Taxation, GST, Entry Level Strategy, Mergers and Acquisition, Corporate Financial Advisory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
