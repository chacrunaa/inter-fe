import { components } from '../types/generated-api';
import { GetInterviewsResponseData, InterviewsParams } from './models/interviews.model';
import {
  AuthParams,
  AuthResponseData,
  RegistrationParams,
  RegistrationResponseData,
  VideoUploadData,
} from './models/user.model';

export type schemas = components['schemas'];

export type AllEntityesParamsDto = {
  'interviews': InterviewsParams;
  'auth/login': AuthParams | any;
  'auth/registration': RegistrationParams | any;
  'files/upload': VideoUploadData['content']['application/json'];
};

export type AllEntityesResponseDto = {
  'interviews': GetInterviewsResponseData;
  'auth/login': AuthResponseData | any;
  'auth/registration': RegistrationResponseData | any;
  'files/upload': any;
};
