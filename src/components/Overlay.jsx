import React from "react";
import "./Overlay.css";

function Overlay({ children, close }) {
  return (
    <div className="overlay" onClick={close}>
      {children}
    </div>
  );
}

export default Overlay;
