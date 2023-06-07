import { getToken } from '../wso2';

import axios, { AxiosHeaders } from 'axios';

export async function SetProfileConfiguration(params: any) {
  try {
    const { values } = params;
    const response = await axios.post(`http://localhost:3000/profile`, values);

    return response;
  } catch (error) {
    return {
      status: 500,
      error: error,
    };
  }
}
export async function GetProfileConfiguration(params?: any) {
  try {
    const { userId } = params || '159-951-753-357';
    // const { data } = await getToken();
    // const d: AxiosHeaders = data as AxiosHeaders;
    const response = await axios.get(
      `https://wso2-gws.mtz.xetid.cu:443/appciudadano1/1.0.0/api/apiusuario?idusuario=159-951-753-357`,
      {
        headers: {
          'Internal-Key': import.meta.env.VITE_TOKEN,
        },
      },
    );
    return response.data[0];
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
