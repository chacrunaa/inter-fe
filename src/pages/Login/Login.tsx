import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CastomForm from '@components/castomForm';
import Container from '@components/Container';
import { REGISTRATION_PATH } from '@constatns/pathPage';
import { postAuth } from '@network/api/api';
import { AllEntityesParamsDto } from '@network/types';
import { useAuthStore } from '@stores/useGlobalStore';
import { useMutation } from '@tanstack/react-query';

import { inputsDefs } from './confDefs/confDefs';

import style from './style.module.scss';

const Login = () => {
  const object = 'auth/login';

  const navigate = useNavigate();

  const setToken = useAuthStore(s => s.setToken);
  const token = useAuthStore(s => s.token);

  const authMutation = useMutation({
    mutationFn: (formData: AllEntityesParamsDto['auth/login']) =>
      postAuth(object, formData),
    onSuccess(data) {
      if (!!data?.token) {
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
    if (!!token) {
      navigate('/');
    }
  }, [navigate, token]);

  if (!!token) {
    return null;
  }

  return (
    <div className={style.loginWrap}>
      <Container>
        <Link to={REGISTRATION_PATH}>Регистрация</Link>
        <CastomForm>
          <CastomForm.Form onSubmitForm={handleSubmit}>
            <h1 className={style.loginFormTitle}>Авторизация</h1>
            <CastomForm.Items items={inputsDefs} />
            <Button type="submit" disabled={authMutation.isPending}>
              Войти
            </Button>
          </CastomForm.Form>
        </CastomForm>
      </Container>
    </div>
  );
};

export default Login;
