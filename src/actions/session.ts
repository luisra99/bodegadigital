import { getCookie, removeCookie, setCookie } from '../helpers/cookies';

import Cookies from 'universal-cookie';

import { GetProfileConfiguration } from '@/services/user/user.services';

const cookies = new Cookies();
interface Session {
  ACCESS_TOKEN: string;
  REFRESH_TOKEN: string;
  SCOPE: string;
  ID_TOKEN: string;
  TOKEN_TYPE: string;
  EXPIRES_IN: string;
  PROFILE: any;
}

/**
 * Initialize authenticated user session.
 */
export const initAuthenticatedSession = (data: {
  access_token: any;
  refresh_token: any;
  scope: any;
  id_token: any;
  token_type: any;
  expires_in: any;
}) => {
  setCookie('ACCESS_TOKEN', data.access_token);
  setCookie('REFRESH_TOKEN', data.refresh_token);
  setCookie('SCOPE', data.scope);
  setCookie('ID_TOKEN', data.id_token);
  setCookie('TOKEN_TYPE', data.token_type);
  setCookie('EXPIRES_IN', data.expires_in);
};

/**
 * Get session parameter from cookie storage.
 *
 * @param key
 * @return {string}
 */
export const getSessionParameter = (key: any) => {
  return getCookie(key);
};

/**
 * Reset authenticated session.
 */
export const resetAuthenticatedSession = async () => {
  console.log('Delete Cookie');
  const token = getCookie('ID_TOKEN');
  removeCookie('ACCESS_TOKEN');
  removeCookie('REFRESH_TOKEN');
  removeCookie('SCOPE');
  removeCookie('ID_TOKEN');
  removeCookie('TOKEN_TYPE');
  removeCookie('EXPIRES_IN');
  removeCookie('PROFILE');
  return token;
};

/**
 * Returns whether session is valid.
 *
 * @return {boolean}
 */
export const isValidSession = () => {
  const token = getCookie('ACCESS_TOKEN');
  return !!token;
};

/**
 * Get all session parameters.
 *
 * @returns {{}}
 */
export const getAllSessionParameters = () => {
  const session: Session = {
    ACCESS_TOKEN: getCookie('ACCESS_TOKEN'),
    REFRESH_TOKEN: getCookie('REFRESH_TOKEN'),
    SCOPE: getCookie('SCOPE'),
    ID_TOKEN: getCookie('ID_TOKEN'),
    TOKEN_TYPE: getCookie('TOKEN_TYPE'),
    EXPIRES_IN: getCookie('EXPIRES_IN'),
    PROFILE: getCookie('PROFILE'),
  };
  return session;
};

/**
 * Base64 decodes the ID token
 *
 * @param token id token
 * @return {any}
 */
export const decodeIdToken = (token: string) => {
  const isToken = token.split('.')[1];
  if (isToken) {
    return JSON.parse(atob(isToken));
  } else {
    return '';
  }
};
