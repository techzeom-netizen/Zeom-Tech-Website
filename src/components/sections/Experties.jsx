"use client";

import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ExpertiesData from "../../data/expertiesData";
import ExpertiesCard from "../CardComponents/Experties";

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
    <div key={index} className="px-2">
      <ExpertiesCard data={item} />
    </div>
  ));

  return (
    <div className="px-3 md:px-6 md:mt-24">
      <div className="containerMax">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold text-[#0B2C78]">Our Expertise</h2>
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
                  className="group absolute -left-0 top-1/2 transform -translate-y-1/2 bg-blue-400 p-2 rounded-full"
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
                  className="group absolute -right-0 top-1/2 transform -translate-y-1/2 bg-blue-400 p-2 rounded-full"
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
