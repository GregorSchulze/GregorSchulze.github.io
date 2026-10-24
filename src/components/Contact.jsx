import { links } from "../content";

export function Contact() {
  return (
    <section
      id="contact"
      className="mt-4 rounded-xl bg-accent px-6 pt-12 pb-10 text-onaccent md:mt-6 md:rounded-[14px] md:px-14 md:pt-[88px] md:pb-[72px]"
    >
      <h2 className="m-0 font-display text-[52px] leading-none font-normal tracking-[-0.02em] md:text-[88px]">Let’s talk.</h2>
      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[17px] md:mt-10 md:gap-x-8 md:text-lg">
        <a className="ul-link" href={links.mail}>Email me</a>
        <a className="ul-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="ul-link" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}
