import React from 'react';
import ProgressBar from '../common/ProgressBar';

const LearningPathCard = ({ path, onEnroll, showProgress = false }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'beginner';
      case 'intermediate': return 'intermediate';
      case 'advanced': return 'advanced';
      default: return 'beginner';
    }
  };

  return (
    <div className="learning-path-card">
      <div className="path-header">
        <h3>{path.title}</h3>
        <span className={`difficulty-badge ${getDifficultyColor(path.difficulty)}`}>
          {path.difficulty}
        </span>
      </div>
      
      <p className="path-description">{path.description}</p>
      
      <div className="path-meta">
        <span>📚 {path.modules} modules</span>
        <span>⏱️ {path.estimatedHours}h</span>
        <span>⭐ {path.rating}</span>
        <span>👥 {path.enrolledUsers}</span>
      </div>
      
      <div className="path-footer">
        <div className="path-category">{path.category}</div>
        <div className="path-actions">
          {showProgress && path.progress > 0 ? (
            <div className="path-progress">
              <ProgressBar progress={path.progress} label={`${path.progress}% complete`} />
            </div>
          ) : (
            <button 
              onClick={() => onEnroll && onEnroll(path.id)}
              className="btn-primary"
            >
              {path.progress > 0 ? 'Continue' : 'Start Learning'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningPathCard;