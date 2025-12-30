import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mission from '../components/Mission';
import WhatsAppButton from '../components/WhatsAppButton';

const MissionPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Header />
            <main className="pt-20">
                <Mission />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default MissionPage;
