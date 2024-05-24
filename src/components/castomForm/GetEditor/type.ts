import { SelectVariants, SliderOwnProps } from '@mui/material';
import { FieldValues, Path, PathValue } from 'react-hook-form';

export type TypeForm = 'text' | 'password' | 'select' | 'numberRange';
export type FormItemBase<FormType extends FieldValues> = {
  id: Path<FormType>;
  type: TypeForm;
  value?: PathValue<FormType, Path<FormType>>;
  name?: string;
  header?: string;
  permission?: PermissionsType;
  className?: string;
  required?: boolean;
  editorProps?: FieldValues;
  disabled?: boolean;
  variant?: SelectVariants;
};
export type FormItemSelect<FormType extends FieldValues> = {
  options?: { value: string; label: string }[];
  isMulti?: boolean;
} & FormItemBase<FormType>;
export type FormItemNumberRange<FormType extends FieldValues> = {
  minValue?: number;
  maxValue?: number;
  isDoubleValue?: boolean;
  arrayMarks?: { value: string; label: string }[];
  valueLabelDisplay?: SliderOwnProps['valueLabelDisplay'];
  marks?: SliderOwnProps['marks'];
} & FormItemBase<FormType>;
export type PermissionsType = 'read' | 'write';
export type FormItem<FormType extends FieldValues> = FormItemBase<FormType> &
  FormItemSelect<FormType> &
  FormItemNumberRange<FormType>;
export type ControlledItemProps<FormType extends FieldValues> = {
  item: FormItem<FormType>;
  permissions: PermissionsType;
};
