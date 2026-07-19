import React from 'react';

const ExpertiesCard = ({ data }) => {
  const { title, description, icon } = data;
  
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 scale-95 hover:shadow-xl hover:-translate-y-1 h-[18rem]">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063B8F] via-[#0B4DB8] to-[#8EBEFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl h-[19rem]"></div>
      
      {/* Card content with inner padding for gradient border effect */}
      <div className="relative m-[2px] bg-white rounded-2xl p-6 md:p-8 h-full flex flex-col border border-blue-100">
        {/* Icon section (if provided) */}
        {icon && (
          <div className="mb-4 text-[#0B4DB8] group-hover:text-[#063B8F] transition-colors duration-300">
            {icon}
          </div>
        )}
        
        {/* Title with animated gradient on hover */}
        <h3 className="text-xl whitespace-nowrap font-bold mb-4 text-[#031735] bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#063B8F] group-hover:to-[#2F80ED] transition-all duration-300">
          {title}
        </h3>
        
        {/* Divider line with gradient */}
        <div className="w-16 h-1 bg-gradient-to-r from-[#063B8F] to-[#2F80ED] rounded mb-5 group-hover:w-24 transition-all duration-300"></div>
        
        {/* Description text */}
        <p className="text-base leading-relaxed text-slate-700 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExpertiesCard;
