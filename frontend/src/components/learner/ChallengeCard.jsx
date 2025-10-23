import React from 'react';
import { useMutation } from '../../hooks/useApi';
import { ENDPOINTS } from '../../services/endpoints';
import ProgressBar from '../common/ProgressBar';

const ChallengeCard = ({ challenge, onJoin }) => {
  const { mutate: joinChallenge, loading } = useMutation();

  const handleJoin = async () => {
    try {
      await joinChallenge(ENDPOINTS.CHALLENGES.JOIN_CHALLENGE(challenge.id), {});
      onJoin && onJoin(challenge.id);
    } catch (error) {
      console.error('Failed to join challenge:', error);
    }
  };

  return (
    <div className="challenge-card">
      <div className="challenge-header">
        <h4>{challenge.title}</h4>
        <span className="challenge-reward">+{challenge.points_reward} points</span>
      </div>
      
      <p className="challenge-description">{challenge.description}</p>
      
      <div className="challenge-meta">
        <span>⏱️ {challenge.days_remaining} days left</span>
        <span>👥 {challenge.participants_count} participants</span>
        <span>🎯 {challenge.xp_reward} XP</span>
      </div>
      
      <div className="challenge-actions">
        <button 
          onClick={handleJoin}
          className="btn-primary"
          disabled={loading}
        >
          {loading ? 'Joining...' : 'Join Challenge'}
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;