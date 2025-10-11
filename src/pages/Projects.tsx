import { useState, useEffect, useRef } from "react";
import { Filter, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import buildingProject from "@/assets/building-project.jpg";
import luxuryHome from "@/assets/luxury-home.jpg";
import heroImage from "@/assets/hero-construction.jpg";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const lastScrollY = useRef(0);
  // supabase

  const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      setProjects(data);
    }
    setLoading(false);
  };

  fetchProjects();
}, []);


  const filters = ["All", "Commercial", "Residential", "Mixed-Use", "Renovation"];

  const project = [
    {
      id: 1,
      title: "Platinum Corporate Tower",
      category: "Commercial",
      location: "Downtown District",
      year: "2023",
      description: "50-story luxury office complex with premium amenities and sustainable design",
      image: buildingProject,
      value: "$150M",
      duration: "36 months",
      features: ["LEED Platinum", "Smart Building Systems", "Rooftop Garden", "Underground Parking"]
    },
    {
      id: 2,
      title: "Riverside Luxury Residences",
      category: "Residential",
      location: "Waterfront District",
      year: "2023",
      description: "Exclusive collection of luxury waterfront homes with private marina access",
      image: luxuryHome,
      value: "$85M",
      duration: "24 months",
      features: ["Waterfront Views", "Private Marina", "Smart Home Tech", "Luxury Finishes"]
    },
    {
      id: 3,
      title: "Metropolitan Mixed-Use Complex",
      category: "Mixed-Use",
      location: "City Center",
      year: "2022",
      description: "Integrated development combining retail, office, and residential spaces",
      image: luxuryInterior,
      value: "$200M",
      duration: "42 months",
      features: ["Retail Spaces", "Office Towers", "Luxury Condos", "Public Plaza"]
    },
    {
      id: 4,
      title: "Heritage Building Restoration",
      category: "Renovation",
      location: "Historic Quarter",
      year: "2022",
      description: "Careful restoration of landmark building with modern amenities integration",
      image: heroImage,
      value: "$45M",
      duration: "18 months",
      features: ["Historic Preservation", "Modern Upgrades", "Energy Efficiency", "Cultural Heritage"]
    },
    {
      id: 5,
      title: "Tech Campus Headquarters",
      category: "Commercial",
      location: "Innovation District",
      year: "2021",
      description: "State-of-the-art technology campus with collaborative spaces and wellness facilities",
      image: buildingProject,
      value: "$120M",
      duration: "30 months",
      features: ["Collaboration Spaces", "Wellness Center", "Green Roof", "Smart Infrastructure"]
    },
    {
      id: 6,
      title: "Luxury Penthouse Collection",
      category: "Residential",
      location: "Skyline Heights",
      year: "2021",
      description: "Ultra-luxury penthouse residences with panoramic city views",
      image: luxuryInterior,
      value: "$95M",
      duration: "28 months",
      features: ["Panoramic Views", "Private Elevators", "Luxury Amenities", "Concierge Service"]
    }
  ];

const filteredProjects =
  activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  // Scroll handler for filter hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsFilterVisible(false);
      } else {
        setIsFilterVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up pt-10 bg-gradient-primary bg-clip-text text-[#6ddcf5]">
            Our Projects
          </h1>
          <p className="text-base md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
            Showcasing Innovation in Every Build
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section
        className={`py-12  bg-white sticky top-0 z-40 shadow-elegant transition-transform duration-300 ${
          isFilterVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`transition-smooth ${
                  activeFilter === filter
                    ? "bg-gradient-primary shadow-elegant"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
     <p className="text-sm md:text-xl text-center text-gray-600  mt-8 max-w-3xl mx-auto pt-12">
        Browse our projects by category to quickly explore commercial towers, luxury residences,
        mixed-use developments, and restoration works that reflect our commitment to innovation and
        excellence.
      </p>
      <p className="text-sm md:text-xl text-center text-gray-600  mt-3 max-w-3xl mx-auto">
        From high-rise buildings to industrial facilities, we have experienced team to deliver MEP
        designs and BIM solutions for projects across following sectors:
      </p>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-luxury hover-lift overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay/20 group-hover:bg-gradient-overlay/40 transition-elegant" />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-gradient-gold text-gray-900 rounded-full text-sm font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span>
                      <span className="text-gray-600 ml-2">{project.duration}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full group-hover:bg-primary group-hover:scale-105 transition-elegant"
                    variant="outline"
                  >
                    View Project Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section *//*}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Project Statistics</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that showcase our expertise and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-5xl font-bold text-primary mb-4">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold text-primary mb-4">$2.5B+</div>
              <div className="text-gray-300">Total Project Value</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold text-primary mb-4">25+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold text-primary mb-4">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
       <h2 className=" text-2xl md:text-5xl font-bold mb-6">Start Your Next Project</h2>
          <p className=" text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to create something extraordinary? Let's discuss your vision and bring it to life.
          </p>
          <Link to="/contact">
          <Button
            size="lg"
            className="bg-gradient-primary text-gray-900 hover:scale-105 transition-elegant shadow-luxury text-lg px-12 py-4"
          >
            Schedule Consultation
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
