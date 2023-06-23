import { default as authConfig } from '../../AuthConfig.json';
import { getCookie } from '../../helpers/cookies';
import { getToken } from '../wso2';
import axios from 'axios';

export async function GetProfileConfiguration(params?: any) {
  try {
    const wso2TokenHeader = await getToken();
    const { data } = await axios.get(`${authConfig.CLIENT_INFO}`, {
      params: {
        access_token: getCookie('ACCESS_TOKEN'),
      },
      headers: wso2TokenHeader,
    });
    return data;
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
