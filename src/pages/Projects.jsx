//import React from "react";
//import Card from "../components/Card";
import CardPreview from "../components/CardPreview.jsx";
import "./index.css";
import site from "../assets/site.png";
import tracker from "../assets/tracker.png";
import image from "../assets/placeholda.jpeg";
//import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const items = [
    {
      id: "1",
      title: "Portfolio Piece",
      subtitle: "Web Project",
      description:
        "• Used JSX and CSS along with React to create a portfolio piece from scratch" +
        "\n• Optimized my React app with development environment technology, Vite" +
        "\n• Studied documentation from JavaScript libraries such as Three.js, Framer Motion, and GSAP to implement creative-coding techniques" +
        "\n• Used cloud computing to host the website on a managed Ubuntu VPS running nginx, and secured it with ssh, https, and a firewall",
      tags: ["React.js", "JSX", "CSS", "Vite", "Three.js", "Motion"],
      image: site,
    },
    {
      id: "2",
      title: "Nutrition Tracker",
      subtitle: "Full-Stack Web Application",
      description:
        "• Developed a python web app that allows users to input their daily meals using Django" +
        "\n• Integrated Spoonacular API to use natural language processing to retrieve meal nutrition and warn users of high and low nutrient consumption" +
        "\n• Implemented a database using PostgreSQL to store monthly consumed nutrition" +
        "\n• Used Chart.js to create a graph comparing the user’s monthly consumed nutrition to the recommended daily value according to their height and weight",
      tags: ["Django", "Python", "PostgreSQL", "Chart.js", "JavaScript"],
      image: tracker,
    },
  ];

  return (
    <>
      <div id="projects">
        <section className="page">
          <h1 className="page-header">[ PROJECTS ]</h1>
          <div className="card-container">
            <div>
              <CardPreview data={items[0]} id={items[0].id} />
            </div>
            <div>
              <CardPreview data={items[1]} id={items[1].id} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
