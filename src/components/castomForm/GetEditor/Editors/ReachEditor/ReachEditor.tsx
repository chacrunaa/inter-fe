import 'react-quill/dist/quill.snow.css';

import { useCallback } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import ReactQuill from 'react-quill';

import { ControlledItemProps } from '../../type';

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const ReachEditor = <FormType extends FieldValues>({
  item,
}: ControlledItemProps<FormType>) => {
  const { register, getValues, setValue } = useFormContext<FormType>();
  const getValue = getValues(item.id);
  const saveValue = (value: any) => setValue(item.id, value);
  const { ref: formRef } = register(item.id);
  const handleChange = useCallback((value: string) => {
    saveValue(value);
  }, []);

  return (
    <ReactQuill
      ref={formRef}
      theme="snow"
      modules={item?.modules || modules}
      value={getValue}
      onChange={handleChange}
    />
  );
};

export default ReachEditor;
