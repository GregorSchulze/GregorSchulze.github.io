import { about } from "../content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="Über mich">
      <img
        src="/img/profilev3.jpeg"
        alt="Gregor Schulze"
        width="200"
        height="250"
        className="mt-6 block aspect-[4/5] w-32 rounded-[14px] object-cover object-top md:float-right md:mt-1.5 md:mb-6 md:ml-12 md:w-[200px] md:rounded-2xl"
      />
      <p className="mt-6 font-display text-[30px] leading-[1.18] tracking-[-0.01em] text-balance md:mt-0 md:text-[40px] md:leading-[1.15]">
        {about.lead}
      </p>
      {about.paragraphs.map((text, i) => (
        <p
          key={i}
          className={`max-w-[600px] text-[17px] leading-[1.6] text-muted md:text-lg ${
            i === 0 ? "mt-5 md:mt-7" : "mt-3.5 md:mt-4"
          }`}
        >
          {text}
        </p>
      ))}
      <div className="mt-9 border-t border-line md:mt-14">
        {about.tools.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 border-b border-line py-4 text-base leading-normal md:grid-cols-[160px_minmax(0,1fr)] md:gap-6 md:py-5 md:text-[17px]"
          >
            <div className="text-sm text-muted md:text-base">{label}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
