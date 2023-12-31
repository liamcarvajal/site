//import React from "react";
//import Card from "../components/Card";
import CardPreview from "../components/CardPreview.jsx";
import "./index.css";
import site from "../assets/site.jpg";
import image from "../assets/placeholda.jpeg";
//import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const items = [
    {
      id: "1",
      title: "Portfolio Piece",
      subtitle: "Web Project",
      description:
        "• Used JSX and CSS along with React to create a portfolio piece for fun" +
        "\n• Optimized my React app with development environment technology, Vite" +
        "\n• Studied documentation from JavaScript libraries such as Three.js, Framer Motion, and GSAP to implement creative-coding techniques" +
        "\n• Used cloud computing to host the website on a managed Ubuntu VPS, and secured it with ssh, https, and a firewall",
      tags: ["React.js", "JSX", "CSS", "Vite", "Three.js", "Motion"],
      image: site,
    },
    {
      id: "2",
      title: "Card 2",
      subtitle: "Information 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [],
      image: image,
    },
  ];

  return (
    <>
      <div id="projects">
        <section className="page">
          <h1 className="page-header">[ PROJECTS ]</h1>
          <div className="card-container">
            <div>
              <CardPreview data={items[0]} key={items[0].id} />
            </div>
            <div>
              <CardPreview data={items[1]} key={items[1].id} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
