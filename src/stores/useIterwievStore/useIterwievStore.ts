import { cleanedObject } from '@utils/utils';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { CURRENT_PAGE, PAGE_SIZE } from './constants';
import { ActionsInterwiev, StoreInterwiev } from './types';

export const useIterwievStore = create<StoreInterwiev & ActionsInterwiev>()(
  persist(
    set => ({
      filter: {},
      currentPage: CURRENT_PAGE,
      pageSize: PAGE_SIZE,
      setCurrentPage: currentPage => set(() => ({ currentPage: currentPage })),
      setPageSize: pageSize =>
        set(() => ({ pageSize: pageSize, currentPage: CURRENT_PAGE })),
      setFilter: filter =>
        set(() => ({ filter: cleanedObject(filter), currentPage: CURRENT_PAGE })),
    }),
    { name: 'interwiev' },
  ),
);
