
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Server, Code, Headphones, BookOpen, Shield, BarChart, Globe, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Services = () => {
  const serviceCategories = [
    {
      title: "Hosting Solutions",
      description: "Reliable and scalable hosting for your Moodle platform",
      icon: <Server className="h-12 w-12 text-cyan-500" />,
      services: [
        {
          name: "Managed Moodle Hosting",
          description: "Fully managed Moodle hosting with 24/7 monitoring, security updates, and performance optimization.",
          features: ["99.9% uptime guarantee", "Daily backups", "SSL certificates", "CDN integration"]
        },
        {
          name: "High-Performance Cloud",
          description: "Cloud-based hosting solution designed for large institutions with high traffic and resource demands.",
          features: ["Auto-scaling resources", "Load balancing", "Geographic redundancy", "Enterprise SLA"]
        }
      ]
    },
    {
      title: "Development Services",
      description: "Custom development solutions for your unique needs",
      icon: <Code className="h-12 w-12 text-cyan-500" />,
      services: [
        {
          name: "Custom Plugin Development",
          description: "Tailor-made plugins to extend Moodle's functionality according to your specific requirements.",
          features: ["Requirements analysis", "Design and development", "Testing and QA", "Documentation"]
        },
        {
          name: "Theme Development",
          description: "Custom Moodle themes that match your institution's branding and enhance user experience.",
          features: ["Responsive design", "Accessibility compliance", "Brand integration", "UX optimization"]
        }
      ]
    },
    {
      title: "Support & Training",
      description: "Expert support and comprehensive training programs",
      icon: <Headphones className="h-12 w-12 text-cyan-500" />,
      services: [
        {
          name: "Technical Support",
          description: "Dedicated technical support for all your Moodle-related issues and questions.",
          features: ["Email and ticket support", "Phone support", "Remote troubleshooting", "Priority response"]
        },
        {
          name: "Admin & Teacher Training",
          description: "Comprehensive training programs for administrators and educators to master Moodle.",
          features: ["Live workshops", "Video tutorials", "Documentation", "Certification"]
        }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-elearning-700">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to support your Moodle implementation from start to finish,
                designed to enhance teaching and learning experiences.
              </p>
            </motion.div>
            
            <div className="space-y-32">
              {serviceCategories.map((category, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div 
                    className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl shadow-md"
                      variants={item}
                    >
                      {category.icon}
                    </motion.div>
                    <motion.div variants={item}>
                      <h2 className="text-3xl md:text-4xl font-bold text-elearning-700 mb-3">{category.title}</h2>
                      <p className="text-xl text-gray-600">{category.description}</p>
                    </motion.div>
                  </motion.div>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    {category.services.map((service, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                        className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 p-8"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <h3 className="text-2xl font-semibold text-elearning-700 mb-4">{service.name}</h3>
                        <p className="text-gray-600 mb-8 text-lg">{service.description}</p>
                        <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">Key Features</h4>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="outline" 
                          className="border-elearning-600 text-elearning-600 hover:bg-elearning-50 mt-4"
                        >
                          Learn More
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-28 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-10 md:p-16 shadow-md"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-elearning-700 mb-6">
                    Need a Custom Solution?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Our team of Moodle experts can help you design and implement
                    the perfect learning solution for your specific needs, no matter
                    the size or complexity of your organization.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-elearning-600 hover:bg-elearning-700 text-white text-lg px-6 py-3 h-auto">
                      <Link to="/contact">Contact Our Team</Link>
                    </Button>
                    <Button variant="outline" className="border-elearning-600 text-elearning-600 hover:bg-elearning-50 text-lg px-6 py-3 h-auto">
                      View Case Studies
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <BookOpen size={42} />, title: "Learning Design" },
                    { icon: <Shield size={42} />, title: "Security Audit" },
                    { icon: <BarChart size={42} />, title: "Performance Analysis" },
                    { icon: <Globe size={42} />, title: "System Integration" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="bg-white rounded-xl p-6 shadow-sm text-center"
                      whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
                    >
                      <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl text-cyan-600 mb-4">
                        {item.icon}
                      </div>
                      <h3 className="font-medium text-lg">{item.title}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
