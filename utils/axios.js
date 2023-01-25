import axios from "axios";

const api = "http://localhost:8000/api";

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Network Error Occurred"
    )
);

export default axiosInstance;
