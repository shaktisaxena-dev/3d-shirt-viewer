import React from 'react';
import './PatternPicker.css';

const PatternPicker = ({ onPatternSelect }) => {
  const handleApplyPattern = () => {
    // Use the pattern.jpg from public directory
    onPatternSelect('/pattern.jpg');
  };

  return (
    <div className="pattern-picker">
      <button onClick={handleApplyPattern} className="pattern-btn">
        Apply Pattern
      </button>
    </div>
  );
};

export default PatternPicker;
