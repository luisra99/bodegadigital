import { getToken } from '../wso2';
import axios from 'axios';

import { setCookie } from '@/helpers/cookies';
import { CustomNotification } from '@/shared/interfaces/common';

const products_api = import.meta.env.VITE_BODEGA_PRODUCTS;
const api = import.meta.env.VITE_BODEGA_ENDPOINT;

export async function GetProducts({
  oficina,
  bodega,
  nucleo,
}: {
  oficina: any;
  bodega: any;
  nucleo: any;
}): Promise<CustomNotification[]> {
  try {
    const wso2TokenHeader = await getToken();
    const response = await axios.get(`${api}${products_api}`, {
      params: {
        ticket: `${oficina}-${bodega}-${nucleo}`,
      },
      headers: wso2TokenHeader,
    });
    const productos = response.data[0];
    setCookie(
      'NOTIFICATIONS',
      productos?.filter(({ confirmado }: { confirmado: any }) => {
        return !confirmado;
      }).length ?? 0,
    );

    return productos;
  } catch (error) {
    console.error('Error consuming API', error);
    return [];
  }
}
