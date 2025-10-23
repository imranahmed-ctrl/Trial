import React from 'react';

const ProgressBar = ({ progress, label, showPercentage = true }) => {
  return (
    <div className="progress-container">
      <div className="progress-label">
        <span>{label}</span>
        {showPercentage && <span>{Math.round(progress)}%</span>}
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;