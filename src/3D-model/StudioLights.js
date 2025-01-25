import React from 'react';
import { useFrame } from '@react-three/fiber';
import { SpotLight, useDepthBuffer } from '@react-three/drei';
import * as THREE from 'three';

const StudioLights = () => {
  const depthBuffer = useDepthBuffer({ frames: 1 });

  // Create refs for the lights to animate them
  const leftLightRef = React.useRef();
  const rightLightRef = React.useRef();
  const centerLightRef = React.useRef();

  // Subtle animation for the lights
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Subtle movement for left light
    if (leftLightRef.current) {
      leftLightRef.current.position.y = Math.sin(time * 0.5) * 0.1 + 2;
      leftLightRef.current.intensity = 1 + Math.sin(time * 0.5) * 0.1;
    }
    
    // Subtle movement for right light
    if (rightLightRef.current) {
      rightLightRef.current.position.y = Math.sin(time * 0.5 + Math.PI) * 0.1 + 2;
      rightLightRef.current.intensity = 1 + Math.sin(time * 0.5 + Math.PI) * 0.1;
    }

    // Subtle movement for center light
    if (centerLightRef.current) {
      centerLightRef.current.position.y = Math.sin(time * 0.3) * 0.05 + 3;
      centerLightRef.current.intensity = 0.8 + Math.sin(time * 0.3) * 0.05;
    }
  });

  return (
    <>
      {/* Left Studio Light */}
      <group position={[-2, 2, 2]}>
        <SpotLight
          ref={leftLightRef}
          distance={5}
          angle={0.5}
          attenuation={5}
          anglePower={5}
          intensity={1}
          color="#ffffff"
          castShadow
          depthBuffer={depthBuffer}
        />
        {/* Light Stand Model */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Light Housing */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.2, 0.3, 0.4, 8]} />
          <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Right Studio Light */}
      <group position={[2, 2, 2]}>
        <SpotLight
          ref={rightLightRef}
          distance={5}
          angle={0.5}
          attenuation={5}
          anglePower={5}
          intensity={1}
          color="#ffffff"
          castShadow
          depthBuffer={depthBuffer}
        />
        {/* Light Stand Model */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Light Housing */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <cylinderGeometry args={[0.2, 0.3, 0.4, 8]} />
          <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Center Top Light */}
      <group position={[0, 3, 2]}>
        <SpotLight
          ref={centerLightRef}
          distance={6}
          angle={0.6}
          attenuation={4}
          anglePower={4}
          intensity={0.8}
          color="#ffffff"
          castShadow
          depthBuffer={depthBuffer}
        />
      </group>
    </>
  );
};

export default StudioLights;
