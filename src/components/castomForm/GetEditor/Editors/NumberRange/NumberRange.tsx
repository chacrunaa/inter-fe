import { Box, Slider } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { ControlledItemProps } from '../../type';

const NumberRange = <FormType extends FieldValues>({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    item,
}: ControlledItemProps<FormType>) => {
    const { control, setValue } = useFormContext<FormType>();

    const minOfferPath: Path<FormType> = 'minoffer' as Path<FormType>;
    const maxOfferPath: Path<FormType> = 'maxoffer' as Path<FormType>;

    return (
        <Box>
            <Controller
                name={minOfferPath}
                control={control}
                render={({ field: { value: minValue = 0, onChange: onMinChange } }) => (
                    <Controller
                        name={maxOfferPath}
                        control={control}
                        render={({ field: { value: maxValue = 500000, onChange: onMaxChange } }) => (
                            <Slider
                                value={[minValue, maxValue]}
                                onChange={(event, newValue) => {
                                    const [newMin, newMax] = newValue as number[];
                                    onMinChange(newMin);
                                    onMaxChange(newMax);
                                    setValue(minOfferPath, newMin as any);
                                    setValue(maxOfferPath, newMax as any);
                                }}
                                valueLabelDisplay="auto"
                                min={0}
                                max={500000}
                            />
                        )}
                    />
                )}
            />
        </Box>
    );
};

export default NumberRange;
