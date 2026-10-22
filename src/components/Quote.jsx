import { quote } from "../content";

export function Quote() {
  return (
    <section className="grid gap-x-10 gap-y-4 border-t border-line pt-10 pb-16 md:grid-cols-[200px_minmax(0,1fr)] md:pt-14 md:pb-24">
      <h2 className="pt-2 font-mono text-xs font-normal uppercase tracking-[0.04em] text-muted md:text-[13px]">
        Stimme
      </h2>
      <figure className="m-0">
        <blockquote className="m-0 font-display text-2xl leading-[1.3] text-pretty md:text-[32px]">
          {quote.text}
        </blockquote>
        <figcaption className="mt-5 text-sm text-muted md:mt-6 md:text-[15px]">
          <span className="font-medium text-fg">{quote.name}</span>,{" "}
          {quote.role}
        </figcaption>
      </figure>
    </section>
  );
}
