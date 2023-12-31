import React, { useState } from "react";
import "./Components.css";
import Overlay from "./Overlay.jsx";
import CardImage from "./CardImage.jsx";
import Card from "./Card.jsx";
import { motion, animate, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Taglist from "./Taglist";

function CardPreview({ data, key }) {
  const { title, subtitle, description, tags, image } = data;
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openCard = () => {
    setOpen(true);
  };

  const closeCard = () => {
    setOpen(false);
  };

  return (
    <>
      <CardImage image={data.image} open={openCard} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeCard}>
            <Card data={data} close={closeCard} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}

export default CardPreview;
