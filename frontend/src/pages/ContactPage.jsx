import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactPage = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white dark:bg-neutral-950">
            <Header />
            <main>
                <ContactUs />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default ContactPage;
