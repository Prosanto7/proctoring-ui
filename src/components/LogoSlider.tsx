
import React, { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from 'framer-motion';

const LogoSlider: React.FC = () => {
  // Sample logos - in a real implementation, these would be actual logos
  const logos = [
    { name: "University of Excellence", initials: "UE" },
    { name: "State Technical College", initials: "STC" },
    { name: "Global Learning Institute", initials: "GLI" },
    { name: "Academy of Sciences", initials: "AOS" },
    { name: "Innovation University", initials: "IU" },
    { name: "Digital Education Network", initials: "DEN" },
    { name: "Western College", initials: "WC" },
    { name: "Research Institute", initials: "RI" }
  ];
  
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timeout | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  
  // Set up auto-animation effect
  useEffect(() => {
    // Highlight a random logo every 3 seconds
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * logos.length);
      setHighlightedIndex(randomIndex);
      
      // Reset highlight after 1 second
      setTimeout(() => {
        setHighlightedIndex(null);
      }, 1000);
    }, 3000);
    
    setAutoPlayInterval(interval);
    
    return () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };
  }, []);

  return (
    <section className="py-10 md:py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted by Leading<span className="text-gradient"> Educational Institutions</span> 
          </h2>
          <p className="text-gray-600">
            Join hundreds of universities and colleges worldwide using our solutions
          </p>
        </motion.div>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <motion.div
                    animate={{
                      y: highlightedIndex === index ? -10 : 0,
                      boxShadow: highlightedIndex === index ? 
                        "0 15px 25px -5px rgba(0, 0, 0, 0.1)" : 
                        "0 5px 15px -3px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white rounded-lg shadow-md border border-gray-100 p-4 h-28 flex flex-col items-center justify-center"
                  >
                    <AnimatePresence>
                      <div className="relative">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold"
                          animate={{ 
                            scale: highlightedIndex === index ? 1.1 : 1,
                          }}
                          transition={{ type: "spring" }}
                        >
                          {logo.initials}
                        </motion.div>
                        {highlightedIndex === index && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 rounded-full bg-cyan-400"
                            style={{ zIndex: -1 }}
                          />
                        )}
                      </div>
                    </AnimatePresence>
                    <div className="mt-2 text-sm font-medium text-gray-800">{logo.name}</div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}

            {/* Duplicate the logos for seamless appearance */}
            {logos.slice(0, 4).map((logo, index) => (
              <CarouselItem 
                key={`duplicate-${index}`} 
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <motion.div
                    animate={{
                      y: highlightedIndex === (index + logos.length) ? -10 : 0,
                      boxShadow: highlightedIndex === (index + logos.length) ? 
                        "0 15px 25px -5px rgba(0, 0, 0, 0.1)" : 
                        "0 5px 15px -3px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white rounded-lg shadow-md border border-gray-100 p-4 h-28 flex flex-col items-center justify-center"
                  >
                    <AnimatePresence>
                      <div className="relative">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold"
                          animate={{ 
                            scale: highlightedIndex === (index + logos.length) ? 1.1 : 1,
                          }}
                          transition={{ type: "spring" }}
                        >
                          {logo.initials}
                        </motion.div>
                      </div>
                    </AnimatePresence>
                    <div className="mt-2 text-sm font-medium text-gray-800">{logo.name}</div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LogoSlider;
