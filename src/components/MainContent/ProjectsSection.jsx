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
          >
            <img
              className="shadow-lg rounded-xl ease-in-out hover:scale-90"
              src="/img/cinetracker.jpeg"
              alt="cinetracker"
            />
          </a>
          <div className="">
            <h3 className="text-3xl font-semibold pt-4 pb-2">Cinetracker</h3>
            <div className="text-gray-600  dark:text-gray-400 text-xs flex flex-wrap gap-2">
              <span className="rounded-full outline px-2 py-1">React</span>
              <span className="rounded-full outline px-2 py-1">Vite</span>
              <span className="rounded-full outline px-2 py-1">Tailwind</span>
              <span className="rounded-full outline px-2 py-1">API</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <a href="https://GregorSchulze.github.io/todo-list/" target="_blank">
            <img
              className="shadow-lg rounded-xl ease-in-out hover:scale-90"
              src="/img/doit.jpg"
              alt="todo-app"
            />
          </a>
          <div className="">
            <h3 className="text-3xl font-semibold pt-4 pb-2">Do It</h3>
            <div className="text-gray-600  dark:text-gray-400 text-xs flex flex-wrap gap-2">
              <span className="rounded-full outline px-2 py-1">React</span>
              <span className="rounded-full outline px-2 py-1">JSX</span>
              <span className="rounded-full outline px-2 py-1">Vite</span>
              <span className="rounded-full outline px-2 py-1">Tailwind</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <a
            href="https://gregorschulze.github.io/guess-the-phrase-game/"
            target="_blank"
          >
            <img
              className="shadow-lg rounded-xl ease-in-out hover:scale-90"
              src="/img/gameshow.jpg"
              alt="guessing-game"
            />
          </a>
          <div className="">
            <h3 className="text-3xl font-semibold pt-4 pb-2">Rate Spiel</h3>
            <div className="text-gray-600  dark:text-gray-400 text-xs flex flex-wrap gap-2">
              <span className="rounded-full outline px-2 py-1">HTML</span>
              <span className="rounded-full outline px-2 py-1">CSS</span>
              <span className="rounded-full outline px-2 py-1">JavaScript</span>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <a
            href="https://gregorschulze.github.io/directory-of-employees-using-API/"
            target="_blank"
          >
            <img
              className="shadow-lg rounded-xl ease-in-out hover:scale-90"
              src="/img/directory.jpg"
              alt="worker-directory"
            />
          </a>
          <div className="">
            <h3 className="text-3xl font-semibold pt-4 pb-2">
              Mitarbeiterverzeichnis
            </h3>
            <div className="text-gray-600  dark:text-gray-400 text-xs flex flex-wrap gap-2">
              <span className="rounded-full outline px-2 py-1">HTML</span>
              <span className="rounded-full outline px-2 py-1">CSS</span>
              <span className="rounded-full outline px-2 py-1">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
