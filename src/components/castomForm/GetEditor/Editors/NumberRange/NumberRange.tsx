import { Box, Slider } from '@mui/material';
import { useCallback } from 'react';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';

import { ControlledItemProps } from '../../type';

const NumberRange = <FormType extends FieldValues>({
    item,
}: ControlledItemProps<FormType>) => {
    const { control, setValue, getValues } = useFormContext<FormType>();
    const {
        minValue = 0,
        maxValue = 500000,
        isDoubleValue,
        valueLabelDisplay = 'auto',
        marks,
    } = item;

    const value = getValues(item.id);

    const saveValue = useCallback((value: any) => setValue(item.id, value), []);
    if (!isDoubleValue) {
        saveValue(value || 0);
    } else {
        saveValue(value || [0, 0]);
    }
    return (
        <Box>
            <Controller
                name={item.id}
                control={control}
                render={({ field }) => (
                    <Slider
                        {...field}
                        valueLabelDisplay={valueLabelDisplay}
                        min={minValue}
                        max={maxValue}
                        marks={marks}
                    />
                )}
            />
        </Box>
    );
};

export default NumberRange;
