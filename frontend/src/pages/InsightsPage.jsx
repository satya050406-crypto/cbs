import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';
import WhatsAppButton from '../components/WhatsAppButton';

const InsightsPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Header />
            <main className="pt-20">
                <Insights />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default InsightsPage;
