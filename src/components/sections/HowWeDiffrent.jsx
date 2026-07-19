"use client";

import React, { useEffect } from "react";
import { FaThumbsUp, FaUsers, FaRegSmile } from "react-icons/fa";

const HowWeDiffrent = () => {
  const features = [
    {
      title: "Awesome Support",
      icon: <FaThumbsUp className="text-white text-2xl" />,
      description:
        "If you're facing any issues with your website, feel free to reach out to our expert team. We're here to help you promptly.",
    },
    {
      title: "Experience",
      icon: <FaUsers className="text-white text-2xl" />,
      description:
        "We are a team of developers, designers, and analysts dedicated to delivering sensible, innovative, and easy-to-use web and software solutions.",
    },
    {
      title: "Customer Retention",
      icon: <FaRegSmile className="text-white text-2xl" />,
      description:
        "We delight our clients with our services. Strong client relationships are our most valuable assets, driving successful customer retention over the years.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#031735] text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How are we different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`p-[1.5px] rounded-xl ${
                index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:w-2/3 lg:col-span-1 lg:w-auto"
                  : ""
              }`}
            >
              <div className="bg-white text-slate-800 rounded-xl p-6 shadow-lg transition duration-300 hover:scale-105 h-full flex flex-col items-center text-center lg:items-center lg:text-center border border-blue-100">
                <div className="bg-[#0B4DB8] w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#8EBEFF] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDiffrent;
