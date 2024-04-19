import { components } from '../types/generated-api';
import { InterviewsParams, InterviewsResponseData } from './models/interviews.model';
import {
  AuthParams,
  AuthResponseData,
  RegistrationParams,
  RegistrationResponseData,
} from './models/user.model';

export type schemas = components['schemas'];

export type AllEntityesParamsDto = {
  'interviews': InterviewsParams;
  'auth/login': AuthParams | any;
  'auth/registration': RegistrationParams | any;
};

export type AllEntityesResponseDto = {
  'interviews': InterviewsResponseData;
  'auth/login': AuthResponseData | any;
  'auth/registration': RegistrationResponseData | any;
};
