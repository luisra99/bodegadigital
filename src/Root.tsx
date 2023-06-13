import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

import { AuthProvider, AuthReactConfig, useAuthContext } from '@asgardeo/auth-react';

import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
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

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <RecoilRoot>
        <HelmetProvider>
          <ThemeProvider>
            <AuthProvider config={config}>
              <App />
            </AuthProvider>
          </ThemeProvider>
        </HelmetProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}

export default render;
