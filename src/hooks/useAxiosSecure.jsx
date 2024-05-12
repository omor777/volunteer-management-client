import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://volunteer-management-server-omega.vercel.app",
  withCredentials: true,
});

export const useAxiosSecure = () => {
  return axiosSecure;
};
