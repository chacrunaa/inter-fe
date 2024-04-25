import { dequal } from 'dequal';
import { pickBy } from 'lodash';

export const deepEqual = dequal;

export const cleanedObject = (item: any) =>
  pickBy(item, value => value !== null && value !== undefined && value !== '');
