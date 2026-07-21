"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  FaUtensils,
  FaSchool,
  FaCalendarCheck,
  FaUserMd,
  FaBook,
  FaMobileAlt,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";
import TechWeLove from "./TechWeLove";
import Experties from "./Experties";
import RecentProjects from "./RecentProjects";
import IndustryCarousel from "./IndustrialCrausel";
import HowWeWork from "./HowWeWork";
import HowWeDiffrent from "./HowWeDiffrent";

const Hero = () => {
  const router = useRouter();

  function goToContact() {
    router.push("/contact");
  }

  // Project Data with proper icons
  const projects = [
    {
      id: 1,
      title: "Restaurant Landing Page",
      description: "Social media ad campaign & landing page",
      icon: FaUtensils,
      color: "from-orange-50 to-orange-100/50",
      border: "border-orange-200",
      badge: "Live",
      badgeColor: "bg-green-500",
      category: "Web Development"
    },
    {
      id: 2,
      title: "School Portfolio Website",
      description: "Complete school profile & showcase",
      icon: FaSchool,
      color: "from-blue-50 to-blue-100/50",
      border: "border-blue-200",
      badge: "Recent",
      badgeColor: "bg-blue-500",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Restaurant Table Booking",
      description: "Online reservation system",
      icon: FaCalendarCheck,
      color: "from-purple-50 to-purple-100/50",
      border: "border-purple-200",
      badge: "New",
      badgeColor: "bg-purple-500",
      category: "Web App"
    },
    {
      id: 4,
      title: "Doctor Appointment System",
      description: "Patient checkup scheduling platform",
      icon: FaUserMd,
      color: "from-emerald-50 to-emerald-100/50",
      border: "border-emerald-200",
      badge: "Live",
      badgeColor: "bg-green-500",
      category: "Web App"
    },
    {
      id: 5,
      title: "School Management System",
      description: "Complete school administration platform",
      icon: FaBook,
      color: "from-rose-50 to-rose-100/50",
      border: "border-rose-200",
      badge: "In Progress",
      badgeColor: "bg-amber-500",
      category: "Web Platform"
    },
    {
      id: 6,
      title: "Restaurant Menu & Ordering",
      description: "Digital menu & online ordering system",
      icon: FaMobileAlt,
      color: "from-cyan-50 to-cyan-100/50",
      border: "border-cyan-200",
      badge: "1 Issue",
      badgeColor: "bg-red-500",
      category: "Mobile App"
    },
  ];

  return (
    <>
      {/* Hero Section - Horizontal Split with Real Projects */}
      <main className="relative bg-white overflow-hidden -m-20">
        {/* Left Side - Dark Panel */}
        <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full lg:h-[772px] bg-[#063889]"></div>
        
        {/* Right Side - Light Panel with Pattern */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-white">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(#0B4DB8_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 w-full py-12 lg:py-20">
            
            {/* Left Column - Dark */}
            <div className="flex flex-col justify-center h-full ">
              {/* Content */}
              <div className="space-y-6">
                <span className="inline-block text-[#8EBEFF] text-sm font-medium tracking-[0.2em] uppercase">
                  Digital Agency
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
                  We Build
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8EBEFF] to-white">
                    Digital Excellence
                  </span>
                </h1>
                
                <p className="text-white/60 text-base max-w-md leading-relaxed">
                  From concept to deployment, we create innovative digital solutions 
                  that drive real business growth and measurable results.
                </p>

                <button
                  onClick={goToContact}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white text-[#031735] font-semibold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
                >
                  <span>Start a Project</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>


            </div>

            {/* Right Column - Light with Project Cards */}
            <div className="flex flex-col h-full min-h-[600px] lg:min-h-[700px]">
              {/* Section Title */}
              <div className="flex items-center justify-between mb-4 flex-shrink-0">
                <div>
                  <span className="text-xs font-semibold text-[#0B4DB8] uppercase tracking-wider flex items-center gap-2">
                    <FaRocket className="text-[#0B4DB8]" />
                    Recent Deliveries
                  </span>
                  <h3 className="text-lg font-bold text-gray-800">Our Latest Projects</h3>
                </div>
            
              </div>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto pr-1 custom-scroll">
                {projects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={project.id}
                      className={`bg-gradient-to-br ${project.color} border ${project.border} rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative flex flex-col h-full`}
                    >
                      {/* Badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`${project.badgeColor} text-white text-[8px] font-bold px-2 py-0.5 rounded-full`}>
                          {project.badge}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg bg-white/60 flex items-center justify-center text-[#0B4DB8] mb-2 flex-shrink-0`}>
                        <Icon className="text-xl" />
                      </div>
                      
                      {/* Title */}
                      <h4 className="font-semibold text-gray-800 text-sm leading-tight">
                        {project.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Category */}
                      <div className="mt-2 flex-shrink-0">
                        <span className="text-[8px] text-[#0B4DB8] font-medium bg-[#0B4DB8]/10 px-2 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaArrowRight className="text-[#0B4DB8] text-sm" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom indicator */}
              <div className="mt-3 pt-2 -ml-4 border-t-2 border-[#063889] flex items-center justify-between flex-shrink-0">
               
              </div>
            </div>
          </div>
        </div>

        {/* Custom Scrollbar Styles */}
        <style jsx>{`
          .custom-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: #0B4DB8;
            border-radius: 10px;
          }
          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: #063B8F;
          }
        `}</style>
      </main>
      
      {/* Sections */}
      <div className="space-y-0">
        <section id="expertise">
          <Experties />
        </section>
        <section id="industries">
          <IndustryCarousel />
        </section>
        <section id="process">
          <HowWeWork />
        </section>
        <section id="different">
          <HowWeDiffrent />
        </section>
        <section id="technology">
          <TechWeLove />
        </section>
        <section id="projects">
          <RecentProjects />
        </section>
      </div>
    </>
  );
};

export default Hero;
