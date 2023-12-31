import React from "react";
import "./Components.css";
import { motion } from "framer-motion";

function CardImage({ image, open }) {
  return (
    <motion.div
      className="card-preview"
      onClick={open}
      whileHover={{ scale: 1.05 }}
    >
      <img className="card-img-preview" src={image} alt="image" />
    </motion.div>
  );
}

export default CardImage;
