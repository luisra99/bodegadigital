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
    const response = await axios.get(`${api}${products_api}`, {
      params: {
        ticket: ticket,
      },
      headers: d,
    });
    const productos = response.data[0];
    return productos;
  } catch (error) {
    console.error('Error consuming API', error);
    return [];
  }
}
