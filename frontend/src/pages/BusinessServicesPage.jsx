import React from 'react';
import Services from '../components/Services';
import { businessCategories } from '../data/servicesData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BusinessServicesPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Header />
            <div className="pt-20">
                <Services categories={businessCategories} title="Business Services" />
            </div>
            <Footer />
        </div>
    );
};

export default BusinessServicesPage;
