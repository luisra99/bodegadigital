import { CustomNotification } from '@/shared/interfaces/common';

import { notifications_seed } from '../../seed';

import axios from 'axios';

const notification_api = import.meta.env.VITE_BODEGA_NOTIFICATIONS;

//Obtener datos del usuario para hacer la petición
export async function GetNotifications(params?: any): Promise<any> {
  try {
    // const { username } = params;
    // Real Service
    // const response = (await axios.get(`${api}${notification_api}`));
    // const notifications = response.data
    //SeedData
    const notifications = notifications_seed;

    return notifications;
  } catch (error) {
    console.error('Error consuming API', error);
    return {};
  }
}
