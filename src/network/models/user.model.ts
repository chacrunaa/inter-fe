import { operations } from '../../types/generated-api';

// =============================== Request data ====================================
export type AuthResponseData =
  operations['AuthController_login']['responses']['201']['content'];
export type RegistrationResponseData =
  operations['AuthController_registration']['responses']['201']['content'];

// =============================== Request params ==================================
export type AuthParams =
  operations['AuthController_login']['requestBody']['content']['application/json'];

export type RegistrationParams =
  operations['AuthController_registration']['requestBody']['content']['application/json'];
