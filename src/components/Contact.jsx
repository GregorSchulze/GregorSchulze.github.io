import { links } from "../content";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line pt-14 pb-10 md:pt-24 md:pb-14"
    >
      <h2 className="m-0 font-display text-[clamp(52px,8vw,88px)] leading-none font-normal tracking-[-0.02em]">
        Lass uns <em className="text-accent">kennenlernen.</em>
      </h2>
      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[17px] md:mt-10 md:gap-x-8 md:text-lg">
        <a className="ul-link" href={links.mail}>
          E-Mail schreiben
        </a>
        <a
          className="ul-link"
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="ul-link"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="ul-link"
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
