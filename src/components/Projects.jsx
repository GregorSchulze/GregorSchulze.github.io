import { projects } from "../content";
import { Section } from "./Section";

function Thumb({ item }) {
  return (
    <div
      className={`relative aspect-[224/120] w-full overflow-hidden rounded-[10px] md:w-[224px] ${
        item.crop ? "border border-line bg-[#f6f5f3]" : "bg-[#0f172a]"
      }`}
    >
      {item.crop ? (
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="absolute top-0 left-[-81%] block w-[270%] max-w-none"
        />
      ) : (
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="block h-full w-full max-w-none object-cover object-top"
        />
      )}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" label="Eigene Projekte" intro={projects.intro}>
      <div className="mt-7 border-t border-line md:mt-10">
        {projects.items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-b border-line py-6 text-fg no-underline md:grid md:grid-cols-[224px_minmax(0,1fr)] md:gap-8 md:py-8"
          >
            <Thumb item={item} />
            <div className="mt-5 md:mt-0">
              <h3 className="m-0 text-[21px] leading-tight font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent md:text-[22px]">
                {item.title}{" "}
                <span
                  aria-hidden="true"
                  className="inline-block text-muted transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                >
                  ↗
                </span>
              </h3>
              <p className="mt-2 text-base leading-normal text-muted md:text-[17px]">
                {item.text}
              </p>
              <p className="mt-3 font-mono text-xs text-muted md:text-[13px]">
                {item.tags}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
