import React from 'react';

const ExpertiesCard = ({ data }) => {
  const { title, description, icon } = data;
  
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 scale-95 hover:-xl hover:-translate-y-1 h-[18rem]">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl h-[19rem]"></div>
      
      {/* Card content with inner padding for gradient border effect */}
      <div className="relative m-[2px] bg-gray-100 rounded-2xl p-6 md:p-8 h-full flex flex-col border border-gray-200">
        {/* Icon section (if provided) */}
        {icon && (
          <div className="mb-4 text-blue-500 group-hover:text-purple-500 transition-colors duration-300">
            {icon}
          </div>
        )}
        
        {/* Title with animated gradient on hover */}
        <h3 className="text-xl whitespace-nowrap font-bold mb-4 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
          {title}
        </h3>
        
        {/* Divider line with gradient */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-5 group-hover:w-24 transition-all duration-300"></div>
        
        {/* Description text */}
        <p className="text-base leading-relaxed text-black flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExpertiesCard;
