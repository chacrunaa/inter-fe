import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CastomForm from '@components/castomForm';
import Container from '@components/Container';
import { LOGIN_PATH } from '@constatns/pathPage';
import { postItem } from '@network/api/api';
import { AllEntityesParamsDto } from '@network/types';
import { useAuthStore } from '@stores/useGlobalStore';
import { useMutation } from '@tanstack/react-query';

import { inputsDefs } from './confDefs/confDefs';

import style from './style.module.scss';

const Registration = () => {
  const object = 'auth/registration';

  const navigate = useNavigate();

  const setToken = useAuthStore(s => s.setToken);
  const token = useAuthStore(s => s.token);

  const registrationMutation = useMutation({
    mutationFn: (formData: AllEntityesParamsDto['auth/registration']) =>
      postItem(object, formData),
    onSuccess(data) {
      if (!!data?.token) {
        setToken(data?.token);
        navigate('/');
      } else {
        setToken('');
      }
    },
  });

  const handleSubmit = (formData: any) => {
    registrationMutation.mutate(formData);
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
    <div className={style.authenticationWrap}>
      <Container>
        <Link to={LOGIN_PATH}>Автризация</Link>
        <CastomForm>
          <CastomForm.Form onSubmitForm={handleSubmit}>
            <h1 className={style.authenticationFormTitle}>Регистрация</h1>
            <CastomForm.Items items={inputsDefs} />
            <Button type="submit" disabled={registrationMutation.isPending}>
              Зарегистрироваться
            </Button>
          </CastomForm.Form>
        </CastomForm>
      </Container>
    </div>
  );
};

export default Registration;
