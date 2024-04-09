import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CastomForm from '@components/castomForm';
import Container from '@components/Container';
import { postItem } from '@network/api/api';
import { useAuthStore } from '@stores/useGlobalStore';
import { useQuery } from '@tanstack/react-query';

import { inputsDefs } from './confDefs/confDefs';

import style from './style.module.scss';

const Login = () => {
  const object = 'auth/login';

  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: [object],
    queryFn: () =>
      postItem(object, {
        email: 'firstrEmwail@example.com',
        password: '322334323RWW',
      }),
  });

  const setToken = useAuthStore(s => s.setToken);

  const handleSubmit = (formData: any) => {
    console.log('formData -> ', formData);

    if (!!data?.token) {
      setToken(data.token);
      navigate('/');
    } else {
      setToken('');
    }
  };

  return (
    <div className={style.loginWrap}>
      <Container>
        <CastomForm formName={'loginForm'}>
          <CastomForm.Form onSubmitForm={handleSubmit}>
            <CastomForm.Items inputs={inputsDefs} />
            <Button type="submit" disabled={isLoading}>
              Войти
            </Button>
          </CastomForm.Form>
        </CastomForm>
      </Container>
    </div>
  );
};

export default Login;
