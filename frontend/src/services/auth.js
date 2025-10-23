import { apiService } from './api';
import { ENDPOINTS } from './endpoints';

class AuthService {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getAuthHeaders() {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  async login(username, password) {
    try {
      const response = await apiService.post(ENDPOINTS.AUTH.LOGIN, {
        username,
        password
      });

      if (response.access_token) {
        this.setToken(response.access_token);
        return response;
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await apiService.post(ENDPOINTS.AUTH.REGISTER, userData);
      return response;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  async getCurrentUser() {
    if (!this.token) return null;

    try {
      const response = await apiService.get(ENDPOINTS.AUTH.ME, {
        headers: this.getAuthHeaders()
      });
      return response;
    } catch (error) {
      console.error('Failed to get current user:', error);
      this.setToken(null);
      return null;
    }
  }

  async logout() {
    try {
      await apiService.post(ENDPOINTS.AUTH.LOGOUT, {}, {
        headers: this.getAuthHeaders()
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      this.setToken(null);
    }
  }

  isAuthenticated() {
    return !!this.token;
  }
}

export const authService = new AuthService();