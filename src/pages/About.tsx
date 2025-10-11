import { Users, Target, Eye, Award,ShieldCheck,Repeat ,BookOpenCheck ,Leaf } from "lucide-react";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import luxuryInterior1 from "@/assets/development-architecture-computer-systems-of-a-smart-building-design-modern-building-construction-with-ai-controls-project-smart-house-construction-with-artificial-intelligence-generate-ai.jpg";
import luxuryInterior2 from "@/assets/R (1).jpg";
import luxuryInterior3 from "@/assets/ej-yao-D46mXLsQRJw-unsplash.jpg";
import luxuryInterior4 from "@/assets/james-sullivan-ESZRBtkQ_f8-unsplash.jpg";
import luxuryInterior5 from "@/assets/imgi_282_civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept_.jpg";
import { Link } from "react-router-dom";
import Footer from '../components/Footer'

const About = () => {
  const team = [
    {
      name: "Robert Chen",
      position: "CEO & Founder",
      image: "/api/placeholder/300/300",
      bio: "25+ years of construction excellence"
    },
    {
      name: "Sarah Williams",
      position: "Head of Design",
      image: "/api/placeholder/300/300",
      bio: "Award-winning architectural designer"
    },
    {
      name: "Michael Rodriguez",
      position: "Project Director",
      image: "/api/placeholder/300/300",
      bio: "Expert in luxury commercial projects"
    },
    {
      name: "Emily Zhang",
      position: "Operations Manager",
      image: "/api/placeholder/300/300",
      bio: "Ensuring seamless project delivery"
    }
  ];

  const values = [
{
  icon: Award,
  title: "Quality in Every Detail",
  description: "Excellence in every detail delivered"
},
{
  icon: ShieldCheck,
  title: "Accountability in Every Promise",
  description: "We always keep promises"
},
{
  icon: Repeat,
  title: "Adaptability to Your Needs",
  description: "Flexible to your needs always"
},
{
  icon: BookOpenCheck,
  title: "Continues Learning ",
  description: "Always learning, always growing."
},
{
  icon: Leaf,
  title: "Sustainability for Better Future",
  description: "Committed to a better future."
}

  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${luxuryInterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        <div className="relative z-10 container mx-auto px-6 bg-gradient-primary bg-clip-text text-[#6ddcf5] text-center">
         <h1 className=" text-3xl md:text-5xl font-bold mb-6 animate-slide-up pt-10">
            About NavicoreBIM
          </h1>

        </div>
      </section>

     {/* Story Section */}
<section className="py-24">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Side - Text + First Paragraph */}
      <div className="animate-slide-up">
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
          Engineering Precision. Delivering Performance.
        </h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            NavicoreBIM is a trusted MEPF (Mechanical, Electrical, Plumbing & Fire-Fighting)
            Design and BIM Services provider committed to helping architects, contractors,
            and facility owners achieve their project goals with accuracy and efficiency.
            We ensure that every design meets the highest safety, operational, and sustainability
            standards—helping our clients save time, reduce costs, and minimize risks.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative animate-fade-in-delay">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-2xl" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-2xl" />
        <img
          src={luxuryInterior1}
          alt="Our Work"
          className="relative z-10 w-full rounded-2xl shadow-luxury"
        />
      </div>
    </div>


  </div>
</section>


      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-6 pb-9 rounded-2xl shadow-elegant hover-lift">
              <Target className="w-16 h-16 text-primary mb-8" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
              “To provide end-to-end BIM solutions across architecture, structure, MEPF, and allied services, delivering accuracy,
              efficiency, and collaboration from design to facility management. We combine multidisciplinary expertise with the
               latest technology to help our clients achieve excellence in every stage of the project lifecycle.”
              </p>
            </div>

            <div className="bg-white p-6 pb-9  rounded-2xl shadow-elegant hover-lift">
              <Eye className="w-16 h-16 text-primary  mb-8" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
               “To be the global leader in integrated BIM consulting, pioneering Digital Twin adoption and setting
               new industry standards for innovation,
                sustainability, and seamless collaboration across all disciplines of the built environment.”
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Second Paragraph - Two Column Layout */}
<div className="mt-12 animate-slide-up">
  <h2 className=" text-2xl md:text-4xl font-bold text-gray-900 mb-14 text-center">
    Why Choose NavicoreBIM?
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">



    {/* Left Side - Text */}
    <div className="order-2 lg:order-1 pr-10">
      <h2 className=" pl-5 text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 text-center">
        Your Partner in Precision & Performance
      </h2>

 <div className="space-y-3 text-sm text-gray-600 leading-relaxed pl-7">
  <p className="text-center max-w-xl mx-auto ">
    At NavicoreBIM, we blend technical expertise, innovative tools, and
    a collaborative approach to bring clarity to complex projects. Our
    commitment to accuracy, efficiency, and seamless coordination ensures
    that your designs translate into reality—on time and without surprises.
  </p>
  <p className="text-center max-w-xl mx-auto">
    Comprehensive Services – From concept design to detailed BIM models
    Cutting-edge Technology – Leveraging the latest BIM tools and engineering standards
    Clear Communication – Transparent collaboration with all stakeholders
    Engineering Expertise – Years of industry experience across global projects
    Detail-Oriented Process – Designs that are practical, compliant, and cost-effective
    Sustainability Focus – Energy-efficient and environment-friendly solutions
  </p>
</div>

    </div>


 {/* Right Side - Image */}
<div className="relative animate-fade-in-delay bg-transparent px-4 sm:pl-12">
  <div className="absolute -top-4 -left-4 w-10 h-14 bg-gold/20 rounded-2xl" />
  <div className="absolute -bottom-4 -right-4 w-23 h-12 bg-primary/20 rounded-2xl" />

  <img
    src={luxuryInterior2}
    alt="Our Work"
    className="relative z-10 w-full max-w-xs sm:max-w-md md:w-90 md:h-68 mx-auto rounded-2xl shadow-luxury object-cover"
  />
</div>
</div>
</div>

     {/* Values */}
<section className="py-24">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Values
      </h2>
      <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
        The principles that guide everything we do
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {values.map((value, index) => (
        <div
          key={value.title}
          className="text-center group animate-fade-in transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105 shadow-elegant p-6 rounded-2xl bg-white"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-elegant shadow-elegant">
            <value.icon className="w-8 h-8 text-white" />
          </div>
        <h3 className="text-base font-bold text-gray-900 mb-4">{value.title}</h3>
          <p className="text-gray-600 text-sm">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>



    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Enhanced Animated background elements */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">

        {/* Enhanced Header */}
       <div className="mb-24 lg:mb-32 ">
  <h2 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-primary mb-6 tracking-tight text-center ">
    Our History
  </h2>
  <div className="flex items-center justify-center gap-4 text-center">
    <div className="h-1.5 w-28 bg-gradient-primary rounded-full"></div>
    <div className="h-1 w-16 bg-gradient-primary opacity-50 rounded-full"></div>
    <div className="h-0.5 w-8 bg-gradient-primary opacity-30 rounded-full"></div>
  </div>
</div>


        {/* Section 1 - Origin Story with enhanced styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-40 lg:mb-48">

          {/* Text with better typography */}
          <div className="space-y-10">
            <div className="inline-block">
              <span className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 pl-17 rounded-full shadow-sm border border-blue-100/50">
                Where it all began
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-primary leading-tight tracking-tight pl-7">
         Every great structure starts with an idea — a sketch, a spark, a vision
            </h3>

            <div className="space-y-8 text-gray-600 text-base lg:text-sm leading-relaxed">
              <p className="relative pl-8 border-l-[3px] border-blue-300/60 hover:border-blue-400 transition-colors duration-300 ">
               NavicoreBIM was founded with a simple idea — to make BIM and MEP services more efficient, collaborative, and accessible. Our team brings together skills,
                curiosity, and the determination to deliver quality work from day one.
              </p>
              <p className="relative pl-8 border-l-[3px] border-amber-300/60 hover:border-amber-400 transition-colors duration-300">
Our goal is to grow alongside our clients — turning ideas into accurate, coordinated designs that save time, reduce errors, and support smarter construction.
 We’re here to prove ourselves through each project we deliver.
              </p>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-primary">100%</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">Quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-primary">24/7</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-primary">∞</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">Innovation</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image with better decorative elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Enhanced Decorative circles with gradient */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-primary opacity-20 rounded-full blur-2xl group-hover:scale-125 group-hover:opacity-30 transition-all duration-700"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-primary opacity-15 rounded-full blur-3xl group-hover:scale-125 group-hover:opacity-25 transition-all duration-700"></div>

              {/* Orbiting dots */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-primary rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-gradient-primary rounded-full opacity-40 animate-pulse" style={{animationDelay: '500ms'}}></div>

              {/* Main image with sophisticated border */}
              <div className="relative z-10 w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-[2.5rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700 ring-1 ring-white/50">
                <img
                  src={luxuryInterior3}
                  alt="Our Origins"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
              </div>

              {/* Enhanced Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-6 z-20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 border border-gray-100/50">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-primary tracking-tight">2025</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Founded</div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-3xl z-20"></div>
            </div>
          </div>
        </div>

        {/* Section 2 - What We Do with refined styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-40 lg:mb-48">

          {/* Enhanced Image - on left for desktop */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* Enhanced Decorative elements */}
              <div className="absolute -top-14 -right-14 w-44 h-44 bg-gradient-primary opacity-25 rounded-full blur-3xl group-hover:scale-125 group-hover:opacity-35 transition-all duration-700"></div>

              {/* Geometric accent shapes */}
              <div className="absolute top-8 -left-8 w-20 h-20 border-2 border-gradient-primary opacity-20 rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>

              {/* Main image with sophisticated gradient border */}
            <div className="relative z-10 p-[3px] bg-gradient-primary rounded-[2.5rem] group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700">
  {/* Background Glow Shape */}
  <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-tr from-blue-500/30 via-purple-400/20 to-transparent blur-3xl opacity-60"></div>

  <div className="relative w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-[2.5rem] overflow-hidden bg-white">
    <img
      src={luxuryInterior4}
      alt="Our Services"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent mix-blend-overlay"></div>
  </div>
</div>


              {/* Enhanced Floating icon with pulse effect */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-primary rounded-2xl shadow-2xl p-6 z-20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="absolute inset-0 bg-white rounded-2xl animate-ping opacity-20"></div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-3xl z-20"></div>
            </div>
          </div>

          {/* Enhanced Text */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="inline-block">
              <span className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 rounded-full shadow-sm border border-amber-100/50">
                Our Expertise
              </span>
            </div>

            <h3 className="text-4xl lg:text-4xl font-black text-slate-900 tracking-tight">
              What We Do?
            </h3>

            <h4 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-primary leading-tight tracking-tight">
              Building better through digital precision
            </h4>

            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We empower construction projects with smart, data-driven solutions. From MEP BIM modeling to coordinated
              design and clash detection, we streamline every stage of your project — reducing errors,
              saving time, and ensuring seamless collaboration between teams.
            </p>

            {/* Enhanced Feature badges */}
            <div className="flex flex-wrap gap-4 pt-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-bold shadow-sm border border-blue-100/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                BIM Modeling
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full text-sm font-bold shadow-sm border border-amber-100/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                Design and Estimation
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-bold shadow-sm border border-blue-100/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                BIM Education
              </span>
            </div>

            {/* Process indicators */}

          </div>
        </div>

        {/* Section 3 - CTA with premium styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Enhanced Text */}
          <div className="space-y-10">
            <div className="inline-block">
              <span className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-full shadow-sm border border-blue-100/50">
                Join Us
              </span>
            </div>

            <h3 className="text-3xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-primary leading-tight tracking-tight">
              Let's BIM Something Smarter, Together!
            </h3>

            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              Join hands with NavicoreBIM and experience a project journey where technology
              meets expertise. The future of construction starts here.
            </p>

            {/* Enhanced CTA button */}
            <div className="flex items-center gap-6 pt-4">


<Link
  to="/contact"
  className="group relative px-6 py-3 bg-gradient-primary text-white text-sm font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  <span className="relative z-10 flex items-center gap-2">
    Start Your Project
    <svg
      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  </span>
  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</Link>



              <Link
  to="/projects"
  className="text-gray-600 font-semibold hover:text-gray-900 transition-colors duration-300 underline underline-offset-4"
>
  Learn More
</Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200 text-center">
              <div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-primary">50+</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-primary">98%</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-primary">5★</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">Rating</div>
              </div>
            </div>
          </div>

          {/* Premium Image presentation */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated gradient border with glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>

              {/* Floating geometric shapes */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-gradient-primary opacity-20 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary opacity-10 rounded-full blur-xl"></div>

              {/* Main image with premium overlay */}
              <div className="relative z-10 w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/50">
                <img
                  src={luxuryInterior5}
                  alt="Future Together"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 mix-blend-overlay"></div>

                {/* Enhanced Overlay text */}
                <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                  <div className="text-3xl font-black mb-2 tracking-tight">Ready to Build?</div>
                  <div className="text-sm opacity-90 font-medium">Let's create something amazing together</div>
                  <div className="mt-4 h-1 w-20 bg-white/50 rounded-full"></div>
                </div>

                {/* Decorative pulse dot */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-white rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-6 right-6 w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Premium corner accents */}
              <div className="absolute top-2 left-2 w-20 h-20 border-t-2 border-l-2 border-white/40 rounded-tl-3xl z-20"></div>
              <div className="absolute bottom-2 right-2 w-20 h-20 border-b-2 border-r-2 border-white/40 rounded-br-3xl z-20"></div>
            </div>
          </div>
        </div>

      </div>
    </div>










      {/* Team *//*}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the experts driving our vision forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-elegant"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-elegant" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-smooth">
                  {member.name}
                </h3>
                <p className="text-primary-light font-medium mb-3">{member.position}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
      <Footer/>
      </div>

  );
};

export default About;