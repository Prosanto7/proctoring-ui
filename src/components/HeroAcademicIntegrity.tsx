
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award } from 'lucide-react';

const HeroAcademicIntegrity: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Uphold <span className="text-gradient">Academic Integrity</span> in Online Exams
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ensure fair assessment in your online learning environment with advanced proctoring 
              tools that detect and prevent academic dishonesty while respecting student privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-elearning-600 hover:bg-elearning-700 text-white">
                Try for Free
              </Button>
              <Button size="lg" variant="outline" className="border-elearning-600 text-elearning-600">
                Schedule Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4 border-elearning-500">
              <CardContent className="p-6">
                <ShieldCheck className="h-10 w-10 text-elearning-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cheating Prevention</h3>
                <p className="text-gray-600">Monitors multiple faces, tab switching, and suspicious activities with AI</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4 border-cyan-500 md:mt-8">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Face Verification</h3>
                <p className="text-gray-600">Verifies student identity before and during exams with facial recognition</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Moodle Certified Partner</h3>
                <p className="text-gray-600">Deliver services to the Moodle™ software platform– to design and develop the best LMS platform for you.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-elearning-600 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-shadow md:mt-8">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2">98%</div>
                <p className="font-medium">Reduction in reported cheating incidents among our clients</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroAcademicIntegrity;