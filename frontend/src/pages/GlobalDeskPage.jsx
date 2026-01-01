import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Team from '../components/Team';
import WhatsAppButton from '../components/WhatsAppButton';

const GlobalDeskPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Header />
            <main className="pt-20">
                <Team />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default GlobalDeskPage;
