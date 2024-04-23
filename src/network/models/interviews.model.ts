import { schemas } from '@network/types';

// =============================== Request data ====================================
export type GetInterviewsResponseData = schemas['GetInterviewsDto'];
export type InterviewAllItem = Required<schemas['Interview']>;

// =============================== Request params ==================================
export type InterviewsParams = schemas['CreateInterviewDto'];
