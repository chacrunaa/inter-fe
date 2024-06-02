import { ControlledItemProps } from '@components/castomForm/GetEditor/type';
import Button from '@components/Ui/Button/Button.component';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useIterwievStore } from '@stores/useIterwievStore/useIterwievStore';
import { useState } from 'react';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';

const VisuallyHiddenInput = styled('input')({
  height: 1,
  width: 1,
});
interface UploadButtonProps<FormType extends FieldValues>
  extends ControlledItemProps<FormType> {}

const UploadButton = <FormType extends FieldValues>({
  item,
}: UploadButtonProps<FormType>) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [filesCount, setFilesCount] = useState<number>(0);
  const { isFileUploadLoading } = useIterwievStore();
  const { control } = useFormContext<FormType>();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (files: FileList) => void,
  ) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(files);
      onChange(files);
    }
  };

  const handleUpload = () => {
    if (selectedFiles && item.onChange) {
      item.onChange(selectedFiles);
      setFilesCount(prevState => prevState + selectedFiles.length);
    }
  };
  const handleReset = () => {
    setSelectedFiles(null);
  };

  return (
    <Controller
      name={item.id}
      control={control}
      render={({ field: { onChange, ref, ...field } }) => (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'left', gap: 1 }}>
            <Box>
              <Button
                component="label"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                disabled={isFileUploadLoading || filesCount >= 3}
                tooltipProps={{
                  title:
                    filesCount >= 3
                      ? '3 файла уже загружены на сервер и обрабатываются. Нельзя загрузить более 3-х файлов'
                      : void 0,
                  placement: 'top',
                  arrow: true,
                }}
                {...field}
                {...item.editorProps?.buttonProps}
              >
                <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
                  {item.header}
                </Box>
                <VisuallyHiddenInput
                  type="file"
                  multiple={item.isMulti}
                  ref={ref}
                  onChange={e => handleChange(e, onChange)}
                />
              </Button>
            </Box>
            {selectedFiles && (
              <>
                <Button onClick={handleUpload} {...item.editorProps?.uploadButtonProps}>
                  Загрузить
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isFileUploadLoading}
                  {...item.editorProps?.resetButtonProps}
                >
                  Сбросить
                </Button>
                {isFileUploadLoading && (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CircularProgress size={24} />
                    <Typography sx={{ ml: 2 }}>Загрузка файлов...</Typography>
                  </Box>
                )}
              </>
            )}
          </Box>
          {selectedFiles && (
            <Box>
              <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1">
                Выбранные файлы:
              </Typography>
              {Array.from(selectedFiles).map((file, index) => (
                <Typography variant="body1" key={index}>
                  {file.name},
                </Typography>
              ))}
            </Box>
          )}
        </>
      )}
    />
  );
};

export default UploadButton;
