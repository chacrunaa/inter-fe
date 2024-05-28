import { interviewDefs } from '@components/CardInterview/confDefs/interviewDefs';
import CastomForm from '@components/castomForm';
import { HOME_PATH } from '@constatns/pathPage';
import { Box, Button, Typography } from '@mui/material';
import { postItem } from '@network/api/api';
import { AllEntityesParamsDto } from '@network/types';
import { useAuthStore } from '@stores/useGlobalStore';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const CreateInterview = () => {
  const token = useAuthStore(s => s.token);
  const object = 'interviews';

  const authMutation = useMutation({
    mutationFn: (formData: AllEntityesParamsDto['interviews']) =>
      postItem(object, formData, token),
  });
  const handleSubmit = (formData: any) => {
    const { offer, ...data } = formData;

    const processedData = {
      ...data,
      minoffer: Number(offer[0]) || 0,
      maxoffer: Number(offer[1]) || 500000,
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
            <CastomForm.Items items={interviewDefs} />
          </Box>
          <Box>
            <Link to={HOME_PATH}>
              <Button type="button">Отмена</Button>
            </Link>
            <Button type="button">Сохранить черновик</Button>
            <Button type="submit">Создать</Button>
          </Box>
        </Box>
      </CastomForm.Form>
    </CastomForm>
  );
};

export default CreateInterview;
