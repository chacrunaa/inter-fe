import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { axiosBaseOptions } from './axiosSetup';

class MyAxios {
  private readonly axiosInstance: AxiosInstance;
  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options);
    this.initInterceptors();
  }
  private initInterceptors() {
    this.axiosInstance.interceptors.response.use((response: any) => {
      const { data } = response;

      if (data instanceof Blob) {
        return response;
      }
      return data?.data;
    });
  }

  get<T = AxiosResponse>(url: string, data?: object): Promise<T> {
    return this.axiosInstance.get(url, data);
  }

  post<T = AxiosResponse>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.axiosInstance.post(url, data, config);
  }

  delete<T = AxiosResponse>(url: string, data?: object): Promise<T> {
    return this.axiosInstance.delete(url, data);
  }
}

export const request = new MyAxios(axiosBaseOptions);
