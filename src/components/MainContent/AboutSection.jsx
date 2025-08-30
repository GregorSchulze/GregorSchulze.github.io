import React from "react";
import { FiTrendingUp, FiCode, FiMap } from "react-icons/fi";
import { HeroSection } from "./HeroSection";

export function AboutSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="about"
      className="mb-20 "
    >
      <div className="bg-[#f0f0e8] rounded-xl p-8 md:p-16 dark:bg-[#1a1a1a] text-black dark:text-white">
        <div className="mb-5">
          <h2 className="text-center text-5xl sm:text-7xl font-semibold">
            Über Mich
          </h2>
          <p className="text-center pb-5 text-gray-600  dark:text-gray-400">
            Erfahre, was mich antreibt
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-7 sm:justify-between">
          <div className="sm:flex-1">
            <FiTrendingUp size={50} color="currentColor" />
            <h2 className="text-3xl font-semibold mb-3">Motivation</h2>
            <p className="text-gray-600  dark:text-gray-400">
              Ich lebe für Weiterentwicklung und gestalte mit intrinsischer
              Motivation kreative Frontend-Lösungen.
            </p>
          </div>
          <div className="sm:flex-1">
            <FiCode size={50} color="currentColor" />
            <h2 className="text-3xl font-semibold mb-3">WebDev</h2>
            <p className="text-gray-600  dark:text-gray-400">
              Ich baue moderne Web-Apps mit React - clean, performant und
              nutzerfreundlich.
            </p>
          </div>
          <div className="sm:flex-1">
            <FiMap size={50} color="currentColor" />
            <h2 className="text-3xl font-semibold mb-3">Bergliebhaber</h2>
            <p className="text-gray-600  dark:text-gray-400">
              Meine Freizeit verbringe ich am liebsten in den Bergen. Wenn ich
              also nicht gerade an Frontends sitze, findet ihr mich auf dem
              nächsten Gipfel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
