import { request } from '@network/index';

import { AllEntityesParamsDto, AllEntityesResponseDto } from '../types';

export const getList = async <T extends keyof AllEntityesParamsDto>(
  url: T,
  token: string,
  params?: AllEntityesParamsDto[T],
) => {
  const config = token
    ? { headers: { Authorization: `Bearer ${token}` }, params }
    : undefined;
  return request.get<Required<AllEntityesResponseDto[T]>>(`/${url}`, config);
};

export const postItem = async <T extends keyof AllEntityesParamsDto>(
  url: T,
  token: string,
  params?: AllEntityesParamsDto[T] | FormData,
) => {
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
  return request.post<Required<AllEntityesResponseDto[T]>>(`/${url}`, params, config);
};

export const postAuth = async <T extends keyof AllEntityesParamsDto>(
  url: T,
  params?: AllEntityesParamsDto[T],
) => {
  return request.post<Required<AllEntityesResponseDto[T]>>(`/${url}`, params);
};
