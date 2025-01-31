import axios from 'axios';
import { API_BASE_URL } from './env';
import Cookies from 'js-cookie';

let cookies: () => any;

if (typeof window === 'undefined') {
    // This block runs only on the server
    const { cookies: serverCookies } = require('next/headers');
    cookies = serverCookies;
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL + '/api',
  withCredentials: true,
  timeout: 10000,
});

// Add an interceptor to add the token to headers for all requests
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get('authToken') || (await cookies()).get('authToken')?.value // Get the token from cookies
    if (token) {
      // If there's a token, add it to the Authorization header
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // config.headers['Content-Type'] = 'application/json';
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
