"use client";

import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import ProjectData from "../../data/projectData";
import RecentProjectCard from "../CardComponents/RecentProject";

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
      else if (width >= 600) setItemsToShow(2);
      else setItemsToShow(1);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleSlideChange = (event) => {
    setActiveIndex(event.item);
  };

  const maxIndex = Math.max(0, totalItems - itemsToShow);

  const items = ProjectData.map((project, index) => (
    <div key={index} className="p-2">
      <RecentProjectCard data={project} />
    </div>
  ));

  return (
    <section className="recent-projects-section bg-gradient-to-b from-blue-100 to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0B4DB8]/20 bg-[#0B4DB8]/10 px-4 py-2 text-sm font-semibold text-[#0B4DB8]">
            <FaStar className="text-[#0B4DB8]" />
            <span>Our Recent Work</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Projects <span className="text-[#0B4DB8]">We&apos;ve Delivered</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-gray-600">
            Each project reflects our commitment to innovation, quality, and
            delivering exceptional results.
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
              860: { items: 2 },
              1362: { items: 3 },
            }}
            renderPrevButton={() =>
              !isMobile &&
              activeIndex > 0 && (
                <button
                  type="button"
                  aria-label="Previous projects"
                  onClick={() =>
                    setActiveIndex((prev) => Math.max(prev - 1, 0))
                  }
                  className="group absolute -left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#0B4DB8] p-2 shadow-lg shadow-blue-900/20"
                >
                  <AiOutlineLeft className="h-4 w-4 text-white transition-all group-hover:h-6 group-hover:w-6" />
                </button>
              )
            }
            renderNextButton={() =>
              !isMobile &&
              activeIndex < maxIndex && (
                <button
                  type="button"
                  aria-label="Next projects"
                  onClick={() =>
                    setActiveIndex((prev) => Math.min(prev + 1, maxIndex))
                  }
                  className="group absolute -right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#0B4DB8] p-2 shadow-lg shadow-blue-900/20"
                >
                  <AiOutlineRight className="h-4 w-4 text-white transition-all group-hover:h-6 group-hover:w-6" />
                </button>
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
