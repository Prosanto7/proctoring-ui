import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Shield, Clock, Database, Cloud, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-elearning-700">
                Our <span className="text-gradient">Products</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Powerful plugins and solutions to enhance your Moodle learning experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Product - Proctoring Pro */}
              <Card className="col-span-1 md:col-span-2 lg:col-span-3 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl text-elearning-700">Proctoring Pro</CardTitle>
                    <div className="bg-blue-100 text-elearning-600 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">
                    Advanced quiz monitoring and security for online assessments
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src="/lovable-uploads/33550182-b74e-45a3-91f6-8b9ed1ae26d9.png" 
                        alt="Proctoring Pro Interface" 
                        className="rounded-lg shadow-md mb-4"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-elearning-700">
                        Maintain Academic Integrity
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Our flagship Moodle quiz access plugin captures webcam images during quiz attempts, 
                        verifies user identities, and logs suspicious activities to ensure test integrity.
                      </p>
                      <ul className="space-y-3 mb-6">
                        {[
                          {icon: <Shield className="text-cyan-600" />, text: "Identity verification with AWS Face Recognition"},
                          {icon: <Clock className="text-cyan-600" />, text: "Configurable snapshot intervals"},
                          {icon: <Code className="text-cyan-600" />, text: "Tracks tab switching, clipboard, console access"},
                          {icon: <Database className="text-cyan-600" />, text: "Comprehensive activity logging with timestamps"}
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1">{item.icon}</div>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 flex flex-wrap gap-4 justify-between">
                  <div>
                    <p className="text-elearning-700 font-bold text-lg">Starting from $499</p>
                    <p className="text-sm text-gray-500">Per year, includes updates & support</p>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-elearning-600 text-elearning-600 hover:bg-elearning-50">
                      <Link to="/products/proctoring-pro">Learn More</Link>
                    </Button>
                    <Button className="bg-elearning-600 hover:bg-elearning-700 text-white">
                      Get Started
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              
              {/* Other Products */}
              {[
                {
                  title: "Content Creator",
                  description: "Streamlined content creation tools for educators",
                  icon: <Package size={24} />,
                  features: ["Drag-and-drop course builder", "Interactive quiz templates", "Content importing tools"],
                  price: "$299"
                },
                {
                  title: "Analytics Dashboard",
                  description: "Comprehensive learning analytics and reporting",
                  icon: <Database size={24} />,
                  features: ["Student progress tracking", "Performance metrics", "Custom reports"],
                  price: "$399"
                },
                {
                  title: "Cloud Backup",
                  description: "Secure cloud backup solution for Moodle",
                  icon: <Cloud size={24} />,
                  features: ["Automated backups", "One-click restore", "Encrypted storage"],
                  price: "$199"
                }
              ].map((product, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-3 rounded-lg text-elearning-600">
                        {product.icon}
                      </div>
                      <CardTitle>{product.title}</CardTitle>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="text-elearning-700 font-semibold">{product.price}/year</div>
                    <Button variant="outline" className="border-elearning-600 text-elearning-600 hover:bg-elearning-50">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
