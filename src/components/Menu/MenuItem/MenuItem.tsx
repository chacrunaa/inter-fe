import { MenuDataType } from '@components/Menu/type';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import MenuList from '../MenuList';

const MenuItem = ({ item }: { item: MenuDataType }) => {
  return (
    <Box
      sx={{
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#ddd',
          borderRadius: '5px',
        },
      }}
    >
      <Link
        to={item.to}
        style={{
          color: '#fff',
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        {item.name}
      </Link>
      {!!item?.children && <MenuList items={item.children} />}
    </Box>
  );
};

export default MenuItem;
