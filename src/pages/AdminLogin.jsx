// src/pages/Login.jsx
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import bgImage from "@/assets/background-admin.jpg"; // <-- Replace with your image path

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) navigate("/AdminDashboard");
    };
    checkAuth();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.email.trim()) { setError("Email is required"); return false; }
    if (!formData.password) { setError("Password is required"); return false; }
    if (!/\S+@\S+\.\S+/.test(formData.email)) { setError("Please enter a valid email"); return false; }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
      
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email.trim(),
        password: formData.password,
      });
      if (error) throw error;

      setMessage("Login successful!");
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/AdminDashboard");
    } catch (error) {
      setError(error.message === "Invalid login credentials" ? 
        "Invalid email or password." : 
        "An error occurred. Please try again.");
    } finally { setLoading(false); }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) handleLogin(e);
  };

  return (
    <div className="relative ">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className=" backdrop-blur-sm shadow-2xl rounded-2xl p-8 sm:p-12  border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-10 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-200 mb-2">Admin Portal</h1>
            <p className="text-gray-300 text-sm">Sign in to access your dashboard</p>
          </div>

          {/* Messages */}
        {error && (
  <div className="mb-6 flex  text-white pl-9">
    {/* Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      color="red"
    >
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.586c.75 1.334-.213 2.985-1.742 2.985H3.48c-1.53 0-2.492-1.65-1.742-2.985L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-7a1 1 0 00-.993.883L9 7v4a1 1 0 001.993.117L11 11V7a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    {/* Message */}
    <span>{error}</span>
  </div>
)}

          {message && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">{message}</div>}

         {/* Login Form */}
<div className="mx-auto">
  <form onSubmit={handleLogin} className="space-y-6">
    <div className="space-y-4 pb-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-center">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={loading}
          className=" px-5 py-3 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0799b3] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed text-center"
          placeholder="Enter your email"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2 text-center">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={loading}
          className=" px-5 py-3 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0799b3] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed text-center"
          placeholder="Enter your password"
          autoComplete="current-password"
        />
      </div>
    </div>

   <button
  type="submit"
  disabled={loading}
  className="px-4 py-3 bg-[#0799b3] text-white rounded-lg font-semibold shadow-lg 
             hover:bg-[#0799b3]/90 transform hover:scale-[1.02] transition-all duration-200 
             disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group 
             block mx-auto"
>
  <span className="relative z-10">{loading ? "Signing in..." : "Sign In"}</span>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  translate-x-[-100%] group-hover:translate-x-[100%]" />
</button>

  </form>
</div>
          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
