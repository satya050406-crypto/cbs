import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';
import WhatsAppButton from '../components/WhatsAppButton';

const CalculatorPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Header />
            <main className="pt-20">
                <Calculator />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default CalculatorPage;
