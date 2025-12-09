"use client";
import "./Components.css";
import Word from "./Word";

const paragraph =
  "I’ve been obsessed with computers since I received my first one as a kid, and that curiosity eventually led me to study computer science at Northeastern. I’m especially drawn to software because I love building projects that solve real problems and push me to learn new skills. Right now, I’m focusing on developing well-designed, reliable systems and constantly improving how I build and think about software.";

export default function AboutText() {
  return (
    <main className="about">
      <div className="about-text">
        <Word paragraph={paragraph} />
      </div>
    </main>
  );
}
