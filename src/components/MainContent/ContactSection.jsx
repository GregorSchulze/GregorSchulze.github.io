import React from "react";

export function ContactSection() {
  return (
    <section
      className="bg-[#f0f0e8] dark:bg-[#1a1a1a] rounded-xl p-8 md:p-16"
      data-aos="fade-up"
      data-aos-delay="400"
      id="about"
    >
      <div className="text-center my-15 flex flex-col items-center">
        <h2 className="text-5xl sm:text-7xl font-semibold text-black pb-10 dark:text-white">
          Lass uns
          <br />
          kennenlernen
        </h2>
        <a
          href="mailto:gr.schulze@t-online.de"
          className="rounded-full outline px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl text-black  dark:text-white hover:scale-110"
        >
          Kontakt
        </a>
      </div>
      <div className="flex flex-col"></div>
    </section>
  );
}
