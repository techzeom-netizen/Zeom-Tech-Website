import React from 'react';

const Button = ({ text, variant = 'primary', onClick }) => {
  const getButtonClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#0B4DB8] text-white border border-[#0B4DB8] shadow-lg shadow-blue-900/20 hover:bg-[#063B8F] hover:border-[#063B8F] hover:-translate-y-0.5';
      case 'outlined':
        return 'bg-white/95 border border-[#8EBEFF] text-[#063B8F] hover:bg-[#EAF3FF] hover:border-[#0B4DB8] hover:-translate-y-0.5';
      default:
        return 'bg-[#0B4DB8] text-white border border-[#0B4DB8] hover:bg-[#063B8F]';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonClasses()} px-4 md:px-6 py-2 rounded-md font-semibold transition duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
