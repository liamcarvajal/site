import React from "react";
import { motion } from "framer-motion-3d";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useTransform } from "framer-motion";

function Model({ mouse }) {
  return (
    <Float>
      <motion.mesh
        position={[-2, 2, 1]}
        rotation-x={useTransform(mouse.y, [0, 1], [0.1, 0.9])}
        rotation-y={useTransform(mouse.x, [0, 1], [0.1, 0.9])}
        position-x={useTransform(mouse.x, [1, 0], [-1.7, -2.3])}
        position-y={useTransform(mouse.y, [1, 0], [1.7, 2.3])}
      >
        <boxGeometry />
        <meshStandardMaterial wireframe color="white" />
      </motion.mesh>
      <motion.mesh
        position={[-3, -2.5, 0]}
        rotation-x={useTransform(mouse.y, [0, 1], [0.2, 0.8])}
        rotation-y={useTransform(mouse.x, [0, 1], [0.2, 0.8])}
        position-x={useTransform(mouse.x, [0, 1], [-3.5, -2.5])}
        position-y={useTransform(mouse.y, [1, 0], [-3, -2])}
      >
        <octahedronGeometry />
        <meshStandardMaterial wireframe color="white" />
      </motion.mesh>
      <motion.mesh
        position={[3, -0.5, 0.6]}
        rotation-x={useTransform(mouse.y, [0, 1], [0.3, 0.7])}
        rotation-y={useTransform(mouse.x, [0, 1], [0.3, 0.7])}
        position-x={useTransform(mouse.x, [0, 1], [2.8, 3.2])}
        position-y={useTransform(mouse.y, [1, 0], [-0.7, -0.3])}
      >
        <icosahedronGeometry />
        <meshStandardMaterial wireframe color="white" />
      </motion.mesh>
    </Float>
  );
}

export default Model;
