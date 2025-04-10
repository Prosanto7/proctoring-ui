
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-elearning-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span>Secure Moodle </span>
              <span>Exams with </span>
              <span className="text-gradient">Proctoring Pro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Enhance academic integrity with our powerful Moodle Proctoring Pro Plugin. 
              Verify student identities, monitor exam activity, and prevent cheating with 
              our comprehensive solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-elearning-600 hover:bg-elearning-700 text-white px-8 py-6 text-lg">
                Get Proctoring Pro
              </Button>
              <Button size="lg" variant="outline" className="border-elearning-600 text-elearning-600 hover:bg-elearning-50 px-8 py-6 text-lg">
                Try for Free
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-2">
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Trusted by </span>
                <span className="font-semibold text-elearning-700">500+ institutions</span>
                <span className="text-gray-500"> worldwide</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-left">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-elearning-700 text-white px-4 py-2 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm font-medium"></div>
              </div>
              <div className="p-2">
                {/* <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Proctoring Demo"
                  className="rounded border border-gray-200 w-full"
                /> */}
                <iframe className="rounded border border-gray-200 w-full" width="560" height="315" src="https://www.youtube.com/embed/NcrE1OIj6_Q?si=bl9mXJaYJnuOSU8X" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Proctoring Pro: Active</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    ID Verified: Student 1234
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  Monitoring: Face detection, Multiple face alerts, Tab switching, Clipboard activity
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-elearning-600 text-white px-5 py-2 rounded-lg shadow-lg transform rotate-3">
              <div className="text-sm font-medium">Suspicious activity detected!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
