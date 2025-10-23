import React from 'react';
import ProgressBar from '../common/ProgressBar';

const BadgeDisplay = ({ badges }) => {
  return (
    <div className="badges-container">
      <h3>Your Badges</h3>
      <div className="badges-grid">
        {badges.map(badge => (
          <div key={badge.id} className={`badge-card ${badge.is_earned ? 'earned' : 'locked'}`}>
            <div className="badge-icon">
              {badge.is_earned ? '🏆' : '🔒'}
            </div>
            <div className="badge-info">
              <h4>{badge.name}</h4>
              <p>{badge.description}</p>
              {badge.progress && !badge.is_earned && (
                <div className="badge-progress">
                  <ProgressBar 
                    progress={(badge.progress.current / badge.progress.target) * 100}
                    label={`${badge.progress.current}/${badge.progress.target}`}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeDisplay;