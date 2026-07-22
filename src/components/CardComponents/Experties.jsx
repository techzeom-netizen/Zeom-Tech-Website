import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ExpertiesCard = ({ data }) => {
  const { title, description, icon: Icon, bgColor, textColor, borderColor } = data;
  
  return (
    <div className="group relative overflow-hidden rounded-2xl w-full transition-all duration-500 hover:-translate-y-2 h-[20rem] mb-2">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B4DB8] via-[#0B4DB8]/80 to-[#8EBEFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Card Content */}
      <div className={`relative m-[2px] bg-white rounded-2xl p-6 h-full flex flex-col border ${borderColor} hover:border-transparent transition-all duration-500`}>
        {/* Icon Section */}
        <div className="flex items-center justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl ${bgColor} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`${textColor} text-3xl`} />
          </div>
          <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
            <FaArrowRight className={`${textColor} text-sm`} />
          </div>
        </div>
        
        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 ${textColor} group-hover:text-[#0B4DB8] transition-colors duration-300`}>
          {title}
        </h3>
        
        {/* Divider */}
        <div className={`w-12 h-1 ${textColor} bg-current rounded-full mb-4 group-hover:w-20 transition-all duration-500`}></div>
        
        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-600 flex-grow group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
      
      </div>
    </div>
  );
};

export default ExpertiesCard;