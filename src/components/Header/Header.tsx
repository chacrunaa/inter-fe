import Logout from '@components/Logout';
import Menu from '@components/Menu';
import { Box, Typography } from '@mui/material';
import { useAuthStore } from '@stores/useGlobalStore';

const Header = () => {
  const token = useAuthStore(s => s.token);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#3f51b5',
        color: '#fff',
        marginBottom: '10px',
      }}
    >
      <Typography variant="h6">Header</Typography>
      <Menu />
      {token && <Logout />}
    </Box>
  );
};

export default Header;
