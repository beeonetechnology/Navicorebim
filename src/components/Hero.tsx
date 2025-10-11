import { useEffect, useState } from "react";
import { ArrowRight, Award, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-construction.jpg";
import luxuryHome from "@/assets/luxury-home.jpg";
import buildingProject from "@/assets/building-project.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  const [count, setCount] = useState({ projects: 0, clients: 0, team: 0 });
  const [api, setApi] = useState<any>();

  const heroSlides = [
    {
      image: heroImage,
      title: "NavicoreBIM",
      subtitle: "Let's BIM",
      description:
        "Comprehensive BIM solutions delivering precision modeling, seamless coordination, and efficient project execution.",
      cta: "View Projects",
    },
    {
      image: luxuryHome,
      title: "Luxury",
      subtitle: "Residential",
      description:
        "Transform your vision into reality with our premium residential construction services and bespoke architectural solutions.",
      cta: "View Projects",
    },
    {
      image: buildingProject,
      title: "Commercial",
      subtitle: "Excellence",
      description:
        "Industry-leading commercial construction with cutting-edge technology and uncompromising quality standards.",
      cta: "View Projects",
    },
    {
      image: luxuryInterior,
      title: "Interior",
      subtitle: "Mastery",
      description:
        "Sophisticated interior designs that blend functionality with luxury, creating spaces that inspire and elevate.",
      cta: "View Projects",
    },
  ];

  // Counter Animation
  useEffect(() => {
    const targets = {
      projects: 50,
      clients: 100,
      team: 10, // team members
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount({
        projects: Math.floor(targets.projects * easeOut),
        clients: Math.floor(targets.clients * easeOut),
        team: Math.floor(targets.team * easeOut),
      });

      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Autoplay Carousel
  useEffect(() => {
    if (!api) return;
    const autoplay = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section className="relative h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        className="h-full"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative h-full flex items-center justify-center">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-fixed parallax transition-all duration-1000"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-overlay" />

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-4 h-4 bg-gold rounded-full animate-float opacity-60" />
                <div
                  className="absolute top-40 right-20 w-3 h-3 bg-primary-light rounded-full animate-float opacity-40"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-30"
                  style={{ animationDelay: "4s" }}
                />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-5 text-center text-white">
                  <div className="max-w-4xl mx-auto">
                    <h1 className=" text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 animate-hero-title pt-16 pb--4">
                      <span className="block animate-slide-in-left animate-delay-100">
                        {slide.title}
                      </span>
                      <span className="block text-[#6ddcf5] animate-slide-in-right animate-delay-300">
                        {slide.subtitle}
                      </span>
                    </h1>

                    <p className="text-xs md:text-xl lg:text-xl mb-8 text-gray-200 animate-slide-in-up animate-delay-500 max-w-2xl mx-auto">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-in-up animate-delay-600">

                    </div>

                    {/* Counters */}
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                      <div className="text-center animate-slide-in-left animate-delay-100">
                        <div className="flex items-center justify-center mb-4 animate-scale-in animate-delay-200">
                          <Award className="w-8 h-8 text-[#6ddcf5] mr-3" />
                        </div>
                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#6ddcf5] mb-2 animate-slide-in-up animate-delay-300">
                          {count.team}+
                        </div>
                        <div className=" text-sm md:text-base text-gray-300 font-medium animate-fade-in-delay animate-delay-400 ">
                          Team members
                        </div>
                      </div>

                      <div className="text-center animate-slide-in-up animate-delay-200">
                        <div className="flex items-center justify-center mb-4 animate-scale-in animate-delay-300">
                          <Building className="w-8 h-8 text-[#6ddcf5] mr-3" />
                        </div>
                        <div className=" text-2xl md:text-4xl lg:text-5xl font-bold text-[#6ddcf5] mb-2 animate-slide-in-up animate-delay-400">
                          {count.projects}+
                        </div>
                        <div className=" text-sm md:text-base text-gray-300 font-medium animate-fade-in-delay animate-delay-500">
                          Projects Completed
                        </div>
                      </div>

                      <div className="text-center animate-slide-in-right animate-delay-300">
                        <div className="flex items-center justify-center mb-4 animate-scale-in animate-delay-400">
                          <Users className="w-8 h-8 text-[#6ddcf5] mr-3" />
                        </div>
                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#6ddcf5] mb-2 animate-slide-in-up animate-delay-500">
                          {count.clients}+
                        </div>
                        <div className="text-sm md:text-base text-gray-300 font-medium animate-fade-in-delay animate-delay-600">
                          Satisfied Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white backdrop-blur-sm transition-all duration-300" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white backdrop-blur-sm transition-all duration-300" />

        {/* Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300"
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
