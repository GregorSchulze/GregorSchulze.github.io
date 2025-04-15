import { useState } from "react";
import { useEffect } from "react";
import { useDarkMode } from "../Context/DarkModeContext";
import "../../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode } from "react-icons/fa";
import { CiMountain1 } from "react-icons/ci";
import { VscFlame } from "react-icons/vsc";

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
      <div className="lg:flex mb-20 justify-between">
        <div className="flex flex-col items-center lg:items-start lg:justify-center lg:text-left my-10 ">
          <h1 className="text-4xl md:text-7xl font-semibold text-black mb-2 text-center lg:text-left dark:text-white">
            Hey, ich bin Gregor
          </h1>

          <p className="text-2xl md:text-5xl font-semibold text-gray-500 mb-5 text-center lg:text-left">
            Frontend Entwickler
          </p>
          <a
            href="mailto:gr.schulze@t-online.de"
            className="rounded-full outline px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl text-white dark:text-black bg-black dark:bg-white hover:scale-110"
          >
            Kontakt
          </a>
        </div>
        <div className="flex place-content-center mb-15">
          <img
            src="/img/profilev3.jpg"
            className="rounded-xl w-70 md:w-110 fade-in-slow"
            alt="Gregor Schulze Profilbild"
          />
        </div>
      </div>

      <div className="group z-1 fixed bottom-10 right-[max(calc(50%-1000px+40px),2.5rem)]">
        <button
          onClick={toggleDarkMode}
          className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      {/* <!-- Über Mich --> */}
      <section id="about" className="mb-20 ">
        <div className="bg-[#f0f0e8] rounded-xl p-8 md:p-16 dark:bg-[#1a1a1a] text-black dark:text-white">
          <div className="mb-5">
            <h2 className="text-center text-5xl sm:text-7xl font-semibold">
              Über Mich
            </h2>
            <p className="text-gray-500 text-center pb-5">
              Erfahre, was mich antreibt
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-5 sm:justify-between ">
            <div className="sm:flex-1">
              <VscFlame size={50} color="currentColor" />
              <h2 className="text-3xl font-semibold">Motivation</h2>
              <p className="text-gray-500">
                Ich liebe es, mich weiterzuentwickeln. <br></br> Denn der ich
                finde der Schlüssel zum Erfolg liegt in Hingabe und Kontinuität.
              </p>
            </div>
            <div className="sm:flex-1">
              <FaCode size={50} color="currentColor" />
              <h2 className="text-3xl font-semibold">WebDev</h2>
              <p className="text-gray-500">
                Ich baue moderne Web-Apps mit React - clean, performant und
                nutzerfreundlich.
              </p>
            </div>

            <div className="sm:flex-1">
              <CiMountain1 size={50} color="currentColor" />
              <h2 className="text-3xl font-semibold">Bergliebhaber</h2>
              <p className="text-gray-500">
                Meine Freizeit verbringe ich am liebsten in den Bergen. Wenn ich
                also nicht gerade an Frontends sitze, findet ihr mich auf dem
                nächsten Gipfel.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Projekte --> */}
      <section id="work" className="mb-20 text-black pb-1 dark:text-white">
        <h2 className="text-center text-5xl sm:text-7xl font-semibold">
          Projekte
        </h2>

        <p className="text-gray-500 text-center pb-10 max-w-2xl mx-auto py-2">
          Durch die eigenständige Entwicklung privater Projekte konnte ich meine
          Fähigkeiten in Frontend-Entwicklung und Design gezielt erweitern und
          praktisch anwenden
        </p>

        <div className="grid gap-15 sm:grid-cols-2">
          {/* <!-- Projekt 1 --> */}

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
            <a
              href="https://GregorSchulze.github.io/todo-list/"
              target="_blank"
            >
              <img
                className="shadow-lg rounded-xl ease-in-out hover:scale-90"
                src="/img/doit.jpg"
                alt="todo-app"
              />
            </a>
            <div className="">
              <h3 className="text-3xl font-semibold pt-4 pb-2">Do It</h3>
              <div className="text-gray-500 text-xs flex flex-wrap gap-2">
                <span className="rounded-full outline px-2 py-1">React</span>
                <span className="rounded-full outline px-2 py-1">JSX</span>
                <span className="rounded-full outline px-2 py-1">Vite</span>
                <span className="rounded-full outline px-2 py-1">Tailwind</span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
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
              <div className="text-gray-500 text-xs flex flex-wrap gap-2">
                <span className="rounded-full outline px-2 py-1">HTML</span>
                <span className="rounded-full outline px-2 py-1">CSS</span>
                <span className="rounded-full outline px-2 py-1">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
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
              <div className="text-gray-500 text-xs flex flex-wrap gap-2">
                <span className="rounded-full outline px-2 py-1">HTML</span>
                <span className="rounded-full outline px-2 py-1">CSS</span>
                <span className="rounded-full outline px-2 py-1">
                  JavaScript
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <a
              href="https://gregorschulze.github.io/interactive-dashboard/"
              target="_blank"
            >
              <img
                className="shadow-lg rounded-xl ease-in-out hover:scale-90"
                src="/img/dashboard.jpg"
                alt="dashboard"
              />
            </a>
            <div className="">
              <h3 className="text-3xl font-semibold pt-4 pb-2">Dashboard</h3>
              <div className="text-gray-500 text-xs flex flex-wrap gap-2">
                <span className="rounded-full outline px-2 py-1">HTML</span>
                <span className="rounded-full outline px-2 py-1">CSS</span>
                <span className="rounded-full outline px-2 py-1">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Kontakt --> */}
      <section
        id="contact"
        className="bg-[#f0f0e8] dark:bg-[#1a1a1a] rounded-xl p-8 md:p-16"
      >
        <div className="text-center my-15 flex flex-col items-center">
          <h2 className="text-5xl sm:text-7xl font-semibold text-black pb-10 dark:text-white">
            Lass uns
            <br />
            kennenlernen
          </h2>
          <a
            href="mailto:gr.schulze@t-online.de"
            className="rounded-full outline px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl text-black dark:text-white hover:scale-110"
          >
            Kontakt
          </a>
        </div>
        <div className="flex flex-col"></div>
      </section>
      {/* <!-- Testimonials --> */}
      <div className="flex justify-center">
        <div className="text-center text-black dark:text-white my-20 text-2xl max-w-xl mx-auto ">
          <p>
            „Aufgrund seiner ausgezeichneten Auffassungsgabe ist er jederzeit in
            der Lage, auch schwierige Situationen sofort zutreffend zu erfassen
            und schnell exzellente Lösungen zu finden. Auch in Situationen mit
            größtem Arbeitsaufkommen erweist er sich dauerhaft als
            außergewöhnlich belastbar.“
          </p>
          <h5 className="text-xl font-bold">Katrin Brandt</h5>
          <p className="text-xs text-gray-500">
            SVP Weber Shandwick, ehemalige Chefin
          </p>
        </div>
      </div>
    </main>
  );
}
