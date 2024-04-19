import Container from '@components/Container';
import Logout from '@components/Logout';

import style from './styel.module.scss';

const Header = () => {
  return (
    <Container customClass={style.headerWrap}>
      Header
      <Logout />
    </Container>
  );
};

export default Header;
