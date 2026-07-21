"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  FaStar,
  FaCode,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaGlobe,
  FaServer,
  FaArrowRight,
  FaCheckCircle,
  FaSearch,
  FaHeart,
  FaRocket,
  FaTh,
  FaBars,
  FaFire,
  FaShieldAlt,
  FaCrown,
} from "react-icons/fa";

const techLogos = {
  react: "/assets/images/reactJS.png",
  typescript: "/assets/images/TS.png",
  nextjs: "/assets/images/next.png",
  firebase: "/assets/images/firebase.png",
  redis: "/assets/images/Redis.png",
  java: "/assets/images/java.png",
  python: "/assets/images/PY.jpeg",
  mongodb: "/assets/images/mongDB.png",
  postgres: "/assets/images/PS.png",
  aws: "/assets/images/aws.jpg",
  azure: "/assets/images/azure1.jpg",
  docker: "/assets/images/docker.png",
  kubernetes: "/assets/images/Kubernetes.png",
};

const techData = [
  {
    id: 2,
    name: "React",
    logo: techLogos.react,
    categories: ["Web", "Frontend"],
    docUrl: "https://react.dev/",
    popularity: 95,
  },
  {
    id: 4,
    name: "TypeScript",
    logo: techLogos.typescript,
    categories: ["Web", "Frontend"],
    docUrl: "https://www.typescriptlang.org/docs/",
    popularity: 90,
  },
  {
    id: 5,
    name: "Next.js",
    logo: techLogos.nextjs,
    categories: ["Web", "Frontend"],
    docUrl: "https://nextjs.org/docs",
    popularity: 92,
  },
  {
    id: 9,
    name: "Firebase",
    logo: techLogos.firebase,
    categories: ["Backend", "Database", "DevOps & Cloud"],
    docUrl: "https://firebase.google.com/docs",
    popularity: 85,
  },
  {
    id: 10,
    name: "Redis",
    logo: techLogos.redis,
    categories: ["Database"],
    docUrl: "https://redis.io/docs/",
    popularity: 78,
  },
  {
    id: 12,
    name: "Java",
    logo: techLogos.java,
    categories: ["Backend", "Mobile"],
    docUrl: "https://docs.oracle.com/en/java/",
    popularity: 82,
  },
  {
    id: 13,
    name: "Python",
    logo: techLogos.python,
    categories: ["Backend"],
    docUrl: "https://docs.python.org/3/",
    popularity: 88,
  },
  {
    id: 15,
    name: "MongoDB",
    logo: techLogos.mongodb,
    categories: ["Database"],
    docUrl: "https://www.mongodb.com/docs/",
    popularity: 80,
  },
  {
    id: 16,
    name: "PostgreSQL",
    logo: techLogos.postgres,
    categories: ["Database"],
    docUrl: "https://www.postgresql.org/docs/",
    popularity: 76,
  },
  {
    id: 17,
    name: "AWS",
    logo: techLogos.aws,
    categories: ["DevOps & Cloud"],
    docUrl: "https://docs.aws.amazon.com/",
    popularity: 94,
  },
  {
    id: 18,
    name: "Azure",
    logo: techLogos.azure,
    categories: ["DevOps & Cloud"],
    docUrl: "https://learn.microsoft.com/en-us/azure/",
    popularity: 88,
  },
  {
    id: 19,
    name: "Docker",
    logo: techLogos.docker,
    categories: ["DevOps & Cloud"],
    docUrl: "https://docs.docker.com/",
    popularity: 86,
  },
  {
    id: 20,
    name: "Kubernetes",
    logo: techLogos.kubernetes,
    categories: ["DevOps & Cloud"],
    docUrl: "https://kubernetes.io/docs/",
    popularity: 84,
  },
];

const categories = [
  { name: "All", icon: <FaStar /> },
  { name: "Web", icon: <FaGlobe /> },
  { name: "Mobile", icon: <FaMobile /> },
  { name: "Backend", icon: <FaServer /> },
  { name: "Database", icon: <FaDatabase /> },
  { name: "DevOps & Cloud", icon: <FaCloud /> },
];

function TechWeLove() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredTech = useMemo(() => {
    let filtered = techData;

    if (activeCategory !== "All") {
      filtered = filtered.filter((tech) =>
        tech.categories.includes(activeCategory),
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((tech) =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 lg:py-28 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - Same as original but with different text */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B4DB8]/10 text-[#0B4DB8] text-sm font-semibold mb-4 border border-[#0B4DB8]/20">
            <FaCode className="text-[#0B4DB8]" />
            <span>Our Tech Stack</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 font-gilroy">
            Built With <span className="text-[#0B4DB8]">The Best</span>
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Modern, scalable, and battle-tested technologies.
          </p>
        </div>

        {/* Category Filters - Same size as original */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-4 md:px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 shadow-md ${
                activeCategory === category.name
                  ? "bg-[#0B4DB8] text-white border-[#0B4DB8] shadow-lg shadow-[#0B4DB8]/30 scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0B4DB8] hover:bg-[#0B4DB8]/5 hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <span
                className={
                  activeCategory === category.name
                    ? "text-white"
                    : "text-[#0B4DB8]"
                }
              >
                {category.icon}
              </span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Bar - Same size as original */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#0B4DB8] focus:ring-2 focus:ring-[#0B4DB8]/20 w-full sm:w-64 transition-all"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex gap-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-full transition-all ${
                viewMode === "grid"
                  ? "bg-[#0B4DB8] text-white shadow-md"
                  : "text-gray-500 hover:bg-white/50"
              }`}
            >
              <FaTh size={14} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-full transition-all ${
                viewMode === "list"
                  ? "bg-[#0B4DB8] text-white shadow-md"
                  : "text-gray-500 hover:bg-white/50"
              }`}
            >
              <FaBars size={14} />
            </button>
          </div>
        </div>

        {/* Tech Grid - Same size as original */}
        <div className="bg-white/90 border border-blue-100 rounded-2xl p-8 shadow-lg shadow-blue-900/10">
          <div
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
                : "space-y-4"
            }`}
          >
            {filteredTech.map((tech) => (
              <div
                key={tech.id}
                className={`group relative bg-white border rounded-xl shadow-md transition-all duration-300 ${
                  viewMode === "grid"
                    ? "flex flex-col items-center p-4 border-gray-200 hover:border-[#0B4DB8] hover:shadow-xl hover:shadow-[#0B4DB8]/10 hover:-translate-y-2"
                    : "flex items-center gap-6 p-4 border-gray-200 hover:border-[#0B4DB8] hover:shadow-lg hover:shadow-[#0B4DB8]/10"
                }`}
              >
                <a
                  href={tech.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex ${
                    viewMode === "grid"
                      ? "flex-col items-center w-full"
                      : "items-center gap-6 w-full"
                  }`}
                >
                  {/* Logo - Same size */}
                  <div
                    className={`flex items-center justify-center ${
                      viewMode === "grid"
                        ? "h-20 w-20"
                        : "h-20 w-20 flex-shrink-0"
                    }`}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder-logo.png";
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div
                    className={`${
                      viewMode === "list"
                        ? "flex-1 flex items-center justify-between"
                        : "text-center mt-2"
                    }`}
                  >
                    <div>
                      <span
                        className={`font-semibold text-gray-800 group-hover:text-[#0B4DB8] transition-colors ${
                          viewMode === "grid" ? "text-sm" : "text-base"
                        }`}
                      >
                        {tech.name}
                      </span>
                    </div>

                    {viewMode === "list" && (
                      <div className="flex items-center gap-2 text-[#0B4DB8] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Docs</span>
                        <FaArrowRight size={14} />
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTech.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No technologies found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechWeLove;
