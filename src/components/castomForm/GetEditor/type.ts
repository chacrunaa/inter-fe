import { SelectVariants } from '@mui/material';
import { FieldValues, Path, PathValue } from 'react-hook-form';
import { ReactQuillProps } from 'react-quill';

export type TypeForm = 'text' | 'password' | 'select' | 'reachEditor';
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
export type FormItemRichText<FormType extends FieldValues> = {
  modules?: ReactQuillProps['modules'];
} & FormItemBase<FormType>;
export type PermissionsType = 'read' | 'write';
export type FormItem<FormType extends FieldValues> = FormItemBase<FormType> &
  FormItemSelect<FormType> &
  FormItemRichText<FormType>;
export type ControlledItemProps<FormType extends FieldValues> = {
  item: FormItem<FormType>;
  permissions: PermissionsType;
};
