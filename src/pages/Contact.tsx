
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-elearning-700">
                Contact <span className="text-gradient">Us</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about our products or services? We're here to help.
                Reach out to our team and we'll respond as soon as possible.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-cyan-100 rounded-full text-cyan-600 mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-elearning-700">Email Us</h3>
                <p className="text-gray-600 mb-1">General Inquiries:</p>
                <p className="text-elearning-600 font-medium mb-2">info@elearning23.com</p>
                
                <p className="text-gray-600 mb-1">Support:</p>
                <p className="text-elearning-600 font-medium mb-2">support@elearning23.com</p>
                
                <p className="text-gray-600 mb-1">Sales:</p>
                <p className="text-elearning-600 font-medium">sales@elearning23.com</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-cyan-100 rounded-full text-cyan-600 mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-elearning-700">Call Us</h3>
                <p className="text-gray-600 mb-1">Main Office:</p>
                <p className="text-elearning-600 font-medium mb-2">+1 (555) 123-4567</p>
                
                <p className="text-gray-600 mb-1">Support Hotline:</p>
                <p className="text-elearning-600 font-medium mb-2">+1 (555) 987-6543</p>
                
                <div className="flex items-start mt-4">
                  <Clock size={18} className="text-cyan-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-gray-600">Hours of Operation:</p>
                    <p className="text-gray-700">Monday-Friday: 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-cyan-100 rounded-full text-cyan-600 mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-elearning-700">Visit Us</h3>
                <p className="text-gray-600 mb-1">Headquarters:</p>
                <p className="text-gray-700 mb-4">
                  123 Education Ave, Suite 500<br />
                  Tech City, CA 94103<br />
                  United States
                </p>
                
                <p className="text-gray-600 mb-1">European Office:</p>
                <p className="text-gray-700">
                  45 Learning Lane<br />
                  London, EC2A 4BQ<br />
                  United Kingdom
                </p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-elearning-700">
                  Our Locations
                </h2>
                
                <Tabs defaultValue="us">
                  <TabsList className="mb-4">
                    <TabsTrigger value="us">United States</TabsTrigger>
                    <TabsTrigger value="uk">United Kingdom</TabsTrigger>
                  </TabsList>
                  <TabsContent value="us" className="border rounded-lg p-4">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471655!3d34.02016130390376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1659522626480!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        title="US Office Location"
                      ></iframe>
                    </div>
                  </TabsContent>
                  <TabsContent value="uk" className="border rounded-lg p-4">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9931.956232629188!2d-0.08769991892211475!3d51.52344138360601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671a809b1%3A0x905db9abc933f313!2sShoreditch%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1659522727328!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        title="UK Office Location"
                      ></iframe>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-xl mb-4 text-elearning-700">
                    Frequently Asked Questions
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        question: "What's the typical response time for inquiries?",
                        answer: "We aim to respond to all inquiries within 24 business hours."
                      },
                      {
                        question: "Do you offer remote demos of your products?",
                        answer: "Yes! We offer personalized remote demonstrations for all our products. Please schedule one through our contact form."
                      },
                      {
                        question: "Can I get a custom quote for my institution?",
                        answer: "Absolutely. Fill out our contact form with your requirements, and our sales team will prepare a custom quote for you."
                      }
                    ].map((item, i) => (
                      <div key={i}>
                        <h4 className="font-medium text-elearning-700">{item.question}</h4>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
