
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingSection: React.FC = () => {
  const tiers = [
    {
      name: "Standard",
      price: "$499",
      description: "Perfect for small institutions or individual departments",
      features: [
        "Up to 1,000 exam sessions per year",
        "Basic identity verification",
        "Tab switching detection",
        "Clipboard monitoring",
        "Email support",
        "Updates for 1 year"
      ],
      limitations: [
        "Manual review only",
        "Limited reporting features"
      ]
    },
    {
      name: "Professional",
      price: "$999",
      description: "Ideal for colleges and mid-sized educational institutions",
      features: [
        "Up to 10,000 exam sessions per year",
        "AWS Face Recognition integration",
        "All monitoring features included",
        "Advanced reporting dashboard",
        "Priority email & chat support",
        "Updates for 2 years",
        "Custom branding options"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "For large universities and educational organizations",
      features: [
        "Unlimited exam sessions",
        "Advanced AI-powered verification",
        "Full monitoring suite with custom rules",
        "Complete white-labeling",
        "API access for custom integration",
        "Dedicated account manager",
        "24/7 priority support",
        "Lifetime updates",
        "On-premise deployment option"
      ],
      limitations: []
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your institution's needs. All plans include core proctoring 
            features with different capacity and support levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                index === 1 ? 'border-elearning-300 shadow-md' : 'border-gray-200'
              }`}
            >
              <div className={`p-6 ${index === 1 ? 'bg-gradient-to-r from-blue-50 to-cyan-50' : 'bg-white'}`}>
                <h3 className="text-xl font-bold text-elearning-700 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-elearning-700">{tier.price}</span>
                  {tier.price !== "Contact Us" && <span className="text-gray-500">/year</span>}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <Button 
                  className={`w-full ${
                    index === 1 
                      ? 'bg-elearning-600 hover:bg-elearning-700 text-white' 
                      : 'border-elearning-600 text-elearning-600 hover:bg-elearning-50'
                  }`}
                  variant={index === 1 ? "default" : "outline"}
                >
                  {tier.price === "Contact Us" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <p className="font-medium text-sm text-gray-700 mb-4">Included features:</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {tier.limitations.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <TooltipProvider>
                      <p className="font-medium text-sm text-gray-700 mb-4 flex items-center">
                        Limitations:
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60">These features are available in higher-tier plans</p>
                          </TooltipContent>
                        </Tooltip>
                      </p>
                    </TooltipProvider>
                    <ul className="space-y-2">
                      {tier.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow">
            <h3 className="text-lg font-semibold text-elearning-700 mb-3">Need a custom solution?</h3>
            <p className="text-gray-600 mb-5">
              We understand that educational institutions have unique requirements. 
              Contact our sales team to discuss custom pricing and integration options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="border-elearning-600 text-elearning-600 hover:bg-elearning-50" variant="outline">
                Download Price List
              </Button>
              <Button className="bg-elearning-600 hover:bg-elearning-700 text-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
