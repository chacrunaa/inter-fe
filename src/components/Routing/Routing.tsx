import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CREATE_INTERVIEW, HOME_PATH, LOGIN_PATH, REGISTRATION_PATH } from '@constatns/pathPage';

const NotFound = lazy(() => import('@pages/NotFound'));
const MainMenu = lazy(() => import('@pages/MainMenu'));
const CardCreateInterview = lazy(() => import('@pages/CardCreateInterview'));
const Login = lazy(() => import('@pages/Login'));
const Registration = lazy(() => import('@pages/Registration'));
const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
const Layout = lazy(() => import('@components/Layout'));
const Loading = lazy(() => import('@components/Loading'));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={HOME_PATH} element={<ProtectedRoute />}>
          <Route path={HOME_PATH} element={<Layout />}>
            <Route index element={<MainMenu />} />
            <Route path="*" element={<NotFound />} />
            <Route path={CREATE_INTERVIEW} element={<CardCreateInterview />} />
          </Route>
        </Route>
        <Route path={LOGIN_PATH} element={<Login />} />
        <Route path={REGISTRATION_PATH} element={<Registration />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
