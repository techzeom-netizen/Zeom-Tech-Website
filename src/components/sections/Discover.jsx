"use client";

import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import HowWeWork from "./HowWeWork";

const rotatingWords = ["value.", "impact.", "results."];

const Discover = () => {
  const router = useRouter();

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];
    let typeSpeed = isDeleting ? 50 : 120;

    const typing = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % rotatingWords.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, currentWordIndex]);

  function goToContact() {
    router.push("/contact");
  }

  return (
    <div className="pb-12 md:pb-0">
      <main className="brand-hero relative px-2 md:px-4 -mt-20 md:-mt-9 lg:pt-32 pb-24 md:pb-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2F80ED]/30 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8EBEFF]/30 rounded-full blur-3xl animate-pulse delay-200 -z-10" />

        <div className="containerMax pt-24 md:pt-16 lg:pt-0">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm font-medium">
            <ol className="flex flex-wrap items-center gap-2 text-blue-100">
              <li>
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="hover:text-white"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Services
              </li>
            </ol>
          </nav>
        </div>

        <div className="containerMax flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left side text */}
          <div className="brand-panel w-full lg:w-1/2 text-left px-2 lg:px-10 p-4 md:p-6 rounded-2xl -mt-12 ">
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-center">
              Discover Scalable IT Solutions
              <br />
              Tailored to Deliver{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8EBEFF] to-[#2F80ED] contrast-200">
                {displayText}
              </span>
            </h1>
            <p className="text-white text-base md:text-lg mb-6 text-center md:text-start">
              Our team of experts leverages deep industry knowledge and advanced
              technologies to craft IT strategies that are future-ready and results-driven.
            </p>
            <p className="text-white text-base md:text-lg mb-6 text-center md:text-start">
              Whether you're modernizing legacy systems or building new digital
              experiences, we ensure your technology investments translate into
              business growth.
            </p>
            <p className="text-white text-base md:text-lg mb-6  text-center md:text-start">
              From cloud solutions and enterprise software to strategic consulting,
              we deliver measurable business outcomes with scalable, secure, and
              innovative technologies.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button text="Let's Talk" variant="primary" onClick={goToContact} />
            </div>
          </div>

       
    {/* Right side image + heading */}
    <div className="w-full lg:w-1/2 flex flex-col items-center relative h-[400px] sm:h-[300px] mt-0 md:mt-20 md:-mb-4 lg:mt-0 lg:mb-0">
            <div className="relative w-[300px] md:w-full max-w-md h-full">
              <div className="absolute bottom-0 right-0">
                <div className="rounded-full w-full h-full absolute -z-10 blur-2xl bg-gradient-to-tr from-[#063B8F] via-[#0B4DB8] to-[#8EBEFF] opacity-40 animate-pulse" />
                <img
                  src="/assets/images/I.png"
                  alt="About Us"
                  className="w-full h-[300px]  md:w-full md:h-[23rem] object-fill "
                />
              </div>
            </div>
            {/* <h2 className="text-white text-2xl font-semibold -mt-8">About Us</h2> */}
          </div>
        </div>
      </main>

      <div className="my-5 md:mb-16 lg:mb-24">
        <HowWeWork />
      </div>
    </div>
  );
};

export default Discover;
