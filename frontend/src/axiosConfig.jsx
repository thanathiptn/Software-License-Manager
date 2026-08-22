import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001',
  //baseURL: 'https://friendly-tribble-xr5wwwjrvrj9hpwv4-5001.app.github.dev', // codespaces
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
