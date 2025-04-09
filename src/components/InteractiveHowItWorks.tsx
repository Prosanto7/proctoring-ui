
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, Database, Code, Settings, Play } from "lucide-react";

const InteractiveHowItWorks: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      number: "01",
      title: "Install & Configure",
      description: "Easily install the Proctoring Pro plugin on your Moodle platform and configure settings to match your institution's requirements.",
      icon: <Settings className="w-8 h-8" />,
      details: [
        "Simple drag-and-drop installation via Moodle plugin directory",
        "One-click setup wizard to guide configuration",
        "Pre-configured templates for common use cases",
        "Compatible with Moodle 3.9+ versions"
      ]
    },
    {
      number: "02",
      title: "Setup Quiz Parameters",
      description: "Define monitoring frequency, face recognition settings, and suspicious activity thresholds for each quiz or exam.",
      icon: <Code className="w-8 h-8" />,
      details: [
        "Per-quiz or global configuration options",
        "Adjustable snapshot frequency (10 seconds to 5 minutes)",
        "Customizable detection sensitivity levels",
        "Option to enable/disable specific monitoring features"
      ]
    },
    {
      number: "03",
      title: "Student Verification",
      description: "Students verify their identity through webcam capture and face matching before beginning the assessment.",
      icon: <ShieldCheck className="w-8 h-8" />,
      details: [
        "Multi-factor authentication options",
        "AWS Face Recognition integration",
        "BS Face Matching API support", 
        "Consent forms and privacy notices built-in"
      ]
    },
    {
      number: "04",
      title: "Real-time Monitoring",
      description: "The plugin automatically monitors student activity, capturing images and detecting suspicious behaviors throughout the exam.",
      icon: <Clock className="w-8 h-8" />,
      details: [
        "Background tab switching detection",
        "Clipboard activity monitoring",
        "Multiple face detection alerts",
        "Screen resizing tracking"
      ]
    },
    {
      number: "05",
      title: "Review & Analysis",
      description: "Administrators review flagged incidents, captured images, and activity logs to evaluate academic integrity.",
      icon: <Database className="w-8 h-8" />,
      details: [
        "Comprehensive dashboard with filterable logs",
        "Side-by-side comparison of verification and exam images",
        "Exportable reports in CSV, PDF and JSON formats",
        "Batch actions for multiple students"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Proctoring Pro</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            From installation to implementation, our streamlined process ensures 
            secure online assessments with minimal setup time.
          </p>
        </motion.div>

        <div className="relative mb-12">
          <div className="hidden md:flex justify-between items-center mb-12">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentStep(index + 1)}
                className={`flex flex-col items-center relative z-10 ${currentStep === index + 1 ? "scale-110" : "opacity-70"}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`rounded-full w-14 h-14 flex items-center justify-center mb-2 ${currentStep === index + 1 ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-gray-100 text-gray-500"}`}>
                  {step.icon}
                </div>
                <span className={`text-sm font-medium ${currentStep === index + 1 ? "text-elearning-700" : "text-gray-500"}`}>{step.title}</span>
              </motion.button>
            ))}
            
            {/* Connecting line */}
            <div className="absolute top-7 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
          </div>

          <div className="flex gap-4 md:hidden mb-8 overflow-x-auto pb-4 scrollbar-hidden">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index + 1)}
                className={`flex flex-col items-center min-w-[100px] ${currentStep === index + 1 ? "" : "opacity-60"}`}
              >
                <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-2 ${currentStep === index + 1 ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-gray-100 text-gray-500"}`}>
                  {step.icon}
                </div>
                <span className="text-xs font-medium">{step.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white min-w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold">{steps[currentStep-1].number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-elearning-700 mb-4 flex items-center gap-3">
                    {steps[currentStep-1].title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">{steps[currentStep-1].description}</p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-medium text-elearning-700 mb-4">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {steps[currentStep-1].details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1 bg-white w-4 h-4 rounded-full border-2 border-cyan-500 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className="border-elearning-600 text-elearning-600 hover:bg-elearning-50"
            >
              Previous
            </Button>
            
            <div className="flex items-center gap-1 px-4">
              {steps.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentStep(index + 1)}
                  className={`h-2.5 w-2.5 rounded-full mx-1 transition-all ${currentStep === index + 1 ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
              disabled={currentStep === steps.length}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              Next
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white rounded-lg shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-4 rounded-full">
                <Play className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg text-elearning-700">See Proctoring Pro in action</h4>
                <p className="text-gray-600">Watch our full demonstration video and see how it works from installation to implementation.</p>
              </div>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-md transition-colors whitespace-nowrap">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHowItWorks;
