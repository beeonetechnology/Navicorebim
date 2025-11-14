import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import buildingProject from "@/assets/building-project.jpg";
import luxuryHome from "@/assets/luxury-home.jpg";
import heroImage from "@/assets/hero-construction.jpg";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      let { data: blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      if (blogs && blogs.length > 0) {
        setFeaturedPost(blogs.find((b) => b.featured) || blogs[0]);
        setBlogPosts(blogs.filter((b) => !b.featured));

        const uniqueCategories = ["All", ...new Set(blogs.map((b) => b.category))];
        setCategories(uniqueCategories);
      }
    };

    fetchBlogs();
  }, []);

  if (!featuredPost) return <div>Loading...</div>;

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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends and insights in construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: any, index: number) => (
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

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Expandable content */}
                  <p
                    className={`text-gray-600 mb-4 whitespace-pre-line transition-all duration-300 ${
                      expandedPost === post.id ? "" : "line-clamp-3"
                    }`}
                  >
                    {post.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>

                    <button
                      onClick={() =>
                        setExpandedPost(expandedPost === post.id ? null : post.id)
                      }
                      className="text-[#0799b3] font-semibold hover:underline"
                    >
                      {expandedPost === post.id ? "Show Less" : "Read More"}
                    </button>
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
