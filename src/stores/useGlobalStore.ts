import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
