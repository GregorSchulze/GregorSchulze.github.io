import { useDarkMode } from "../context/DarkModeContext";

const items = [
  ["#about", "Über mich"],
  ["#projects", "Projekte"],
  ["#cv", "Werdegang"],
  ["#contact", "Kontakt", true],
];

export function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className="flex min-h-16 flex-wrap items-center justify-between gap-x-8 gap-y-2 py-4 md:h-20 md:py-0">
      <a
        href="#top"
        className="text-base font-semibold tracking-[-0.01em] text-fg no-underline"
      >
        Gregor Schulze
      </a>
      <div className="flex items-center gap-5 text-sm md:gap-7">
        {items.map(([href, label, always]) => (
          <a
            key={href}
            href={href}
            className={`text-muted no-underline transition-colors hover:text-fg ${
              always ? "" : "hidden md:inline"
            }`}
          >
            {label}
          </a>
        ))}
        <button
          type="button"
          onClick={toggleDarkMode}
          aria-pressed={darkMode}
          className="cursor-pointer text-muted transition-colors hover:text-fg"
        >
          {darkMode ? "Hell" : "Dunkel"}
        </button>
      </div>
    </nav>
  );
}
