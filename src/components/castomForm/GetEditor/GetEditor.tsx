import { FC, lazy, LazyExoticComponent } from 'react';
import { FieldValues } from 'react-hook-form';

import { ControlledItemProps, TypeForm } from './type';

const controllerEditor: Record<
  TypeForm,
  LazyExoticComponent<
    FC<ControlledItemProps<FieldValues> & { ref?: React.Ref<HTMLElement> }>
  >
> = {
  text: lazy(() => import('@components/castomForm/GetEditor/Editors/Text/index')),
  password: lazy(() => import('@components/castomForm/GetEditor/Editors/Password/index')),
  select: lazy(() => import('@components/castomForm/GetEditor/Editors/Select/index')),
  numberRange: lazy(
    () => import('@components/castomForm/GetEditor/Editors/NumberRange/index'),
  ),
  reachEditor: lazy(
    () => import('@components/castomForm/GetEditor/Editors/ReachEditor/index'),
  ),
  link: lazy(() => import('@components/castomForm/GetEditor/Editors/Link/index')),
};

const GetEditor = <FormType extends FieldValues>(
  props: ControlledItemProps<FormType>,
) => {
  const { item } = props;
  const Component = controllerEditor[item.type] || controllerEditor.text;

  return Component && <Component {...(props as ControlledItemProps<FieldValues>)} />;
};

export default GetEditor;
