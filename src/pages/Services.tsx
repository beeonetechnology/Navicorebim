import { Building, Home, Wrench, Palette, Users, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingProject from "@/assets/building-project.jpg";
import buildingProject1 from "@/assets/MEP BIM model.jpg";
import buildingProject2 from "@/assets/architectural BIM design.jpg";
import buildingProject3 from "@/assets/3d-clash.png";
import buildingProject4 from "@/assets/bim-education.jpg";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [
    {
      icon: Building,
      title: "MEPF BIM Modeling",
      description: "MEPF BIM Modeling provides 3D modeling for mechanical, electrical, plumbing, and fire protection systems. We ensure precise coordination and efficiency across all building services",
      features: ["Mechanical Modeling ", "Electrical Modeling ", "Plumbing Modeling ", "Fire Fighting and Fire Protection Modeling"],
      image: buildingProject1
    },
    {
      icon: Home,
      title: "Design and Estimation",
      description: "We provide design and estimation for mechanical, plumbing, fire protection, and electrical systems. Our services include system layouts, equipment selection, and accurate quantity take-offs for projects.",
      features: ["Mechanical Design Services", "Plumbing & Fire Fighting Design Services", "Electrical Design Services", "Quantity Take-off and Estimation Services"],
      image: buildingProject2
    },
    {
      icon: Wrench,
      title: "Other BIM Services",
      description: "We offer a range of BIM services including conversion, modeling, and coordination for building projects. Our solutions ensure accurate, clash-free interdisciplinary models for MEPF, architecture, and structure.",
      features: ["PDF/CAD/3D CAD to BIM Conversion", "Parametric Revit Family Creation for MEPF", "Interdisciplinary Model Coordination and Clash Detection", "Clash Report Generation and Resolution"],
      image: buildingProject3
    },
    {
      icon: Palette,
      title: "BIM Education",
      description: "NavicoreBIM provides hands-on BIM education for students and professionals, bridging the gap between theory and real-world industry practice. Our programs equip learners with practical skills in BIM workflows, modeling, and coordination.",
      features: ["Student Training & Internships with project-based learning", "Corporate Training tailored to industry workflows", "Industry-experienced trainers and real project datasets", "Flexible learning schedules (online & in-person)"],
      image: buildingProject4
    },
   
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial meeting to understand your vision and requirements"
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Detailed architectural plans and project timeline development"
    },
    {
      step: "03",
      title: "Permits & Approvals",
      description: "Handling all necessary permits and regulatory approvals"
    },
    {
      step: "04",
      title: "Construction",
      description: "Expert execution with regular progress updates and quality checks"
    },
    {
      step: "05",
      title: "Completion",
      description: "Final inspection, handover, and ongoing support"
    }
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
        
        <div className="relative z-10 container mx-auto px-6 bg-gradient-primary bg-clip-text text-[#6ddcf5] text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up pt-12">
            Our Services
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
Transforming Ideas into Intelligent Models

          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0799b3] mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             We bring designs to life through advanced BIM solutions. Whether it’s a home, a high-rise, or a factory, NavicoreBIM’s team integrates technology and creativity to streamline workflows, 
             eliminate errors, and make construction smarter from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group bg-white rounded-2xl shadow-elegant hover-lift overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-74 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay/50" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-luxury">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-smooth"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-luxury group-hover:scale-110 transition-elegant">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary-light transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-smooth">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a detailed proposal
          </p>
          <Link to="/contact">
          <Button 
            size="lg" 
            className=" bg-gradient-primary text-gray-700 hover:scale-105 transition-elegant shadow-luxury text-lg px-12 py-4"
          >
            Request Consultation
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;