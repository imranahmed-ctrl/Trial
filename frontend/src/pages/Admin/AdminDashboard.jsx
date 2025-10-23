import React from 'react';
import { useApi } from '../../hooks/useApi';
import { ENDPOINTS } from '../../services/endpoints';
import UserManagement from '../../components/admin/UserManagement';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const AdminDashboard = ({ user }) => {
  const { data: adminStats, loading: statsLoading } = useApi(ENDPOINTS.LEADERBOARD.ADMIN.STATS);
  const { data: moderationStats, loading: moderationLoading } = useApi(ENDPOINTS.MODERATION.ADMIN.STATS);

  if (statsLoading || moderationLoading) {
    return <LoadingSpinner text="Loading admin dashboard..." />;
  }

  const stats = adminStats?.statistics || {};
  const moderation = moderationStats?.statistics || {};

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard ⚙️</h1>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{stats.total_players || 0}</h3>
            <p>Total Users</p>
          </div>
          <div className="stat-card">
            <h3>{moderation.pending_flags || 0}</h3>
            <p>Pending Flags</p>
          </div>
          <div className="stat-card">
            <h3>{stats.average_points ? Math.round(stats.average_points) : 0}</h3>
            <p>Avg Points</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>System Uptime</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="main-content">
          <section className="user-management-section">
            <UserManagement />
          </section>

          <section className="moderation-overview">
            <h2>Moderation Overview</h2>
            <div className="moderation-stats">
              <div className="stat-item">
                <span>Total Flags:</span>
                <span>{moderation.total_flags || 0}</span>
              </div>
              <div className="stat-item">
                <span>Pending Review:</span>
                <span>{moderation.pending_flags || 0}</span>
              </div>
              <div className="stat-item">
                <span>Approval Rate:</span>
                <span>{moderation.approval_rate || 0}%</span>
              </div>
            </div>
          </section>
        </div>

        <div className="sidebar">
          <div className="admin-actions">
            <h3>Admin Actions</h3>
            <button className="btn-primary">Create Challenge</button>
            <button className="btn-secondary">Manage Leaderboards</button>
            <button className="btn-secondary">Platform Analytics</button>
            <button className="btn-secondary">System Settings</button>
          </div>

          <div className="system-health">
            <h3>System Health</h3>
            <div className="health-item">
              <span>Active Users:</span>
              <span className="health-good">245</span>
            </div>
            <div className="health-item">
              <span>Server Status:</span>
              <span className="health-good">Online</span>
            </div>
            <div className="health-item">
              <span>Response Time:</span>
              <span className="health-good">125ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;