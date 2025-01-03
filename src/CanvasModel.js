import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, AccumulativeShadows, RandomizedLight, SoftShadows } from "@react-three/drei";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";
import StudioLights from "./StudioLights";

const CanvasModel = ({ color, highlightedMesh, patternUrl, selectedPart }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      className="canvas transition-all ease-in"
    >
      {/* Enable soft shadows */}
      <SoftShadows size={10} samples={16} focus={0.5} />
      
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.3} />

      {/* Environment map for reflections */}
      <Environment files={"/city.hdr"} />

      {/* Studio Lights */}
      <StudioLights />

      {/* Shadows */}
      <AccumulativeShadows
        temporal
        frames={60}
        alphaTest={0.85}
        scale={10}
        position={[0, -1, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.55}
          ambient={0.25}
          position={[5, 5, -10]}
        />
      </AccumulativeShadows>

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
