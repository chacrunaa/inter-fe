import { InterviewsParams } from '@network/models/interviews.model';

export type StoreInterwiev = {
  currentPage: number;
  pageSize: number;
  filter?: InterviewsParams;
  isFileUploadLoading: boolean;
  isFileUploadSuccess: boolean;
  isFileUploadError: boolean;
};

export type ActionsInterwiev = {
  setCurrentPage: (currentPage: number) => void;
  setPageSize: (pageSize: number) => void;
  setFilter: (filter: InterviewsParams) => void;
  setFileUploadLoading: (loading: boolean) => void;
  setFileSucсess: (status: boolean) => void;
  setFileError: (status: boolean) => void;
};
