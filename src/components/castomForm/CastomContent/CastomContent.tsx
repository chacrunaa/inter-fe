import { ReactNode, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { FieldValues, useFormContext } from 'react-hook-form';

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
      id={formName}
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(onValid, onInvalid)();
      }}
    >
      {children}
    </Form>
  );
};

export default CastomContent;
