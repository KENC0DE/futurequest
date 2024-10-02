// api.js
import axios from "axios";

const API_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        // Optionally, trigger logout or redirect to login
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }
  try {
    const response = await axios.post(`${API_URL}/token/refresh/`, {
      refresh: refreshToken,
    });
    const { access } = response.data;
    localStorage.setItem("access_token", access);
    return access;
  } catch (error) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    throw new Error("Refresh token is invalid or expired");
  }
};

export const getOffers = () => api.get("/offers/");
export const login = (credentials) => api.post("/user/", credentials);
export const getUserProfile = () => api.get("/users/");
export const createApplication = (applicationData) => {
  return api.post("/applications/create/", applicationData);
};
export const listApplications = () => {
  return api.get("/applications/");
};
export const register = async (data) => {
  return await api.post("/register/", data);
};
export const validateToken = async (token) => {
  try {
    const response = await api.post("/validate-token/", { token });
    return response.data.valid;
  } catch (error) {
    console.error("Token validation failed:", error);
    return false;
  }
};

export default api;
