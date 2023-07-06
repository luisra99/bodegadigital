import { default as authConfig } from '../AuthConfig.json';
import { resetAuthenticatedSession } from './session';

export const dispatchLogout = () => {
  resetAuthenticatedSession().then(
    (token) =>
      (window.location.href = `${
        authConfig.CLIENT_URL + authConfig.SIGN_OUT_PATH
      }?id_token_hint=${token}&post_logout_redirect_uri=${authConfig.LOGOUT_URL}`),
  );
};
