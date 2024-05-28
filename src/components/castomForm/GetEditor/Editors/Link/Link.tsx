import { TextField } from '@mui/material';
import { FieldValues, useFormContext } from 'react-hook-form';

import { ControlledItemProps } from '../../type';

const Link = <FormType extends FieldValues>({ item }: ControlledItemProps<FormType>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  const urlMatches =
    /^(https:\/\/(hh\.ru\/vacancy\/\d+|career\.habr\.com\/vacancies\/\d+)(\?.*)?)?$/;

  const { ref: formRef, ...data } = register(item.id, {
    pattern: {
      value: urlMatches,
      message:
        'Не валидный формат ссылки. Ссылка должна содержкать "hh.ru" или "career.habr.com"',
    },
  });

  return (
    <>
      <TextField
        inputRef={formRef}
        type="text"
        {...data}
        label={item.header}
        className={item.className}
        variant={item?.variant || 'filled'}
        error={!!errors[item.id]}
        helperText={errors[item.id] ? String(errors[item.id]?.message) : ''}
      />
    </>
  );
};

export default Link;
