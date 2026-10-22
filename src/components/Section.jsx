export function Section({ id, label, intro, children }) {
  return (
    <section
      id={id}
      className="grid gap-x-10 gap-y-4 border-t border-line pt-10 pb-16 md:grid-cols-[200px_minmax(0,1fr)] md:pt-14 md:pb-20"
    >
      <h2 className="pt-2 font-mono text-xs font-normal uppercase tracking-[0.04em] text-muted md:text-[13px]">
        {label}
      </h2>
      <div>
        {intro && (
          <p className="font-display text-[30px] leading-[1.18] tracking-[-0.01em] text-balance md:text-[40px] md:leading-[1.15]">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
