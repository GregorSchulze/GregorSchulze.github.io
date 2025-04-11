import { useState } from "react";
import { useDarkMode } from "../Context/DarkModeContext";

export function MainContent() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <main className="bg-white dark:bg-[#212124] dark:text-white ">
      <div className="lg:flex mb-20 justify-between">
        <div className="flex flex-col items-center lg:items-start lg:justify-center lg:text-left my-10">
          <h1 className="text-4xl md:text-7xl font-semibold text-black mb-2 text-center lg:text-left dark:text-white">
            Hey, ich bin Gregor
          </h1>

          <p className="text-2xl md:text-5xl font-semibold text-gray-500 mb-5 text-center lg:text-left">
            Frontend Entwickler
          </p>
          <a
            href="mailto:gr.schulze@t-online.de"
            className="rounded-full outline px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl text-white dark:text-black bg-black dark:bg-white"
          >
            Kontakt
          </a>
        </div>
        <div className="flex place-content-center mb-15">
          <img
            src="src/img/profilev3.jpg"
            className="rounded-xl w-70 md:w-110"
            alt="Gregor Schulze Profilbild"
          />
        </div>
      </div>

      <div className="group fixed bottom-10 right-[max(calc(50%-700px+40px),2.5rem)]">
        <button
          onClick={toggleDarkMode}
          className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:scale-110"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      {/* <!-- Über Mich --> */}
      <section id="about" className="mb-20 ">
        <div className="bg-[#f0f0e8] rounded-xl p-8 md:p-16 dark:bg-[#1a1a1a] text-black dark:text-white">
          <h2 className="text-center text-5xl sm:text-7xl font-semibold">
            Über Mich
          </h2>
          <p className="text-gray-500 text-center pb-5">Erfahre mehr von mir</p>

          <div className="md:flex gap-10">
            <div className="flex-1">
              <p>
                Bergliebhaber, Freiheit, Freunde und gutes Essen – das
                beschreibt mich sehr gut. In Zukunft vielleicht auch dein
                Kollege.
                <br />
                <br />
                Intrinsische Motivation für Themen , dass ich eine hohe
                intrinsiche Motivation für die Themen entwickel die mich
                interessieren. Jeder Mensch hat die Fähigkeit, viel aus seinem
                Leben zu machen. Der Schlüssel zum Erfolg liegt in Hingabe und
                Kontinuität.
                <br />
                <br />
                In den vergangenen drei Jahren arbeitete ich als Motiondesigner
                und Cutter, sowohl festangestellt als auch freiberuflich. In
                dieser Zeit habe ich viel Erfahrung im Bereich Design aber auch
              </p>
            </div>
            <div className="flex-1">
              <p>
                Ich bin ein Problemlöser und liebe es im Team aber auch allein
                zu arbeiten.
                <br />
                <br />
                In den vergangenen 12 Monaten habe ich mir die Grundlagen der
                Frontend Entwicklung in verschiedenen Projekten angeeignet. Nun
                würde ich gern tiefer in die Materie einsteigen und mein Wissen
                weiter ausbauen. Ich liebe es, Probleme zu lösen und den
                bestehenden Status quo zu hinterfragen, um Prozesse weiter zu
                optimieren.
                <br />
                <br />
                Wenn du das gefühl hast, dass die Chemie zwischen uns stimmen
                könnte, schreib mir gern. 🫶🏻
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
          praktisch anwenden.
        </p>

        <div className="grid gap-15 sm:grid-cols-2">
          {/* <!-- Projekt 1 --> */}

          <div className="">
            <a
              href="https://GregorSchulze.github.io/todo-list/"
              target="_blank"
            >
              <img
                className="shadow-lg rounded-xl"
                src="src/img/doit.jpg"
                alt="todo-app"
              />
            </a>
            <div className="">
              <h3 className="text-3xl pt-4 pb-2">Do It</h3>
              <div className="text-gray-500 text-xs flex flex-wrap gap-2">
                <span className="rounded-full outline px-2 py-1">React</span>
                <span className="rounded-full outline px-2 py-1">JSX</span>
                <span className="rounded-full outline px-2 py-1">Vite</span>
                <span className="rounded-full outline px-2 py-1">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="">
            <a
              href="https://gregorschulze.github.io/guess-the-phrase-game/"
              target="_blank"
            >
              <img
                className="shadow-lg rounded-xl"
                src="src/img/gameshow.jpg"
                alt="guessing-game"
              />
            </a>
            <div className="">
              <h3 className="text-3xl pt-4 pb-2">Rate Spiel</h3>
              <div className="text-gray-500 text-xs flex flex-wrap gap-2">
                <span className="rounded-full outline px-2 py-1">HTML</span>
                <span className="rounded-full outline px-2 py-1">CSS</span>
                <span className="rounded-full outline px-2 py-1">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <a
              href="https://gregorschulze.github.io/directory-of-employees-using-API/"
              target="_blank"
            >
              <img
                className="shadow-lg rounded-xl"
                src="src/img/directory.jpg"
                alt="worker-directory"
              />
            </a>
            <div className="">
              <h3 className="text-3xl pt-4 pb-2">Mitarbeiterverzeichnis</h3>
              <div className="text-gray-500 text-xs flex flex-wrap gap-2">
                <span className="rounded-full outline px-2 py-1">HTML</span>
                <span className="rounded-full outline px-2 py-1">CSS</span>
                <span className="rounded-full outline px-2 py-1">
                  JavaScript
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <a
              href="https://gregorschulze.github.io/interactive-dashboard/"
              target="_blank"
            >
              <img
                className="shadow-lg rounded-xl"
                src="src/img/dashboard.jpg"
                alt="dashboard"
              />
            </a>
            <div className="">
              <h3 className="text-3xl pt-4 pb-2">Dashboard</h3>
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
        <div className="text-center my-15">
          <h2 className="text-5xl sm:text-7xl font-semibold text-black pb-10 dark:text-white">
            Lass uns
            <br />
            kennenlernen
          </h2>
          <a
            href="mailto:gr.schulze@t-online.de"
            className="rounded-full outline px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl text-black dark:text-white"
          >
            Kontakt
          </a>
        </div>
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
