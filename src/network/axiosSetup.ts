import { AxiosRequestConfig } from 'axios';

export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
};
