import { getToken } from '../../src/services/wso2';
import { default as authConfig } from '../AuthConfig.json';
import { decodeIdToken, initAuthenticatedSession } from './session';
import axios, { AxiosHeaders } from 'axios';

import { setCookie } from '@/helpers/cookies';
import { GetProfileConfiguration } from '@/services/user/user.services';

/**
 * Sends an authorization request.
 */
export const sendAuthorizationRequest = () => {
  const authorizeRequest = `${authConfig.AUTHORIZE_ENDPOINT}?response_type=${authConfig.RESPONSE_TYPE}&scope=${authConfig.SCOPE}&redirect_uri=${authConfig.REDIRECT_URI}&client_id=${authConfig.CLIENT_ID}`;
  window.location.href = authorizeRequest;
};

/**
 * Sends a token request.
 *
 * @param code Authorization code
 * @return {Promise<AxiosResponse<T> | never>}
 */
export const sendTokenRequest = async (code: any) => {
  // const body = [];
  // body.push(`client_id=${authConfig.CLIENT_ID}`);
  // body.push(`client_secret=${authConfig.CLIENT_SECRET}`);
  // body.push(`code=${code}`);
  // body.push(`grant_type=${authConfig.GRANT_TYPE}`);
  // body.push(`redirect_uri=${authConfig.REDIRECT_URI}`);
  return axios
    .post(
      `${authConfig.TOKEN_ENDPOINT}`,
      JSON.stringify({
        code: code,
        grant_type: authConfig.GRANT_TYPE,
        redirect_uri: authConfig.REDIRECT_URI,
      }),
      await getTokenRequestHeaders(),
    )
    .then(async (response) => {
      if (response.status !== 200) {
        return Promise.reject(
          new Error('Invalid status code received in the token response: ' + response.status),
        );
      }
      const isToken = JSON.parse(response.data);
      initAuthenticatedSession(isToken);
      await GetProfileConfiguration().then((profile) => {
        setCookie('PROFILE', profile);
        isToken['profile'] = profile;
      });
      // Store the response in the session storage
      return isToken;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

/**
 * Helper to set request headers.
 *
 * @return {{headers: {Accept: string, "Access-Control-Allow-Origin": string, "Content-Type": string}}}
 */
const getTokenRequestHeaders = async () => {
  const wso2TokenHeader = await getToken();
  return {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': `${authConfig.CLIENT_URL}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      ...wso2TokenHeader,
    },
  };
};
