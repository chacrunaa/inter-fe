import { schemas } from '@network/types';

import { operations } from '../../types/generated-api';

// =============================== Request data ====================================
export type GetInterviewsResponseData = schemas['GetInterviewsDto'];
export type InterviewAllItem = Required<schemas['Interview']>;

// =============================== Request params ==================================
export type InterviewsParams =
  operations['InterviewsController_findAll']['parameters']['query'];

export type InterviewsCreateParams =
  operations['InterviewsController_create']['parameters'];
