export function Section({ id, label, intro, children, className = "" }) {
  return (
    <section
      id={id}
      className={`border-t border-line pt-9 pb-14 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:pt-14 md:pb-20 ${className}`}
    >
      <h2 className="m-0 font-mono text-xs font-normal uppercase tracking-[0.04em] text-muted md:pt-2 md:text-[13px]">
        {label}
      </h2>
      <div>
        {intro && (
          <p className="mt-5 font-display text-[26px] leading-[1.2] tracking-[-0.01em] text-balance md:mt-0 md:text-[40px] md:leading-[1.15]">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
