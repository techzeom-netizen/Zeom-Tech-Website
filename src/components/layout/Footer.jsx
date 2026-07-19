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
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-indigo-950 to-slate-700 overflow-hidden z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      {/* Curved Top Section with Layered Waves */}
      <div className="absolute -top-28 left-0 right-0 w-full overflow-hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-32 text-indigo-950"
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
          className="w-full h-32 absolute -top-4 text-indigo-700/80"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.6"
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,202.7C672,224,768,224,864,213.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content Container */}
      <div className="containerMax mx-auto px-6 pt-24 pb-8 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Logo & Company Description */}
          <div className="lg:col-span-6">
            <div className="mb-8 relative">
              <img
                src="/assets/images/EIVION_LOGO.jpg"
                alt="ZeomTech Logo"
                className="h-16 mb-6 drop-shadow-lg relative z-10"
              />
              {/* Animated glow behind logo */}
              <div className="absolute -top-4 -left-4 w-40 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            <p className="text-slate-200 leading-relaxed mb-8 backdrop-blur-sm bg-slate-700/40 p-5 rounded-lg border-l-4 border-sky-500/50 shadow-lg">
              At ZeomTech, we're not just freelancers — we're a powerhouse
              of passionate developers united to bring your digital vision to
              life. Whether you're a startup looking to build from scratch or an
              enterprise aiming to scale, our flexible, results-driven approach
              ensures your product stands out.
            </p>

            {/* Enhanced Rating Card */}
            <div className="group w-fit backdrop-blur-sm bg-slate-700/40 p-4 rounded-lg border-l-4 border-yellow-400 shadow-lg hover:shadow-yellow-400/20 transition-all duration-500 cursor-pointer">
              <div className="flex items-center">
                <div className="flex items-center mr-3 relative">
                  <FaStar className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-medium text-lg text-white group-hover:text-yellow-400 transition-colors duration-300">
                    5.0
                  </span>
                  <div className="absolute -inset-1 bg-yellow-600/20 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300">
                    Google Reviews
                  </span>
                  <span className="text-slate-400 text-xs group-hover:text-slate-300 transition-colors duration-300">
                    Based on 48 reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information with Card Design */}
          <div className="lg:col-span-4 md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-sky-500 rounded-full"></span>
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:devcodeflex@gmail.com"
                className="group flex items-center p-4 backdrop-blur-sm bg-slate-700/40 rounded-lg border-l-2 border-sky-500/50 hover:border-l-4 transition-all duration-300 shadow-md hover:shadow-sky-500/60"
              >
                <div className="bg-sky-500/10 p-3 rounded-full mr-4 group-hover:bg-sky-500/20 transition-colors duration-300">
                  <FaEnvelope className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">Email Us At</p>
                  <p className="text-slate-200 group-hover:text-sky-400 transition-colors duration-300">
                    devcodeflex@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918404901905"
                className="group flex items-center p-4 backdrop-blur-sm bg-slate-700/40 rounded-lg border-l-2 border-sky-500/50 hover:border-l-4 transition-all duration-300 shadow-md hover:shadow-sky-500/60"
              >
                <div className="bg-sky-500/10 p-3 rounded-full mr-4 group-hover:bg-sky-500/20 transition-colors duration-300">
                  <FaPhoneAlt className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">Call Us At</p>
                  <p className="text-slate-200 group-hover:text-sky-400 transition-colors duration-300">
                    +91-8404901905
                  </p>
                </div>
              </a>

              <div className="flex items-start p-4 backdrop-blur-sm bg-slate-700/40 rounded-lg border-l-2 border-sky-500/50 shadow-md">
                <div className="bg-sky-500/10 p-3 rounded-full mr-4 self-center">
                  <FaMapMarkerAlt className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">Find Us At</p>
                  <p className="text-slate-200">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Connect Section */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-sky-500 rounded-full"></span>
            </h3>
          

            <div className=" flex justify-between gap-10 md:gap-0 lg:flex-col lg:space-y-6">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/codeflex-devs-4anss/"
                  className="group relative"
                  aria-label="LinkedIn"
                >
                  <div className="absolute inset-0 bg-blue-600/20 rounded-lg blur-md transform group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="bg-slate-800 hover:bg-sky-600 transition-colors duration-300 h-12 w-12 rounded-lg flex items-center justify-center shadow-lg relative z-10">
                    <FaLinkedinIn className="h-5 w-5 text-white" />
                  </div>
                </a>
                <a href="#" className="group relative" aria-label="Twitter">
                  <div className="absolute inset-0 bg-sky-600/20 rounded-lg blur-md  transform group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="bg-slate-800 hover:bg-sky-600 transition-colors duration-300 h-12 w-12 rounded-lg flex items-center justify-center shadow-lg relative z-10">
                    <FaTwitter className="h-5 w-5 text-white" />
                  </div>
                </a>

                {/* Scroll to top button with animation */}
              </div>

              <button
                onClick={scrollToTop}
                className="group w-32 py-3 px-4 bg-slate-700/40 backdrop-blur-sm hover:bg-sky-600/80 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-sky-500/20"
              >
                <FaChevronUp className="h-4 w-4 mr-2 text-sky-300 group-hover:text-white group-hover:animate-bounce" />
                <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  Back to top
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright with animated border */}
        <div className=" md:px-14 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[3px] bg-gradient-to-r from-transparent  via-sky-300/50 to-transparent"></div>

          <p className="text-slate-400 text-sm mb-6 md:mb-0">
            © 2025 CodeFlex Devs. All rights reserved.
          </p>

          <div className="flex space-x-8">
            <a
              href="#"
              className="text-slate-400 text-sm hover:text-sky-400 transition-all duration-300 relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="text-slate-400 text-sm hover:text-sky-400 transition-all duration-300 relative group"
            >
              Sitemap
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
