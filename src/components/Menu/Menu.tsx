import menuData from '@constatns/menuData.json';
import { Box } from '@mui/material';

import MenuList from './MenuList';

const Menu = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <MenuList items={menuData} />
    </Box>
  );
};

export default Menu;
