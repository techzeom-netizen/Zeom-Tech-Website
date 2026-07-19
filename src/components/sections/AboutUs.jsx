"use client";

import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import TechWeLove from "./TechWeLove";
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
      <main className="relative px-2 md:px-4 -mt-24 md:-mt-5 lg:pt-24 pb-24 md:pb-28 bg-gradient-to-br from-[#224252] via-[#264752] to-[#2c5364] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full opacity-30 blur-3xl animate-pulse delay-200 -z-10" />

        <div className="containerMax flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left side text */}
          <div className="border border-[#1c3946] w-full lg:w-1/2 text- lg:text-left lg:px-10 backdrop-blur-md bg-white/5 p-4 rounded-xl shadow-lg">
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-6 text-center">
              Award-Winning Technology
              <br />
              Partners Delivering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-white contrast-200">
                {displayText}
              </span>
            </h1>
            <p className="text-white text-base md:text-lg mb-6 text-center md:text-start">
              We are a collective of strategists, designers, and developers
              committed to transforming innovative ideas into impactful digital
              solutions.
            </p>
            <p className="text-white text-base md:text-lg mb-6 text-center md:text-start">
              Our enterprise-grade technology solutions combine technical
              expertise with industry insights to address complex business
              challenges.
            </p>
            <p className="text-white text-base md:text-lg mb-6 text-center md:text-start">
              Built on technical excellence, we guide organizations through
              digital transformation to achieve measurable outcomes. Our
              solutions meet today's needs while scaling for tomorrow's
              challenges.
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
                <div className="rounded-full w-full h-full absolute -z-10 blur-2xl bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 opacity-40 animate-pulse" />
                <img
                  src="/assets/images/AboutUs.png"
                  alt="About Us"
                  className="w-full h-[300px]  md:w-full md:h-[23rem] object-fill "
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
