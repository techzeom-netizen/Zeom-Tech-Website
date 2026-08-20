"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const STORAGE_KEY = "zeomtech-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") return "light";

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    document.documentElement.dataset.theme = preferredTheme;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (event) => {
      const savedTheme = window.localStorage.getItem(STORAGE_KEY);
      if (savedTheme === "dark" || savedTheme === "light") return;

      const systemTheme = event.matches ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.dataset.theme = systemTheme;
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const isDark = theme === "dark";

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
}
