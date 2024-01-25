//import React from "react";
import "./Components.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function Arrow() {
  const [show, setShow] = useState(true);
  const controlArrow = () => {
    if (window.scrollY > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlArrow);
    return () => {
      window.removeEventListener("scroll", controlArrow);
    };
  }, []);

  return (
    <div className={`arrow ${show && "arrow-invis"}`}>
      <motion.div
        animate={{
          transform: "translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <svg
          width="400"
          height="65"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
        >
          <g className="layer">
            <g id="svg_4">
              <rect
                fill="#ffffff"
                height="0.97"
                id="svg_1"
                stroke="#000000"
                strokeWidth="0"
                transform="matrix(0.965926 0.258819 -0.258819 0.965926 13.0441 -37.4162)"
                width="168"
                x="36.4"
                y="39.66"
              />
              <rect
                fill="#ffffff"
                height="0.97"
                id="svg_3"
                stroke="#000000"
                strokeWidth="0"
                transform="rotate(-15 281.071 32.5697)"
                width="168"
                x="197.07"
                y="32.09"
              />
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

export default Arrow;
