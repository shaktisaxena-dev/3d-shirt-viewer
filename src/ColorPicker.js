// src/ColorPicker.js
import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input 
        type="color" 
        onChange={(e) => onColorChange(e.target.value)} 
        style={{ width: '50px', height: '50px' }} 
      />
    </div>
  );
};

export default ColorPicker;
