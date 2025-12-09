//import React from 'react'
import Form from "../components/Form";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
          </ul>
          <Form />
        </section>
      </div>
      <div className="divider"></div>
      <div className="footer">
        <p className="text">Liam Carvajal ©2026 | liam.carvajal@gmail.com</p>
      </div>
    </>
  );
}

export default Contact;
