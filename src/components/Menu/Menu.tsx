import menuData from '@constatns/menuData.json';

import MenuList from './MenuList';

const Menu = () => {
  return (
    <div>
      <MenuList items={menuData} />
    </div>
  );
};

export default Menu;
