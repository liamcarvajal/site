//import React from "react";
import Header from "../components/Header";
import { About, Projects, Contact } from "../pages";

function Home() {
  return (
    <>
      <div>
        <Header />
        <section className="section-about">
          <About />
        </section>
        <section className="section-projects">
          <Projects />
        </section>
        <section className="section-contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default Home;
