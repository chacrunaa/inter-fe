import { MenuDataType } from '@components/Menu/type';
import { Link } from 'react-router-dom';

import MenuList from '../MenuList';

const MenuItem = ({ item }: { item: MenuDataType }) => {
  return (
    <li>
      <Link to={item.to}>{item.name}</Link>
      {!!item?.children && <MenuList items={item.children} />}
    </li>
  );
};

export default MenuItem;
