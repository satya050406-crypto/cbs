
import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-20 lg:py-28 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">About Us</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
                            Empowering businesses with <span className="relative inline-block px-2">
                                <span className="relative z-10 text-corporate-primary">unmatched expertise</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-corporate-secondary/30 -z-0"></span>
                            </span> and innovative solutions.
                        </h2>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
                            <p className="mb-4">
                                Nangia & Co LLP is a premier professional services firm, which since the last 4 decades continues to add value to the business of its expansive clientele that has included some of the largest Indian business houses and Fortune 500 multinational companies.
                            </p>
                            <p>
                                We are one of the leading Tax advisory firms in India, catering services to diverse sectors on a wide range of matters relating to Audit and Assurance, Taxation, GST, Entry Level Strategy, Mergers and Acquisition, Corporate Financial Advisory.
                            </p>
                        </div>
                        <a href="#" className="inline-flex items-center text-corporate-primary font-semibold hover:text-corporate-primary/80 dark:text-corporate-secondary dark:hover:text-corporate-secondary/80 transition-colors group">
                            Read More
                            <span className="material-icons ml-2 transform group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-corporate-secondary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-corporate-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg aspect-[3/4]">
                                    <img
                                        alt="Founder Portrait"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4NdyuyUeCPPRn9cDGUFWXHzUqtn2mWauPXmdCL6vbhCW0utRrmXZghfCrSt55vpB_G01Ge33MxJzvmH9riyXb37awiM8AlJtmDCHc0Atr6yrhu1o5DP9Rr3fV1hZzkOdheEUsl2LWG7-6saXJySuzmNYBlmM4sZFMT2eAyK915D-8JPmU77f9aNdvdDB1x6RhaNHmTW7Zuo_iRGHUJc0c4AFYm6fX3XYkj8KmfvCcHl1-UeUPjPoP8YX0OlLkwgNK1zXn1PqID5Vx"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-center h-full pt-4">
                                    <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">From the Founder's Desk</h3>
                                    <div className="w-12 h-1 bg-corporate-secondary mb-6"></div>
                                    <blockquote className="text-gray-600 dark:text-gray-400 italic mb-6 text-sm leading-relaxed">
                                        "At Nangia & Co LLP, our commitment to excellence and client-centric approach drives everything we do. We continuously innovate to foster sustainable growth."
                                    </blockquote>
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white text-lg">Rakesh Nangia</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Founder & Managing Partner</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
