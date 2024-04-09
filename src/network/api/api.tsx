import { request } from '@network/index';

import { axiosUrlsTypes } from '../types';

export const getList = async (url: axiosUrlsTypes, params?: any) => {
  return request.get(`/${url}`, params);
};

export const postItem = async (url: axiosUrlsTypes, params?: any) => {
  return request.post(`/${url}`, params);
};
