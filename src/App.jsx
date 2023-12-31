import { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";

import Lenis from "@studio-freight/lenis";
import "./components/Components.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
