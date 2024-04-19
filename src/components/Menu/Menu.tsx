import menuData from '@constatns/menuData.json';

import MenuHead from './MenuHead';
import MenuList from './MenuList';

import style from './style.module.scss';

const Menu = () => {
  return (
    <div className={style.menuWrapp}>
      <MenuHead />
      <MenuList items={menuData} />
    </div>
  );
};

export default Menu;
