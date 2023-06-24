import { getToken } from '../../src/services/wso2';
import { default as authConfig } from '../AuthConfig.json';
import { decodeIdToken, initAuthenticatedSession } from './session';
import axios, { AxiosHeaders } from 'axios';

import { setCookie, getCookie } from '@/helpers/cookies';
import { GetProfileConfiguration } from '@/services/user/user.services';

export type Challenge = {
  verifier: string;
  challenge: string;
};

/**
 * Sends an authorization request.
 */
export const sendAuthorizationRequest = ({
  challenge,
  verifier,
}: {
  challenge: string;
  verifier: string;
}) => {
  setCookie('VERIFIER', verifier);
  const authorizeRequest = `${authConfig.AUTHORIZE_ENDPOINT}?response_type=${authConfig.RESPONSE_TYPE}&scope=${authConfig.SCOPE}&redirect_uri=${authConfig.REDIRECT_URI}&client_id=${authConfig.CLIENT_ID}&code_challenge=${challenge}&code_challenge_method=S256`;
  window.location.href = authorizeRequest;
};

export const requestChallenge = async (): Promise<any> => {
  try {
    const wso2TokenHeader = await getToken();
    const { data } = await axios.get(`${authConfig.CHALLENGE}`, {
      headers: wso2TokenHeader,
    });
    return JSON.parse(data);
  } catch (error) {
    console.error('Error en la controladora', error);
    return { challenge: false };
  }
};
/**
 * Sends a token request.
 *
 * @param code Authorization code
 * @return {Promise<AxiosResponse<T> | never>}
 */
export const sendTokenRequest = async (code: any) => {
  return axios
    .post(
      `${authConfig.TOKEN_ENDPOINT}`,
      JSON.stringify({
        code: code,
        grant_type: authConfig.GRANT_TYPE,
        redirect_uri: authConfig.REDIRECT_URI,
        verifier: getCookie('VERIFIER'),
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
      if (isToken.access_token) {
        initAuthenticatedSession(isToken);
        await GetProfileConfiguration().then((profile) => {
          setCookie('PROFILE', profile);
          isToken['profile'] = profile;
        });
      }

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
