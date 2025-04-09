
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Camera, Shield, Clock, Users, Server, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const featureCards = [
    {
      icon: <Camera className="h-8 w-8 text-cyan-500" />,
      title: "Webcam Monitoring",
      description: "Ensure student presence with interval-based webcam captures"
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-500" />,
      title: "Face Recognition",
      description: "Verify student identities to prevent impersonation"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-cyan-500" />,
      title: "Fraud Detection",
      description: "Flag suspicious activities like tab switching and console access"
    },
    {
      icon: <Server className="h-8 w-8 text-cyan-500" />,
      title: "Easy Integration",
      description: "Simple setup with your existing Moodle environment"
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-500" />,
      title: "Admin Dashboard",
      description: "Review flagged activities and make informed decisions"
    },
    {
      icon: <Clock className="h-8 w-8 text-cyan-500" />,
      title: "Audit Trail",
      description: "Complete timestamped record of all exam activities"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Key Features</span>
          </h2>
          <p className="text-gray-600">
            Everything you need to ensure academic integrity in online assessments
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featureCards.map((feature, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 flex flex-row items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
