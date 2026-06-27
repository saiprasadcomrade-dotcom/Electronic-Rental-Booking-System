import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://450863e930b3dd18-182-60-129-5.serveousercontent.com/api',
  headers: {
    'Bypass-Tunnel-Reminder': 'true'
  }
});

export default api;
