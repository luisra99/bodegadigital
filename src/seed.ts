import { InfoNucleo, UserProfile } from '@/shared/interfaces/common';

//SeedData
export const profile_seed: UserProfile = {
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
export const infoNucleo_seed: InfoNucleo = {
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
export const isConfig_seed = true;
