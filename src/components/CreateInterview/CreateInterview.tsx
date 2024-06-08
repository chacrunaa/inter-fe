/* eslint-disable @typescript-eslint/no-unused-vars */
import { interviewDefs } from '@components/CardInterview/confDefs/interviewDefs';
import CastomForm from '@components/castomForm';
import { HOME_PATH } from '@constatns/pathPage';
import { Box, Button, Typography } from '@mui/material';
import { postItem } from '@network/api/api';
import { AllEntityesParamsDto } from '@network/types';
import { useAuthStore } from '@stores/useGlobalStore';
import { useIterwievStore } from '@stores/useIterwievStore/useIterwievStore';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import UploadFile from '@components/UploadFile';
import { v4 as uuidv4 } from 'uuid';

const CreateInterview = () => {
  const [articleId] = useState<string>(uuidv4());
  const { setFileUploadLoading, setFileError, setFileSucсess } = useIterwievStore();
  const token = useAuthStore(s => s.token);
  const urlMatches =
    /^(https:\/\/(hh\.ru\/vacancy\/\d+|career\.habr\.com\/vacancies\/\d+)(\?.*)?)?$/;
  const object = 'interviews';
  const authMutation = useMutation({
    mutationFn: (formData: AllEntityesParamsDto['interviews']) =>
      postItem(object, token, formData),
  });

  const uploadVideoToLink = useMutation({
    mutationFn: (formData: FormData) => postItem('files/upload', token, formData),
  });

  useEffect(() => {
    setFileUploadLoading(uploadVideoToLink.isPending);
  }, [uploadVideoToLink.isPending, setFileUploadLoading]);

  useEffect(() => {
    setFileError(uploadVideoToLink.isError);
  }, [uploadVideoToLink.isError, setFileError]);

  useEffect(() => {
    setFileSucсess(uploadVideoToLink.isSuccess);
  }, [uploadVideoToLink.isSuccess, setFileSucсess]);

  const mutationAfterChange = (files: FileList) => {
    const formData = new FormData();
    Array.from(files).forEach(item => {
      formData.append('file', item);
    });
    formData.append('articleId', articleId);
    uploadVideoToLink.mutate(formData);
  };

  const handleSubmit = (formData: any) => {
    const { offer, ...data } = formData;
    const { uploadButton, ...dataWithoutParams } = data;
    const processedData = {
      ...dataWithoutParams,
      minoffer: Number(offer[0]) || 0,
      maxoffer: Number(offer[1]) || 500000,
      id: articleId,
    };
    authMutation.mutate(processedData);
  };
  return (
    <CastomForm>
      <CastomForm.Form onSubmitForm={handleSubmit}>
        <Box>
          <Box>
            <Link to={HOME_PATH}>
              <Button type="button">&larr;</Button>
            </Link>
            <Typography variant="subtitle1">Как правильно заполнять форму?</Typography>
          </Box>
          <Box sx={{ display: 'grid', gap: '10px' }}>
            <CastomForm.Items
              items={interviewDefs({
                mutationAfterChange,
                urlMatches,
              })}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
            <Link to={HOME_PATH}>
              <Button type="button" variant="contained">
                Отмена
              </Button>
            </Link>
            <Button type="button" variant="contained">
              Сохранить черновик
            </Button>
            <Button type="submit" variant="contained">
              Создать
            </Button>
          </Box>
        </Box>
      </CastomForm.Form>
    </CastomForm>
  );
};

export default CreateInterview;
