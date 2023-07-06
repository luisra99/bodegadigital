import routes from '..';
import OutSideRoute from '../ProtectedRoutes/OutSideRoute';
import PrivateRoute from '../ProtectedRoutes/ProtectedRoute';
import { getPageHeight } from './utils';

import { Fragment, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import LandingPage from '@/pages/LandingPage';
import Loading from '@/shared/components/Loading';

function Pages() {
  const NotFound = lazy(() => import('@/pages/NotFound'));
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme), marginTop: '64px' }}>
      <Routes>
        <Route
          path="/"
          element={
            <OutSideRoute>
              <Suspense fallback={<Loading />}>
                <LandingPage />
              </Suspense>
            </OutSideRoute>
          }
        />

        {Object.values(routes).map(({ path, component: Component, subPath }) => {
          return (
            <Fragment key={path}>
              {Component && (
                <Route key={path} path={path} element={<PrivateRoute component={Component} />} />
              )}
              {subPath &&
                Object.values(subPath).map(({ path: childPath, component: Component2 }) => {
                  return (
                    <Fragment key={childPath}>
                      {Component2 && (
                        <Route
                          key={`${childPath}`}
                          path={`${childPath}`}
                          element={<Component2 />}
                        />
                      )}
                    </Fragment>
                  );
                })}
            </Fragment>
          );
        })}
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Box>
  );
}

export default Pages;
