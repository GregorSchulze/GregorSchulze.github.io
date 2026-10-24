import { quote } from "../content";
import { Section } from "./Section";

export function Quote() {
  return (
    <Section label="Reference" className="md:pb-24">
      <figure className="m-0 mt-5 md:mt-0">
        <blockquote className="m-0 font-display text-2xl leading-[1.3] text-pretty md:text-[32px]">{quote.text}</blockquote>
        <figcaption className="mt-5 text-sm text-muted md:mt-6 md:text-[15px]">
          <span className="font-medium text-fg">{quote.name}</span>, {quote.role}
        </figcaption>
      </figure>
    </Section>
  );
}
