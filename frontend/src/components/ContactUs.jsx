import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = '919354419950'; // Replace with your WhatsApp number
        const fullName = `${formData.firstName} ${formData.lastName}`.trim();
        const text = `Hi, my name is ${fullName || 'Guest'}. ${formData.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-corporate-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-corporate-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Contact <span className="text-corporate-secondary">Us</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Have questions or need financial advice? We're here to help. Reach out to us through any of the channels below.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white dark:bg-neutral-800 p-3 rounded-lg text-corporate-primary shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Our Office</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            123 Financial District, Suite 500<br />
                                            Cityname, NY 10001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-white dark:bg-neutral-800 p-3 rounded-lg text-corporate-primary shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-white dark:bg-neutral-800 p-3 rounded-lg text-corporate-primary shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-400">contact@cbs-finance.com</p>
                                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-800"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Chat with Us</h3>
                        <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border-transparent focus:border-corporate-primary focus:bg-white dark:focus:bg-neutral-900 focus:ring-0 transition-all outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border-transparent focus:border-corporate-primary focus:bg-white dark:focus:bg-neutral-900 focus:ring-0 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border-transparent focus:border-corporate-primary focus:bg-white dark:focus:bg-neutral-900 focus:ring-0 transition-all outline-none resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#25D366]/25 transition-all flex items-center justify-center gap-2">
                                <span>Chat on WhatsApp</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
