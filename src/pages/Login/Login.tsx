import CastomForm from '@components/castomForm';
import { REGISTRATION_PATH } from '@constatns/pathPage';
import { Container, Typography } from '@mui/material';
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

  return (
    <Container>
      <Link to={REGISTRATION_PATH}>Регистрация</Link>
      <CastomForm>
        <CastomForm.Form onSubmitForm={handleSubmit}>
          <Typography variant="h1">Авторизацияz</Typography>
          <CastomForm.Items items={inputsDefs} />
          <Button type="submit" variant="contained" disabled={authMutation.isPending}>
            Войти
          </Button>
        </CastomForm.Form>
      </CastomForm>
    </Container>
  );
};

export default Login;
