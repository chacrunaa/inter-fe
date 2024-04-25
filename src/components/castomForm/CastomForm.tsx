import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormStore } from '@components/castomForm/hook/useForm/useFormStore';

import CastomContent from './CastomContent/CastomContent';
import CastomFormItems from './CastomFormItems/CastomFormItems';

type IForm = {
  children: React.ReactElement;
  defaultValues?: any;

  mode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all';
};

const CastomForm = ({ mode = 'onTouched', children, defaultValues = {} }: IForm) => {
  const methods = useForm({
    defaultValues: defaultValues,
    mode: mode,
    shouldFocusError: false,
  });
  const { reset } = methods;

  useEffect(() => {
    reset(defaultValues);
    reset(defaultValues); //bug need fix
  }, [methods, defaultValues, reset]);

  const { Provider } = useFormStore();

  return (
    <Provider>
      <FormProvider {...methods}>{children}</FormProvider>
    </Provider>
  );
};

CastomForm.Items = CastomFormItems;
CastomForm.Form = CastomContent;
export default CastomForm;
