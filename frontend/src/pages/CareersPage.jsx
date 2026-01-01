import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Careers from '../components/Careers';
import WhatsAppButton from '../components/WhatsAppButton';

const CareersPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Header />
            <main className="pt-20">
                <Careers />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default CareersPage;
