const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Generic API call function
async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'An error occurred');
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
}

// User API functions
export const userAPI = {
  getAll: (skip = 0, limit = 100) => 
    apiCall(`/users?skip=${skip}&limit=${limit}`),
  
  getById: (id) => 
    apiCall(`/users/${id}`),
  
  create: (userData) => 
    apiCall('/users/', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  
  update: (id, userData) => 
    apiCall(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    }),
  
  delete: (id) => 
    apiCall(`/users/${id}`, {
      method: 'DELETE',
    }),
};

export default apiCall;
