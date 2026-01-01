import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import WhatsAppButton from '../components/WhatsAppButton';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Header />
            <main className="pt-20">
                <AboutUs />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default AboutPage;
