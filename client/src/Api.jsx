import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/business';
const API_URL2 = 'http://localhost:3000/api/v2/business'; // Update with your backend URL

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const registeremp = async (empData) => {
    try {
      const response = await axios.post(`${API_URL2}/registeremp`, empData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  export const getemp = () => {
    return axios.get(`${API_URL2}/getemp`); // Adjust endpoint as needed
  };
// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Check if user is logged in (using token)
export const isUserLoggedIn = async () => {
  try {
    const response = await axios.get(`${API_URL}/isLogin`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming token is stored in localStorage after login
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
