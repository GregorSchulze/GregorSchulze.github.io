import { hero } from "../content";

export function Hero() {
  return (
    <header className="pt-20 pb-24 md:pt-[120px] md:pb-[120px]">
      <h1 className="m-0 font-display text-[clamp(60px,10vw,112px)] leading-[0.95] font-normal tracking-[-0.02em]">
        {hero.title[0]}{" "}
        <em className="text-accent">{hero.title[1]}</em>
      </h1>
      <p className="mt-6 max-w-[620px] text-lg leading-normal text-muted md:mt-9 md:text-[22px] md:leading-[1.5]">
        {hero.text}
      </p>
      <div className="mt-7 flex gap-6 text-base md:mt-9 md:gap-7">
        <a className="ul-link" href="#contact">
          Kontakt
        </a>
        <a className="ul-link" href="#projects">
          Projekte
        </a>
      </div>
    </header>
  );
}
