import React, { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Shirt = ({ color, scale = [0.04, 0.04, 0.04], highlightedMesh, patternUrl, selectedPart }) => {
  const { nodes, materials } = useGLTF("/models/Formal-Shirt-Blender-2.glb");

  // Create texture from pattern URL with custom settings for each part
  const getTextureForPart = (partName) => {
    if (!patternUrl) return null;

    const loader = new THREE.TextureLoader();
    const tex = loader.load(patternUrl);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 1);
    return tex;
  };

  // Create textures for each part
  const textures = useMemo(() => {
    const result = {};
    if (patternUrl) {
      Object.keys(nodes).forEach(key => {
        if (nodes[key].geometry) {
          result[key] = getTextureForPart(key);
        }
      });
    }
    return result;
  }, [patternUrl, nodes]);

  useEffect(() => {
    console.log("Current state:", {
      highlightedMesh,
      patternUrl,
      selectedPart,
      availableNodes: Object.keys(nodes)
    });
  }, [nodes, highlightedMesh, patternUrl, selectedPart]);

  return (
    <group>
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];
        if (!node.geometry) return null;

        const isHighlighted = highlightedMesh === key;
        const shouldApplyPattern = (selectedPart === 'Whole' || selectedPart === key) && patternUrl;
        const showHighlight = isHighlighted && !patternUrl;

        // Create materials for highlighting effect
        const baseMaterial = new THREE.MeshStandardMaterial({
          map: shouldApplyPattern ? textures[key] : null,
          color: shouldApplyPattern ? '#ffffff' : color,
          roughness: 1,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
          emissive: showHighlight ? new THREE.Color(0x666666) : new THREE.Color(0x000000),
          emissiveIntensity: showHighlight ? 0.5 : 0,
        });

        return (
          <group key={key}>
            <mesh
              geometry={node.geometry}
              material={baseMaterial}
              scale={scale}
            />
          </group>
        );
      })}
    </group>
  );
};

export default Shirt;
