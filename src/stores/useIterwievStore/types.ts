import { InterviewsParams } from '@network/models/interviews.model';

export type StoreInterwiev = {
  currentPage: number;
  pageSize: number;
  filter?: InterviewsParams;
};

export type ActionsInterwiev = {
  setCurrentPage: (currentPage: number) => void;
  setPageSize: (pageSize: number) => void;
  setFilter: (filter: InterviewsParams) => void;
};
