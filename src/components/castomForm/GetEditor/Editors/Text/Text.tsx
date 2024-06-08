import { TextField } from '@mui/material';
import { FieldValues, useFormContext } from 'react-hook-form';

import { ControlledItemProps } from '../../type';

const Text = <FormType extends FieldValues>({ item }: ControlledItemProps<FormType>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();
  const { ref: formRef, ...rest } = register(item.id, {
    ...(item.urlMatches && {
      pattern: {
        value: item?.urlMatches,
        message:
          'Не валидный формат ссылки. Ссылка должна содержкать "hh.ru" или "career.habr.com"',
      },
    }),
  });

  if (item.urlMatches) {
    return (
      <>
        <TextField
          inputRef={formRef}
          type="text"
          {...rest}
          label={item.header}
          className={item.className}
          variant={item?.variant || 'filled'}
          error={!!errors[item.id]}
          helperText={errors[item.id] ? String(errors[item.id]?.message) : ''}
        />
      </>
    );
  }
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
