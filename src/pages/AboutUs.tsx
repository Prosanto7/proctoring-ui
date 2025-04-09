
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Users, Trophy, Clock, Globe, CheckCircle, Award, Briefcase, Heart, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "With over 15 years in educational technology, Dr. Johnson founded eLearning23 to revolutionize online assessment security."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Michael leads our development team, bringing 12 years of experience in software engineering and Moodle development."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Emily shapes our product roadmap, focusing on creating tools that solve real challenges in online education."
    },
    {
      name: "David Okafor",
      role: "Customer Success Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "David ensures our clients receive exceptional support and maximize the value of our solutions."
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-elearning-700">
                  About <span className="text-gradient">eLearning23</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  We're passionate about transforming online education through innovative 
                  technology solutions that enhance teaching, learning, and assessment. 
                  Our team combines deep educational expertise with cutting-edge 
                  technology to solve real-world challenges in digital learning.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-elearning-600 hover:bg-elearning-700 text-white text-lg px-6 py-3 h-auto">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" className="border-elearning-600 text-elearning-600 hover:bg-elearning-50 text-lg px-6 py-3 h-auto">
                    View Our Products
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-full opacity-60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="eLearning23 Team" 
                    className="rounded-2xl shadow-xl relative z-10 object-cover w-full h-[500px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-elearning-700">Our Story</h2>
              <p className="text-lg md:text-xl text-gray-600">
                Founded in 2018, eLearning23 began with a mission to solve one of online education's 
                biggest challenges: ensuring academic integrity in remote assessments.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="order-2 md:order-1"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <motion.div variants={item} className="bg-blue-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-semibold text-elearning-700 mb-3">From Challenge to Solution</h3>
                    <p className="text-gray-600 text-lg">
                      When institutions worldwide shifted to online learning, our founders identified a critical need: 
                      reliable, non-invasive proctoring solutions for Moodle. Our flagship Proctoring Pro plugin was 
                      developed in response, combining effective monitoring with respect for student privacy.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={item} className="bg-cyan-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-semibold text-elearning-700 mb-3">Growing to Meet Needs</h3>
                    <p className="text-gray-600 text-lg">
                      As our client base expanded, so did our offerings. We've built a comprehensive suite of 
                      products and services to support educational institutions in creating secure, effective 
                      online learning environments that engage students and empower educators.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={item} className="bg-blue-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-semibold text-elearning-700 mb-3">Today and Beyond</h3>
                    <p className="text-gray-600 text-lg">
                      Today, eLearning23 serves over 500 institutions across 30 countries, constantly innovating 
                      to meet the evolving needs of online education. Our team of education technology specialists 
                      remains committed to our founding mission: making online learning better for everyone.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              <div className="order-1 md:order-2">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="grid grid-cols-2 gap-6"
                >
                  {[
                    { icon: <Award size={48} />, text: "Awarded EdTech Innovation of the Year 2022" },
                    { icon: <Users size={48} />, text: "Serving 500+ institutions worldwide" },
                    { icon: <Clock size={48} />, text: "5+ years of industry experience" },
                    { icon: <Globe size={48} />, text: "Presence in 30+ countries" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 text-center shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
                    >
                      <div className="inline-flex items-center justify-center p-4 bg-white rounded-xl text-cyan-600 mb-4 shadow-sm">
                        {item.icon}
                      </div>
                      <p className="text-gray-700 font-medium">{item.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-elearning-700">Our Values</h2>
              <p className="text-lg md:text-xl text-gray-600">
                The principles that guide everything we do at eLearning23
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb size={36} />,
                  title: "Innovation",
                  description: "We continuously push boundaries to create solutions that address evolving educational challenges."
                },
                {
                  icon: <Shield size={36} />,
                  title: "Integrity",
                  description: "We uphold the highest standards of honesty and ethics in all our interactions and solutions."
                },
                {
                  icon: <Globe size={36} />,
                  title: "Accessibility",
                  description: "We believe in creating products that are accessible to all learners and institutions."
                },
                {
                  icon: <Heart size={36} />,
                  title: "User-Centered Design",
                  description: "We develop with real users in mind, ensuring our products are intuitive and effective."
                },
                {
                  icon: <Award size={36} />,
                  title: "Educational Impact",
                  description: "We measure our success by how our solutions improve educational outcomes."
                },
                {
                  icon: <Users size={36} />,
                  title: "Collaborative Spirit",
                  description: "We believe in working closely with our clients to create solutions that truly meet their needs."
                }
              ].map((value, i) => (
                <motion.div 
                  key={i} 
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl text-cyan-600">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-elearning-700">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-elearning-700">Meet Our Team</h2>
              <p className="text-lg md:text-xl text-gray-600">
                The passionate experts behind eLearning23's innovation and success
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div 
                  key={i} 
                  className="bg-gradient-to-b from-blue-50 to-white rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-elearning-700 mb-1">{member.name}</h3>
                    <p className="text-cyan-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-20 text-center"
            >
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Interested in joining our growing team?
              </p>
              <Button className="bg-elearning-600 hover:bg-elearning-700 text-white text-lg px-8 py-3 h-auto">
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-elearning-700">Our Journey</h2>
              <p className="text-lg md:text-xl text-gray-600">
                The milestones that have shaped eLearning23
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-cyan-300"></div>
              
              {[
                {
                  year: "2018",
                  title: "eLearning23 Founded",
                  description: "Started with a mission to improve online assessment security",
                  icon: <Briefcase size={28} />
                },
                {
                  year: "2019",
                  title: "First Major Product Launch",
                  description: "Released Proctoring Pro for Moodle to address the growing need for online exam security",
                  icon: <Lightbulb size={28} />
                },
                {
                  year: "2020",
                  title: "Rapid Growth & Expansion",
                  description: "Expanded our team and client base during the global shift to online learning",
                  icon: <Users size={28} />
                },
                {
                  year: "2021",
                  title: "Global Reach",
                  description: "Expanded services to 20+ countries and introduced localized support",
                  icon: <Globe size={28} />
                },
                {
                  year: "2022",
                  title: "Industry Recognition",
                  description: "Received EdTech Innovation of the Year award and expanded product offerings",
                  icon: <Award size={28} />
                },
                {
                  year: "2023",
                  title: "Looking Forward",
                  description: "Continuing to innovate with AI-enhanced learning solutions and expanded services",
                  icon: <Lightbulb size={28} />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className={`relative flex md:items-center mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Timeline Point */}
                  <div className="absolute left-0 md:left-1/2 md:-ml-3 mt-1.5 md:mt-0">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-6 w-6 rounded-full flex items-center justify-center">
                      <div className="h-3 w-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} md:w-1/2`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="inline-flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 text-cyan-600">
                          {item.icon}
                        </div>
                        <span className="text-2xl font-bold text-elearning-700">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-elearning-700 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 md:p-16 shadow-xl text-white"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your eLearning Experience?</h2>
                <p className="text-lg md:text-xl mb-8 text-blue-50">
                  Join hundreds of institutions that trust eLearning23 to enhance their online education offerings.
                  Our team is ready to help you create secure, effective learning environments.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-white text-elearning-700 hover:bg-blue-50 text-lg px-8 py-3 h-auto">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8 py-3 h-auto">
                    <Link to="/products">Explore Products</Link>
                  </Button>
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

export default AboutUs;
