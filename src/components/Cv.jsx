import { cv } from "../content";
import { Section } from "./Section";

export function Cv() {
  return (
    <Section id="cv" label="Werdegang" intro={cv.intro}>
      <ol className="m-0 mt-7 list-none border-t border-line p-0 md:mt-10">
        {cv.items.map((item) => (
          <li
            key={item.date + item.title}
            className="grid gap-2 border-b border-line py-[22px] md:grid-cols-[170px_minmax(0,1fr)] md:gap-6 md:py-7"
          >
            <div className="pt-0.5 font-mono text-xs text-muted md:pt-1 md:text-[13px]">
              {item.date}
            </div>
            <div>
              <h3 className="m-0 text-lg leading-[1.3] font-semibold tracking-[-0.015em] md:text-xl">
                {item.title}
              </h3>
              {item.text && (
                <p className="mt-2 text-base leading-normal text-muted md:text-[17px]">
                  {item.text}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
