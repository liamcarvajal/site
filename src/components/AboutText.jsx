"use client";
import "./Components.css";
import Word from "./Word";

const paragraph =
  "I was gifted my first computer at an early age. Since then, I've been captivated by technology and its boundless possibilities. Now, I'm a second-year student at Northeastern University studying computer science with a concentration in software. My passion lies in building challenging, well-designed projects and advancing my understanding of software development.";

export default function AboutText() {
  return (
    <main className="about">
      <div className="about-text">
        <Word paragraph={paragraph} />
      </div>
    </main>
  );
}
