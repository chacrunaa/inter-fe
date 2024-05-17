import { useFormStore } from '@components/castomForm/hook/useForm/useFormStore';
import { FormProvider, useForm } from 'react-hook-form';

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
