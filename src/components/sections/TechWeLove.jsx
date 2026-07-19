"use client";

import React, { useState, useEffect, useMemo } from "react";

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
  { id: 2, name: "React", logo: techLogos.react, categories: ["Web", "Frontend"], docUrl: "https://react.dev/" },
  { id: 4, name: "TypeScript", logo: techLogos.typescript, categories: ["Web", "Frontend"], docUrl: "https://www.typescriptlang.org/docs/" },
  { id: 5, name: "Next.js", logo: techLogos.nextjs, categories: ["Web", "Frontend"], docUrl: "https://nextjs.org/docs" },
  { id: 9, name: "Firebase", logo: techLogos.firebase, categories: ["Backend", "Database", "DevOps & Cloud"], docUrl: "https://firebase.google.com/docs" },
  { id: 10, name: "Redis", logo: techLogos.redis, categories: ["Database"], docUrl: "https://redis.io/docs/" },
  { id: 12, name: "Java", logo: techLogos.java, categories: ["Backend", "Mobile"], docUrl: "https://docs.oracle.com/en/java/" },
  { id: 13, name: "Python", logo: techLogos.python, categories: ["Backend"], docUrl: "https://docs.python.org/3/" },
  { id: 15, name: "MongoDB", logo: techLogos.mongodb, categories: ["Database"], docUrl: "https://www.mongodb.com/docs/" },
  { id: 16, name: "PostgreSQL", logo: techLogos.postgres, categories: ["Database"], docUrl: "https://www.postgresql.org/docs/" },
  { id: 17, name: "AWS", logo: techLogos.aws, categories: ["DevOps & Cloud"], docUrl: "https://docs.aws.amazon.com/" },
  { id: 18, name: "Azure", logo: techLogos.azure, categories: ["DevOps & Cloud"], docUrl: "https://learn.microsoft.com/en-us/azure/" },
  { id: 19, name: "Docker", logo: techLogos.docker, categories: ["DevOps & Cloud"], docUrl: "https://docs.docker.com/" },
  { id: 20, name: "Kubernetes", logo: techLogos.kubernetes, categories: ["DevOps & Cloud"], docUrl: "https://kubernetes.io/docs/" },
];

const categories = ["Top", "Web", "Mobile", "Backend", "Database", "DevOps & Cloud"];

function TechWeLove() {
  const [activeCategory, setActiveCategory] = useState("Top");

  const filteredTech = useMemo(() => {
    const category = activeCategory;

    if (category === "Top") {
      return techData;
    }

    return techData.filter((tech) => tech.categories.includes(category));
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 lg:py-28 px-4 brand-section">
      <div className="containerMax mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold brand-heading font-gilroy">Tech We Love</h2>
          <p className="text-gray-600 text-lg mt-2">Discovering and Celebrating the Best in Technology.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 transform shadow-md ${
                activeCategory === category
                  ? "bg-[#0B4DB8] text-white border-[#063B8F] shadow-lg scale-105"
                  : "bg-white text-[#031735] border-blue-100 hover:bg-[#EAF3FF] hover:border-[#0B4DB8] hover:shadow-md hover:-translate-y-0.5 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-white/90 border border-blue-100 rounded-2xl p-8 shadow-lg shadow-blue-900/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {filteredTech.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-center p-4 bg-white border border-blue-100 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-2 hover:scale-105 transform transition-all duration-300"
              >
                <a href={tech.docUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-20 w-20 object-contain"
                    title={tech.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder-logo.png";
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechWeLove;
