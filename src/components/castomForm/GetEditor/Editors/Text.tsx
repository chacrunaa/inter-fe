import { FloatingLabel, Form } from 'react-bootstrap';
import { FieldValues, useFormContext } from 'react-hook-form';

import { ControlledItemProps } from '../type';

const Text = <FormType extends FieldValues>({ item }: ControlledItemProps<FormType>) => {
  const { register, getValues } = useFormContext<FormType>();

  const { ref: formRef, ...rest } = register(item.id);
  const value = getValues(item.id);
  return (
    <FloatingLabel controlId={item.id} className="mb-3" label={<>{item.header}</>}>
      <Form.Control
        ref={formRef}
        {...rest}
        type="text"
        title={value}
        autoComplete={'off'}
        required={item.required}
        placeholder={item.header}
      />
    </FloatingLabel>
  );
};

export default Text;
