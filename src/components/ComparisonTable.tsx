
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: "Webcam monitoring", proctoring: true, basic: false },
    { name: "Face recognition", proctoring: true, basic: false },
    { name: "Tab switching detection", proctoring: true, basic: true },
    { name: "Clipboard activity monitoring", proctoring: true, basic: false },
    { name: "Console access detection", proctoring: true, basic: false },
    { name: "Screen resize monitoring", proctoring: true, basic: true },
    { name: "Timestamped activity logs", proctoring: true, basic: true },
    { name: "Admin review dashboard", proctoring: true, basic: false },
    { name: "Customizable monitoring frequency", proctoring: true, basic: false },
    { name: "AI-powered analysis", proctoring: true, basic: false },
    { name: "Real-time alerts", proctoring: true, basic: false }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Feature Comparison</span>
          </h2>
          <p className="text-lg text-gray-600">
            See how our Proctoring Pro plugin compares to basic Moodle quiz settings
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg"
          >
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  <TableHead className="w-[300px] py-4 text-white">Features</TableHead>
                  <TableHead className="text-center py-4 text-white">
                    <div className="font-bold text-lg">Proctoring Pro</div>
                    <div className="text-xs text-blue-100">Premium Solution</div>
                  </TableHead>
                  <TableHead className="text-center py-4 text-white">
                    <div className="font-bold text-lg">Basic Quiz Security</div>
                    <div className="text-xs text-blue-100">Default Moodle</div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell className="text-center">
                      {feature.proctoring ? (
                        <div className="flex justify-center">
                          <div className="bg-green-100 p-1 rounded-full">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="bg-red-100 p-1 rounded-full">
                            <X className="h-5 w-5 text-red-500" />
                          </div>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.basic ? (
                        <div className="flex justify-center">
                          <div className="bg-green-100 p-1 rounded-full">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="bg-red-100 p-1 rounded-full">
                            <X className="h-5 w-5 text-red-500" />
                          </div>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Get the full feature comparison including enterprise solutions in our detailed documentation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
