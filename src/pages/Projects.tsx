import { useState, useEffect, useRef } from "react";
import { Filter, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingProject from "@/assets/building-project.jpg";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const PROJECT_REF = "jypexflrrlhzxgtesumj"; // Your Supabase project ref
const BUCKET_NAME = "project-images"; // Your Supabase bucket name

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  // 🧭 Supabase Fetch
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;
        setProjects(data || []);
      } catch (err: any) {
        console.error("Error fetching projects:", err);
        setError(err.message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filters = ["All", "Commercial", "Residential", "Mixed-Use", "Renovation"];

  // 🧩 Filter Logic
  const filteredProjects =
    activeFilter === "All"
      ? projects || []
      : (projects || []).filter((project) => project.category === activeFilter);

  // 📜 Scroll handler for filter hide/show
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
        className={`py-12 bg-white sticky top-0 z-40 shadow-elegant transition-transform duration-300 ${
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
      <p className="text-base md:text-xl text-center text-gray-600 mt-8 max-w-3xl mx-auto pt-12">
        Browse our projects by category to quickly explore commercial towers, luxury residences,
        mixed-use developments, and restoration works that reflect our commitment to innovation and
        excellence.
      </p>
      <p className="text-base md:text-xl text-center text-gray-600 mt-3 max-w-3xl mx-auto">
        From high-rise buildings to industrial facilities, we have an experienced team to deliver
        MEP designs and BIM solutions for projects across multiple sectors.
      </p>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {loading ? (
            <p className="text-center text-gray-500">Loading projects...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : filteredProjects.length === 0 ? (
            <p className="text-center text-gray-500">No projects available.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-luxury hover-lift overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                   <img
  alt={project.title}
  className="w-full h-full object-cover"
  src={
    project.image?.startsWith("http")
      ? project.image
      : `https://${PROJECT_REF}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${project.image}`
  }
/>

                    <div className="absolute inset-0 bg-gradient-overlay/20 group-hover:bg-gradient-overlay/40 transition-elegant" />
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-2 bg-gradient-gold text-gray-900 rounded-full text-sm font-bold">
                        {project.category || "General"}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location || "Not specified"}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year || "N/A"}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description || "No description available."}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Duration:</span>
                        <span className="text-gray-600 ml-2">{project.duration || "N/A"}</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features?.length ? (
                          project.features.map((feature: string) => (
                            <div key={feature} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 text-sm">No features listed.</p>
                        )}
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Next Project</h2>
          <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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