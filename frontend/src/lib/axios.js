import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.mode === "development" ? "http://localhost:5173" : "/api",
  withCredentials: true,
});
