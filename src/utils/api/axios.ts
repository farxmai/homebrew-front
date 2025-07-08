import axios from "axios";

const apiClient = axios.create({
  timeout: 30000,
  baseURL: process.env.REACT_APP_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const currentLocale = localStorage.getItem("i18nextLng") || "en";
    config.headers["Accept-Language"] = currentLocale;
    config.headers["Content-Type"] = "application/json";
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default apiClient;
