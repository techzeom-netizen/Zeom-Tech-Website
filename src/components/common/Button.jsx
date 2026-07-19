import React from 'react';

const Button = ({ text, variant = 'primary', onClick }) => {
  const getButtonClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-black text-white hover:bg-gray-900 border-black border hover:border-white';
      case 'outlined':
        return 'bg-white border border-gray-300 text-black hover:bg-gray-50 border-white hover:border-black';
      default:
        return 'bg-black text-white hover:bg-gray-800 border-black hover:border-white';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonClasses()} px-4 md:px-6 py-2 rounded-md font-medium transition duration-300  `}
    >
      {text}
    </button>
  );
};

export default Button;