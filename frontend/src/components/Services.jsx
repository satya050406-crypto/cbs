
import React from 'react';

const Services = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">Services</span>
                    <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white">Our Expertise</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {[
                        { title: "Taxation", desc: "Comprehensive direct and indirect tax advisory services tailored for compliance and efficiency." },
                        { title: "Audit & Assurance", desc: "Providing clarity and confidence in financial reporting through rigorous audit processes." },
                        { title: "Regulatory", desc: "Navigating complex regulatory environments to ensure seamless business operations." },
                        { title: "M&A", desc: "Strategic advice on mergers, acquisitions, and restructuring for maximum value creation." },
                        { title: "Risk Advisory", desc: "Identifying and mitigating business risks to protect assets and reputation." },
                        { title: "Forensics", desc: "In-depth investigations and forensic accounting to uncover financial irregularities." },
                        { title: "Cybersecurity", desc: "Protecting digital assets and sensitive data against evolving cyber threats." },
                        { title: "IPO Services", desc: "Guiding companies through the complex process of initial public offerings." },
                        { title: "Valuation", desc: "Accurate business and asset valuation services for informed decision making." }
                    ].map((service, index) => (
                        <div key={index} className="group p-8 bg-white dark:bg-gray-800 rounded-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-12 h-1 bg-corporate-primary/20 group-hover:bg-corporate-secondary mb-6 transition-colors duration-300"></div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-corporate-primary dark:group-hover:text-corporate-secondary transition-colors">{service.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">{service.desc}</p>
                            <a href="#" className="text-xs font-bold text-gray-400 group-hover:text-corporate-primary dark:group-hover:text-corporate-secondary uppercase tracking-wider flex items-center transition-colors">
                                View More <span className="material-icons text-[10px] ml-1 transform group-hover:translate-x-1 transition-transform">arrow_outward</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
