import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext({ darkMode: false, toggleDarkMode() {} });

export const useDarkMode = () => useContext(DarkModeContext);

function readInitial() {
  try {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true" || saved === "false") return saved === "true";
  } catch {
    // Speicher nicht verfügbar, Systemeinstellung verwenden
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(readInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("darkMode", String(darkMode));
    } catch {
      // ignorieren
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
