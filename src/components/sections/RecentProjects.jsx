"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowRight, FaStar, FaClock, FaTag } from "react-icons/fa";
import ProjectData from "../../data/projectData";
import RecentProjectCard from "../CardComponents/RecentProject";
const RecentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = ProjectData.length;

  const getItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width >= 1362) return 3;
    if (width >= 860) return 2;
    if (width >= 640) return 2;
    return 1;
  }, []);

  const scrollToIndex = useCallback((index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / getItemsPerView();
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, [getItemsPerView]);

  const handleNext = () => {
    const maxIndex = Math.max(0, totalItems - getItemsPerView());
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
    scrollToIndex(Math.min(activeIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
    scrollToIndex(Math.max(activeIndex - 1, 0));
  };

  // Handle mouse drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  // Handle touch drag
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const handleResize = () => {
      scrollToIndex(activeIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, scrollToIndex]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B4DB8]/10 text-[#0B4DB8] text-sm font-semibold mb-4 border border-[#0B4DB8]/20">
            <FaStar className="text-[#0B4DB8]" />
            <span>Our Recent Work</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Projects <span className="text-[#0B4DB8]">We've Delivered</span>
          </h2>
          <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
            Each project reflects our commitment to innovation, quality, and
            delivering exceptional results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {activeIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white bg-[#0B4DB8] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {activeIndex < totalItems - getItemsPerView() && (
            <button
              onClick={handleNext}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0B4DB8] border border-white text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-3 scroll-smooth scrollbar-hide cursor-grab"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {ProjectData.map((project, index) => (
              <div
                key={index}
                className="min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] flex-shrink-0 transition-all duration-300"
              >
                <RecentProjectCard data={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({
            length: Math.ceil(totalItems / getItemsPerView()),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newIndex = index * getItemsPerView();
                setActiveIndex(newIndex);
                scrollToIndex(newIndex);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(activeIndex / getItemsPerView()) === index
                  ? "w-8 bg-[#0B4DB8]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default RecentProjects;
