
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Install & Configure",
      description: "Easily install the Proctoring Pro plugin on your Moodle platform and configure settings to match your institution's requirements."
    },
    {
      number: "02",
      title: "Setup Quiz Parameters",
      description: "Define monitoring frequency, face recognition settings, and suspicious activity thresholds for each quiz or exam."
    },
    {
      number: "03",
      title: "Student Verification",
      description: "Students verify their identity through webcam capture and face matching before beginning the assessment."
    },
    {
      number: "04",
      title: "Real-time Monitoring",
      description: "The plugin automatically monitors student activity, capturing images and detecting suspicious behaviors throughout the exam."
    },
    {
      number: "05",
      title: "Review & Analysis",
      description: "Administrators review flagged incidents, captured images, and activity logs to evaluate academic integrity."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">Proctoring Pro</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            From installation to implementation, our streamlined process ensures 
            secure online assessments with minimal setup time.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-elearning-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-elearning-700 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white rounded-lg shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-cyan-100 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg text-elearning-700">Need help with implementation?</h4>
                <p className="text-gray-600">Our team of experts can assist with setup, configuration, and customization.</p>
              </div>
              <button className="bg-elearning-600 hover:bg-elearning-700 text-white px-6 py-2 rounded-md transition-colors whitespace-nowrap">
                Request Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
