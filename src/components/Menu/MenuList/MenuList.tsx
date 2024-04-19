import MenuItem from '../MenuItem';
import { MenuDataType } from '../type';

const MenuList = ({ items }: { items: MenuDataType[] }) => {
  return (
    <div>
      {items.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </div>
  );
};

export default MenuList;
