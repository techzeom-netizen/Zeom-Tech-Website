"use client";

import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../common/Button";
import TechWeLove from "./TechWeLove";
import { useRouter } from "next/navigation";
import Experties from "./Experties";
import RecentProjects from "./RecentProjects";
import IndustryCarousel from "./IndustrialCrausel";
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
  <main className="brand-hero relative overflow-hidden px-2 md:px-4 -mt-20 md:-mt-12 lg:pt-24 pb-20">

  {/* Grid Background */}
  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:45px_45px]" />

  {/* Glow */}
  <div className="absolute -top-44 -left-40 w-[450px] h-[450px] bg-[#2F80ED]/20 blur-[150px] rounded-full" />
  <div className="absolute bottom-0 -right-32 w-[350px] h-[350px] bg-[#8EBEFF]/20 blur-[130px] rounded-full" />

  <div className="containerMax flex flex-col-reverse lg:flex-row items-center gap-16">

    {/* LEFT */}
    <div className="brand-panel w-full lg:w-1/2 rounded-2xl p-8 md:p-10">

      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/25 bg-white/10 px-5 py-2 mb-6">

        <span className="w-2 h-2 rounded-full bg-[#8EBEFF] animate-pulse" />

        <span className="text-sm text-blue-50 tracking-widest uppercase">
          Zeom Technology
        </span>

      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">

        Building Modern

        <span className="block mt-2 bg-gradient-to-r from-white via-[#8EBEFF] to-[#2F80ED] bg-clip-text text-transparent">

          {displayText}

        </span>

        Solutions

      </h1>

      <p className="text-blue-50 text-lg mt-8 leading-8">

        We craft stunning websites, powerful web applications, mobile apps,
        AI solutions and scalable cloud software that help businesses grow.

      </p>

      <div className="flex gap-4 mt-10 flex-wrap">

        <Button
          text="Let's Talk"
          variant="primary"
          onClick={goToContact}
        />

        <Button
          text="About Us"
          variant="outlined"
          onClick={goToAbout}
        />

      </div>

    </div>

    {/* RIGHT */}

    <div className="relative w-full lg:w-1/2 flex justify-center items-center h-[500px]">

      {/* Glow */}
      <div className="absolute w-[420px] h-[420px] bg-[#2F80ED]/25 rounded-full blur-[120px] animate-pulse"></div>

      {/* Glass Card */}

      <div className="relative">

        <DotLottieReact
          src="https://lottie.host/8da3d38a-67a5-4205-ab26-e3cf55a96829/GCPs2mM6ep.lottie"
          loop
          autoplay
          className="w-[min(690px,92vw)] animate-float drop-shadow-2xl"
        />

        {/* Floating Cards */}

       
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
