import { TextField } from '@mui/material';
import { FieldValues, useFormContext } from 'react-hook-form';

import { ControlledItemProps } from '../../type';

const Text = <FormType extends FieldValues>({ item }: ControlledItemProps<FormType>) => {
  const { register } = useFormContext<FormType>();

  const { ref: formRef, ...rest } = register(item.id);

  return (
    <TextField
      ref={formRef}
      type="text"
      {...rest}
      label={item.header}
      className={item.className}
      variant={item?.variant || 'filled'}
    />
  );
};

export default Text;
