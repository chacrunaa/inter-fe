import { operations } from '../types/generated-api';
import { schemas } from './models/models';

export type AllEntityesParamsDto = {
  'interviews': operations['InterviewsController_findAll']['parameters']['query'];
  'auth/login': schemas['CreateUserDto'];
  'auth/registration': schemas['CreateUserDto'];
};

export type AllEntityesResponseDto = {
  'interviews': schemas['InterviewsPaginationDto'];
  'auth/login': schemas['User'];
  'auth/registration': schemas['User'];
};
