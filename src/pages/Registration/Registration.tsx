import Container from '@components/Container'
import { LOGIN_PATH } from '@constatns/pathPage'
import { FormGroup, Form, FormLabel, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './style.module.scss';

const Registration = () => {
    const handleSubmit = (event: {
        currentTarget: any;
        preventDefault: () => void;
        stopPropagation: () => void;
      }) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event);
        
      };
  return (
        <div className={style.authenticationWrap}>
    <Container>
        <Link to={LOGIN_PATH}>Автризация</Link>
        <div className={style.authenticationForm}>
            <h1 className={style.authenticationFormTitle}>Регистрация</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                <FormLabel>Email</FormLabel>
                <FormControl placeholder="Введите Email" />
                </FormGroup>
                <FormGroup className="mb-3">
                <FormLabel>Логин</FormLabel>
                <FormControl placeholder="Введите Логин" />
                </FormGroup>
                <FormGroup className="mb-3">
                <FormLabel>Пароль</FormLabel>
                <FormControl type="password" placeholder="Введите пароль" />
                </FormGroup>
                <Button type="submit">Зарегистрироваться</Button>
            </Form>
        </div>
    </Container>
        </div>
  )
}

export default Registration