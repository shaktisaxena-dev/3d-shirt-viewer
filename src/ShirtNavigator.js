import React, { useState } from "react";
import CanvasModel from "./CanvasModel";

const ShirtNavigator = () => {
  const meshes = [
    "Buttons",
    "Front",
    "Sleeve_Right",
    "Sleeve_Left",
    "Back",
    "Front001",
    "Cuffs",
    "Front_Pocket",
    "Buttons_Outer",
  ];

  const [currentMeshIndex, setCurrentMeshIndex] = useState(0);

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
        <span>{meshes[currentMeshIndex]}</span>
        <button onClick={handleNext} style={{ marginLeft: "20px" }}>
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default ShirtNavigator;
