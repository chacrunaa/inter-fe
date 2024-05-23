import './CreateInterview.scss';

import { interviewDefs } from '@components/CardInterview/confDefs/interviewDefs';
import CastomForm from '@components/castomForm';
import { HOME_PATH } from '@constatns/pathPage';
import { Box, Button, Typography } from '@mui/material';
import { postItem } from '@network/api/api';
import { useAuthStore } from '@stores/useGlobalStore';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const CreateInterview = () => {
  const token = useAuthStore(s => s.token);
  const object = 'interviews';

  const authMutation = useMutation({
    mutationFn: (formData: any) => postItem(object, formData, token),
  });

  const handleSubmit = (formData: any) => {
    const { ...rest } = formData;
    const processedData = {
      ...rest,
      minoffer: Number(rest.minoffer) || 0,
      maxoffer: Number(rest.maxoffer) || 500000,
    };
    authMutation.mutate(processedData);
  };

  return (
    <CastomForm>
      <CastomForm.Form onSubmitForm={handleSubmit}>
        <Box className="interview-form">
          <Box className="form-header">
            <Link to={HOME_PATH} className="back-link">
              <Button type="button" className="back-button">
                &larr;
              </Button>
            </Link>
            <Typography variant="subtitle1" className="form-title">
              Как правильно заполнять форму?
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gap: '10px' }}>
            <CastomForm.Items items={interviewDefs} />
          </Box>
          <Box className="form-actions">
            <Link to={HOME_PATH} className="back-link">
              <Button type="button" className="cancel-button">
                Отмена
              </Button>
            </Link>
            <Button type="button" className="draft-button">
              Сохранить черновик
            </Button>
            <Button type="submit" className="create-button">
              Создать
            </Button>
          </Box>
        </Box>
      </CastomForm.Form>
    </CastomForm>
  );
};

export default CreateInterview;
