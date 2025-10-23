import React, { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { ENDPOINTS } from '../../services/endpoints';
import ResourceForm from '../../components/contributor/ResourceForm';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const ContributorDashboard = ({ user }) => {
  const { data: myResources, loading, refetch } = useApi('/my-resources'); // You'll need to implement this endpoint
  const [showResourceForm, setShowResourceForm] = useState(false);

  const handleResourceSuccess = () => {
    setShowResourceForm(false);
    refetch();
  };

  if (loading) return <LoadingSpinner text="Loading your content..." />;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Creator Dashboard 🛠️</h1>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>5</h3>
            <p>Learning Paths</p>
          </div>
          <div className="stat-card">
            <h3>23</h3>
            <p>Resources Shared</p>
          </div>
          <div className="stat-card">
            <h3>{user.xp}</h3>
            <p>Creator XP</p>
          </div>
          <div className="stat-card">
            <h3>85%</h3>
            <p>Approval Rate</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="main-content">
          {showResourceForm ? (
            <section className="resource-creation">
              <ResourceForm onSuccess={handleResourceSuccess} />
              <button 
                onClick={() => setShowResourceForm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </section>
          ) : (
            <section className="quick-actions-section">
              <h2>Quick Actions</h2>
              <div className="action-buttons">
                <button 
                  onClick={() => setShowResourceForm(true)}
                  className="btn-primary"
                >
                  Add New Resource
                </button>
                <button className="btn-secondary">
                  Create Learning Path
                </button>
                <button className="btn-secondary">
                  View Analytics
                </button>
              </div>
            </section>
          )}

          <section className="my-resources">
            <h2>My Resources</h2>
            <div className="resources-list">
              {/* You'll need to implement this section with real data */}
              <div className="empty-state">
                <p>No resources yet. Create your first resource to get started!</p>
              </div>
            </div>
          </section>
        </div>

        <div className="sidebar">
          <div className="creator-stats">
            <h3>Creator Stats</h3>
            <div className="stat-item">
              <span>Total Contributions:</span>
              <span>28</span>
            </div>
            <div className="stat-item">
              <span>Approval Rate:</span>
              <span>85%</span>
            </div>
            <div className="stat-item">
              <span>Community Impact:</span>
              <span>High</span>
            </div>
          </div>

          <div className="contributor-tips">
            <h3>Tips for Contributors</h3>
            <ul>
              <li>Add clear descriptions to your resources</li>
              <li>Use proper categories for better discovery</li>
              <li>Engage with community feedback</li>
              <li>Update your content regularly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorDashboard;