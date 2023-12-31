//import React from 'react'
import Form from "../components/Form";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div id="contact">
        <section className="page-contact">
          <h1 className="page-header">[ CONTACT ]</h1>
          <h1 className="connect">LET'S CONNECT!</h1>
          <ul className="socials">
            <li className="logo">
              <Link
                to="https://www.linkedin.com/in/liamcarvajal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin color="white" fontSize="2em" />
              </Link>
            </li>
            <li className="logo">
              <Link
                to="https://github.com/liamcarvajal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="white" fontSize="2em" />
              </Link>
            </li>
            <li className="logo">
              <Link
                to="https://www.instagram.com/liam_carvajal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="white" fontSize="2em" />
              </Link>
            </li>
          </ul>
          <Form />
        </section>
      </div>
      <div className="divider">
        <svg
          width="1470"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
        >
          <g class="layer">
            <title>Layer 1</title>
            <rect
              fill="#ffffff"
              height="0.37"
              id="svg_3"
              stroke="#000000"
              stroke-width="0"
              width="1447"
              x="11.5"
              y="9.51"
            />
          </g>
        </svg>
      </div>
      <div className="footer">
        <p className="text">Liam Carvajal ©2024 | liam.carvajal@gmail.com</p>
      </div>
    </>
  );
}

export default Contact;
