// ====== src/api/routes.js ======
const API_BASE_URL = 'https://suitmedia-backend.suitdev.com/api';

export const apiService = {
  // Fetch ideas with pagination, sorting, and filtering
  async getIdeas(params = {}) {
    const {
      page = 1,
      size = 10,
      sort = '-published_at',
      append = ['small_image', 'medium_image']
    } = params;

    const queryParams = new URLSearchParams({
      'page[number]': page,
      'page[size]': size,
      sort: sort
    });

    // Add append parameters
    append.forEach(item => {
      queryParams.append('append[]', item);
    });

    const url = `${API_BASE_URL}/ideas?${queryParams.toString()}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Get single idea by ID
  async getIdeaById(id) {
    const url = `${API_BASE_URL}/ideas/${id}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};
