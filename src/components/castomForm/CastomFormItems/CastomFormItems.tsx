import { FieldValues } from 'react-hook-form';

import GetEditor from '../GetEditor/GetEditor';
import { FormItem, PermissionsType } from '../GetEditor/type';

export type FormItemsProps<FormType extends FieldValues> = {
  items: FormItem<FormType>[];
  className?: string;
  permission?: PermissionsType;
  serverErrors?: { [x: string]: [string] };
};
const CastomFormItems = <FormType extends FieldValues>(
  props: FormItemsProps<FormType>,
) => {
  const { items } = props;
  const permission = props.permission || 'write';

  return items?.map((item: FormItem<FormType>) => (
    <GetEditor key={item.id} item={item} permissions={permission} />
  ));
};

export default CastomFormItems;
