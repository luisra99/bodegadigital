import routes from '..';
import { getPageHeight } from './utils';

import { Fragment, useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import Welcome from '@/pages/Welcome';
import Loading from '@/shared/components/Loading';

function Pages() {
  const [session, setSession] = useState(true);
  const NotFound = lazy(() => import('@/pages/NotFound'));
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme), marginTop: '64px' }}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Welcome />
            </Suspense>
          }
        />
        {session &&
          Object.values(routes).map(({ path, component: Component, subPath }) => {
            return (
              <Fragment key={path}>
                {Component && <Route key={path} path={path} element={<Component />} />}
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
