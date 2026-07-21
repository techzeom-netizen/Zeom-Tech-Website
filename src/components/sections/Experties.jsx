"use client";

import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ExpertiesData from "../../data/expertiesData";
import ExpertiesCard from "../CardComponents/Experties";
import { FaRocket } from "react-icons/fa";

const Experties = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const totalItems = ExpertiesData.length;

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Consider mobile view below 768px
      if (width >= 1362) setItemsToShow(4);
      else if (width >= 860) setItemsToShow(3);
      else if (width >= 768) setItemsToShow(2);
      else if (width >= 600) setItemsToShow(2);
      else setItemsToShow(1);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle slide change for both button clicks and manual swiping
  const handleSlideChange = (e) => {
    // Always update activeIndex regardless of device
    setActiveIndex(e.item);
  };

  const items = ExpertiesData.map((item, index) => (
    <div key={index} className="p-2">
      <ExpertiesCard data={item} />
    </div>
  ));

  return (
    <div className="px-3 md:px-6 md:mt-24">
      <div className="containerMax">
    <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B4DB8]/10 text-[#0B4DB8] text-sm font-semibold mb-4 border border-[#0B4DB8]/20">
            <FaRocket className="text-[#0B4DB8]" />
            <span>What We Do Best</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our <span className="text-[#0B4DB8]">Expertise</span>
          </h2>
          <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
            Leveraging our diverse skills and experience to deliver exceptional
            solutions across industries.
          </p>
        </div>

        <div className="relative mt-8">
          <AliceCarousel
            items={items}
            activeIndex={activeIndex}
            onSlideChanged={handleSlideChange}
            disableDotsControls={!isMobile}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              768: { items: 2 },
              860: { items: 3 },
              1362: { items: 4 },
            }}
            renderPrevButton={() =>
              !isMobile &&
              activeIndex > 0 && (
                <button
                  onClick={() =>
                    setActiveIndex((prev) => Math.max(prev - 1, 0))
                  }
                  className="group absolute -left-0 top-1/2 transform -translate-y-1/2 bg-[#0B4DB8] p-2 rounded-full shadow-lg shadow-blue-900/20"
                >
                  <AiOutlineLeft className="h-4 w-4 text-white group-hover:h-6 group-hover:w-6 transition-all" />
                </button>
              )
            }
            renderNextButton={() =>
              !isMobile &&
              activeIndex < totalItems - itemsToShow && (
                <button
                  onClick={() =>
                    setActiveIndex((prev) =>
                      Math.min(prev + 1, totalItems - itemsToShow),
                    )
                  }
                  className="group absolute -right-0 top-1/2 transform -translate-y-1/2 bg-[#0B4DB8] p-2 rounded-full shadow-lg shadow-blue-900/20"
                >
                  <AiOutlineRight className="h-4 w-4 text-white group-hover:h-6 group-hover:w-6 transition-all" />
                </button>
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Experties;
