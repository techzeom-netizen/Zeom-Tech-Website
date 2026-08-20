"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "expertise", label: "Expertise" },
  { id: "industries", label: "Industries" },
  { id: "process", label: "Process" },
  { id: "different", label: "Why Us" },
  { id: "technology", label: "Tech" },
  { id: "projects", label: "Projects" },
];

export default function SectionNavigator() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("hero");
  const [availableIds, setAvailableIds] = useState([]);
  const isHome = pathname === "/";

  const availableSections = useMemo(
    () => sections.filter((section) => availableIds.includes(section.id)),
    [availableIds]
  );

  useEffect(() => {
    if (!isHome) return undefined;

    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    setAvailableIds(targets.map((target) => target.id));
    if (targets.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        threshold: [0.18, 0.32, 0.48],
        rootMargin: "-20% 0px -52% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome || availableSections.length < 3) return null;

  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 82;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <nav className="section-nav" aria-label="Homepage sections">
      {availableSections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          onClick={() => scrollToSection(section.id)}
          className={activeId === section.id ? "is-active" : ""}
          aria-label={`Go to ${section.label}`}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{section.label}</strong>
        </button>
      ))}
    </nav>
  );
}
