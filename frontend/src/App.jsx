import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import Navbar from './components/common/Navbar';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import LearnerDashboard from './pages/Learner/LearnerDashboard';
import ContributorDashboard from './pages/Contributor/ContributorDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import LoadingSpinner from './components/common/LoadingSpinner';
import './styles/App.css';

const AppContent = () => {
  const { user, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <div className="auth-page">
        {isLogin ? (
          <Login onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <Signup onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    );
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'learner':
        return <LearnerDashboard user={user} />;
      case 'contributor':
        return <ContributorDashboard user={user} />;
      case 'admin':
        return <AdminDashboard user={user} />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <div className="App">
      <Navbar user={user} />
      <main className="main-content">
        {renderDashboard()}
      </main>
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;