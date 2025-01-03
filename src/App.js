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

  // Handle mesh selection
  const handleMeshSelect = (mesh) => {
    setHighlightedMesh(mesh === 'Whole' ? null : mesh);
    setSelectedMesh(mesh);
  };

  useEffect(() => {
    console.log('App State:', { patternUrl, highlightedMesh, color, selectedMesh });
  }, [patternUrl, highlightedMesh, color, selectedMesh]);

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
            />
          </div>
          
          <div className="controls-section">
            <h3 className="section-title">Customization</h3>
            <div className="customization-controls">
              <div className="control-group">
                <span className="control-label">Color</span>
                <ColorPicker onColorChange={setColor} />
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
