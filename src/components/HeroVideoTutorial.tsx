import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Play, Pause, MonitorPlay } from 'lucide-react';

const HeroVideoTutorial = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById('tutorial-video') as HTMLVideoElement;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Quick Start <span className="text-gradient">Tutorial</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get started with ProctoringPro in minutes. Watch our comprehensive setup guide.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-2xl bg-white"
        >
          <div className="aspect-w-16 aspect-h-9">
            <video
              id="tutorial-video"
              className="w-full object-cover"
              poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
            >
              <source src="your-tutorial-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={togglePlay}
                className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-8"
              >
                {isPlaying ? (
                  <Pause className="h-12 w-12" />
                ) : (
                  <Play className="h-12 w-12" />
                )}
              </Button>
            </div>
          </div>
          <div className="bg-white p-6">
            <div className="flex items-center gap-4">
              <MonitorPlay className="text-elearning-600 h-6 w-6" />
              <div className="text-sm text-gray-600">
                {isPlaying ? "Click to pause" : "Click to play"} - 5:30 mins
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVideoTutorial;