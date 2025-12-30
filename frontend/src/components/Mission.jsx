import React from 'react';

const Mission = () => {
    return (
        <section className="py-20 lg:py-28 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-corporate-secondary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-corporate-primary/10 rounded-full blur-3xl"></div>
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
                    <div className="order-1 lg:order-2">
                        <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">Our Mission</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
                            Driving <span className="text-corporate-primary">Excellence</span> through Integrity and Innovation.
                        </h2>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
                            <p className="mb-4">
                                "Our mission is to provide exceptional financial and advisory services that empower our clients to achieve their business goals. We are dedicated to maintaining the highest standards of integrity, professionalism, and quality in everything we do."
                            </p>
                            <p>
                                We strive to be a trusted partner for our clients, delivering tailored solutions that address their unique challenges and opportunities in an ever-evolving global marketplace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
