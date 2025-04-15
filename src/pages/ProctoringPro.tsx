
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HeroAcademicIntegrity from '@/components/HeroAcademicIntegrity';
import InteractiveHowItWorks from '../components/InteractiveHowItWorks';
import DemoSection from '../components/DemoSection';
import ComparisonTable from '../components/ComparisonTable';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import HeroVideoTutorial from '@/components/HeroVideoTutorial';

const ProctoringPro = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroAcademicIntegrity  />
        <HeroVideoTutorial />
        <InteractiveHowItWorks />
        <ComparisonTable />
        <PricingSection />
        <FAQSection />
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ProctoringPro;
