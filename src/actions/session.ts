import { getCookie, removeCookie, setCookie } from '../helpers/cookies';

import Cookies from 'universal-cookie';

interface Session {
  ACCESS_TOKEN: string;
  REFRESH_TOKEN: string;
  SCOPE: string;
  ID_TOKEN: string;
  TOKEN_TYPE: string;
  EXPIRES_IN: string;
  PROFILE: any;
  NOTIFICATIONS: any;
}

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

export const getSessionParameter = (key: any) => {
  return getCookie(key);
};

export const resetAuthenticatedSession = async () => {
  const token = getCookie('ID_TOKEN');
  removeCookie('ACCESS_TOKEN');
  removeCookie('REFRESH_TOKEN');
  removeCookie('SCOPE');
  removeCookie('ID_TOKEN');
  removeCookie('TOKEN_TYPE');
  removeCookie('EXPIRES_IN');
  removeCookie('PROFILE');
  removeCookie('VERIFIER');
  removeCookie('NOTIFICATIONS');
  return token;
};

export const isValidSession = () => {
  const token = getCookie('ACCESS_TOKEN');
  return !!token;
};

export const getAllSessionParameters = async () => {
  const session: Session = {
    ACCESS_TOKEN: getCookie('ACCESS_TOKEN'),
    REFRESH_TOKEN: getCookie('REFRESH_TOKEN'),
    SCOPE: getCookie('SCOPE'),
    ID_TOKEN: getCookie('ID_TOKEN'),
    TOKEN_TYPE: getCookie('TOKEN_TYPE'),
    EXPIRES_IN: getCookie('EXPIRES_IN'),
    PROFILE: getCookie('PROFILE'),
    NOTIFICATIONS: getCookie('NOTIFICATIONS'),
  };
  return session;
};

export const decodeIdToken = (token: string) => {
  const isToken = token.split('.')[1];
  if (isToken) {
    return JSON.parse(atob(isToken));
  } else {
    return '';
  }
};
