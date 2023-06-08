import { CustomNotification } from '@/shared/interfaces/common';

import { getToken } from '../wso2';

import axios, { AxiosHeaders } from 'axios';

const notification_api = import.meta.env.VITE_BODEGA_NOTIFICATIONS;
const api = import.meta.env.VITE_BODEGA_ENDPOINT;
const id = import.meta.env.VITE_ID;
//Obtener datos del usuario para hacer la petición
export async function GetNotifications(params?: any): Promise<CustomNotification[]> {
  try {
    const { data } = await getToken();
    const d: AxiosHeaders = data as AxiosHeaders;
    const response = await axios.get(`${api}${notification_api}`, {
      params: {
        idusuario: id,
      },
      headers: d,
    });
    const notifications = response.data;
    return notifications;
  } catch (error) {
    console.error('Error consuming API', error);
    return [];
  }
}
