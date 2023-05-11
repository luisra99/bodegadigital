import { InfoNucleo, ProfileContent, UserProfile } from '@/shared/interfaces/common';

import axios from 'axios';

const api = import.meta.env.VITE_BODEGA_ENDPOINT;
const claim_api = import.meta.env.VITE_BODEGA_CLAIM;
const profile_api = import.meta.env.VITE_BODEGA_PROFILE;

export function SetProfileConfiguration(params: any) {
  return;
}
export function GetProfileConfiguration(params?: any): ProfileContent {
  //consumir servicio
  // axios.get(api + profile_api,userId).then((result: any) => {
  //   return result;
  // });
  return { profile: profile, nucleo: infoNucleo };
}
export function UpdateProfileConfiguration(params: any) {
  return;
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
//SeedData
const profile: UserProfile = {
  foto: '/public/2022_08_23_21_19_IMG_8946.JPG',
  nombre: 'Luis Raul',
  primer_apellido: 'Alfonso',
  segundo_apellido: 'Caballero',
  direccion: 'Calle 35 entre 5 y 7 #507A',
  ci: '99080100702',
  tomo: '21',
  folio: '112',
  email: 'luisraul.alfonsoc@gmail.com',
  celular: '+53 55432748',
  jefe_nucleo: true,
  preveedor: true,
  persona_id: 'asd',
};
const infoNucleo: InfoNucleo = {
  oficina: '0012',
  bodega: '005',
  nucleo: '12',
  integrantes_count: 4,
  integrantes: [
    {
      ci: `99080100702`,
      nombre: 'Luis Raul',
      primer_apellido: 'Alfonso',
      segundo_apellido: 'Caballero',
    },
    {
      ci: `71051300702`,
      nombre: 'Raul',
      primer_apellido: 'Alfonso',
      segundo_apellido: 'Caballero',
    },
    {
      ci: `70101000702`,
      nombre: 'Dayli',
      primer_apellido: 'Caballero',
      segundo_apellido: 'Caballero',
    },
    {
      ci: `03062700702`,
      nombre: 'Diego',
      primer_apellido: 'Alfonso',
      segundo_apellido: 'Caballero',
    },
  ],
  qr: 'as',
};
