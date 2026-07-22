"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaGlobe } from "react-icons/fa";

const industries = [
  { title: "Education", image: "/assets/images/education.webp" },
  { title: "Entertainment", image: "/assets/images/Entertainment.jpg" },
  { title: "e-Commerce", image: "/assets/images/e-commerce.png" },
  { title: "Banking", image: "/assets/images/Banking.jpeg" },
  { title: "Real-Estate", image: "/assets/images/RealState.jpg" },
  {
    title: "Travel and Hospitality",
    image: "/assets/images/travel-and-hospitality.avif",
  },
  { title: " Food and Beverage", image: "/assets/images/Food.png" },
];

export default function IndustryCarousel() {
  return (
    <div className="bg-white text-[#031735] py-12">
      <div className="containerMax px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B4DB8]/10 text-[#0B4DB8] text-sm font-semibold mb-4 border border-[#0B4DB8]/20">
            <FaGlobe className="text-[#0B4DB8]" />
            <span>Driving Innovation</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            <span className="text-[#0B4DB8]">Industries</span> We Serve &
            Empower
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with businesses across diverse sectors to drive digital
            transformation.
            <br />
            {/* <span className="text-[#0B4DB8] font-semibold">
              Ideate. Create. Ship.
            </span> */}
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg shadow-blue-900/10 bg-[#031735] border border-blue-100">
                {" "}
                <div className=" h-44">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="object-cover w-full h-full opacity-80"
                  />
                </div>
                <div className="bottom-0 w-full text-center bg-[#031735]/90 py-2">
                  <p className="text-white text-lg font-semibold">
                    {industry.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
