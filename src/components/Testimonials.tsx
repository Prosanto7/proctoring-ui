
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Implementing Proctoring Pro has significantly reduced instances of academic dishonesty in our online exams. The face recognition feature ensures that we know exactly who is taking the test.",
      author: "Dr. Sarah Johnson",
      title: "Dean of Online Education",
      institution: "Western State University",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "The detailed logs and timestamped actions have made it much easier for us to investigate suspicious activity. We can now confidently offer online exams with the same level of integrity as in-person tests.",
      author: "Prof. Michael Chen",
      title: "Head of IT Services",
      institution: "North Valley College",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "Easy to set up and integrate with our existing Moodle environment. The support team was incredibly helpful during implementation, and our students find the interface intuitive and non-intrusive.",
      author: "Emily Rodriguez",
      title: "E-Learning Specialist",
      institution: "Tech Institute",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What <span className="text-gradient">Our Clients</span> Are Saying
          </h2>
          <p className="text-lg text-gray-600">
            See what educators and administrators are saying about our Proctoring Pro solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <svg width="45" height="36" className="text-elearning-200" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 36C11.2 36 9.26667 35.3 7.6 33.9C5.93333 32.5667 5.1 30.5667 5.1 27.9C5.1 26.7 5.3 25.5 5.7 24.3C6.1 23.1 6.63333 22.0333 7.3 21.1C7.96667 20.1667 8.66667 19.3 9.4 18.5C10.1333 17.7 10.8667 17.0333 11.6 16.5L17.2 21.8C16.8 22.4667 16.3333 23.1333 15.8 23.8C15.2667 24.4667 15 25.3667 15 26.5C15 27.2333 15.2 27.9 15.6 28.5C16 29.0333 16.5333 29.5 17.2 29.9L13.4 36ZM32.6 36C30.4 36 28.4667 35.3 26.8 33.9C25.1333 32.5667 24.3 30.5667 24.3 27.9C24.3 26.7 24.5 25.5 24.9 24.3C25.3 23.1 25.8333 22.0333 26.5 21.1C27.1667 20.1667 27.8667 19.3 28.6 18.5C29.3333 17.7 30.0667 17.0333 30.8 16.5L36.4 21.8C36 22.4667 35.5333 23.1333 35 23.8C34.4667 24.4667 34.2 25.3667 34.2 26.5C34.2 27.2333 34.4 27.9 34.8 28.5C35.2 29.0333 35.7333 29.5 36.4 29.9L32.6 36ZM13.4 16.5C11.8667 16.5 10.3667 16.1667 8.9 15.5C7.43333 14.8333 6.13333 13.9333 5 12.8C3.86667 11.6 2.96667 10.2333 2.3 8.7C1.63333 7.16667 1.3 5.56667 1.3 3.9C1.3 2.83333 1.53333 1.86667 2 1C2.46667 0.133333 3.2 -0.133333 4.2 0.2C4.73333 0.333333 5.16667 0.666667 5.5 1.2C5.83333 1.73333 6 2.26667 6 2.8C6 3.33333 5.93333 3.83333 5.8 4.3C5.66667 4.76667 5.6 5.3 5.6 5.9C5.6 7.23333 5.96667 8.5 6.7 9.7C7.43333 10.9 8.43333 11.8667 9.7 12.6C10.9667 13.3333 12.3667 13.7 13.9 13.7C14.5 13.7 15.0333 13.6333 15.5 13.5C15.9667 13.3667 16.4667 13.3 17 13.3C17.5333 13.3 18.0667 13.4667 18.6 13.8C19.1333 14.1333 19.4667 14.5667 19.6 15.1C19.8667 16.0333 19.6 16.7667 18.8 17.3C17.9333 17.8333 16.8667 18.1 15.6 18.1C14.8 18.1 14.0667 17.9 13.4 17.5V16.5ZM32.6 16.5C31.0667 16.5 29.5667 16.1667 28.1 15.5C26.6333 14.8333 25.3333 13.9333 24.2 12.8C23.0667 11.6 22.1667 10.2333 21.5 8.7C20.8333 7.16667 20.5 5.56667 20.5 3.9C20.5 2.83333 20.7333 1.86667 21.2 1C21.6667 0.133333 22.4 -0.133333 23.4 0.2C23.9333 0.333333 24.3667 0.666667 24.7 1.2C25.0333 1.73333 25.2 2.26667 25.2 2.8C25.2 3.33333 25.1333 3.83333 25 4.3C24.8667 4.76667 24.8 5.3 24.8 5.9C24.8 7.23333 25.1667 8.5 25.9 9.7C26.6333 10.9 27.6333 11.8667 28.9 12.6C30.1667 13.3333 31.5667 13.7 33.1 13.7C33.7 13.7 34.2333 13.6333 34.7 13.5C35.1667 13.3667 35.6667 13.3 36.2 13.3C36.7333 13.3 37.2667 13.4667 37.8 13.8C38.3333 14.1333 38.6667 14.5667 38.8 15.1C39.0667 16.0333 38.8 16.7667 38 17.3C37.1333 17.8333 36.0667 18.1 34.8 18.1C34 18.1 33.2667 17.9 32.6 17.5V16.5Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-elearning-700">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                  <div className="text-sm text-gray-500">{testimonial.institution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-elearning-700 mb-2">Join our growing list of satisfied institutions</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="text-gray-400 font-medium text-xl">University of Technology</div>
              <div className="text-gray-400 font-medium text-xl">Global Education Group</div>
              <div className="text-gray-400 font-medium text-xl">Midwestern College</div>
              <div className="text-gray-400 font-medium text-xl">Pacific Learning Institute</div>
              <div className="text-gray-400 font-medium text-xl">Eastern State University</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
