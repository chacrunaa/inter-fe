import { useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { FieldValues, useFormContext } from 'react-hook-form';

type IProps = {
  children: ReactNode;
  onSubmitForm?: (data: FormType) => void;
};

const CastomContent = <FormType extends FieldValues>({
  children,
  onSubmitForm,
}: IProps) => {
  const { handleSubmit } = useFormContext<FormType>();

  const handleSubmitBefore = (onValid, onInvalid) => {
    return handleSubmit(onValid, onInvalid)();
  };

  const onValid = useCallback(
    (data: FormType) => {
      console.log(data);
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
      onSubmit={event => {
        event.preventDefault();
        handleSubmitBefore(onValid, onInvalid);
      }}
    >
      {children}
    </Form>
  );
};

export default CastomContent;
