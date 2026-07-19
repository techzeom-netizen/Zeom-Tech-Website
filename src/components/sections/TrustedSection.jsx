"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const industries = [
  { image: "/assets/images/clutch.webp", alt: "Clutch" },
  { image: "/assets/images/zoho.webp", alt: "Zoho" },
  { image: "/assets/images/hp.webp", alt: "HP" },
  { image: "/assets/images/tmobile.webp", alt: "T-Mobile" },
  { image: "/assets/images/aws.webp", alt: "AWS" },
  { image: "/assets/images/bbc.webp", alt: "BBC" },
  { image: "/assets/images/bacancy.webp", alt: "Bacancy" },
  { image: "/assets/images/bridgestone.webp", alt: "Bridgestone" },
];

export default function TrustedSection() {
  return (
    <div className="bg-white containerMax text-black py-12 px-3 md:px-4 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured in and backed by</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 font-medium">
          We are trusted by a diverse range of clients, corporations, renowned
          brands, and forward-thinking startups. Our products have been used by
          millions and received widespread critical acclaim.
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
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl zw-hidden">
              <div className="relative px-3">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="object-contain w-72 h-16 opacity-80"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
