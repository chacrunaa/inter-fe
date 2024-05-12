import { AxiosRequestConfig } from 'axios';

export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: process.env.VITE_API_URL,
  timeout: 30000,
};
