import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { LOGIN_PATH } from '@constatns/pathPage';
import { useAuthStore } from '@stores/useGlobalStore';

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore(s => s.token);
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN_PATH} state={{ prevUrl: location.pathname }} />
  );
};

export default ProtectedRoute;
