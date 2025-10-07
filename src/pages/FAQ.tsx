import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingProject from "@/assets/building-project.jpg";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqData = [
    {
      question: "What services does NavicoreBIM offer?",
      answer: "We provide end-to-end Building Information Modeling (BIM) solutions, including 3D modeling, MEP coordination, clash detection, quantity take-offs, and BIM consultancy for various project types."
    },
    {
      question: "Do you work with both small and large projects?",
      answer: "Yes. Whether it’s a small residential setup or a large-scale commercial or infrastructure project, our BIM processes are tailored to meet your project’s scale and complexity."
    },
    {
      question: "Can you work with our existing CAD or design files?",
      answer: "Absolutely. We can integrate and convert your existing 2D CAD drawings or other formats into detailed, accurate BIM models."
    },
    {
      question: "Do you collaborate with international clients?",
      answer: "Yes. Our team has experience working with clients across different geographies and standards, including US, UK, Middle East, and India."
    },
    {
      question: " How do I start a project with NavicoreBIM?",
      answer: "Simply reach out to us via our website or email with your project details. We’ll review your requirements and propose a customized BIM workflow and quote."
    },
    {
      question: "Can you provide sample BIM outputs before we start?",
      answer: "Yes, we can share non-confidential samples from our portfolio to help you understand the quality and detail of our work."
    },
   
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingProject})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <HelpCircle className="w-20 h-20 mx-auto mb-8 text-[#6ddcf5] animate-float" />
          <h1 className="text-6xl font-bold mb-6 animate-slide-up text-[#6ddcf5]">
            Frequently Asked Questions
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
            Get answers to common questions about our construction services and process
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-elegant overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-smooth focus:outline-none focus:bg-gray-50"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-primary transition-elegant ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-elegant ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose NavicoreBIM?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that speak to our expertise and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-elegant hover-lift animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-4">50+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-elegant hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-[#0799b3] mb-4">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-elegant hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-4">10+</div>
              <div className="text-gray-700 font-medium">Team members</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-elegant hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-[#0799b3] mb-4">24/7</div>
              <div className="text-gray-700 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you with any questions about your construction project
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="backgroundColor: [#0799b3] text-gray-900 hover:scale-105 transition-elegant shadow-luxury text-lg px-8 py-4"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us: 7994433077; 7306270720
            </Button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
