import React, { useState } from 'react';
import './PatternPicker.css';
import checkered from '../Patterns/pattern.jpg';
import floral from '../Patterns/pattern1.jpg';
import dots from '../Patterns/pattern2.jpg';
import stripes from '../Patterns/pattern3.jpg'

const PatternPicker = ({ onPatternSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState(null);

  const patterns = [
    { id: 'pattern1', name: 'Stripes', url: stripes },
    { id: 'pattern2', name: 'Dots', url: dots },
    { id: 'pattern3', name: 'Floral', url: floral },
    { id: 'pattern4', name: 'Checkered', url: checkered },
    { id: 'none', name: 'No Pattern', url: null }
  ];

  const handlePatternClick = (pattern) => {
    console.log('Pattern selected:', pattern.url);
    setSelectedPattern(pattern);
    onPatternSelect(pattern.url);
    setIsOpen(false);
  };

  return (
    <div className="pattern-picker">
      <button 
        className="pattern-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pattern-preview">
          {selectedPattern ? (
            selectedPattern.url ? (
              <img src={selectedPattern.url} alt={selectedPattern.name} />
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </span>
        <span className="pattern-text">
          {selectedPattern ? selectedPattern.name : 'Select Pattern'}
        </span>
      </button>

      {isOpen && (
        <div className="pattern-grid">
          {patterns.map((pattern) => (
            <button
              key={pattern.id}
              className={`pattern-option ${selectedPattern?.id === pattern.id ? 'active' : ''}`}
              onClick={() => handlePatternClick(pattern)}
            >
              {pattern.url ? (
                <img src={pattern.url} alt={pattern.name} />
              ) : (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
              <span className="pattern-name">{pattern.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatternPicker;
