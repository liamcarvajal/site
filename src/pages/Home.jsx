//import React from "react";
import Header from "../components/Header";
import { About, Projects, Contact } from "../pages";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <div>
        <Header />
        <section className="section-about">
          <Fade duration="1500">
            <About />
          </Fade>
        </section>
        <section className="section-projects">
          <Fade>
            <Projects />
          </Fade>
        </section>
        <section className="section-contact">
          <Fade>
            <Contact />
          </Fade>
        </section>
      </div>
    </>
  );
}

export default Home;
