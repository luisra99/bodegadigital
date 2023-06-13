import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { AuthProvider, AuthReactConfig, useAuthContext } from '@asgardeo/auth-react';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

import './App.sass';

const config: AuthReactConfig = {
  clientID: 'gvQyhhqYoeALp2L9RSKQZ7fW4i4a',
  clientSecret: 'imeNMa_WGXEeOHO9hQEaJa3of3wa',
  signInRedirectURL: 'https://bodegadigital.prod.xetid.cu/',
  endpoints: {
    authorizationEndpoint: 'https://identity.enzona.net/oauth2/authorize',
    endSessionEndpoint: 'https://identity.enzona.net/oidc/logout',
    checkSessionIframe: 'https://identity.enzona.net/oidc/checksession',
    introspectionEndpoint: '',
    issuer: 'https://identity.enzona.net/oauth2/token',
    jwksUri: 'https://identity.enzona.net/oauth2/jwks',
    revocationEndpoint: 'https://identity.enzona.net/oauth2/revoke',
    tokenEndpoint: 'http://10.12.110.155/bvirtual/public/index.php/api/gettoken',
    userinfoEndpoint: 'https://identity.enzona.net/oauth2/userinfo',
  },
  scope: ['openid', 'profile'],
};

function App() {
  // const { httpRequest } = useAuthContext();
  // const httpConfig = httpRequest({
  //   headers: {
  //     asd: 'asd',
  //   },
  // });

  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
