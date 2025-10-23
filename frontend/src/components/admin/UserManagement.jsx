import React from 'react';
import { useApi } from '../../hooks/useApi';
import { ENDPOINTS } from '../../services/endpoints';
import LoadingSpinner from '../common/LoadingSpinner';

const UserManagement = () => {
  const { data: usersData, loading, error, refetch } = useApi(ENDPOINTS.USER.ALL_USERS);

  if (loading) return <LoadingSpinner text="Loading users..." />;
  if (error) return <div className="error-message">Error loading users: {error}</div>;

  const users = usersData || [];

  return (
    <div className="user-management">
      <div className="section-header">
        <h3>User Management</h3>
        <button onClick={refetch} className="btn-secondary">Refresh</button>
      </div>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Points</th>
              <th>XP</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role}`}>
                    {user.role}
                  </span>
                </td>
                <td>{user.points}</td>
                <td>{user.xp}</td>
                <td>
                  <button className="btn-secondary">Edit</button>
                  <button className="btn-danger">Suspend</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {users.length === 0 && (
        <div className="empty-state">
          <p>No users found.</p>
        </div>
      )}
    </div>
  );
};

export default UserManagement;