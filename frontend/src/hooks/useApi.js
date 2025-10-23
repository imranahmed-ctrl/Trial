import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { authService } from '../services/auth';

export const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const authHeaders = authService.getAuthHeaders();
      const response = await apiService.get(endpoint, {
        headers: { ...authHeaders, ...options.headers },
        ...options
      });
      
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (endpoint) {
      fetchData();
    }
  }, [endpoint]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export const useMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (endpoint, data = {}, method = 'POST') => {
    try {
      setLoading(true);
      setError(null);
      
      const authHeaders = authService.getAuthHeaders();
      let response;

      switch (method) {
        case 'POST':
          response = await apiService.post(endpoint, data, { headers: authHeaders });
          break;
        case 'PUT':
          response = await apiService.put(endpoint, data, { headers: authHeaders });
          break;
        case 'DELETE':
          response = await apiService.delete(endpoint, { headers: authHeaders });
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
};