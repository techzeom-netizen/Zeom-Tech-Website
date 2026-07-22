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
      <div className="w-full overflow-hidden bg-white lg:-mt-20">
        <div className="grid w-full lg:grid-cols-2">
          {/* Left Column - Dark */}
          <section className="flex items-center justify-center bg-[#063889] px-4 py-10 sm:px-8 sm:py-12  lg:px-8 lg:py-20">
            <div className="w-full max-w-[620px]">
              {/* Content */}
              <div className="space-y-5 sm:space-y-6">
                <span className="inline-block text-[#8EBEFF] text-sm font-medium tracking-[0.2em] uppercase">
                  Digital Agency
                </span>
                
                <h1 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  We Build
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8EBEFF] to-white">
                    Digital Excellence
                  </span>
                </h1>
                
                <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base lg:text-white/60">
                  From concept to deployment, we create innovative digital solutions 
                  that drive real business growth and measurable results.
                </p>

                <button
                  onClick={goToContact}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-[#031735] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 sm:w-auto sm:px-8"
                >
                  <span>Start a Project</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>


            </div>
          </section>

          {/* Right Column - Light with Project Cards */}
          <section className="lg:-mb-16 mt-4 relative flex items-center justify-center bg-white px-4 py-6 sm:px-8 sm:py-8 lg:min-h-screen lg:px-8 lg:py-20">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(#0B4DB8_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            <div className="relative flex h-full min-h-0 w-full max-w-[720px] flex-col pb-2 lg:min-h-[700px] lg:pb-0">
              {/* Section Title */}
              <div className="mb-4 flex flex-shrink-0 items-center justify-between">
                <div>
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B4DB8]">
                    <FaRocket className="text-[#0B4DB8]" />
                    Recent Deliveries
                  </span>
                  <h3 className="text-base font-bold text-gray-800 sm:text-lg">Our Latest Projects</h3>
                </div>
            
              </div>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 gap-3 overflow-visible pr-0 sm:grid-cols-2 lg:flex-1 lg:overflow-y-auto lg:pr-1 custom-scroll">
                {projects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={project.id}
                      className={`bg-gradient-to-br ${project.color} border ${project.border} group relative flex min-h-[150px] cursor-pointer flex-col rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:h-full lg:min-h-0`}
                    >
                      {/* Badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`${project.badgeColor} rounded-full px-2 py-0.5 text-[8px] font-bold text-white`}>
                          {project.badge}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mb-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/60 text-[#0B4DB8]">
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

            </div>
          </section>
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
      </div>
      
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
