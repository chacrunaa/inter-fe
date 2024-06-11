import CastomForm from '@components/castomForm';
import Loading from '@components/Loading';
import { REGISTRATION_PATH } from '@constatns/pathPage';
import { Alert, Box, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { postAuth } from '@network/api/api';
import { AllEntityesParamsDto } from '@network/types';
import { useAuthStore } from '@stores/useGlobalStore';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { inputsDefs } from './confDefs/confDefs';

const Login = () => {
  const object = 'auth/login';

  const navigate = useNavigate();

  const setToken = useAuthStore(s => s.setToken);
  const token = useAuthStore(s => s.token);

  const authMutation = useMutation({
    mutationFn: (formData: AllEntityesParamsDto['auth/login']) =>
      postAuth(object, formData),
    onSuccess(data) {
      if (data?.token) {
        setToken(data.token);
        navigate('/');
      } else {
        setToken('');
      }
    },
  });

  const handleSubmit = (formData: any) => {
    authMutation.mutate(formData);
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  if (token) {
    return null;
  }

  const getErrorMessage = (error: any) => {
    if (error?.response?.data?.message) {
      return (
        'Ошибка авторизации. Пожалуйста, попробуйте снова.' + error.response.data.message
      );
    }
    return 'Ошибка авторизации.';
  };

  return (
    <Container>
      <Link to={REGISTRATION_PATH}>Регистрация</Link>
      <CastomForm>
        <CastomForm.Form onSubmitForm={handleSubmit}>
          <Typography variant="h1">Авторизация</Typography>
          <CastomForm.Items items={inputsDefs} />
          {authMutation.isPending ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Loading />
            </Box>
          ) : (
            <Button type="submit" variant="contained" disabled={authMutation.isPending}>
              Войти
            </Button>
          )}
          {authMutation.isError && (
            <Alert severity="error">{getErrorMessage(authMutation.error)}</Alert>
          )}
        </CastomForm.Form>
      </CastomForm>
    </Container>
  );
};

export default Login;
