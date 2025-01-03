import React, { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Shirt = ({ color, scale = [0.04, 0.04, 0.04], highlightedMesh, patternUrl }) => {
  const { nodes, materials } = useGLTF("/models/Formal-Shirt-Blender-2.glb");

  // Create texture from pattern URL
  const texture = useMemo(() => {
    if (patternUrl) {
      const loader = new THREE.TextureLoader();
      const tex = loader.load(patternUrl);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, 1);
      return tex;
    }
    return null;
  }, [patternUrl]);

  useEffect(() => {
    console.log("Shirt Nodes:");
    Object.keys(nodes).forEach((key) => {
      console.log(`Node Name: ${key}`, nodes[key]);
    });

    console.log("Shirt Materials:");
    if (materials) {
      Object.keys(materials).forEach((key) => {
        console.log(`Material Name: ${key}`, materials[key]);
      });
    }
  }, [nodes, materials]);

  return (
    <group>
      {Object.keys(nodes).map((key) => {
        const isHighlighted = highlightedMesh === key;
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          color: texture ? '#ffffff' : color,
          roughness: 1,
          transparent: true,
          opacity: isHighlighted ? 1 : 0.8,
        });

        return (
          <mesh
            key={key}
            geometry={nodes[key].geometry}
            material={material}
            dispose={null}
            scale={scale}
          />
        );
      })}
    </group>
  );
};

export default Shirt;
