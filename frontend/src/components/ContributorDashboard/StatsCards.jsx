export default function StatsCards() {
  return (
    <div className="stats-container">
      <div className="stat-card xp">
        <h2>3250</h2>
        <p>Contribution XP</p>
        <span>Level 5</span>
      </div>
      <div className="stat-card">
        <h2>12</h2>
        <p>Total Resources</p>
        <span>10 approved</span>
      </div>
      <div className="stat-card">
        <h2 style={{ color: "red" }}>15,420</h2>
        <p>Total Views</p>
        <span>+245 this week</span>
      </div>
      <div className="stat-card">
        <h2>4.7 ⭐</h2>
        <p>Avg Rating</p>
      </div>
    </div>
  );
}
