import React from 'react';
import { useApi } from '../../hooks/useApi';
import { ENDPOINTS } from '../../services/endpoints';
import LearningPathCard from '../../components/learner/LearningPathCard';
import BadgeDisplay from '../../components/learner/BadgeDisplay';
import ChallengeCard from '../../components/learner/ChallengeCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const LearnerDashboard = ({ user }) => {
  const { data: badgesData, loading: badgesLoading } = useApi(ENDPOINTS.BADGES.MY_BADGES);
  const { data: leaderboardData, loading: leaderboardLoading } = useApi(ENDPOINTS.LEADERBOARD.MY_RANK);
  const { data: challengesData, loading: challengesLoading } = useApi(ENDPOINTS.CHALLENGES.ACTIVE);

  // Mock learning paths - you'll need to implement this endpoint
  const mockLearningPaths = [
    {
      id: 1,
      title: 'Python Fundamentals',
      description: 'Learn Python basics with hands-on projects',
      category: 'Programming',
      difficulty: 'Beginner',
      estimatedHours: 20,
      modules: 5,
      rating: 4.8,
      enrolledUsers: 150,
      progress: 60
    },
    {
      id: 2,
      title: 'React Masterclass',
      description: 'Master React with modern best practices',
      category: 'Frontend Development',
      difficulty: 'Intermediate',
      estimatedHours: 30,
      modules: 8,
      rating: 4.9,
      enrolledUsers: 89,
      progress: 0
    }
  ];

  if (badgesLoading || leaderboardLoading || challengesLoading) {
    return <LoadingSpinner text="Loading your learning dashboard..." />;
  }

  const badges = badgesData?.badges || [];
  const leaderboard = leaderboardData || {};
  const challenges = challengesData?.active_challenges || [];

  const handleJoinChallenge = (challengeId) => {
    // Refresh challenges or show success message
    console.log('Joined challenge:', challengeId);
  };

  const handleEnrollPath = (pathId) => {
    console.log('Enrolling in path:', pathId);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, {user.username}! 👋</h1>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{user.xp}</h3>
            <p>Total XP</p>
          </div>
          <div className="stat-card">
            <h3>{Math.floor(user.xp / 1000) + 1}</h3>
            <p>Level</p>
          </div>
          <div className="stat-card">
            <h3>{user.streak_days}</h3>
            <p>Day Streak</p>
          </div>
          <div className="stat-card">
            <h3>{badgesData?.earned_badges || 0}</h3>
            <p>Badges Earned</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="main-content">
          <section className="learning-paths">
            <h2>Continue Learning</h2>
            <div className="paths-grid">
              {mockLearningPaths.filter(path => path.progress > 0).map(path => (
                <LearningPathCard 
                  key={path.id} 
                  path={path} 
                  onEnroll={handleEnrollPath}
                  showProgress={true}
                />
              ))}
            </div>
          </section>

          <section className="recommended-paths">
            <h2>Recommended for You</h2>
            <div className="paths-grid">
              {mockLearningPaths.filter(path => path.progress === 0).map(path => (
                <LearningPathCard 
                  key={path.id} 
                  path={path} 
                  onEnroll={handleEnrollPath}
                />
              ))}
            </div>
          </section>

          <section className="challenges-section">
            <h2>Active Challenges</h2>
            <div className="challenges-list">
              {challenges.map(challenge => (
                <ChallengeCard 
                  key={challenge.id}
                  challenge={challenge}
                  onJoin={handleJoinChallenge}
                />
              ))}
              {challenges.length === 0 && (
                <p className="empty-state">No active challenges at the moment.</p>
              )}
            </div>
          </section>
        </div>

        <div className="sidebar">
          <BadgeDisplay badges={badges} />
          
          <div className="leaderboard-widget">
            <h3>Your Rank</h3>
            {leaderboard.rank ? (
              <div className="rank-display">
                <div className="rank-number">#{leaderboard.rank}</div>
                <div className="rank-details">
                  <strong>{leaderboard.points} points</strong>
                  <span>{leaderboard.user?.badges_count || 0} badges</span>
                </div>
              </div>
            ) : (
              <p>Start learning to get ranked!</p>
            )}
          </div>

          <div className="quick-stats">
            <h3>Quick Stats</h3>
            <div className="stat-item">
              <span>Points Today:</span>
              <span>25</span>
            </div>
            <div className="stat-item">
              <span>Modules Completed:</span>
              <span>12</span>
            </div>
            <div className="stat-item">
              <span>Quizzes Passed:</span>
              <span>8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;