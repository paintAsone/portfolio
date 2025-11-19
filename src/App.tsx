import React, { useState } from "react";

import "./App.css";
import Loading from "./components/Loading";
import Navbar from "./components/navbar/Navbar";
import NavbarMobileMenu from "./components/navbar/NavbarMobileMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}

      {/* Pages */}
      <div
        className={`min-h-screen transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavbarMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
