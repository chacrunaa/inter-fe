import { Box } from '@mui/material';

import MenuItem from '../MenuItem';
import { MenuDataType } from '../type';

const MenuList = ({ items }: { items: MenuDataType[] }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: 0,
        margin: 0,
      }}
    >
      {items.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </Box>
  );
};

export default MenuList;
