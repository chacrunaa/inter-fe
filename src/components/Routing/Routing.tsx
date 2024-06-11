import Layout from '@components/Layout';
import Loading from '@components/Loading';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          {AuthenticatedRoutes()}
          {UnauthenticatedRoutes()}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
