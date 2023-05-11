import { CustomNotification } from '@/shared/interfaces/common';

import axios from 'axios';

//Obtener datos del usuario para hacer la peticion
export async function GetNotifications(params?: any): Promise<any> {
  const office = await GetOfficeNotifications();
  const store = await GetStoreNotifications();
  const nuke = await GetNukeNotifications();
  return { office, store, nuke };
}
function GetOfficeNotifications(params?: any): CustomNotification[] {
  return [
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subTitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubTitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subTitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubTitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
  ];
}
function GetStoreNotifications(params?: any): CustomNotification[] {
  return [
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subTitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubTitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
  ];
}
function GetNukeNotifications(params?: any): CustomNotification[] {
  return [
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subTitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubTitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
  ];
}
