import { useState } from "react";
import "./index.css";
import { Nav } from "./components/Nav/Nav";
import { MainContent } from "./components/MainContent/MainContent";
import { Footer } from "./components/Footer/Footer";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-[#212124]">
        <div className="max-w-[1400px] mx-auto px-10">
          <Nav />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
