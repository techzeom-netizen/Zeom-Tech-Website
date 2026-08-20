"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import HamburgerMenu from "../common/HamburgMenu"; // Ensure path is correct
import ThemeToggle from "./ThemeToggle";
// import { FaWhatsapp } from "react-icons/fa";

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

  function goToBlogs() {
    router.push("/blogs");
    setHovered(null);
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
    <nav className="w-full site-nav px-6 py-0 relative z-50">
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
              hovered === "who" || path === "/about"
                ? "text-[#0B4DB8]"
                : "hover:text-[#0B4DB8]"
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
                className="nav-dropdown absolute left-1/2 top-full mt-3 w-[360px] -translate-x-1/2 rounded-xl border border-blue-100 bg-white p-3 shadow-[0_24px_70px_-35px_rgba(3,23,53,0.45)]"
                onMouseEnter={() => setHovered("who")}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="absolute -top-3 left-0 h-3 w-full" />
                <div className="nav-dropdown-arrow absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-blue-100 bg-white" />
                <div
                  onClick={goToAbout}
                  className="relative rounded-lg p-4 transition-colors hover:bg-[#EAF3FF]"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B4DB8] text-sm font-bold text-white">
                      Z
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B4DB8]">
                        About ZeomTech
                      </p>
                      <h3 className="mt-1 text-base font-semibold leading-snug text-[#031735]">
                        A focused team for practical digital products.
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        We plan, design, and build reliable websites, apps, and
                        software with clear communication from day one.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={goToAbout}
                  className="mt-1 flex items-center justify-between rounded-lg border border-blue-100 px-4 py-3 text-sm font-semibold text-[#0B4DB8] transition-colors hover:bg-blue-50"
                >
                  Know us more
                  <FiArrowRight />
                </div>
              </div>
            )}
          </div>

          {/* What we do */}
          <div
            className={`relative flex items-center h-full px-4 cursor-pointer transition-colors ${
              hovered === "what" || path === "/discover"
                ? "text-[#0B4DB8]"
                : "hover:text-[#0B4DB8]"
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
                className="nav-dropdown absolute left-1/2 top-full mt-3 w-[380px] -translate-x-1/2 rounded-xl border border-blue-100 bg-white p-3 shadow-[0_24px_70px_-35px_rgba(3,23,53,0.45)]"
                onMouseEnter={() => setHovered("what")}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="absolute -top-3 left-0 h-3 w-full" />
                <div className="nav-dropdown-arrow absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-blue-100 bg-white" />
                <div
                  onClick={goToDiscover}
                  className="relative rounded-lg p-4 transition-colors hover:bg-[#EAF3FF]"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF3FF] text-sm font-bold text-[#0B4DB8]">
                      01
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B4DB8]">
                        Services
                      </p>
                      <h3 className="mt-1 text-base font-semibold leading-snug text-[#031735]">
                        Strategy, design, development, and support.
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        From landing pages to full software builds, we turn
                        requirements into clean, scalable product experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={goToDiscover}
                  className="mt-1 flex items-center justify-between rounded-lg border border-blue-100 px-4 py-3 text-sm font-semibold text-[#0B4DB8] transition-colors hover:bg-blue-50"
                >
                  Explore services
                  <FiArrowRight />
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
            <div className="flex items-center gap-1">Tech Stack</div>
          </div>

          <div
            onClick={goToBlogs}
            className={`relative flex items-center h-full px-4 cursor-pointer ${
              hovered === "blog" || path?.startsWith("/blogs")
                ? "text-[#0B4DB8]"
                : "hover:text-[#0B4DB8]"
            }`}
            onMouseEnter={() => setHovered("blog")}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0B4DB8] transition-opacity duration-300 ${
                hovered === "blog" || path?.startsWith("/blogs")
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
            <div className="flex items-center gap-1">Blogs</div>
          </div>
        </div>

        {/* Start a Project Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={goToContact}
            className="group inline-flex items-center gap-3 hover:bg-[#0f4aa8] bg-[#1a5ac0] text-white font-medium py-3.5 px-7 rounded-full transition-colors "
          >
            {/* <FaWhatsapp className="text-lg" /> */}
            Let's Connect
          
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <div className="bg-[#0B4DB8] rounded-md">
          <HamburgerMenu
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="nav-mobile-menu md:hidden absolute top-16 left-0 w-full rounded-b-lg bg-white shadow-md border-t border-blue-100 z-40 px-6 py-3 space-y-4">
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
              <div className="mt-3 rounded-lg border border-blue-100 bg-[#F7FBFF] p-4 text-sm text-slate-600">
                <p className="font-semibold text-[#031735]">
                  A focused team for practical digital products.
                </p>
                <p className="mt-2 leading-6">
                  We plan, design, and build reliable websites, apps, and
                  software with clear communication from day one.
                </p>
                <div
                  onClick={goToAbout}
                  className="mt-3 flex items-center justify-between rounded-md bg-white px-3 py-2 font-semibold text-[#0B4DB8]"
                >
                  Know us more
                  <FiArrowRight />
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
              <div className="mt-3 rounded-lg border border-blue-100 bg-[#F7FBFF] p-4 text-sm text-slate-600">
                <p className="font-semibold text-[#031735]">
                  Strategy, design, development, and support.
                </p>
                <p className="mt-2 leading-6">
                  From landing pages to full software builds, we turn
                  requirements into clean, scalable product experiences.
                </p>
                <div
                  onClick={goToDiscover}
                  className="mt-3 flex items-center justify-between rounded-md bg-white px-3 py-2 font-semibold text-[#0B4DB8]"
                >
                  Explore services
                  <FiArrowRight />
                </div>
              </div>
            )}
          </div>

          <div
            onClick={goToTech}
            className="cursor-pointer text-black font-medium"
          >
            Tech Stack
          </div>
          <div
            onClick={goToBlogs}
            className="cursor-pointer text-black font-medium"
          >
            Blogs
          </div>

          {/* Start a Project Button (Mobile) */}
                <button
            onClick={goToContact}
            className="group inline-flex items-center gap-3 bg-[#0E9E76] hover:bg-[#0B8564] text-white font-medium py-3.5 px-7 rounded-full transition-colors shadow-[0_8px_24px_-8px_rgba(14,158,118,0.5)]"
          >
            {/* <FaWhatsapp className="text-lg" /> */}
            Let's Connect
          
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
