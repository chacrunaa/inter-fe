import { TextField } from '@mui/material';
import { FieldValues, useFormContext } from 'react-hook-form';

import { ControlledItemProps } from '../../type';

const Password = <FormType extends FieldValues>({
  item,
}: ControlledItemProps<FormType>) => {
  const { register } = useFormContext<FormType>();

  const { ref: formRef, ...rest } = register(item.id);

  return (
    <TextField
      ref={formRef}
      type="password"
      {...rest}
      label={item.header}
      variant={item?.variant || 'filled'}
    />
  );
};
export default Password;
