"use client";

import React, { useState, useEffect } from 'react';
import { FaPhone, FaTimes, FaHandPaper } from 'react-icons/fa';

const HelpWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateInitialPosition = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const widgetWidth = 290;
      const widgetHeight = 250;

      setPosition({
        x: screenWidth - widgetWidth - 20,
        y: screenHeight - widgetHeight - 20,
      });
    };

    updateInitialPosition();
    window.addEventListener('resize', updateInitialPosition);
    return () => {
      window.removeEventListener('resize', updateInitialPosition);
    };
  }, []);

  const handleCall = () => {
    const phoneNumber = '+918271927132';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className='fixed md:bottom-5 bottom-4 right-4 md:right-5 flex items-center bg-[#0B4DB8] text-white w-12 hover:w-44 h-12 p-3 rounded-xl transition-all duration-300 border border-[#8EBEFF] shadow-lg shadow-blue-900/20 overflow-hidden group'
        >
          <div className='flex items-center justify-center w-12 h-12'>
            <FaPhone className='w-5 h-5 md:w-6 md:h-6 transform rotate-90' />
          </div>
          <span className='font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap'>
            CALL NOW
          </span>
        </button>
      )}

      {isVisible && (
        <div
          className='fixed z-50'
          style={{ left: position.x, top: position.y }}
        >
          <div className='relative w-72 p-1 xl:p-5 rounded-2xl bg-white border border-blue-100 shadow-lg shadow-blue-900/10'>
            <button
              onClick={() => setIsVisible(false)}
              className='absolute top-4 right-4 flex items-center justify-center rounded-full transition bg-[#063B8F] p-1 hover:bg-[#0B4DB8]'
            >
              <FaTimes className='h-5 w-5 text-white' />
            </button>

            <div className='flex flex-col items-center text-center space-y-4 p-4'>
              <h2 className='text-2xl font-bold flex items-center gap-2 text-[#031735] drop-shadow-md'>
                <FaHandPaper className="text-[#2F80ED]" />
                Hii there!
              </h2>
              <p className='text-slate-700 text-lg drop-shadow-2xl font-medium'>
                Do you need any help?
              </p>

              <button
                onClick={handleCall}
                className='flex items-center justify-center gap-2 bg-[#0B4DB8] text-white text-md font-bold px-4 py-3 rounded-xl shadow-lg hover:bg-[#063B8F] transition w-52'
              >
                <FaPhone className='w-5 h-5 text-white transform rotate-90' />
                +91 - 8271927132
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpWidget;
