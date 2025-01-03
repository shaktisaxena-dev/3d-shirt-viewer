import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

const CanvasModel = ({ color, highlightedMesh, patternUrl, selectedPart }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      className="canvas transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment files={"/city.hdr"} />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt 
            color={color} 
            highlightedMesh={highlightedMesh} 
            patternUrl={patternUrl}
            selectedPart={selectedPart}
          />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
