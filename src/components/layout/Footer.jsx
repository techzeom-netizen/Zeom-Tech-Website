"use client";

import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaStar,
  FaChevronUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-[7px]">
      <div className="absolute inset-0 brand-hero overflow-hidden z-0">
        <div className="absolute top-10 right-20 w-56 h-56 rounded-full bg-[#8EBEFF]/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-[#2F80ED]/10 blur-3xl"></div>
      </div>

      <div className="absolute -top-16 left-0 right-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-16 text-[#031735]"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-16 absolute -top-2 text-[#0B4DB8]/80"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.6"
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,202.7C672,224,768,224,864,213.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="containerMax mx-auto px-6 pt-12 pb-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <div className="mb-4 relative">
              <img
                src="/assets/images/ZeomTechFooter.png"
                alt="ZeomTech Logo"
                className="h-11 drop-shadow-lg relative z-10"
              />
              <div className="absolute -top-3 -left-3 w-28 h-16 bg-[#2F80ED]/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            <p className="text-blue-50 text-sm leading-relaxed mb-4 backdrop-blur-sm bg-white/10 p-3.5 rounded-lg border-l-4 border-[#8EBEFF]/70 shadow-lg">
              Zeom Technology is a full-service software development company
              delivering innovative digital solutions for startups,
              enterprises, and organizations worldwide. Our team combines
              technical excellence, industry expertise, and a
              customer-first approach to build scalable, secure, and
              future-ready products that accelerate business growth.
            </p>

            <div className="group w-fit backdrop-blur-sm bg-white/10 p-3 rounded-lg border-l-4 border-[#8EBEFF] shadow-lg hover:shadow-blue-400/20 transition-all duration-500 cursor-pointer">
              <div className="flex items-center">
                <div className="flex items-center mr-3 relative">
                  <FaStar className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 font-medium text-base text-white group-hover:text-[#8EBEFF] transition-colors duration-300">
                    5.0
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-300 text-xs group-hover:text-white transition-colors duration-300">
                    Google Reviews
                  </span>
                  <span className="text-slate-400 text-[11px] group-hover:text-slate-300 transition-colors duration-300">
                    Based on 48 reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 md:col-span-1">
            <h3 className="text-base font-semibold mb-4 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-[#8EBEFF] rounded-full"></span>
            </h3>

            <div className="space-y-2.5">
              <a
                href="mailto:techzeom@gmail.com"
                className="group flex items-center p-2.5 backdrop-blur-sm bg-white/10 rounded-lg border-l-2 border-[#8EBEFF]/60 hover:border-l-4 transition-all duration-300 shadow-md hover:shadow-blue-400/30"
              >
                <div className="bg-[#8EBEFF]/10 p-2 rounded-full mr-3 group-hover:bg-[#8EBEFF]/20 transition-colors duration-300">
                  <FaEnvelope className="h-4 w-4 text-[#8EBEFF]" />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] leading-tight">Email Us At</p>
                  <p className="text-slate-200 text-sm group-hover:text-[#8EBEFF] transition-colors duration-300">
                    techzeom@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918271927132"
                className="group flex items-center p-2.5 backdrop-blur-sm bg-white/10 rounded-lg border-l-2 border-[#8EBEFF]/60 hover:border-l-4 transition-all duration-300 shadow-md hover:shadow-blue-400/30"
              >
                <div className="bg-[#8EBEFF]/10 p-2 rounded-full mr-3 group-hover:bg-[#8EBEFF]/20 transition-colors duration-300">
                  <FaPhoneAlt className="h-4 w-4 text-[#8EBEFF]" />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] leading-tight">Call Us At</p>
                  <p className="text-slate-200 text-sm group-hover:text-[#8EBEFF] transition-colors duration-300">
                    +91-8271927132
                  </p>
                </div>
              </a>

              <div className="flex items-center p-2.5 backdrop-blur-sm bg-white/10 rounded-lg border-l-2 border-[#8EBEFF]/60 shadow-md">
                <div className="bg-[#8EBEFF]/10 p-2 rounded-full mr-3">
                  <FaMapMarkerAlt className="h-4 w-4 text-[#8EBEFF]" />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] leading-tight">Find Us At</p>
                  <p className="text-slate-200 text-sm">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="text-base font-semibold mb-4 text-white relative inline-block">
              Connect
              <span className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-[#8EBEFF] rounded-full"></span>
            </h3>

            <div className="flex justify-between gap-6 md:gap-0 lg:flex-col lg:space-y-4">
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/codeflex-devs-4anss/"
                  className="group relative"
                  aria-label="LinkedIn"
                >
                  <div className="bg-white/10 hover:bg-[#0B4DB8] transition-colors duration-300 h-10 w-10 rounded-lg flex items-center justify-center shadow-lg relative z-10">
                    <FaLinkedinIn className="h-4 w-4 text-white" />
                  </div>
                </a>
                <a href="#" className="group relative" aria-label="Twitter">
                  <div className="bg-white/10 hover:bg-[#0B4DB8] transition-colors duration-300 h-10 w-10 rounded-lg flex items-center justify-center shadow-lg relative z-10">
                    <FaTwitter className="h-4 w-4 text-white" />
                  </div>
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="group w-28 py-2 px-3 bg-white/10 backdrop-blur-sm hover:bg-[#0B4DB8] rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-blue-400/20"
              >
                <FaChevronUp className="h-3.5 w-3.5 mr-1.5 text-[#8EBEFF] group-hover:text-white group-hover:animate-bounce" />
                <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  Back to top
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="md:px-14 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#8EBEFF]/50 to-transparent"></div>

          <p className="text-slate-400 text-xs mb-3 md:mb-0">
            © 2026 ZeomTech. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-400 text-xs hover:text-[#8EBEFF] transition-all duration-300 relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8EBEFF] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="text-slate-400 text-xs hover:text-[#8EBEFF] transition-all duration-300 relative group"
            >
              Sitemap
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8EBEFF] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;