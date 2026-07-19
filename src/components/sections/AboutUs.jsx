"use client";

import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import Experties from "./Experties";
import IndustryCarousel from "./IndustrialCrausel";

const rotatingWords = ["innovation.", "excellence.", "solutions."];

const AboutUs = () => {
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
    <>
      <main className="brand-hero relative px-2 md:px-4 -mt-24 md:-mt-5 lg:pt-24 pb-24 md:pb-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2F80ED]/30 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8EBEFF]/30 rounded-full blur-3xl animate-pulse delay-200 -z-10" />

        <div className="containerMax flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left side text */}
          <div className="brand-panel w-full lg:w-1/2 lg:text-left lg:px-10 p-4 rounded-2xl">
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-6 text-center">
              Building Digital Products
              <br />
              That Drive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8EBEFF] to-[#2F80ED] contrast-200">
                {displayText}
              </span>
            </h1>

            <p className="text-white text-base md:text-lg mb-6 text-center md:text-start">
              We help startups, enterprises, and growing businesses transform
              ideas into scalable digital products through innovative design,
              modern engineering, and strategic technology consulting.
            </p>

            <p className="text-white text-base md:text-lg mb-6 text-center md:text-start">
              Our team specializes in web development, mobile applications,
              cloud solutions, AI integration, and enterprise software that
              deliver exceptional user experiences while supporting long-term
              business growth.
            </p>

            <p className="text-white text-base md:text-lg mb-6 text-center md:text-start">
              From product strategy and UI/UX design to development, deployment,
              and ongoing support, we partner with organizations to build
              secure, high-performance solutions that create measurable business
              impact.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                text="Let's Talk"
                variant="primary"
                onClick={goToContact}
              />
            </div>
          </div>

          {/* Right side image + heading */}
          <div className="w-full lg:w-1/2 flex flex-col items-center relative h-[400px] sm:h-[300px] mt-4 md:mt-20 md:-mb-4 lg:mt-0 lg:mb-0">
            <div className="relative w-[300px] md:w-full max-w-md h-full">
              <div className="absolute bottom-0 right-0">
                <div className="rounded-full w-full h-full absolute -z-10 blur-2xl bg-gradient-to-tr from-[#063B8F] via-[#0B4DB8] to-[#8EBEFF] opacity-40 animate-pulse" />
                <DotLottieReact
                  src="https://lottie.host/a88eb1a1-1aa2-459d-99b1-8b01f48c66cd/qcT20nGyRC.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
            {/* <h2 className="text-white text-2xl font-semibold -mt-8">About Us</h2> */}
          </div>
        </div>
      </main>

      <div className="my-5 md:mb-16 lg:mb-20 pb-2 md:pb-0">
        <Experties />
        <div className="-mt-12 md:-mt-3 my-12">
          <IndustryCarousel />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
