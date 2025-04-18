import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeProvider } from "./components/Context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DarkModeProvider>
);
