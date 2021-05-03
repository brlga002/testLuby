import axios from "axios";

const headers = async () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

const url = "http://localhost:8000/api";

const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use(
  async (config) => {
    config.headers = await headers();
    return config;
  },

  (error) => Promise.reject(error)
);

export default api;
