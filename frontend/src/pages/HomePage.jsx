
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
import Careers from '../components/Careers';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <section id="home">
          <Hero />
          <Stats />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="expertise">
          <Services />
        </section>
        <section>
          <QuoteSection />
        </section>
        <section id="insights">
          <Insights />
        </section>
        <section id="global-desk">
          <Team />
        </section>
        <section id="careers">
          <Careers />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />


    </div>
  );
};

export default HomePage;

