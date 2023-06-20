import { default as authConfig } from '../AuthConfig.json';
import { getSessionParameter, resetAuthenticatedSession } from './session';

/**
 * Logs out from the session.
 */
export const dispatchLogout = () => {
  const token = getSessionParameter('ID_TOKEN');
  // Clear the session storage
  resetAuthenticatedSession();
  window.location.href = `${authConfig.LOGOUT_URL}?id_token_hint=${token}&post_logout_redirect_uri=${authConfig.REDIRECT_URI}`;
};
