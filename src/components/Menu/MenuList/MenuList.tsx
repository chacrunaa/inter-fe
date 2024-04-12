import MenuItem from '../MenuItem';
import { MenuDataType } from '../type';

const MenuList = ({ items }: { items: MenuDataType[] }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </ul>
  );
};

export default MenuList;
