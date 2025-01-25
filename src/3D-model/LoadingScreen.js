import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LOADING_DURATION = 1500; // 1.5 seconds in milliseconds

const LoadingScreen = ({ onLoadingComplete }) => {
  const [startTime] = useState(Date.now());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / LOADING_DURATION) * 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, 16); // Update roughly every frame

    return () => clearInterval(interval);
  }, [startTime, onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">Style.AI</h1>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="loading-percentage">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
