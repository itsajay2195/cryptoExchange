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
    let errorMessage = "Something went wrong. Please try again later.";

    if (!error.response) {
      // If no response, it's likely an offline issue
      errorMessage =
        "You are currently offline. Please check your internet connection.";
    } else if (error.response.status === 404) {
      errorMessage = "Resource not found.";
    } else if (error.response.status === 500) {
      errorMessage = "Server error. Please try again later.";
    } else if (error.response.status === 401) {
      errorMessage = "Unauthorized. Please check your credentials.";
    }

    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default networkClient;

// https://api.coingecko.com/api/v3/coins/markets
