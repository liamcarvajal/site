import React from "react";
import { motion } from "framer-motion-3d";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useTransform } from "framer-motion";

function Model({ mouse }) {
  return (
    <Float>
      {/* Box - slow rotation, medium position movement */}
      <motion.mesh
        position={[-2, 2, 1]}
        rotation-x={useTransform(mouse.y, [0, 1], [0, 0.5])}
        rotation-y={useTransform(mouse.x, [0, 1], [0, 0.5])}
        rotation-z={useTransform(mouse.x, [0, 1], [0, 0.3])}
        position-x={useTransform(mouse.x, [1, 0], [-1.5, -2.5])}
        position-y={useTransform(mouse.y, [1, 0], [1.5, 2.5])}
      >
        <boxGeometry />
        <meshStandardMaterial wireframe color="white" />
      </motion.mesh>
      {/* Octahedron - fast spin, inverted movement */}
      <motion.mesh
        position={[-3, -2.5, 0]}
        rotation-x={useTransform(mouse.y, [0, 1], [-1, 2])}
        rotation-y={useTransform(mouse.x, [0, 1], [-1, 2])}
        rotation-z={useTransform(mouse.y, [0, 1], [0, 1.5])}
        position-x={useTransform(mouse.x, [1, 0], [-3.8, -2.2])}
        position-y={useTransform(mouse.y, [0, 1], [-3.2, -1.8])}
      >
        <octahedronGeometry />
        <meshStandardMaterial wireframe color="white" />
      </motion.mesh>
      {/* Icosahedron - medium spin, subtle movement */}
      <motion.mesh
        position={[3, -0.5, 0.6]}
        rotation-x={useTransform(mouse.y, [0, 1], [0.5, 1.5])}
        rotation-y={useTransform(mouse.x, [0, 1], [-0.5, 1])}
        rotation-z={useTransform(mouse.x, [0, 1], [-0.3, 0.3])}
        position-x={useTransform(mouse.x, [0, 1], [2.6, 3.4])}
        position-y={useTransform(mouse.y, [1, 0], [-0.9, -0.1])}
      >
        <icosahedronGeometry />
        <meshStandardMaterial wireframe color="white" />
      </motion.mesh>
      {/* Cylinder - very fast spin, wide movement */}
      <motion.mesh
        position={[3, 2.5, 0]}
        rotation-x={useTransform(mouse.y, [0, 1], [-0.5, 2.5])}
        rotation-y={useTransform(mouse.x, [0, 1], [0, 3])}
        rotation-z={useTransform(mouse.y, [0, 1], [-1, 1])}
        position-x={useTransform(mouse.x, [0, 1], [2.5, 3.5])}
        position-y={useTransform(mouse.y, [1, 0], [2, 3])}
      >
        <cylinderGeometry args={[0.7, 0.25, 1, 6]} />
        <meshStandardMaterial wireframe color="white" />
      </motion.mesh>
    </Float>
  );
}

export default Model;
