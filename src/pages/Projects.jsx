import React, { useState, useRef, useEffect, useCallback } from "react";
//import Card from "../components/Card";
import CardPreview from "../components/CardPreview.jsx";
import "./index.css";
import site from "../assets/site.png";
import tracker from "../assets/tracker.png";
import image from "../assets/placeholda.jpeg";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 6;
  const sectionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isScrolling = useRef(false);

  const handlePageChange = useCallback((newPage) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  }, [currentPage]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };
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
  ];

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPrevPage = useCallback(() => {
    if (currentPage > 0) {
      handlePageChange(currentPage - 1);
    }
  }, [currentPage, handlePageChange]);

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      handlePageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, handlePageChange]);

  // Handle horizontal swipe/scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          // Swiped left - go to next page
          goToNextPage();
        } else {
          // Swiped right - go to prev page
          goToPrevPage();
        }
      }
    };

    const handleWheel = (e) => {
      // Only handle horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
        e.preventDefault(); // Prevent page from physically scrolling
        
        if (isScrolling.current) return;
        isScrolling.current = true;

        if (e.deltaX > 0) {
          goToNextPage();
        } else {
          goToPrevPage();
        }

        // Debounce to prevent rapid page changes
        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    };

    section.addEventListener('touchstart', handleTouchStart, { passive: true });
    section.addEventListener('touchmove', handleTouchMove, { passive: true });
    section.addEventListener('touchend', handleTouchEnd);
    section.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      section.removeEventListener('touchstart', handleTouchStart);
      section.removeEventListener('touchmove', handleTouchMove);
      section.removeEventListener('touchend', handleTouchEnd);
      section.removeEventListener('wheel', handleWheel);
    };
  }, [goToNextPage, goToPrevPage]);

  return (
    <>
      <div id="projects">
        <section className="page" ref={sectionRef}>
          <h1 className="page-header">[ PROJECTS ]</h1>
          
          {/* Left Arrow - only show if not on first page */}
          {currentPage > 0 && (
            <motion.button
              className="nav-arrow nav-arrow-left"
              onClick={goToPrevPage}
              aria-label="Previous page"
              animate={{ x: [0, -4, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <svg
                width="60"
                height="120"
                viewBox="0 0 60 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="45"
                  y1="10"
                  x2="15"
                  y2="60"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="15"
                  y1="60"
                  x2="45"
                  y2="110"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </motion.button>
          )}

          {/* Right Arrow - only show if not on last page */}
          {currentPage < totalPages - 1 && (
            <motion.button
              className="nav-arrow nav-arrow-right"
              onClick={goToNextPage}
              aria-label="Next page"
              animate={{ x: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <svg
                width="60"
                height="120"
                viewBox="0 0 60 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="15"
                  y1="10"
                  x2="45"
                  y2="60"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="45"
                  y1="60"
                  x2="15"
                  y2="110"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </motion.button>
          )}

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              className="card-container"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentItems.map((item) => (
                <div key={item.id}>
                  {item.isPlaceholder ? (
                    <div className="card-preview-placeholder"></div>
                  ) : (
                    <CardPreview data={item} id={item.id} />
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${currentPage === index ? "active" : ""}`}
                onClick={() => handlePageChange(index)}
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
