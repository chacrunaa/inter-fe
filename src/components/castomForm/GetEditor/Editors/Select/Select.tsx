import { useCallback, useEffect, useMemo, useState } from 'react';
import { isArray } from 'lodash';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form';
import ReactSelect from 'react-select';
import { deepEqual } from '@utils/utils';

import { ControlledItemProps } from '../../type';

const Select = <FormType extends FieldValues>({
  item,
}: ControlledItemProps<FormType>) => {
  const [options, setOptions] = useState(item.options);
  const { register, control } = useFormContext<FormType>();

  useEffect(() => {
    if (isArray(item.options) && !deepEqual(item.options, options)) {
      setOptions(item.options);
    }
  }, [item.options, options]);

  const { ref: formRef } = register(item.id);

  const optionsMemo = useMemo(() => options || [], [options]);

  const handlerRender = useCallback(
    ({ field }: { field: ControllerRenderProps<FormType, Path<FormType>> }) => (
      <ReactSelect
        {...field}
        ref={formRef}
        required={item.required}
        isMulti={item?.isMulti}
        className={'mb-3'}
        options={optionsMemo}
        placeholder={item.header}
      ></ReactSelect>
    ),
    [formRef, item.header, item?.isMulti, item.required, optionsMemo],
  );

  return (
    <Controller
      name={item.id}
      control={control}
      defaultValue={item?.value}
      render={handlerRender}
    />
  );
};

export default Select;
