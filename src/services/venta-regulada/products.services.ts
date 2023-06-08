import { CustomNotification } from '@/shared/interfaces/common';

import { getToken } from '../wso2';

import axios, { AxiosHeaders } from 'axios';

const products_api = import.meta.env.VITE_BODEGA_PRODUCTS;
const api = import.meta.env.VITE_BODEGA_ENDPOINT;
const ticket = import.meta.env.VITE_TICKET;
//Obtener datos del usuario para hacer la petición
export async function GetProducts(params?: any): Promise<CustomNotification[]> {
  try {
    const { data } = await getToken();
    const d: AxiosHeaders = data as AxiosHeaders;
    const response = await axios.post(
      `${api}${products_api}`,
      {
        idsistema: 422,
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
          ticket: ticket,
        },
        headers: d,
      },
    );
    const productos = response.data[0];
    return productos;
  } catch (error) {
    console.error('Error consuming API', error);
    return [];
  }
}
