import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.27.248.38:5001',
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
