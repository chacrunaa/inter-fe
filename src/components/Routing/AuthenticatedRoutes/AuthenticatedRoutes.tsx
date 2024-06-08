import { CREATE_INTERVIEW, HOME_PATH } from '@constatns/pathPage';
import { lazy } from 'react';
import { Route } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute';

const NotFound = lazy(() => import('@pages/NotFound'));
const MainMenu = lazy(() => import('@pages/MainMenu'));
const CardCreateInterview = lazy(() => import('@pages/CardCreateInterview'));

const AuthenticatedRoutes = () => (
    <Route path={HOME_PATH} element={<ProtectedRoute />}>
        <Route path={HOME_PATH} element={<MainMenu />} />
        <Route path="*" element={<NotFound />} />
        <Route path={CREATE_INTERVIEW} element={<CardCreateInterview />} />
    </Route>
);

export default AuthenticatedRoutes;
