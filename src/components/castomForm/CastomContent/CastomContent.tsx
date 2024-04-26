import { ReactNode, useCallback } from 'react';
import { FieldValues, Form, useFormContext, UseFormReset } from 'react-hook-form';

import { useFormStore } from '../hook/useForm/useFormStore';

type IProps<FormType extends FieldValues> = {
  children: ReactNode;
  onSubmitForm?: (data: any) => void;
  onResetForm?: (reset: UseFormReset<FormType>) => void;
};

const CastomContent = <FormType extends FieldValues>({
  children,
  onSubmitForm,
  onResetForm,
}: IProps<FormType>) => {
  const { handleSubmit, reset } = useFormContext<FormType>();

  const { useStore } = useFormStore();
  const [formName] = useStore(s => s.formName);

  const onValid = useCallback(
    (data: FormType) => {
      onSubmitForm?.(data);
    },
    [onSubmitForm],
  );
  const onInvalid = useCallback(() => {
    console.error('Форма не прошла валидацию.');
  }, []);

  return (
    <Form
      data-testid="form"
      noValidate
      id={formName || 'defaulForm'}
      onSubmit={() => {
        handleSubmit(onValid, onInvalid)();
      }}
      onReset={() => {
        onResetForm?.(reset);
      }}
    >
      {children}
    </Form>
  );
};

export default CastomContent;
