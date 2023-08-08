import Axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
