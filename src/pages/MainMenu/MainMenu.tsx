import CardInterview from '@components/CardInterview';
import { CREATE_INTERVIEW } from '@constatns/pathPage';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <Container>
      <Button variant="outlined" sx={{ marginLeft: '90%' }}>
        <Link to={CREATE_INTERVIEW}>Создать</Link>
      </Button>
      <CardInterview />
    </Container>
  );
};

export default MainMenu;
