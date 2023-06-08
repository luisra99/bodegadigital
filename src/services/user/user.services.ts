import { getToken } from '../wso2';

import axios, { AxiosHeaders } from 'axios';

const user_api = import.meta.env.VITE_BODEGA_PRODUCTS;
const api = import.meta.env.VITE_BODEGA_USUARIO;
const id = import.meta.env.VITE_ID;
export async function SetProfileConfiguration(params?: any) {
  try {
    const { values } = params || {};
    const { data } = await getToken();
    const d: AxiosHeaders = data as AxiosHeaders;
    const response = await axios.post(
      `${api}${user_api}`,
      {
        PI: {
          idpi: '562-5784-545',
          username: 'xfgfbcfb',
          nombre: '4f54f5sd4',
          apellido1: '55vf5sd41',
          apellido2: 'f21vs5v4fc5',
          tomo: '2541',
          folio: '64554',
          sexo: '5fv4s564',
          direccion: 'd4rdfv',
          correo: '4fv545',
          foto_p: '41v5',
          telefono: 'sd6fd',
        },
      },
      {
        params: {
          userId: id,
        },
        headers: d,
      },
    );
    return response;
  } catch (error) {
    console.log('Error set profile data', error);
    return {
      status: 500,
      error: error,
    };
  }
}
export async function GetProfileConfiguration(params?: any) {
  try {
    const { userId } = params || '159-951-753-357';
    const { data } = await getToken();
    const d: AxiosHeaders = data as AxiosHeaders;
    const response = await axios.get(
      `https://bodegadigital.prod.xetid.cu/wso2/api/apiusuario?idusuario=159-951-753-357`,
      {
        headers: d,
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
