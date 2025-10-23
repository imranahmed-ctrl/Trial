import React from 'react';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClass = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  }[size];

  return (
    <div className="loading-container">
      <div className={`spinner ${sizeClass}`}></div>
      <p className="loading-text">{text}</p>
    </div>
  );
};

export default LoadingSpinner;