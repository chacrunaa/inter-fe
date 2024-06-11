import { LOGIN_PATH, REGISTRATION_PATH } from '@constatns/pathPage';
import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Login = lazy(() => import('@pages/Login'));
const Registration = lazy(() => import('@pages/Registration'));

const UnauthenticatedRoutes = () => (
    <>
        <Route path={LOGIN_PATH} element={<Login />} />
        <Route path={REGISTRATION_PATH} element={<Registration />} />
    </>
);

export default UnauthenticatedRoutes;
