"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold brand-heading">
            Industries we serve
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We help industries to transform digitally with our tailored
            solutions,
            <br />
            We play our strength: Ideate, Create, Ship.
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
                <div className="relative h-44">
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
