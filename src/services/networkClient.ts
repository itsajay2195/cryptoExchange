// src/services/networkClient.ts
import axios from "axios";

const networkClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3", // Replace with actual base URL
  timeout: 10000, // Timeout for API requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for authorization headers (if applicable)
networkClient.interceptors.request.use(
  async (config) => {
    const token = "CG-fA3tVyNELR1yLBWgDp6ppLJu"; // Replace with dynamic token retrieval logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
networkClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default networkClient;

// https://api.coingecko.com/api/v3/coins/markets
