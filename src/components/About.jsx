import { about } from "../content";
import { Section } from "./Section";

const photo = "/img/gregor-schulze.jpg";

// Foto als Hintergrund statt <img>: kein „Bild speichern unter“, kein Ziehen,
// kein Rechtsklick-Menü. Ein Screenshot bleibt immer möglich.
function Photo({ className, decorative }) {
  return (
    <div
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Gregor Schulze"}
      aria-hidden={decorative ? "true" : undefined}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className={`aspect-[4/5] bg-cover bg-top bg-no-repeat select-none [-webkit-touch-callout:none] ${className}`}
      style={{ backgroundImage: `url(${photo})` }}
    />
  );
}

export function About() {
  return (
    <Section id="about" label="About">
      <Photo className="mt-6 block w-32 rounded-[14px] md:hidden" />
      <p className="mt-6 font-display text-[26px] leading-[1.2] tracking-[-0.01em] text-balance md:mt-0 md:text-[40px] md:leading-[1.15]">
        {about.lead}
      </p>
      <Photo className="float-right mt-7 mb-6 ml-12 hidden w-[200px] rounded-2xl md:block" />
      {about.paragraphs.map((t, i) => (
        <p
          key={i}
          className={`max-w-[600px] text-[17px] leading-[1.6] text-muted md:text-lg ${i === 0 ? "mt-5 md:mt-7" : "mt-3.5 md:mt-4"}`}
        >
          {t}
        </p>
      ))}
      <div className="clear-both mt-9 border-t border-line md:mt-14">
        {about.tools.map(([label, value]) => (
          <div
            key={label}
            className="border-b border-line py-4 text-base leading-normal md:grid md:grid-cols-[160px_minmax(0,1fr)] md:gap-6 md:py-5 md:text-[17px]"
          >
            <div className="text-sm text-muted md:text-[17px]">{label}</div>
            <div className="mt-1 md:mt-0">{value}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
