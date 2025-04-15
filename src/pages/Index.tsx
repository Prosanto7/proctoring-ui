
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import InteractiveHowItWorks from '@/components/InteractiveHowItWorks';
import DemoSection from '../components/DemoSection';
import Testimonials from '../components/Testimonials';
import ComparisonTable from '../components/ComparisonTable';
import AdditionalServices from '../components/AdditionalServices';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import LogoSlider from '../components/LogoSlider';
import { useToast } from '@/hooks/use-toast';
import HeroSeamlessIntegration from '@/components/HeroSeamlessIntegration';
import HeroVideoTutorial from '@/components/HeroVideoTutorial';

const Index = () => {
  const { toast } = useToast();

  // Show welcome notification
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to eLearning23",
        description: "Discover our Moodle Proctoring Pro plugin and other solutions.",
        duration: 6000,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <DemoSection />
        <Features />
        <HeroSeamlessIntegration />
        <AdditionalServices />
        <Testimonials />
        <LogoSlider /> {/* Added LogoSlider component */}
        <ContactForm />
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
