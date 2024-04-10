import { FieldValues, Path, PathValue } from 'react-hook-form';

export type TypeForm = 'text' | 'password';
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
};
export type PermissionsType = 'read' | 'write';
export type FormItem<FormType extends FieldValues> = FormItemBase<FormType>;
export type ControlledItemProps<FormType extends FieldValues> = {
  item: FormItem<FormType>;
  permissions: PermissionsType;
};
