//import React from 'react'
import "./Components.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <div className="name-container">
        <Link
          activeClass="active"
          className="link"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <h4 className="header-name">LIAM CARVAJAL</h4>
        </Link>
      </div>
      <div className="links-container">
        <li className="bullet"></li>
        <li className="bullet">
          <Link
            activeClass="active"
            className="link"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li className="bullet">
          <Link
            activeClass="active"
            className="link"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li className="bullet">
          <Link
            activeClass="active"
            className="link"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </div>
    </div>
  );
}

{
  /* <div className="links">
          <HashLink to="#topp" className="link">
            Home
          </HashLink>
          <HashLink to="#about" className="link">
            About
          </HashLink>
          <HashLink to="#projects" className="link">
            Projects
          </HashLink>
          <HashLink to="#contact" className="link">
            Contact
          </HashLink>
        </div> */
}

export default Navbar;
