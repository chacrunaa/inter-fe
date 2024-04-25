import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { InterviewsParams } from '@network/models/interviews.model';
import { cleanedObject } from '@utils/utils';

type StoreAuth = {
  token: string;
};
type ActionsAuth = {
  setToken: (token: string) => void;
};
export const useAuthStore = create<StoreAuth & ActionsAuth>()(
  persist(
    set => ({
      token: '',
      setToken: token => set(() => ({ token: token })),
    }),
    { name: 'auth' },
  ),
);

type StoreInterwiev = {
  currentPage: number;
  pageSize: number;
  filter?: InterviewsParams | object;
};

type ActionsInterwiev = {
  setCurrentPage: (currentPage: number) => void;
  setPageSize: (pageSize: number) => void;
  setFilter: (filter: InterviewsParams) => void;
};

export const useIterwievStore = create<StoreInterwiev & ActionsInterwiev>()(
  persist(
    set => ({
      filter: {},
      currentPage: 1,
      pageSize: 5,
      setCurrentPage: currentPage => set(() => ({ currentPage: currentPage })),
      setPageSize: pageSize => set(() => ({ pageSize: pageSize, currentPage: 1 })),
      setFilter: filter => set(() => ({ filter: cleanedObject(filter), currentPage: 1 })),
    }),
    { name: 'interwiev' },
  ),
);
