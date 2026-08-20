"use client";

import { useRef } from "react";

export default function MagneticButton({ children, className = "" }) {
  const ref = useRef(null);

  function handleMove(event) {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function handleLeave() {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "translate3d(0, 0, 0)";
  }

  return (
    <span
      ref={ref}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </span>
  );
}
