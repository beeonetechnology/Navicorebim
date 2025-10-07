import Hero from "@/components/Hero";
import {
  Building,
  Users,
  Cog,
  Palette,
  Star,
  Quote,
  BookOpen,
  Layers,
  FileText,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import buildingProject from "@/assets/building-project.jpg";
import hospitalBuilding from "@/assets/modern hospital.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
  const addToRefs = useScrollAnimation(); // scroll animation hook

  const services = [
    {
      icon: Zap,
      title: "MEPF BIM Modeling",
      description: "Mechanical, Electrical, Plumbing, Fire",
    },
    {
      icon: FileText,
      title: "Design and Estimation",
      description: "Accurate system design and calculations",
    },
    {
      icon: Layers,
      title: "Other BIM Services",
      description: "Coordination, conversions, and clash detection",
    },
    {
      icon: BookOpen,
      title: "BIM Education",
      description: "Training students and corporate teams",
    },
  ];

  const projects = [
    {
      image: luxuryInterior,
      title: "Commercial Buildings",
      category: "Commercial",
      description: "50-story premium office complex tower hub",
    },
    {
      image: buildingProject,
      title: "Residential Towers",
      category: "Residential",
      description: "Modern high-rise residential towers with premium amenities",
    },
    {
      image: hospitalBuilding,
      title: "Hospitals & Healthcare Facilities",
      category: "Healthcare",
      description:
        "Modern healthcare facilities designed for patient care and medical services",
    },
  ];

  const testimonials = [
   {
  name: "Anand Menon",
  content:
    "NavicoreBIM delivered our project beyond expectations. The attention to detail and premium quality is unmatched.",
  rating: 5,
},
{
  name: "Lakshmi Nair",
  content:
    "Working with NavicoreBIM was seamless. They turned our vision into reality with exceptional craftsmanship.",
  rating: 5,
},
{
  name: "Rahul Krishnan",
  content:
    "Our project exceeded every expectation. The team's professionalism and quality is truly world-class.",
  rating: 5,
},

  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
              Comprehensive construction solutions crafted with precision and
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white p-8 rounded-2xl shadow-elegant hover-lift cursor-pointer opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                ref={addToRefs}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-elegant">
                  <service.icon className="w-8 h-8 text-white mx-auto my-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our portfolio of exceptional construction achievements
            </p>
          </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-7">
  {projects.map((project, index) => (
    <div
      key={project.title}
      className="animate-scale-in"
      style={{ animationDelay: `${index * 0.3}s` }}
      ref={addToRefs}
    >
      <div className="relative overflow-hidden rounded-2xl group cursor-pointer h-[480px]">
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-2xl blur-xl animate-pulse" style={{ 
            background: 'linear-gradient(90deg, #0799b3, #05b8d6, #0799b3)',
            padding: '2px',
            animationDuration: '3s'
          }} />
        </div>

        {/* Card Container */}
        <div className="relative h-full rounded-2xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
            
            {/* Animated gradient on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
              background: 'linear-gradient(to top, rgba(7, 153, 179, 0.5), rgba(7, 153, 179, 0.3), transparent)'
            }} />
          </div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" style={{
              background: 'linear-gradient(to right, transparent, rgba(7, 153, 179, 0.3), transparent)'
            }} />
          </div>

          {/* Rotating Glow Orbs */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full blur-3xl animate-pulse" style={{ 
              backgroundColor: 'rgba(7, 153, 179, 0.3)',
              animationDuration: '3s' 
            }} />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full blur-3xl animate-pulse" style={{ 
              backgroundColor: 'rgba(5, 184, 214, 0.3)',
              animationDuration: '4s',
              animationDelay: '1s' 
            }} />
            <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full blur-3xl animate-pulse" style={{ 
              backgroundColor: 'rgba(7, 153, 179, 0.25)',
              animationDuration: '3.5s',
              animationDelay: '0.5s' 
            }} />
          </div>

          {/* Decorative Border */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-2 transition-all duration-500" style={{
            borderColor: 'rgba(7, 153, 179, 0.4)'
          }} />

          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-between p-8 z-10">
            {/* Top Badge with Glow */}
            <div className="flex justify-start">
              <div className="relative">
                {/* Badge Glow */}
                <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110" style={{
                  backgroundColor: '#0799b3'
                }} />
                
                <span className="relative inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold text-white border transition-all duration-500 shadow-lg transform translate-y-0 group-hover:-translate-y-1" style={{
                  borderColor: 'rgba(7, 153, 179, 0.4)'
                }}>
                  <span className="relative w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#0799b3' }}>
                    <span className="absolute w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#0799b3' }} />
                  </span>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="space-y-4">
              <div className="transform translate-y-0 group-hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                  {project.title}
                </h3>
                <div className="relative h-1 w-16 rounded-full transform origin-left scale-x-100 group-hover:scale-x-150 transition-transform duration-500" style={{
                  backgroundColor: '#0799b3'
                }}>
                  {/* Underline Glow */}
                  <div className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    backgroundColor: '#0799b3'
                  }} />
                </div>
              </div>
              
              <p className="text-gray-200 text-base leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 ease-out drop-shadow-md">
                {project.description}
              </p>

              {/* View Project Button with Glow */}
              <div className="relative inline-flex opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 delay-100">
                {/* Button Glow */}
                <div className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" style={{
                  backgroundColor: '#0799b3'
                }} />
                
                <div className="relative flex items-center space-x-2 text-white font-semibold px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border transition-colors duration-300 hover:bg-white/10" style={{
                  borderColor: 'rgba(7, 153, 179, 0.3)'
                }}>
                 

                <Link to="/projects">
                         <span>View Project</span>
                </Link>

                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Corner Accent Glows - Enhanced */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700 -translate-y-20 translate-x-20 group-hover:-translate-y-16 group-hover:translate-x-16" style={{
            background: 'radial-gradient(circle, #0799b3, #05b8d6)'
          }} />
          
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700 translate-y-20 -translate-x-20 group-hover:translate-y-16 group-hover:-translate-x-16" style={{
            background: 'radial-gradient(circle, #05b8d6, #0799b3)'
          }} />

          {/* Center Spotlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-1000" style={{
            backgroundColor: '#0799b3'
          }} />
        </div>
      </div>
    </div>
  ))}
</div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-elegant shadow-elegant"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              What our clients say about working with EliteConstruct
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-luxury hover-lift opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                ref={addToRefs}
              >
                <Quote className="w-8 h-8 text-gold mb-6" />
                <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your construction needs and
            receive a personalized quote
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#6ddcf5] text-gray-900 hover:scale-105 transition-elegant shadow-luxury text-lg px-12 py-4"
            >
              Contact us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
