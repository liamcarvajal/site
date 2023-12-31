"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import "./Components.css";
import React from "react";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import Model from "./Model";

function Scene() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  };

  const manageMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, []);

  return (
    <div id="canvas-container" className="canvas-container">
      <Canvas>
        <Model mouse={smoothMouse} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}

export default Scene;
