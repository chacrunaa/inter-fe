import { useAuthStore } from '@stores/useGlobalStore';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: process.env.VITE_API_URL,
};

export const authInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};
