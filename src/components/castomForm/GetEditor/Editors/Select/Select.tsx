import { useState } from 'react';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import {
  Box,
  Chip,
  FilledInput,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select as MuiSelect,
  SelectVariants,
} from '@mui/material';

import { ControlledItemProps } from '../../type';

const variantInput = (variant?: SelectVariants) => {
  switch (variant) {
    case 'outlined':
      return <OutlinedInput />;
    case 'standard':
      return <Input />;
    case 'filled':
      return <FilledInput />;

    default:
      return <FilledInput />;
  }
};

const Select = <FormType extends FieldValues>({
  item,
}: ControlledItemProps<FormType>) => {
  const [options] = useState(item?.options);
  const { control } = useFormContext<FormType>();
  return (
    <FormControl required={item.required} variant={item?.variant || 'filled'}>
      <InputLabel variant={item?.variant || 'filled'} id={item.id}>
        {item.header}
      </InputLabel>
      <Controller
        name={item.id}
        control={control}
        render={({ field }) => {
          return (
            <MuiSelect
              {...field}
              labelId={item.id}
              multiple={item.isMulti}
              value={field.value || []}
              onChange={event => {
                const {
                  target: { value },
                } = event;
                field.onChange(typeof value === 'string' ? value?.split(',') : value);
              }}
              input={variantInput(item?.variant)}
              renderValue={selected => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected?.map((value: string) => {
                    const label =
                      options?.find(option => option.value === value)?.label || value;
                    return <Chip key={value} label={label} variant="outlined" />;
                  })}
                </Box>
              )}
            >
              {options?.map(name => {
                return (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                );
              })}
            </MuiSelect>
          );
        }}
      ></Controller>
    </FormControl>
  );
};

export default Select;
