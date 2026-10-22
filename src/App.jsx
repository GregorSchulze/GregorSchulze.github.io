import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Cv } from "./components/Cv";
import { Quote } from "./components/Quote";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Cv />
          <Quote />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
