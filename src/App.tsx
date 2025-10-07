import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const noNavRoutes = ["/admin", "/adminDashboard"]; // Routes without Navigation

  return (
    <>
      {/* Only show Navigation if current route is not in noNavRoutes */}
      {!noNavRoutes.includes(location.pathname) && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        
        <Route path="/admin" element={<AdminLogin />} />
        
        <Route
          path="/adminDashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
            
          }
        />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </>
  );
};

// Wrap App in BrowserRouter and QueryClientProvider
const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppWrapper;
