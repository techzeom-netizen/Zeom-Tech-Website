"use client";

import React, { useState } from "react";
import { DiVim } from "react-icons/di";

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
        <div className="relative p-[0.5px] rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 pb-0.5">
          {/* Inner Card */}
          <div className="bg-black rounded-xl p-6  pt-56 md:pt-60 lg:pt-60 text-white min-h-[380px] text-center">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-300">
              {isExpanded || !isLongText
                ? description
                : `${description.slice(0, shortTextLimit)}...`}
              {isLongText && (
                <span
                  onClick={toggleDescription}
                  className="text-red-500 cursor-pointer ml-1 hover:underline"
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
            className="rounded-xl border border-gray-300 shadow-lg w-96 h-52 lg:h-60 "
          />
        </div>
      </div>
    </div>
  );
};

export default RecentProjectCard;
