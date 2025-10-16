import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import buildingProject from "@/assets/building-project.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 7994433077", "+91 7306270720"],
      subtitle: "Call us anytime",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@navicorebim.com"],
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["2nd Floor, KC Arcade, Near TV Centre, CSEZ PO, Kakkanad, Ernakulam, 682037"],
      subtitle: "Visit our headquarters",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      subtitle: "Emergency services 24/7",
    },
  ];

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Renovation & Remodeling",
    "Architectural Design",
    "Project Management",
    "Consultation",
  ];

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSend = () => {
    const phone = "7994433077"; 
    
    const message = `
Name: ${formData.firstName}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Project Details: ${formData.message}
    `;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up pt-10 ">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
            Ready to start your next project? Get in touch with our expert team
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-elegant shadow-elegant">
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{info.subtitle}</p>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-700 hover:text-primary transition-smooth cursor-pointer">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Get a Free Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours with a detailed proposal.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-2 h-12 rounded-xl border-gray-300 focus:border-primary transition-smooth"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-xl border-gray-300 focus:border-primary transition-smooth"
                    placeholder="Your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-xl border-gray-300 focus:border-primary transition-smooth"
                    placeholder="Contact number"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-gray-700 font-medium">Service Needed</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-primary transition-smooth bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Project Details</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary transition-smooth resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  onClick={handleSend}
                  className="w-full bg-gradient-primary hover:scale-105 transition-elegant shadow-elegant text-lg py-4"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

           {/* Map Placeholder */}
<div className="animate-fade-in-delay">
  <div className="bg-gray-300 rounded-2xl h-[300px]  md:h-[500px] lg:h-[100vh] overflow-hidden shadow-elegant">
<iframe
  title="India Map"
  src="https://www.bing.com/maps/embed?h=600&w=800&cp=22.9734~78.6569&lvl=5&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
  className="w-full h-full border-0 rounded-2xl"
  allowFullScreen
/>



  </div>
</div>

          </div>
        </div>
      </section>
      {/* Quick Contact */} <section className="py-24 bg-gradient-dark text-white"> 
        <div className="container mx-auto px-6 text-center"> 
          <h2 className="text-2xl md:text-5xl font-bold mb-6"> Need Immediate Assistance? </h2>
           <p className="text-base  md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> For urgent matters or emergency services, contact us directly </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Button 
  size="lg" 
  className="bg-gradient-primary text-white  hover:text-gray-700 hover:scale-105 transition-elegant shadow-luxury text-lg px-8 py-4"
> 
  <Phone className="mr-2 w-5 h-5" /> +91 7994433077, +91 7306270720
</Button>



  </div>
  </div>
  </section>
    </div>
  );
};

export default Contact;
