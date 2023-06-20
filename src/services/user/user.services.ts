import { default as authConfig } from '../../AuthConfig.json';
import { getCookie, removeCookie, setCookie } from '../../helpers/cookies';
import { getToken } from '../wso2';

import axios, { AxiosHeaders } from 'axios';

const user_api = import.meta.env.VITE_BODEGA_PRODUCTS;
const api = import.meta.env.VITE_BODEGA_USUARIO;
const id = import.meta.env.VITE_ID;
export async function SetProfileConfiguration(params?: any) {
  try {
    return 'response';
  } catch (error) {
    console.log('Error set profile data', error);
    return {
      status: 500,
      error: error,
    };
  }
}
export async function GetUserToken(params?: any) {
  try {
    const { code } = params || '';
    const { data } = await getToken();
    console.log(params);
    const d: AxiosHeaders = data as AxiosHeaders;
    const response = await axios.post(
      `https://bodega.prod.xetid.cu/api/token`,
      {
        code: params,
      },
      {
        headers: d,
      },
    );
    return response;
  } catch (error) {
    console.error('Error en la controladora', error);
    return null;
  }
}
export async function GetProfileConfiguration(params?: any) {
  try {
    const { userId } = params || '159-951-753-357';
    const { data } = await getToken();
    const d: AxiosHeaders = data as AxiosHeaders;
    const response = axios.get(`${authConfig.CLIENT_INFO}`, {
      params: {
        access_token: getCookie('ACCESS_TOKEN'),
      },
      headers: d,
    });
    return response;
    // return { profile: { nombre: 'luis raul', foto: null } };
  } catch (error) {
    console.error('Error en la controladora', error);
    return null;
  }
}
export function ReclaimRegistration(setState: (value: any) => void, ci: string) {
  setState(false);
  console.log(ci);
  // axios.post(api + claim_api, ci).then((result: any) => {
  //   setState(true);
  //   return result;
  // });
  setTimeout(() => setState(true), 5000);
}
