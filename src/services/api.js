import axios from 'axios';

const api = axios.create({
  baseURL: 'http://157.245.81.20:3334/',
});

export default api;
