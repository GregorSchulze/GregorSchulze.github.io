import React from "react";

export function HeroSection() {
  return (
    <div className="lg:flex mb-20 justify-between">
      <div className="flex flex-col items-center lg:items-start lg:justify-center lg:text-left my-10">
        <h1
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-4xl md:text-7xl font-semibold text-gray-900 mb-2 text-center lg:text-left dark:text-gray-100"
        >
          Hey, ich bin Gregor
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-2xl md:text-5xl font-semibold text-gray-700 mb-2 text-center lg:text-left dark:text-gray-300"
        >
          Frontend Entwickler
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="hidden sm:hidden md:block md:text-xl font-light text-gray-600 mb-5 text-center lg:text-left dark:text-gray-400"
        >
          Übersetze Motion Design in interaktive Erlebnisse
        </p>

        <div className="hover:scale-110 mt-3">
          <a
            data-aos="fade-in"
            data-aos-delay="2000"
            href="mailto:gr.schulze@t-online.de"
            className="rounded-full outline px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl text-white dark:text-gray-900 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Kontakt
          </a>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="400"
        className="flex place-content-center mb-15"
      >
        <img
          src="/img/profilev3.jpeg"
          className="rounded-xl w-70 md:w-110 fade-in-slow"
          alt="Gregor Schulze Profilbild"
        />
      </div>
    </div>
  );
}
