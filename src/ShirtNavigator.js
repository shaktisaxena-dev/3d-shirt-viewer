import React, { useState, useEffect } from "react";
import './ShirtNavigator.css';

const ShirtNavigator = ({ setHighlightedMesh }) => {
  const meshes = ['Whole', 'Front', 'Back', 'Sleeve_Left', 'Sleeve_Right'];
  const [currentMeshIndex, setCurrentMeshIndex] = useState(0);

  useEffect(() => {
    // If "Whole" is selected, pass null to clear highlighting
    setHighlightedMesh(meshes[currentMeshIndex] === 'Whole' ? null : meshes[currentMeshIndex]);
  }, [currentMeshIndex, setHighlightedMesh, meshes]);

  const getDisplayName = (meshName) => {
    const nameMap = {
      'Whole': 'Whole Shirt',
      'Front': 'Front',
      'Back': 'Back',
      'Sleeve_Left': 'Left Sleeve',
      'Sleeve_Right': 'Right Sleeve'
    };
    return nameMap[meshName] || meshName;
  };

  return (
    <div className="shirt-navigator">
      {meshes.map((mesh, index) => (
        <button
          key={mesh}
          className={`nav-button ${currentMeshIndex === index ? 'active' : ''}`}
          onClick={() => setCurrentMeshIndex(index)}
        >
          <span className="button-content">
            <span className="button-icon">
              {mesh === 'Whole' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.38 3.46L16 2L12 5L8 2L3.62 3.46C2.64 3.76 2 4.67 2 5.7V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V5.7C22 4.67 21.36 3.76 20.38 3.46Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {mesh === 'Front' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L20 7V17L12 21L4 17V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {mesh === 'Back' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L20 7V17L12 21L4 17V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 7L12 11L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {mesh.includes('Sleeve') && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L18 3L22 9L12 21L2 9L6 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            <span className="button-text">{getDisplayName(mesh)}</span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default ShirtNavigator;
