import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import CanvasModel from "./CanvasModel";

const ShirtNavigator = ({ setHighlightedMesh }) => {
  // Only include meshes that actually exist in the model
  const meshes = [
    "Front",
    "Back",
    "Sleeve_Left",
    "Sleeve_Right",
    "Front001"  // This appears to be an inner layer or detail
  ];

  const [currentMeshIndex, setCurrentMeshIndex] = useState(0);

  // Update highlighted mesh whenever currentMeshIndex changes
  useEffect(() => {
    setHighlightedMesh(meshes[currentMeshIndex]);
  }, [currentMeshIndex, setHighlightedMesh, meshes]);

  const handlePrev = () => {
    setCurrentMeshIndex((prevIndex) =>
      prevIndex === 0 ? meshes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentMeshIndex((prevIndex) =>
      prevIndex === meshes.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get a display name for the mesh
  const getDisplayName = (meshName) => {
    const nameMap = {
      'Front': 'Front',
      'Back': 'Back',
      'Sleeve_Left': 'Left Sleeve',
      'Sleeve_Right': 'Right Sleeve',
      'Front001': 'Inner Front Layer'
    };
    return nameMap[meshName] || meshName;
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <CanvasModel color="#ffffff" highlightedMesh={meshes[currentMeshIndex]} />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handlePrev} style={{ marginRight: "20px" }}>
          &#8592; Prev
        </button>
        <span>{getDisplayName(meshes[currentMeshIndex])}</span>
        <button onClick={handleNext} style={{ marginLeft: "20px" }}>
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default ShirtNavigator;
