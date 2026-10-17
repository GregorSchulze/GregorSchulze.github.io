import React from "react";

export function ProjectsSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="work"
      className="mb-20 text-black pb-1 dark:text-white"
    >
      <h2 className="text-center text-5xl sm:text-7xl font-semibold">
        Projekte
      </h2>

      <p className="text-gray-600  dark:text-gray-400 text-center pb-10 max-w-2xl mx-auto py-2">
        Liebe zur Entwicklung ausgereifter Anwendungen
      </p>

      <div className="grid gap-15 sm:grid-cols-2">
        {/* <!-- Projekt 1 --> */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <a
            href="https://gregorschulze.github.io/cinetracker/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cinetracker Projekt besuchen"
          >
            <img
              className="shadow-lg rounded-xl ease-in-out hover:scale-90"
              src="/img/cinetracker.jpeg"
              alt="cinetracker"
            />
          </a>
          <div className="">
            <h3 className="text-3xl font-semibold pt-4 pb-2">Cinetracker</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm pb-3">
              Film-App mit Suche, Trailer-Ansicht und Favoritenliste auf Basis
              der TMDB-API.
            </p>
            <div className="text-gray-600  dark:text-gray-400 text-xs flex flex-wrap gap-2">
              <span className="rounded-full outline px-2 py-1">React</span>
              <span className="rounded-full outline px-2 py-1">Vite</span>
              <span className="rounded-full outline px-2 py-1">Tailwind</span>
              <span className="rounded-full outline px-2 py-1">API</span>
            </div>
          </div>
        </div>

        {/* <!-- Projekt 2 --> */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <a
            href="https://gregorschulze.github.io/rentenplaner/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rentenplaner - BTC- und ETF-Rentenrechner besuchen"
          >
            <img
              className="shadow-lg rounded-xl ease-in-out hover:scale-90"
              src="/img/rentenplaner.jpg"
              alt="Rentenplaner - BTC- und ETF-Rentenrechner"
            />
          </a>
          <div className="">
            <h3 className="text-3xl font-semibold pt-4 pb-2">Rentenplaner</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm pb-3">
              BTC- und ETF-Sparplanrechner als installierbare Web-App (PWA).
              Entstanden per Vibecoding, also KI-gestützt entwickelt.
            </p>
            <div className="text-gray-600  dark:text-gray-400 text-xs flex flex-wrap gap-2">
              <span className="rounded-full outline px-2 py-1">React</span>
              <span className="rounded-full outline px-2 py-1">TypeScript</span>
              <span className="rounded-full outline px-2 py-1">Vite</span>
              <span className="rounded-full outline px-2 py-1">PWA</span>
              <span className="rounded-full outline px-2 py-1 font-semibold text-black dark:text-white">
                Vibecoding
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
