import React, { useState } from 'react';
import {
    ArrowRight,
    ArrowLeft,
    X,
    Upload,
    CheckCircle2,
    Phone,
    User,
    MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useSearchParams } from 'react-router-dom';

const Services = ({ categories = [], title = "Our Expertise" }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [searchParams] = useSearchParams();

    React.useEffect(() => {
        const serviceName = searchParams.get('service');
        if (serviceName && categories.length > 0) {
            for (const cat of categories) {
                const foundService = cat.services.find(s => s.name === serviceName);
                if (foundService) {
                    setSelectedCategory(cat);
                    setTimeout(() => setSelectedService(foundService), 500); // Slight delay for animation
                    break;
                }
            }
        }
    }, [searchParams, categories]);

    // If no categories provided, we don't render or could render a default. 
    // But better to expect it from parent.


    return (
        <section className="py-24 bg-gray-50 dark:bg-neutral-950 relative overflow-hidden min-h-screen">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-corporate-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-corporate-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        <motion.div
                            key="categories"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-center mb-16">
                                <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">{title}</span>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                    Browse by <span className="text-corporate-secondary">Category</span>
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                                    Select a category to explore our specialized services tailored to your needs.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {categories.map((cat, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedCategory(cat)}
                                        className="group bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-neutral-800 cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-corporate-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <div className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-xl text-corporate-primary w-fit mb-6 group-hover:bg-corporate-primary group-hover:text-white transition-colors duration-300">
                                            <cat.icon size={32} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {cat.category_name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                                            {cat.description}
                                        </p>

                                        <div className="flex items-center text-sm font-bold text-corporate-primary group-hover:text-corporate-secondary transition-colors">
                                            View Services <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="services"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-corporate-primary dark:hover:text-white transition-colors font-medium"
                                >
                                    <ArrowLeft size={20} className="mr-2" /> Back to Categories
                                </button>
                            </div>

                            <div className="text-center mb-12">
                                <div className="inline-block p-3 bg-corporate-primary/10 rounded-full text-corporate-primary mb-4">
                                    <selectedCategory.icon size={32} />
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    {selectedCategory.category_name}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                                    {selectedCategory.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {selectedCategory.services.map((service, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedService(service)}
                                        className="group bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-100 dark:border-neutral-800 hover:border-corporate-primary dark:hover:border-corporate-primary shadow-sm hover:shadow-md transition-all cursor-pointer flex justify-between items-center"
                                    >
                                        <span className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-corporate-primary transition-colors">
                                            {service.name}
                                        </span>
                                        <span className="p-2 bg-gray-50 dark:bg-neutral-800 rounded-full text-gray-400 group-hover:text-corporate-primary transition-colors">
                                            <ArrowRight size={16} />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Service Detail Modal */}
                <AnimatePresence>
                    {selectedService && (
                        <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden flex flex-col"
                            >
                                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-800/50 sticky top-0 backdrop-blur-md">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">{selectedService.name}</h3>
                                        <p className="text-corporarte-primary font-bold text-corporate-secondary mt-1">{selectedService.price}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-8 flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                                            Interested in this service?
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                                            Connect with us directly on WhatsApp to discuss your requirements and get a personalized quote.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-xl border border-gray-100 dark:border-neutral-700 w-full max-w-md">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-2 text-left">Pre-written message:</p>
                                        <p className="text-gray-700 dark:text-gray-300 italic text-left p-3 bg-white dark:bg-neutral-900 rounded-lg border border-gray-100 dark:border-neutral-800">
                                            "Hi, I am interested in <span className="font-bold text-corporate-primary">{selectedService.name}</span>. Please provide more details regarding the process and pricing."
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            const phoneNumber = '919354419950';
                                            const message = `Hi, I am interested in ${selectedService.name}. Please provide more details regarding the process and pricing.`;
                                            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                                        }}
                                        className="w-full max-w-md bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#25D366]/25 transition-all flex items-center justify-center gap-3 group"
                                    >
                                        <span>Chat on WhatsApp</span>
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                    >
                                        Maybe later
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Services;
