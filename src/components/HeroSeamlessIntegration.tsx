
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Puzzle, ShieldCheck } from 'lucide-react';

const HeroSeamlessIntegration: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-gradient">Seamless Integration</span> with Moodle
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Install our plugin in minutes, not hours. Works with your existing Moodle quizzes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-glass rounded-lg p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Puzzle className="h-8 w-8 text-elearning-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Install Plugin</h3>
            <p className="text-gray-600">Simple installation through Moodle's plugin directory or via direct upload.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-glass rounded-lg p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Monitor className="h-8 w-8 text-elearning-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Configure Settings</h3>
            <p className="text-gray-600">Customize security levels and monitoring features to suit your needs.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-glass rounded-lg p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-elearning-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Start Taking Quizes</h3>
            <p className="text-gray-600">Enable proctoring for any Moodle quiz with a single click.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button size="lg" className="bg-elearning-600 hover:bg-elearning-700 text-white px-8 py-6 text-lg">
            <span>View Integration Guide</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSeamlessIntegration;