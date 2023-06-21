import { default as authConfig } from '../AuthConfig.json';
import { resetAuthenticatedSession } from './session';

/**
 * Logs out from the session.
 */
export const dispatchLogout = () => {
  // Clear the session storage
  resetAuthenticatedSession().then(
    (token) =>
      (window.location.href = `${
        authConfig.CLIENT_URL + authConfig.SIGN_OUT_PATH
      }?id_token_hint=${token}&post_logout_redirect_uri=${authConfig.REDIRECT_URI}`),
  );
};
