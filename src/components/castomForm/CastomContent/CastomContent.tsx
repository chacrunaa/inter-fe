import { ReactNode, useCallback } from 'react';
import { FieldValues, Form, useFormContext } from 'react-hook-form';

import { useFormStore } from '../hook/useForm/useFormStore';

type IProps = {
  children: ReactNode;
  onSubmitForm?: (data: any) => void;
};

const CastomContent = <FormType extends FieldValues>({
  children,
  onSubmitForm,
}: IProps) => {
  const { handleSubmit } = useFormContext<FormType>();

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
    >
      {children}
    </Form>
  );
};

export default CastomContent;
