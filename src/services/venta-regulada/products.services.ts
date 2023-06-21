import { getToken } from '../wso2';
import axios from 'axios';

import { CustomNotification } from '@/shared/interfaces/common';

const products_api = import.meta.env.VITE_BODEGA_PRODUCTS;
const api = import.meta.env.VITE_BODEGA_ENDPOINT;
const ticket = import.meta.env.VITE_TICKET;

export async function GetProducts(params?: any): Promise<CustomNotification[]> {
  try {
    const wso2TokenHeader = await getToken();
    const response = await axios.get(`${api}${products_api}`, {
      params: {
        ticket: ticket,
      },
      headers: wso2TokenHeader,
    });
    const productos = response.data[0];
    return productos;
  } catch (error) {
    console.error('Error consuming API', error);
    return [];
  }
}
