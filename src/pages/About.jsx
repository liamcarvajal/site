//import React from 'react'
import AboutText from "../components/AboutText";
import Scene from "../components/Scene";
//import Reveal from "../components/Reveal";

function About() {
  return (
    <>
      <div id="about">
        <section className="page">
          <div className="about-section">
            <h1 className="page-header2">[ ABOUT ]</h1>
            <AboutText />
            <Scene />
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
