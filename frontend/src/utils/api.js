import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Bypass-Tunnel-Reminder': 'true'
  }
});

export default api;
