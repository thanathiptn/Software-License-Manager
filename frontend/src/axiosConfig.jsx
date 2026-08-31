import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://${window.location.hostname}:5001`,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
