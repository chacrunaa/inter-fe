import { components } from '../../types/generated-api';

export type schemas = components['schemas'];

// =============================== Request data ====================================

export type InterviewsDto = Required<schemas['InterviewsPaginationDto']>;
export type InterviewItem = Required<schemas['Interview']>;

// =============================== Request params ==================================
