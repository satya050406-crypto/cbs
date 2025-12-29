
import React from 'react';

const Insights = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">In News</span>
                        <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white">Media & Insights</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-sm font-bold text-corporate-primary hover:text-corporate-primary/80 dark:text-corporate-secondary dark:hover:text-corporate-secondary/80 transition-colors">
                        VIEW ALL <span className="material-icons text-sm ml-1">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            category: "News",
                            date: "September 19, 2025",
                            title: "How Mergers and Acquisitions Advisory Firms Power Expansion",
                            desc: "Exploring the critical role of strategic advisory in facilitating successful cross-border mergers.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa7l7v35jbgG9dLQ9deKcip3ytiXw01z6Q7LPtfvo2m9shDeXZvsdXScNeg6jHiU6P6WCfjNx7XCYJM3F8zpRV3cZCl0x-S2gQOTZBVE5aB131SnRWpxcF66Gam8IYrb65RWKeK581tikdu7rg6Cycw2pHddrf8eBCXa4YSyYec6BAE0-W0jvoiBHCRptEnocxCi2wfx8hty8gqEe-5CDzhrfJzMuAq_3sArSiL-6aCvPjtS2n4Ab0zueoMCwraM5Opiv8Ozsm02_z"
                        },
                        {
                            category: "Report",
                            date: "December 24, 2025",
                            title: "CFO Services in India: Benefits for Startups & SMEs",
                            desc: "Why outsourcing financial leadership is becoming a strategic advantage for growing companies.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIu1zAyUAfl6D95RwebVvuHwdNXXlx1g2lSfwlYZRbyifxC7GeVEuBQGI8FOHpWRkPRzlwqq5AciHuYCmpzalbIhMoZNsc5rNC5gp1I9weKByd5WX1EyZ_49oLzcScYoyldUsfmr9Qzm1C6m2avB6uGuAH0sOVMU68tAncZGMO_o7U5w_kZqaSJscT-HZ6IiC-UUWZ_ZMdtOnP_DA4zxwDqWjJ_sUImk8jnFEONfSPgLJwFIhH9f4bnfT7-ILJxIQuOM7Mq5bczmpD"
                        },
                        {
                            category: "Tech",
                            date: "December 23, 2025",
                            title: "Top Technology Tools Every Modern Financial Advisor Should Use",
                            desc: "A curated list of digital tools enhancing efficiency and accuracy in financial advisory.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxgTS4z9g5ulLnLib_EsqcO8QsUd-xrfVHZsj7PdO4aA7Hc_ceRIlxQhNDfipr1tC91dDVJnsZxF6NMBo-RLPN4FbbUnHgQJriWW3Ne25UFMAEdcGrGwEj9-bmP9qAdcnma6RwAdJG0USEDcdDbIxjmW02RatXIb_Hr8CqoAYkZ-3sl8dIWa8ZA-Fzpvr68gjbrrN16CuZPv8_CqkMApA4n8dNLRjjjcB39Kmt0PsTtGONJzEYqde_X0I7qmcogpmMX-317iHWNuXl"
                        }
                    ].map((item, index) => (
                        <article key={index} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    alt={item.category}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={item.img}
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wide text-corporate-primary dark:text-corporate-secondary">{item.category}</div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">{item.date}</div>
                                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-corporate-primary dark:group-hover:text-corporate-secondary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                                    {item.desc}
                                </p>
                                <a href="#" className="inline-flex items-center text-corporate-primary dark:text-corporate-secondary font-semibold text-sm mt-auto group-hover:underline">
                                    Read Article
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
