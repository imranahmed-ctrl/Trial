// src/contexts/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    // Simulate API call
    try {
      // In real app, this would be an API call
      setTimeout(() => {
        const userData = {
          email,
          role: 'learner', // This would come from API
          name: email.split('@')[0],
          id: Math.random().toString(36).substr(2, 9)
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signup = async (userData) => {
    setLoading(true);
    // Simulate API call
    try {
      setTimeout(() => {
        const newUser = {
          ...userData,
          id: Math.random().toString(36).substr(2, 9)
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};