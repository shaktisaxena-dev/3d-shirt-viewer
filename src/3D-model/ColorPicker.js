// src/ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');

  const colors = [
    '#FFFFFF', // White
    '#000000', // Black
    '#264653', // Dark Blue
    '#2a9d8f', // Teal
    '#e9c46a', // Yellow
    '#f4a261', // Orange
    '#e76f51', // Coral
    '#023047', // Navy
    '#219ebc', // Light Blue
    '#8ecae6', // Sky Blue
    '#606c38', // Olive
    '#283618', // Dark Green
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onColorChange(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button 
        className="color-picker-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{ '--selected-color': selectedColor }}
      >
        <span className="color-preview" />
        <svg className="color-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="color-grid">
          {colors.map((color) => (
            <button
              key={color}
              className={`color-option ${color === selectedColor ? 'active' : ''}`}
              style={{ '--color': color }}
              onClick={() => handleColorClick(color)}
              title={color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
