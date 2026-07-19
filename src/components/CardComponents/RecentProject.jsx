"use client";

import React, { useState } from "react";

const RecentProjectCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { image, title, description } = data;

  const shortTextLimit = 100;
  const isLongText = description.length > shortTextLimit;

  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <div className="mt-12 md:mt-16 lg:mt-20 mb-8">
      <div className="relative w-full max-w-md mx-auto py-">
        {/* Gradient Border */}
        <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#063B8F] via-[#0B4DB8] to-[#8EBEFF] pb-0.5">
          {/* Inner Card */}
          <div className="bg-[#031735] rounded-xl p-6 pt-56 md:pt-60 lg:pt-60 text-white min-h-[380px] text-center">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-blue-50">
              {isExpanded || !isLongText
                ? description
                : `${description.slice(0, shortTextLimit)}...`}
              {isLongText && (
                <span
                  onClick={toggleDescription}
                  className="text-[#8EBEFF] cursor-pointer ml-1 hover:underline"
                >
                  {isExpanded ? "show less" : "read more"}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Image positioned above the card */}
        <div className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[85%]  ">
          <img
            src={image}
            alt={title}
            className="rounded-xl border border-blue-100 shadow-lg w-96 h-52 lg:h-60 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentProjectCard;
