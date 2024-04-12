import createFastContext from '@utils/createFastContext';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const formContext = createFastContext({
  formName: '',
  setInitialState: noop,
});

export const useFormStore = () => {
  return formContext;
};
