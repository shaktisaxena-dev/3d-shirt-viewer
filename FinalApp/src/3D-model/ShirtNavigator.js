import React from 'react';
import './ShirtNavigator.css';

const parts = [
  { id: 'Whole', label: 'Whole Shirt' },
  { id: 'Front', label: 'Front' },
  { id: 'Back', label: 'Back' },
  { id: 'Sleeve_Left', label: 'Left Sleeve' },
  { id: 'Sleeve_Right', label: 'Right Sleeve' },
  { id: 'Cuffs', label: 'Cuffs' },
  { id: 'Front_Pocket', label: 'Pocket' },
  { id: 'Buttons', label: 'Buttons' }
];

const ShirtNavigator = ({ setHighlightedMesh, selectedPart }) => {
  const handleClick = (partId) => {
    console.log('ShirtNavigator click:', partId);
    setHighlightedMesh(partId);
  };

  return (
    <div className="shirt-navigator">
      {parts.map(({ id, label }) => (
        <button
          key={id}
          className={`nav-button ${selectedPart === id ? 'selected' : ''}`}
          onClick={() => handleClick(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ShirtNavigator;
