import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://friendly-tribble-xr5wwwjrvrj9hpwv4-5001.app.github.dev',
  //baseURL: 'http://3.26.96.188:5001', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
