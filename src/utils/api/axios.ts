import axios from "axios";

console.log(process.env);
const apiClient = axios.create({
  timeout: 30000,
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default apiClient;
