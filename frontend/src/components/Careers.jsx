
import React from 'react';

const Careers = () => {
    const roles = [
        { title: "Senior Tax Consultant", location: "New Delhi", type: "Full-time" },
        { title: "Audit Manager", location: "Mumbai", type: "Full-time" },
        { title: "Legal Associate", location: "Bangalore", type: "Full-time" }
    ];

    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">Join Us</span>
                    <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Build your career with <span className="text-corporate-secondary">impact</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We are always looking for exceptional talent to join our growing team of professionals.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {roles.map((role, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 hover:border-corporate-primary/30 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-corporate-primary transition-colors">{role.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                <span className="flex items-center gap-1">
                                    <span className="material-icons text-base">location_on</span>
                                    {role.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="material-icons text-base">schedule</span>
                                    {role.type}
                                </span>
                            </div>
                            <a href="#" className="inline-flex items-center font-bold text-corporate-primary hover:text-corporate-secondary transition-colors">
                                Apply Now <span className="material-icons text-sm ml-1">arrow_forward</span>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="inline-block px-8 py-3 bg-corporate-primary text-white rounded-full font-bold hover:bg-corporate-primary/90 transition-colors shadow-lg shadow-corporate-primary/25">
                        View All Openings
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Careers;
