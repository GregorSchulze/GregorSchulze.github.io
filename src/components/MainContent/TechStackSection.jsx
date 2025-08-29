import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFontawesome,
  SiReact,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";

import { FiTrendingUp } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";

export function TechStackSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="work"
      className="mb-40 text-black pb-1 dark:text-white"
    >
      <h2 className="text-center text-5xl sm:text-7xl font-semibold">
        Meine Skill's
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center pb-10 max-w-2xl mx-auto py-2">
        Für digitale Erlebnisse
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
        {/* Textbereich - ****************************************/}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="shadow-xl bg-[#f0f0e8] dark:bg-[#1a1a1a] rounded-xl p-8 md:p-16"
        >
          <h2 className="text-3xl font-semibold">
            Technologien mit denen ich arbeite
          </h2>
          <p className="text-lg flex-grow">
            Ich arbeite mit modernsten Softwarelösungen, um außergewöhnliche
            digitale Produkte zu entwickeln. Mein Tech-Stack umfasst
            fortschrittliche Technologien und branchenführende Werkzeuge, mit
            denen ich kreative Konzepte in performante Lösungen umsetze. Hier
            sind einige der Programme und Frameworks, die ich für professionelle
            Ergebnisse einsetze:
          </p>
        </div>

        {/* Technologien - **************************************** */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* HTML */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="400"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiHtml5 size={40} className="mb-2" />
            <span className="text-sm font-medium">HTML</span>
          </div>

          {/* CSS */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="500"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiCss3 size={40} className="mb-2" />
            <span className="text-sm font-medium">CSS</span>
          </div>

          {/* JavaScript */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="600"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiJavascript size={40} className="mb-2" />
            <span className="text-sm font-medium">JavaScript</span>
          </div>

          {/* Tailwind */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="700"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiTailwindcss size={40} className="mb-2" />
            <span className="text-sm font-medium">Tailwind</span>
          </div>

          {/* TypeScript */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="800"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiTypescript size={40} className="mb-2" />
            <span className="text-sm font-medium">TypeScript</span>
          </div>

          {/* Git */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="900"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiGit size={40} className="mb-2" />
            <span className="text-sm font-medium">Git</span>
          </div>

          {/* Font Awesome */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="1000"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiFontawesome size={40} className="mb-2" />
            <span className="text-sm font-medium text-center">
              Font Awesome
            </span>
          </div>

          {/* React */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="1100"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiReact size={40} className="mb-2" />
            <span className="text-sm font-medium">React</span>
          </div>

          {/* Growth Mindset */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="1200"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <FiTrendingUp size={40} className="text-green-600 mb-2" />
            <span className="text-sm font-medium text-center">
              Growth Mindset
            </span>
          </div>
        </div>
      </div>

      {/* Software Section ****************************************/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* Premiere Pro */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="400"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiAdobepremierepro size={40} className="mb-2" />
            <span className="text-sm font-medium text-center">
              Premiere Pro
            </span>
          </div>

          {/* After Effects */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="500"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiAdobeaftereffects size={40} className="mb-2" />
            <span className="text-sm font-medium text-center">
              After Effects
            </span>
          </div>

          {/* Photoshop */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="600"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <SiAdobephotoshop size={40} className="mb-2" />
            <span className="text-sm font-medium text-center">Photoshop</span>
          </div>

          {/* VS Code */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="700"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform"
          >
            <VscVscode size={40} className="mb-2" />
            <span className="text-sm font-medium text-center">VS Code</span>
          </div>
        </div>

        {/* Text - ****************************************/}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="shadow-xl bg-[#f0f0e8] dark:bg-[#1a1a1a] rounded-xl p-8 md:p-16"
        >
          <h2 className="text-3xl font-semibold">Software die ich verwende</h2>
          <p className="text-lg flex-grow">
            Neben der Webentwicklung arbeite ich auch mit professionellen
            Kreativ-Tools für Design, Motion Graphics und Video-Editing. Diese
            Skills ermöglichen mir, ganzheitliche digitale Lösungen zu kreieren
            – von der Konzeption über das Design bis zur technischen Umsetzung.
          </p>
        </div>
      </div>
    </section>
  );
}
