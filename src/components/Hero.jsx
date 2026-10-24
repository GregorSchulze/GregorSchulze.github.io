import { hero } from "../content";

export function Hero() {
  return (
    <header className="py-[72px] md:py-[120px]">
      <h1 className="m-0 font-display text-[64px] leading-[0.96] font-normal tracking-[-0.02em] md:text-[112px] md:leading-[0.95]">
        {hero.title}
      </h1>
      <p className="mt-6 max-w-[620px] text-lg leading-normal text-muted md:mt-9 md:text-[22px]">{hero.text}</p>
      <div className="mt-7 flex gap-6 text-base md:mt-9 md:gap-7">
        <a className="ul-link" href="#contact">Contact</a>
        <a className="ul-link" href="#work">Projects</a>
      </div>
    </header>
  );
}
