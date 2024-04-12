import { FC, lazy, LazyExoticComponent } from 'react';
import { FieldValues } from 'react-hook-form';

import { ControlledItemProps, TypeForm } from './type';

const controllerEditor: Record<
  TypeForm,
  LazyExoticComponent<
    FC<ControlledItemProps<FieldValues> & { ref?: React.Ref<HTMLElement> }>
  >
> = {
  text: lazy(() => import('@components/castomForm/GetEditor/Editors/Text')),
  password: lazy(() => import('@components/castomForm/GetEditor/Editors/Password')),
};

const GetEditor = <FormType extends FieldValues>(
  props: ControlledItemProps<FormType>,
) => {
  const { item } = props;
  const Component = controllerEditor[item.type] || controllerEditor.text;

  return Component && <Component {...(props as ControlledItemProps<FieldValues>)} />;
};

export default GetEditor;
