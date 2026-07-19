import React from 'react';
import PropTypes from 'prop-types';

function HamburgerMenu({ isOpen, onClick, className }) {
  return (
    <div
      className={`w-8 h-8 flex flex-col justify-center items-center cursor-pointer relative ${className}`}
      onClick={onClick}
    >
      <div className='w-9 h-9 bg-buttonRed rounded-lg flex flex-col justify-center items-center'>
        {/* Top Line */}
        <span
          className={`absolute h-0.5 bg-white rounded transition-all duration-200 ${
            isOpen ? 'rotate-45 w-6' : '-translate-y-2 w-6'
          }`}
        ></span>

        {/* Middle Line */}
        <span
          className={`absolute h-0.5 w-4 -mr-1 bg-white rounded transition-all duration-50 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`absolute h-0.5  bg-white rounded transition-all duration-200 ${
            isOpen ? '-rotate-45 w-6' : 'translate-y-2 w-6'
          }`}
        ></span>
      </div>
    </div>
  );
}

// Props validation
HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default HamburgerMenu;
