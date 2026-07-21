"use client";

import React, { useState } from "react";
import { 
  FaArrowRight, 
  FaCalendarAlt, 
  FaTag, 
  FaExternalLinkAlt,
  FaHospital,
  FaSchool,
  FaUtensils,
  FaHome,
  FaDumbbell,
  FaBullhorn,
} from "react-icons/fa";

const RecentProjectCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { image, title, description, category, year, type, client } = data;

  const shortTextLimit = 120;
  const isLongText = description.length > shortTextLimit;

  const toggleDescription = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // Category icon mapping
  const getCategoryIcon = (cat) => {
    const icons = {
      Healthcare: <FaHospital />,
      Education: <FaSchool />,
      Restaurant: <FaUtensils />,
      "Real Estate": <FaHome />,
      Fitness: <FaDumbbell />,
      Advertising: <FaBullhorn />,
    };
    return icons[cat] || <FaTag />;
  };

  // Category color mapping
  const getCategoryColor = (cat) => {
    const colors = {
      Healthcare: "text-blue-600 bg-blue-50 border-blue-200",
      Education: "text-purple-600 bg-purple-50 border-purple-200",
      Restaurant: "text-orange-600 bg-orange-50 border-orange-200",
      "Real Estate": "text-green-600 bg-green-50 border-green-200",
      Fitness: "text-red-600 bg-red-50 border-red-200",
      Advertising: "text-pink-600 bg-pink-50 border-pink-200",
    };
    return colors[cat] || "text-gray-600 bg-gray-50 border-gray-200";
  };

  return (
    <div
      className="group relative bg-white  border border-[#0B4DB8] max-w-md rounded-2xl overflow-hidden hover:shadow-md transition-all duration-500 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-56  overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#0B4DB8] shadow-md">
          {type}
        </div>

        {/* Category Badge */}
        <div className={`absolute top-4 right-4 flex items-center gap-2 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-md ${getCategoryColor(category)}`}>
          {getCategoryIcon(category)}
          {category}
        </div>

        {/* Year Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-md">
          <FaCalendarAlt size={10} />
          {year}
        </div>

        {/* View Button on Hover */}
        <div
          className={`absolute inset-0 baflex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Client Name */}
        <div className="text-xs text-[#0B4DB8] font-semibold mb-1">
          {client}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0B4DB8] transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {isExpanded || !isLongText
            ? description
            : `${description.slice(0, shortTextLimit)}...`}
          {isLongText && (
            <button
              onClick={toggleDescription}
              className="text-[#0B4DB8] font-medium hover:underline ml-1"
            >
              {isExpanded ? " Show less" : " Read more"}
            </button>
          )}
        </p>

      </div>
    </div>
  );
};


export default RecentProjectCard;
