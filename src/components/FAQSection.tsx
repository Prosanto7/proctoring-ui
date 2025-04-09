
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How does the face recognition feature work?",
      answer: "Our face recognition feature uses advanced AI technology to compare the webcam image captured at the start of the exam with subsequent images taken during the assessment. It can detect if a different person attempts to take the exam and flags suspicious activities for administrator review. We support integration with AWS Face Recognition or BS Face Matching API for reliable identity verification."
    },
    {
      question: "Is Proctoring Pro compatible with all versions of Moodle?",
      answer: "Proctoring Pro is compatible with Moodle versions 3.9 and higher. For older versions, we offer custom integration services to ensure compatibility. Our team regularly updates the plugin to maintain compatibility with the latest Moodle releases."
    },
    {
      question: "Can students use mobile devices for proctored exams?",
      answer: "Yes, Proctoring Pro is compatible with mobile devices running iOS and Android operating systems. However, for the best experience and most reliable proctoring, we recommend that students use desktop or laptop computers with working webcams and microphones."
    },
    {
      question: "How are the captured webcam images stored and protected?",
      answer: "All captured images are securely stored in your Moodle database and encrypted to ensure data protection. You can configure retention policies to automatically delete images after a specified period. The plugin complies with GDPR, FERPA, and other privacy regulations, giving you control over data handling and student privacy notifications."
    },
    {
      question: "Can I customize the frequency of webcam captures?",
      answer: "Absolutely! Administrators can configure the capture frequency on a per-quiz basis. You can set regular intervals (e.g., every 30 seconds) or use a random pattern to make the capture timing less predictable. This flexibility allows you to balance security needs with system resources."
    },
    {
      question: "Does the plugin require students to install additional software?",
      answer: "No, students don't need to install any additional software. Proctoring Pro works directly in modern web browsers that support webcam access (Chrome, Firefox, Edge, Safari). Students will only need to grant camera permissions when prompted before starting the exam."
    },
    {
      question: "What happens if a student loses internet connection during a proctored exam?",
      answer: "Proctoring Pro includes a robust recovery system that stores monitoring data locally until connection is restored. If a student temporarily loses internet access, the system will continue capturing images and monitoring activity, then sync this data when connectivity returns. For extended outages, administrators can review the partial session data and make appropriate accommodations."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our Proctoring Pro plugin.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-left text-elearning-700 py-4 hover:no-underline hover:text-elearning-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions? Contact our support team.</p>
            <div className="inline-flex items-center justify-center">
              <a href="#contact" className="inline-flex items-center justify-center bg-elearning-600 text-white py-2 px-6 rounded-md hover:bg-elearning-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span>Contact Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
