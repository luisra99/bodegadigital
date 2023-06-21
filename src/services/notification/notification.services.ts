import { getToken } from '../wso2';
import axios from 'axios';

import { CustomNotification } from '@/shared/interfaces/common';

const notification_api = import.meta.env.VITE_BODEGA_NOTIFICATIONS;
const api = import.meta.env.VITE_BODEGA_ENDPOINT;
const id = import.meta.env.VITE_ID;

export async function GetNotifications(params?: any): Promise<CustomNotification[]> {
  try {
    const wso2TokenHeader = await getToken();
    const response = await axios.get(`${api}${notification_api}`, {
      params: {
        idusuario: id,
      },
      headers: wso2TokenHeader,
    });
    const notifications = response.data;
    return notifications;
  } catch (error) {
    console.error('Error consuming API', error);
    return [];
  }
}
