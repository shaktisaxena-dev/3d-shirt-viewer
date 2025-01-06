import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'; // Import THREE for material creation
import './NewStyleAI.css';

const ShirtModel = ({ color }) => {
const gltf = useLoader(GLTFLoader, 'Shirt Formal.gltf');
    console.log(gltf); // Log the loaded model structure

    // Create a material with the selected color
    const material = new THREE.MeshStandardMaterial({ color });

    // Traverse the loaded model and apply the material to the specific mesh
    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            console.log('Processing mesh:', child.name); // Log the name of the mesh being processed
            if (child.name === 'FormalShirt') {
                child.material = material; // Apply material only to the FormalShirt mesh
            }
        }
    });

    return (
        <primitive object={gltf.scene} />
    );
};

const Screen1 = ({ onNext }) => {
    const [color, setColor] = useState('white'); // Default color

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className="styleai-container">
            <h1 className="styleai-header">StyleAI</h1>
            <div className="moving-text">
                <h2>Select a Color:</h2>
                <label>
                    <input type="radio" name="color" value="red" onChange={handleColorChange} />
                    Red
                </label>
                <label>
                    <input type="radio" name="color" value="black" onChange={handleColorChange} />
                    Black
                </label>
                <label>
                    <input type="radio" name="color" value="blue" onChange={handleColorChange} />
                    Blue
                </label>
                <label>
                    <input type="radio" name="color" value="white" onChange={handleColorChange} />
                    White
                </label>
                <label>
                    <input type="radio" name="color" value="green" onChange={handleColorChange} />
                    Green
                </label>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <ShirtModel color={color} />
                </Canvas>
                <button onClick={onNext} style={{ float: 'right' }}>Next</button>
            </div>
        </div>
    );
};

export default Screen1;
