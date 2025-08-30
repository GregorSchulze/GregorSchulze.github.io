import { useState } from "react";
import { useEffect } from "react";
import { useDarkMode } from "../Context/DarkModeContext";
import "../../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";

import ProjectsSection from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { TechStackSection } from "./TechStackSection";
import { Testimonial } from "./Testimonial";

export function MainContent() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Animate on scroll with
  useEffect(() => {
    AOS.init({
      // Optionale Einstellungen
      duration: 1000,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <main className="bg-white dark:bg-[#212124] dark:text-white">
      <div className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8">
        <button
          onClick={toggleDarkMode}
          className="rounded-full w-10 h-10 md:w-14 md:h-14 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          aria-label="Dark Mode toggle"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <Testimonial />
    </main>
  );
}
