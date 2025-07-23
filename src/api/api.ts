import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProfile = () => api.get('/auth/user');

export const signup = (email: string, password: string) =>
  api.post('/auth/signup', { email, password });

export const login = (username: string, password: string) =>
  api.post('/auth/token', new URLSearchParams({ username, password, grant_type: 'password' }));

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/upload/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const sendChat = (query: string) => api.post('/chat/', { query });

export const getHistory = () => api.get('/chat/history');
