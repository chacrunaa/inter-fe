import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { InterviewsParams } from '@network/models/interviews.model';

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
  fitler?: InterviewsParams;
};

type ActionsInterwiev = {
  setCurrentPage: (currentPage: number) => void;
  setPageSize: (pageSize: number) => void;
  setFilter: (fitler: InterviewsParams) => void;
};

export const useIterwievStore = create<StoreInterwiev & ActionsInterwiev>()(
  persist(
    set => ({
      filter: {},
      currentPage: 1,
      pageSize: 5,
      setCurrentPage: currentPage => set(() => ({ currentPage: currentPage })),
      setPageSize: pageSize => set(() => ({ pageSize: pageSize })),
      setFilter: fitler => set(() => ({ fitler: fitler })),
    }),
    { name: 'interwiev' },
  ),
);
