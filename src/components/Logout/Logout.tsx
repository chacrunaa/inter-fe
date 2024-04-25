import { Button } from '@mui/material';
import { useAuthStore } from '@stores/useGlobalStore';

const Logout = () => {
  const setToken = useAuthStore(s => s.setToken);
  const hundleLoguot = () => {
    setToken('');
  };
  return (
    <Button variant="contained" onClick={hundleLoguot}>
      Выйти
    </Button>
  );
};

export default Logout;
