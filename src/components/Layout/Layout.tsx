import { Outlet } from 'react-router-dom';
import Footer from '@components//Footer';
import Header from '@components/Header';
import Menu from '@components/Menu';

import style from './style.module.scss';

const Layout = () => {
  return (
    <>
      <Menu />

      <div className={style.bodyWrap}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
