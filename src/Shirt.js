import React, { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Shirt = ({ color, scale = [0.04, 0.04, 0.04], highlightedMesh, patternUrl, selectedPart }) => {
  const { nodes, materials } = useGLTF("/models/Formal-Shirt-Blender-2.glb");
  const [defaultColor] = useState('#FFFFFF');

  // Create texture from pattern URL with custom settings
  const getTextureForPart = () => {
    if (!patternUrl) return null;

    const loader = new THREE.TextureLoader();
    const tex = loader.load(patternUrl);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
    return tex;
  };

  // Create a single texture instance for all parts
  const texture = useMemo(() => {
    return getTextureForPart();
  }, [patternUrl]);

  // Debug logging
  useEffect(() => {
    console.log("Shirt component state:", {
      selectedPart,
      patternUrl,
      hasTexture: !!texture,
      currentColor: color,
      availableNodes: Object.keys(nodes).filter(key => nodes[key].geometry)
    });
  }, [nodes, patternUrl, selectedPart, texture, color]);

  return (
    <group>
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];
        if (!node.geometry) return null;

        const isHighlighted = highlightedMesh === key;
        const shouldApplyPattern = patternUrl && (selectedPart === 'Whole' || selectedPart === key);
        const showHighlight = isHighlighted && !shouldApplyPattern && color === defaultColor;
        
        // Determine the color for this part
        const shouldApplyColor = selectedPart === 'Whole' || selectedPart === key;
        const partColor = shouldApplyColor ? color : defaultColor;

        // Create materials for highlighting effect
        const baseMaterial = new THREE.MeshStandardMaterial({
          map: shouldApplyPattern ? texture : null,
          color: partColor, // Always use partColor, even with pattern
          roughness: 1,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
          emissive: showHighlight ? new THREE.Color(0x666666) : new THREE.Color(0x000000),
          emissiveIntensity: showHighlight ? 0.5 : 0,
        });

        // Debug logging for each mesh
        console.log(`Mesh ${key}:`, {
          shouldApplyPattern,
          shouldApplyColor,
          hasTexture: !!texture,
          selectedPart,
          isHighlighted,
          showHighlight,
          color: partColor
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
