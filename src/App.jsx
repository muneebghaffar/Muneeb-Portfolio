import { BrowserRouter, Route } from "react-router-dom";
import {
  About,
  Experience,
  Hero,
  Navbar,
  Works,
  Parallax,
  Contact,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <section className="md:h-screen h-[70vh] md:mb-20 m-0 overflow-hidden">
          <Parallax type="services" />
        </section>
        <About />
        <Experience />
        <Works />
        <section className="md:h-screen h-[70vh] my-10 overflow-hidden">
          <Parallax />
        </section>
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
