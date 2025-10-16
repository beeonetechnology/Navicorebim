import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import buildingProject from "@/assets/building-project.jpg";
import luxuryHome from "@/assets/luxury-home.jpg";
import heroImage from "@/assets/hero-construction.jpg";
import { supabase } from "../supabaseClient";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Blog = () => {

   const [featuredPost, setFeaturedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      // Fetch all blogs
      let { data: blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setFeaturedPost(blogs.find((b) => b.featured) || blogs[0]);
        setBlogPosts(blogs.filter((b) => !b.featured));

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(blogs.map((b) => b.category)),
        ];
        setCategories(uniqueCategories);
      }
    };

    fetchBlogs();
  }, []);

  if (!featuredPost) return <div>Loading...</div>;

  // const featuredPos = {
  //   id: 1,
  //   title: "The Future of Sustainable Construction: Green Building Trends 2024",
  //   excerpt: "Explore the latest innovations in sustainable construction and how EliteConstruct is leading the way in eco-friendly building practices.",
  //   image: buildingProject,
  //   author: "Michael Chen",
  //   date: "March 15, 2024",
  //   category: "Sustainability",
  //   readTime: "8 min read"
  // };

  // const blogPosts = [
  //   {
  //     id: 2,
  //     title: "Luxury Home Design Trends: What's Hot in 2024",
  //     excerpt: "Discover the latest trends in luxury residential design, from smart home integration to wellness-focused spaces.",
  //     image: luxuryHome,
  //     author: "Sarah Williams",
  //     date: "March 12, 2024",
  //     category: "Design",
  //     readTime: "5 min read"
  //   },
  //   {
  //     id: 3,
  //     title: "Commercial Construction: Planning for Success",
  //     excerpt: "Key considerations for commercial construction projects, from initial planning to final delivery.",
  //     image: luxuryInterior,
  //     author: "David Rodriguez",
  //     date: "March 10, 2024",
  //     category: "Commercial",
  //     readTime: "7 min read"
  //   },
  //   {
  //     id: 4,
  //     title: "Smart Building Technology Integration",
  //     excerpt: "How modern technology is transforming the construction industry and improving building efficiency.",
  //     image: heroImage,
  //     author: "Emily Zhang",
  //     date: "March 8, 2024",
  //     category: "Technology",
  //     readTime: "6 min read"
  //   },
  //   {
  //     id: 5,
  //     title: "Project Management Best Practices",
  //     excerpt: "Essential strategies for successful construction project management and timeline optimization.",
  //     image: buildingProject,
  //     author: "Robert Chen",
  //     date: "March 5, 2024",
  //     category: "Management",
  //     readTime: "9 min read"
  //   },
  //   {
  //     id: 6,
  //     title: "Renovation vs. New Construction: Making the Right Choice",
  //     excerpt: "Factors to consider when deciding between renovating existing structures or building new.",
  //     image: luxuryInterior,
  //     author: "Sarah Williams",
  //     date: "March 3, 2024",
  //     category: "Planning",
  //     readTime: "4 min read"
  //   }
  // ];

  // const categories = [
  //   "All", "Sustainability", "Design", "Commercial", "Technology", "Management", "Planning"
  // ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingProject})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 container mx-auto px-6 text-[#6ddcf5] text-center pt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
           News & Blog


          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
           Insights & Updates from the World of BIM
          </p>
          <p className="text-l text-gray-200 max-w-3xl mx-auto animate-fade-in-delay pt-5">
            
Stay tuned for updated engineering innovations, BIM tips, and MEP industry trends.

          </p>
        </div>
      </section>

    

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className=" text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends and insights in construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-elegant hover-lift overflow-hidden cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-elegant"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="hover:text-primary">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                   
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-elegant shadow-elegant"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      
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

export default Blog;