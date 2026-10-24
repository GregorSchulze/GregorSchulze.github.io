const items = [
  ["#about", "About"],
  ["#work", "Projects"],
  ["#cv", "Experience"],
];

export function Nav() {
  return (
    <nav className="flex h-16 items-center justify-between md:h-20">
      <a href="#top" className="text-base font-semibold tracking-[-0.01em] text-fg no-underline">
        Gregor Schulze
      </a>
      <div className="hidden items-center gap-7 md:flex">
        {items.map(([href, label]) => (
          <a key={href} href={href} className="text-sm text-muted no-underline transition-colors hover:text-fg">
            {label}
          </a>
        ))}
      </div>
      <a href="#contact" className="text-sm text-accent no-underline md:hidden">
        Contact
      </a>
    </nav>
  );
}
