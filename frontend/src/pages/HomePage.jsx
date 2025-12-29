
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import QuoteSection from '../components/QuoteSection';
import Insights from '../components/Insights';
import Team from '../components/Team';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <AboutUs />
        <Services />
        <QuoteSection />
        <Insights />
        <Team />
      </main>
      <Footer />
      <WhatsAppButton />


    </div>
  );
};

export default HomePage;
