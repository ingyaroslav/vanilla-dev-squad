import axios from "axios";

const client = axios.create({
  baseURL: 'https://your-energy.b.goit.study/api/',
  timeout: 1000,
});

export default client;


export const API_PROPERTIES = Object.freeze({
  BASE_URL: 'https://your-energy.b.goit.study/api',
  SUBSCRIPTION: '/subscription',
});
