"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollAnimations = () => {
  const pathname = usePathname();

  useEffect(() => {
    const autoTargets = Array.from(
      document.querySelectorAll("main section:not([data-no-auto-reveal])")
    );
    const manualTargets = Array.from(
      document.querySelectorAll("main [data-scroll-reveal]")
    );
    const targets = Array.from(new Set([...autoTargets, ...manualTargets])).filter(
      (target) => !target.closest("[data-no-scroll-reveal]")
    );

    targets.forEach((target, index) => {
      target.classList.remove("scroll-reveal", "scroll-reveal-left", "scroll-reveal-right", "is-visible");
      target.classList.add("scroll-reveal");
      const direction = target.getAttribute("data-scroll-reveal");
      if (direction === "left") target.classList.add("scroll-reveal-left");
      if (direction === "right") target.classList.add("scroll-reveal-right");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollAnimations;
