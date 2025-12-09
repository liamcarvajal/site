import React, { useState } from "react";
//import Card from "../components/Card";
import CardPreview from "../components/CardPreview.jsx";
import "./index.css";
import site from "../assets/site.png";
import tracker from "../assets/tracker.png";
import image from "../assets/placeholda.jpeg";
//import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const items = [
    {
      id: "1",
      title: "Portfolio Piece",
      subtitle: "Web Project",
      description:
      "• I built this site from scratch because I wanted a space that reflects the creative side of software, not just the functional side.\n" +
      "• The goal was to experiment with interactive design and learn how 3D graphics and animation can shape user experience.\n" +
      "• I used React, Vite, and Three.js to create dynamic visuals and smooth interactions that make the site more engaging.\n" +
      "• I configured and deployed the finished site on a secure Ubuntu VPS using nginx, handling the full setup from networking to SSL.",
      tags: ["React.js", "JSX", "CSS", "Vite", "Three.js", "Motion"],
      image: site,
      isPlaceholder: false,
    },
    {
      id: "2",
      title: "Nutrition Tracker",
      subtitle: "Full-Stack Web Application",
      description:
      "• I built this full-stack nutrition tracker to solve a personal problem—most apps were bloated, slow, or not customizable, so I wanted something lightweight that I would actually use.\n" +
      "• The app analyzes meals using the Spoonacular API and flags nutrient highs/lows using natural language processing.\n" +
      "• I store entries in a PostgreSQL database and visualize monthly nutrition breakdowns with Chart.js so I can track trends over time.\n" +
      "• This project pushed me to think beyond just software features and focus on usability and real-world utility.",    
      tags: ["Django", "Python", "PostgreSQL", "Chart.js", "JavaScript"],
      image: tracker,
      isPlaceholder: false,
    },
    {
      id: "3",
      title: "",
      subtitle: "",
      description: "",
      tags: [],
      image: image,
      isPlaceholder: true,
    },
    {
      id: "4",
      title: "",
      subtitle: "",
      description: "",
      tags: [],
      image: image,
      isPlaceholder: true,
    },
    {
      id: "5",
      title: "",
      subtitle: "",
      description: "",
      tags: [],
      image: image,
      isPlaceholder: true,
    },
    {
      id: "6",
      title: "",
      subtitle: "",
      description: "",
      tags: [],
      image: image,
      isPlaceholder: true,
    },
    {
      id: "7",
      title: "",
      subtitle: "",
      description: "",
      tags: [],
      image: image,
      isPlaceholder: true,
    },
    {
      id: "8",
      title: "",
      subtitle: "",
      description: "",
      tags: [],
      image: image,
      isPlaceholder: true,
    },
    {
      id: "9",
      title: "",
      subtitle: "",
      description: "",
      tags: [],
      image: image,
      isPlaceholder: true,
    },
    {
      id: "10",
      title: "",
      subtitle: "",
      description: "",
      tags: [],
      image: image,
      isPlaceholder: true,
    },
  ];

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <>
      <div id="projects">
        <section className="page">
          <h1 className="page-header">[ PROJECTS ]</h1>
          <div className="card-container">
            {currentItems.map((item) => (
              <div key={item.id}>
                {item.isPlaceholder ? (
                  <div className="card-preview-placeholder"></div>
                ) : (
                  <CardPreview data={item} id={item.id} />
                )}
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${currentPage === index ? "active" : ""}`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
