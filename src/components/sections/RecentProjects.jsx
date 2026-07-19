"use client";

import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import RecentProjectCard from "../CardComponents/RecentProject";
import ProjectData from "../../data/projectData";

const RecentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const totalItems = ProjectData.length;

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width >= 1362) setItemsToShow(3);
      else if (width >= 860) setItemsToShow(2);
      else if (width >= 768) setItemsToShow(2);
      else if (width >= 600) setItemsToShow(2);
      else setItemsToShow(1);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Handle slide change for both button clicks and manual swiping
  const handleSlideChange = (e) => {
    // Always update activeIndex regardless of device
    setActiveIndex(e.item);
  };

  const items = ProjectData.map((item, index) => (
    <div
      key={index}
      className="px-2 transition-transform duration-500 hover:scale-[1.03]"
    >
      <RecentProjectCard data={item} />
    </div>
  ));

  return (
    <div className="px-3 md:px-6 md:mt-0 brand-section py-6 md:py-16">
      <div className="containerMax">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold brand-heading">
            Our Promises to Patients
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Delivering trusted medicines with a commitment to quality,
            innovation, affordability, and compassionate patient care.{" "}
          </p>
        </div>

        <div className="relative mt-10">
          <AliceCarousel
            items={items}
            activeIndex={activeIndex}
            onSlideChanged={handleSlideChange}
            disableDotsControls={!isMobile}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              768: { items: 2 },
              860: { items: 2 },
              1362: { items: 3 },
            }}
            renderPrevButton={() =>
              !isMobile &&
              activeIndex > 0 && (
                <button
                  onClick={() =>
                    setActiveIndex((prev) => Math.max(prev - 1, 0))
                  }
                  className="group absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#0B4DB8] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <AiOutlineLeft className="h-5 w-5 text-white group-hover:scale-125 transition-transform" />
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
                  className="group absolute -right-4 top-1/2 transform -translate-y-1/2 bg-[#0B4DB8] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <AiOutlineRight className="h-5 w-5 text-white group-hover:scale-125 transition-transform" />
                </button>
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
