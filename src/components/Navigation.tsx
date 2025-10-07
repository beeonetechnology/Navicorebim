import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-4 copy.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only auto-show navbar if menu is not open
      if (!isMenuOpen) {
        setIsScrolled(currentScrollY > 50);
        setIsNavbarVisible(
          currentScrollY <= lastScrollY.current || currentScrollY <= 50
        );
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-40 flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-40 object-contain" />
            </Link>
          </div>

          {/* Toggle Button */}
          <div className="flex items-center">
            <Button
              size="sm"
              variant="default"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Side Panel Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={() => setIsMenuOpen(false)}
            style={{ animation: "fadeIn 0.3s ease-out" }}
          />

          {/* Side Panel */}
          <div
            className="fixed top-0 right-0 h-full w-[400px] max-w-[90vw] bg-gradient-to-br from-[#0a4a54] via-[#0d5c68] to-[#0a4a54] z-50 shadow-2xl overflow-hidden"
            style={{ animation: "slideInRight 0.4s ease-out" }}
          >
            {/* Close Button */}
       





       
            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0799b3] rounded-full blur-2xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#05b8d6] rounded-full blur-2xl opacity-15" />

            {/* Logo in Panel */}
            <div className="relative pt-12 px-6 flex justify-center w-34">
              <img src={logo} alt="Logo" className="w-44 h-auto object-contain " />
            </div>

            {/* Navigation Items */}
            <div className="relative flex flex-col items-center space-y-2 px-4">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="w-full"
                    style={{ animationDelay: `${index * 80}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div
                      className={`relative group flex items-center justify-center py-2 rounded-xl transition-all duration-300 ${
                        isActive ? "bg-white/20 backdrop-blur-md" : "hover:bg-white/10"
                      }`}
                    >
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                      )}

                      <span
                        className={`text-lg font-bold transition-all duration-300 ${
                          isActive
                            ? "text-white scale-105"
                            : "text-white/80 group-hover:text-white group-hover:scale-105"
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Navigation;




