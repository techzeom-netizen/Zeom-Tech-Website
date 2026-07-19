"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import HamburgerMenu from "../common/HamburgMenu"; // Ensure path is correct

export function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false);
  const [mobileWhatOpen, setMobileWhatOpen] = useState(false);

  const [hovered, setHovered] = useState(null); // "who" | "what" | "blog" | "tech" | null
  const [menuOpen, setMenuOpen] = useState(false);

  // Close any open dropdown / mobile menu whenever the route changes
  useEffect(() => {
    setHovered(null);
    setMenuOpen(false);
    setMobileWhoOpen(false);
    setMobileWhatOpen(false);
  }, [path]);

  function handleHomepage() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/");
    setMenuOpen(false);
  }

  function goToContact() {
    router.push("/contact");
    setMenuOpen(false);
  }

  function goToTech() {
    router.push("/techwelove");
    setMenuOpen(false);
  }

  function goToAbout() {
    router.push("/about");
    setHovered(null);
    setMenuOpen(false);
  }

  function goToDiscover() {
    router.push("/discover");
    setHovered(null);
    setMenuOpen(false);
  }

  return (
    <nav className="w-full bg-white/95 backdrop-blur-xl text-slate-900 px-6 py-0 relative z-50 border-b border-blue-100">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleHomepage}
        >
          <img
            src="/assets/images/ZeomTechLogo.png"
            alt="Logo"
            className="h-10 md:h-12"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-0 lg:gap-6 xl:gap-8 text-base lg:text-lg font-medium relative h-full">
          {/* Who we are */}
          <div
            className={`relative flex items-center h-full px-4 cursor-pointer transition-colors ${
              hovered === "who" || path === "/about" ? "text-[#0B4DB8]" : "hover:text-[#0B4DB8]"
            }`}
            onMouseEnter={() => setHovered("who")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="absolute inset-0 -z-10" />
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0B4DB8] transition-opacity duration-300 ${
                hovered === "who" || path === "/about"
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
            <div className="flex items-center gap-1">
              Who we are <FiChevronDown className="text-lg" />
            </div>

            {hovered === "who" && (
              <div
                className="absolute -left-32 top-full mt-0 flex bg-white shadow-2xl border border-blue-100 rounded-md w-[600px] h-[230px] overflow-hidden"
                onMouseEnter={() => setHovered("who")}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="w-1/4 border-r border-blue-100 bg-[#EAF3FF] flex justify-center">
                  <div className="px-4 py-4 font-semibold text-lg text-[#063B8F]">
                    About us
                  </div>
                </div>
                <div className="w-3/4 px-4 py-6">
                  <h3 className="text-lg font-medium mb-2 text-[#031735]">
                    We are an award winning Developers for dedicated
                    development, support and services.
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Our expert, committed team work towards satisfaction and the
                    demand of the customers. Together, We integrate emotions and
                    stories with the beautiful websites, apps and software of
                    your products or services.
                  </p>
                  <div
                    onClick={goToAbout}
                    className="flex whitespace-nowrap text-[#0B4DB8] font-semibold hover:underline"
                  >
                    know us more
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* What we do */}
          <div
            className={`relative flex items-center h-full px-4 cursor-pointer transition-colors ${
              hovered === "what" || path === "/discover" ? "text-[#0B4DB8]" : "hover:text-[#0B4DB8]"
            }`}
            onMouseEnter={() => setHovered("what")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="absolute inset-0 -z-10" />
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0B4DB8] transition-opacity duration-300 ${
                hovered === "what" || path === "/discover"
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
            <div className="flex items-center gap-1">
              What we do <FiChevronDown className="text-lg" />
            </div>

            {hovered === "what" && (
              <div
                className="absolute -left-32 top-full mt-0 flex bg-white shadow-2xl border border-blue-100 rounded-md w-[600px] h-[230px] overflow-hidden"
                onMouseEnter={() => setHovered("what")}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="w-1/4 border-r border-blue-100 bg-[#EAF3FF] flex justify-center">
                  <div className="px-4 py-4 font-semibold text-lg text-[#063B8F]">
                    Overview
                  </div>
                </div>
                <div className="w-3/4 px-6 py-6">
                  <h3 className="text-lg font-medium mb-2 text-[#031735]">
                    We listen to your requirements and pledge to provide
                    precisely what you desire.
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Our highly enthusiastic teams develop Software and Modern
                    Websites to demonstrate the extraordinary experiences, In
                    the sphere of advanced technological skills.
                  </p>
                  <div
                    onClick={goToDiscover}
                    className="flex whitespace-nowrap text-[#0B4DB8] font-semibold hover:underline"
                  >
                    Discover About Us
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tech we love */}
          <div
            onClick={goToTech}
            className={`relative flex items-center h-full px-4 cursor-pointer ${
              hovered === "tech" || path === "/techwelove"
                ? "text-[#0B4DB8]"
                : "hover:text-[#0B4DB8]"
            }`}
            onMouseEnter={() => setHovered("tech")}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0B4DB8] transition-opacity duration-300 ${
                hovered === "tech" || path === "/techwelove"
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
            <div className="flex items-center gap-1">Tech we love</div>
          </div>
        </div>

        {/* Let's Talk Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={goToContact}
            className="border border-blue-200 rounded-xl px-5 py-2 text-base font-semibold text-[#063B8F] hover:bg-[#EAF3FF] hover:border-[#0B4DB8] transition"
          >
            Let's Talk
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden bg-[#0B4DB8] rounded-md">
          <HamburgerMenu
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full rounded-b-lg bg-white shadow-md border-t border-blue-100 z-40 px-6 py-3 space-y-4">
          {/* Who we are (dropdown) */}
          <div>
            <div
              onClick={() => setMobileWhoOpen(!mobileWhoOpen)}
              className="cursor-pointer text-[#031735] font-medium flex justify-between items-center"
            >
              Who we are
              <FiChevronDown
                className={`transition-transform ${
                  mobileWhoOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {mobileWhoOpen && (
              <div className="mt-2 px-5 text-sm text-slate-600 space-y-1 text-justify">
                <p>
                  We are an award winning Developers for dedicated development,
                  support and services. Our expert team works towards customer
                  satisfaction by integrating emotion and storytelling with
                  beautiful websites and apps.
                </p>
                <div
                  onClick={goToAbout}
                  className="text-[#0B4DB8] font-semibold hover:underline pt-2 text-center"
                >
                  Know us more
                </div>
              </div>
            )}
          </div>

          {/* What we do (dropdown) */}
          <div>
            <div
              onClick={() => setMobileWhatOpen(!mobileWhatOpen)}
              className="cursor-pointer text-[#031735] font-medium flex justify-between items-center"
            >
              What we do
              <FiChevronDown
                className={`transition-transform ${
                  mobileWhatOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {mobileWhatOpen && (
              <div className="mt-2 px-4 text-sm text-slate-600 space-y-1 text-justify">
                <p>
                  We listen to your requirements and pledge to deliver precisely
                  what you need. Our teams develop software and modern websites
                  that reflect extraordinary experiences.
                </p>
                <div
                  onClick={goToDiscover}
                  className="text-[#0B4DB8] font-semibold hover:underline pt-2 text-center"
                >
                  Discover About Us
                </div>
              </div>
            )}
          </div>

          {/* Other Links */}
          {/* <div
            onClick={() => {
              navigate("/blog");
              setMenuOpen(false);
            }}
            className="cursor-pointer text-[#031735] font-medium"
          >
            Blog
          </div> */}
          <div
            onClick={goToTech}
            className="cursor-pointer text-black font-medium"
          >
            Tech we love
          </div>
          <button
            onClick={goToContact}
            className="w-full text-center border border-blue-200 rounded-xl px-5 py-2 text-base font-semibold text-[#063B8F] hover:bg-[#EAF3FF] transition"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;