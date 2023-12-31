//import React from 'react'

import Taglist from "./Taglist";
import "./Components.css";
import { IoClose } from "react-icons/io5";

function Card({ data, close }) {
  const { title, subtitle, description, tags, image } = data;
  return (
    <>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <img className="card-img" src={image} alt="image" />
        <div className="card-body">
          {/* links in the top right */}
          <h3 className="card-title">{title}</h3>
          <h3 className="card-subtitle">{subtitle}</h3>
          <p className="card-description">{description}</p>
          <div className="card-tags">
            <Taglist tags={tags} />
          </div>
        </div>
        <button className="close-container">
          <IoClose className="close-icon" onClick={close} />
        </button>
      </div>
    </>
  );
}

export default Card;
