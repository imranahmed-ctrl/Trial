import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const getRoleIcon = (role) => {
    switch (role) {
      case 'learner': return '🎓';
      case 'contributor': return '🛠️';
      case 'admin': return '⚙️';
      default: return '👤';
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>🎮 LearnGamified</h2>
      </div>
      
      <div className="nav-links">
        {user && (
          <>
            <span className="user-info">
              {getRoleIcon(user.role)} {user.username}
            </span>
            <span className="user-level">Level {Math.floor(user.xp / 1000) + 1}</span>
            <span className="user-xp">{user.xp} XP</span>
            <span className="user-streak">🔥 {user.streak_days} days</span>
            <button onClick={handleLogout} className="btn-secondary">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;