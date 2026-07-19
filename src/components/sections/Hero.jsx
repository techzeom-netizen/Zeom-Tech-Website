"use client";

import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import TechWeLove from "./TechWeLove";
import { useRouter } from "next/navigation";
import Experties from "./Experties";
import RecentProjects from "./RecentProjects";
import IndustryCarousel from "./IndustrialCrausel";
import TrustedSection from "./TrustedSection";
import HowWeWork from "./HowWeWork";
import HowWeDiffrent from "./HowWeDiffrent";

const rotatingWords = ["support.", "development.", "service."];

const Hero = () => {
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

  function goToAbout() {
    router.push("/about");
  }

  return (
    <>
    <main className="relative px-2 md:px-4 -mt-20 md:-mt-12 lg:pt-24 pb-20 md:pb-[7rem] bg-gradient-to-br from-[#224252] via-[#264752] to-[#2c5364] overflow-hidden ">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full opacity-30 blur-3xl animate-pulse delay-200 -z-10" />

        <div className="containerMax flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left side text */}
          <div className="-mt-12 md:-mt-0 w-full lg:w-1/2 text-center lg:text-left lg:px-10 backdrop-blur-md bg-white/5 border border-[#1c3946] p-6 rounded-xl shadow-lg">
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              An award winning Developers
              <br />
              for dedicated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-yellow-300">
                {displayText}
              </span>
            </h1>
            <p className="text-white text-lg mb-6 md:mb-10">
              We specialize in innovative digital solutions that transform ideas
              into reality, combining technical expertise with strategic
              insights for your business success.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                text="Let's Talk"
                variant="primary"
                onClick={goToContact}
              />
              <Button text="About us" variant="outlined" onClick={goToAbout} />
            </div>
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-1/2 flex justify-center relative h-[400px] sm:h-[500px] ">
            <div className="relative w-full max-w-md h-full">
              <div className="flex items-center justify-center mt-24 md:absolute md:right-0 md:bottom-0 ">
                <div className="rounded-full w-full h-full absolute -z-10 blur-2xl bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 opacity-40 animate-pulse" />
                <img
                  src="/assets/images/image.png"
                  alt="Coding"
                  className="w-full h-72  md:w-full md:h-full object-fill "
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-14 lg:mt-5">
        <Experties />
        <IndustryCarousel />
        <HowWeWork />
        <HowWeDiffrent />
        <TechWeLove />
        <RecentProjects />
      </div>
    </>
  );
};

export default Hero;
