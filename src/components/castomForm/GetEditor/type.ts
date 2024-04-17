import { FieldValues, Path, PathValue } from 'react-hook-form';
import { GroupBase, OptionsOrGroups } from 'react-select';

export type TypeForm = 'text' | 'password' | 'select';
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
export type FormItemSelect<FormType extends FieldValues> = {
  options?: OptionsOrGroups<
    {
      value: string;
      label: string;
    },
    GroupBase<{
      value: string;
      label: string;
    }>
  >;
  isMulti?: boolean;
} & FormItemBase<FormType>;
export type PermissionsType = 'read' | 'write';
export type FormItem<FormType extends FieldValues> = FormItemBase<FormType> &
  FormItemSelect<FormType>;
export type ControlledItemProps<FormType extends FieldValues> = {
  item: FormItem<FormType>;
  permissions: PermissionsType;
};
