import React from 'react';
import Services from '../components/Services';
import { personalCategories } from '../data/servicesData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PersonalServicesPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Header />
            <div className="pt-20"> {/* Add padding for fixed header if needed, or just let it flow */}
                <Services categories={personalCategories} title="Personal Finance Services" />
            </div>
            <Footer />
        </div>
    );
};

export default PersonalServicesPage;
