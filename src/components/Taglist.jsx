//import React from "react";
import "./Components.css";
/* eslint-disable react/prop-types */

function Taglist({ tags }) {
  return (
    <>
      <div>
        <div className="taglist">
          {tags.map((tag, i) => (
            <p className="tag" key={i}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Taglist;
