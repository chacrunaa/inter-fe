import Logout from '@components/Logout';
import Menu from '@components/Menu';
import { Container } from '@mui/material';

const Header = () => {
  return (
    <Container>
      Header
      <Menu />
      <Logout />
    </Container>
  );
};

export default Header;
