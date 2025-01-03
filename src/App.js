import React, { useState } from 'react';
import CanvasModel from './CanvasModel';
import ColorPicker from './ColorPicker';
import ShirtNavigator from './ShirtNavigator';
import PatternPicker from './PatternPicker';
import './App.css';

function App() {
  const [color, setColor] = useState('#FFFFFF');
  const [highlightedMesh, setHighlightedMesh] = useState(null);
  const [patternUrl, setPatternUrl] = useState(null);

  return (
    <div className="App">
      <h1>Style.AI</h1> 
      
      <div>
        <h2>Transform Your Style with Custom Colors and Patterns</h2>
        <p>Customize your shirt with a solid color or our exclusive pattern!</p>
      </div>
      
      <div className="customization-controls">
        <div className="color-picker-container">
          <p>Choose Color:</p>
          <ColorPicker onColorChange={setColor} />
        </div>

        <div className="pattern-picker-container">
          <p>Try Pattern:</p>
          <PatternPicker onPatternSelect={setPatternUrl} />
        </div>
      </div>

      <div className="canvas-container">
        <CanvasModel 
          color={color} 
          highlightedMesh={highlightedMesh} 
          patternUrl={patternUrl}
        />
      </div>

      <div className="mesh-navigator-container">
        <h3>Navigate Shirt Components:</h3>
        <ShirtNavigator setHighlightedMesh={setHighlightedMesh} />
      </div>
    </div>
  );
}

export default App;
