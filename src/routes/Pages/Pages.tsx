import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import routes from '..';
import { getPageHeight } from './utils';

function Pages() {
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        {Object.values(routes).map(({ path, component: Component, subPath }) => {
          return (
            <React.Fragment key={path}>
              {Component && <Route key={path} path={path} element={<Component />} />}
              {subPath &&
                Object.values(subPath).map(({ path: childPath, component: Component2 }) => {
                  return (
                    <React.Fragment key={childPath}>
                      {Component2 && (
                        <Route
                          key={`${childPath}`}
                          path={`${childPath}`}
                          element={<Component2 />}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
            </React.Fragment>
          );
        })}
      </Routes>
    </Box>
  );
}

export default Pages;
