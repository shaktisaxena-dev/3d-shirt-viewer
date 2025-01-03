import React, { useState, useEffect } from 'react';
import CanvasModel from './CanvasModel';
import ColorPicker from './ColorPicker';
import ShirtNavigator from './ShirtNavigator';
import PatternPicker from './PatternPicker';
import './App.css';

function App() {
  const [color, setColor] = useState('#FFFFFF');
  const [highlightedMesh, setHighlightedMesh] = useState(null);
  const [patternUrl, setPatternUrl] = useState(null);
  const [selectedMesh, setSelectedMesh] = useState('Whole');

  // Handle color changes
  const handleColorChange = (newColor) => {
    // Remove pattern when color is changed
    setPatternUrl(null);
    // Remove highlighting if color is not white
    if (newColor !== '#FFFFFF') {
      setHighlightedMesh(null);
    }
    setColor(newColor);
  };

  // Debug logging
  useEffect(() => {
    console.log('App State:', {
      selectedMesh,
      patternUrl,
      highlightedMesh,
      color
    });
  }, [selectedMesh, patternUrl, highlightedMesh, color]);

  // Handle mesh selection
  const handleMeshSelect = (mesh) => {
    console.log('handleMeshSelect called with:', mesh);
    // Don't allow selectedMesh to be null
    const newMesh = mesh || 'Whole';
    // Only set highlighting if current color is white
    const shouldHighlight = color === '#FFFFFF';
    setHighlightedMesh(shouldHighlight && newMesh !== 'Whole' ? newMesh : null);
    setSelectedMesh(newMesh);
  };

  return (
    <div className="App">
      <div className="studio-container">
        {/* Main Canvas Area */}
        <div className="canvas-container">
          <CanvasModel 
            color={color} 
            highlightedMesh={highlightedMesh} 
            patternUrl={patternUrl}
            selectedPart={selectedMesh}
          />
        </div>

        {/* Controls Panel */}
        <div className="controls-panel">
          <div className="controls-section">
            <h3 className="section-title">Navigation</h3>
            <ShirtNavigator 
              setHighlightedMesh={handleMeshSelect}
              selectedPart={selectedMesh}
            />
          </div>
          
          <div className="controls-section">
            <h3 className="section-title">Customization</h3>
            <div className="customization-controls">
              <div className="control-group">
                <span className="control-label">Color</span>
                <ColorPicker onColorChange={handleColorChange} />
              </div>
              
              <div className="control-group">
                <span className="control-label">Pattern</span>
                <PatternPicker onPatternSelect={setPatternUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
