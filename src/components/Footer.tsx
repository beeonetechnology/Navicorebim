import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Building,
  Hammer,
  Users,
  Award,
  LucideIcon,
  Import
} from 'lucide-react';
import logo from "@/assets/logo-4 copy.png"
import { Link } from "react-router-dom";


interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
}

const Footer: React.FC = () => {
  const services: string[] = [
    'Mechanical Modeling ',
    'Plumbing Modeling ',
    'Mechanical Design Services',
    'Corporate Training',
    'Electrical Design Services',
    'Student Training & Internships'
  ];

  const quickLinks: string[] = [
    'About',
    'Projects',
    'Services',
    'Blog',
    'FAQ',
    'Contact'
  ];

  const stats: Stat[] = [
    { icon: Building, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '1000+', label: 'Happy Clients' },
    { icon: Hammer, number: '15+', label: 'Years Experience' },
    { icon: Award, number: '50+', label: 'Awards Won' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Stats Section *//*}
      <div className="relative border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0799b3] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#0799b3]">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 text-sm mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {*//* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-3 pb-2">
  <img
    src={logo} 
    alt="NavicoreBIM Logo"
    className="w-29 h-28 object-contain rounded-lg mr-2"
  />
</div>


            <p className="text-slate-300 mb-6 leading-relaxed">
              Creating exceptional spaces that inspire and endure. We're your trusted partner in bringing architectural visions to life with precision and excellence.
            </p>
           <div className="flex space-x-4">
  {[
   
    { Icon: Linkedin, link: "https://www.linkedin.com/company/navicorebim/" },
  ].map(({ Icon, link }, index) => (
    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#0799b3] transition-all duration-300 hover:scale-110"
    >
      <Icon className="w-5 h-5" />
    </a>
  ))}
</div>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#0799b3] rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-[#0799b3] transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
  <h4 className="text-xl font-semibold mb-6 relative">
    Quick Links
    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#0799b3] rounded-full"></div>
  </h4>
  <ul className="space-y-3">
    {quickLinks.map((link, index) => {
      // Convert link text to route path, e.g., "About Us" -> "/about-us"
      const path = "/" + link.toLowerCase().replace(/\s+/g, '-');
      return (
        <li key={index}>
          <Link
            to={path}
            className="text-slate-300 hover:text-[#0799b3] transition-colors duration-200 flex items-center group"
          >
            <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
            {link}
          </Link>
        </li>
      );
    })}
  </ul>
</div>
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#0799b3] rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-[#0799b3]" />
                </div>
                <div>
                  -
                  <p className="text-slate-300"> 2nd Floor, KC Arcade, Near TV Centre, CSEZ PO,</p>
                  <p className="text-slate-300"> Kakkanad, Ernakulam, 682037</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-[#0799b3]" />
                </div>
                <div>
                  <a href="tel:+1234567890" className="text-slate-300 hover:text-[#0799b3] transition-colors">
                   7994433077 , 7306270720
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-[#0799b3]" />
                </div>
                <div>
                  <a href="mailto:info@buildcraft.com" className="text-slate-300 hover:text-[#0799b3] transition-colors">
                    contact@navicorebim.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="w-5 h-5 text-[#0799b3]" />
                </div>
                <div>
                  <p className="text-slate-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-slate-300">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-semibold mb-2">Stay Updated</h5>
              <p className="text-slate-300">Get the latest news and updates from our projects.</p>
            </div>
         <div className="flex flex-col sm:flex-row w-full sm:w-auto">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full sm:w-80 px-4 py-2 bg-slate-800 border border-[#0799b3] 
               rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none
               focus:outline-none focus:border-[#05b5d1] 
               text-white placeholder-slate-400"
  />

  <Link
    to="/contact"
    className="px-4 py-2 bg-gradient-to-r from-[#0799b3] to-[#05b5d1] 
               rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none
               hover:from-[#068aa1] hover:to-[#049fb9] 
               transition-all duration-300 font-semibold text-white 
               text-center"
  >
    Subscribe
  </Link>
</div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 NavicoreBIM. All rights reserved.Distributed By beeonedigital
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-[#0799b3] transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-[#0799b3] transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-[#0799b3] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;