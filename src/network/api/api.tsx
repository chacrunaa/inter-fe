import { request } from '@network/index';

import { AllEntityesParamsDto, AllEntityesResponseDto } from '../types';

export const getList = async <T extends keyof AllEntityesParamsDto>(
  url: T,
  params?: AllEntityesParamsDto[T],
) => {
  return request.get<Required<AllEntityesResponseDto[T]>>(`/${url}`, { params });
};

export const postItem = async <T extends keyof AllEntityesParamsDto>(
  url: T,
  params?: AllEntityesParamsDto[T],
) => {
  return request.post<Required<AllEntityesResponseDto[T]>>(`/${url}`, params);
};

export const postAuth = async <T extends keyof AllEntityesParamsDto>(
  url: T,
  params?: AllEntityesParamsDto[T],
) => {
  return request.post<Required<AllEntityesResponseDto[T]>>(`/${url}`, params);
};
