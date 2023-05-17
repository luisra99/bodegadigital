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
  proveedor: true,
  persona_id: 'asd',
  edad: 21,
  fecha_n: '1/08/1999',
  sex: 'M',
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
      edad: 12,
      sex: 'M',
      fecha_n: '1/08/1999',
    },
    {
      ci: `71051300702`,
      nombre: 'Raul',
      primer_apellido: 'Alfonso',
      segundo_apellido: 'Caballero',
      edad: 12,
      sex: 'M',
      fecha_n: '10/10/1970',
    },
    {
      ci: `70101000702`,
      nombre: 'Dayli',
      primer_apellido: 'Caballero',
      segundo_apellido: 'Caballero',
      edad: 12,
      sex: 'F',
      fecha_n: '12/12/1999',
    },
    {
      ci: `03062700702`,
      nombre: 'Diego',
      primer_apellido: 'Alfonso',
      segundo_apellido: 'Caballero',
      edad: 12,
      sex: 'M',
      fecha_n: '12/12/1999',
    },
  ],
  qr: 'as',
};
export const isConfig_seed = true;
export const notifications_seed = [
  {
    title: 'Modulo tienda de los combatientes',
    subTitle: 'Productos',
    content: 'Aceite, Pan, Azúcar',
    fecha: new Date('2023-06-25'),
    hora: '19:00',
    price: 80,
    secondarySubTitle: 'Distribución',
    secondaryContent: 'Por CDR',
  },
  {
    title: 'Modulo tienda de los combatientes',
    subTitle: 'Productos',
    content: 'Aceite, Pan, Azúcar',
    fecha: new Date('2023-04-10'),
    hora: '19:00',
    price: 80,
    secondarySubTitle: 'Distribución',
    secondaryContent: 'Por CDR',
  },
  {
    title: 'Modulo tienda de los combatientes',
    subTitle: 'Productos',
    content: 'Aceite, Pan, Azúcar',
    fecha: new Date('2023-04-25'),
    hora: '19:00',
    price: 80,
    secondarySubTitle: 'Distribución',
    secondaryContent: 'Por CDR',
  },
  {
    orden_dia: 5,
    cierre: 202302,
    ticket: '0535-0522-0005',
    corresponde: '2023-04-25',
    confirmado: null,
    entregado: null,
    persona_id: '185FECC8870C430B9712F8E459DDD9FB',
    responsable: 'Leonardo',
    productos: [
      {
        id: 1,
        denominacion: 'POLLO',
        adquirido: '2023-04-26',
        cantidad: 2,
      },
      {
        id: 2,
        denominacion: 'PICADILLO',
        adquirido: null,
        cantidad: 3,
      },
      {
        id: 4,
        denominacion: 'SALCHICHA',
        adquirido: null,
        cantidad: 6,
      },
      {
        id: 5,
        denominacion: 'LECHE',
        adquirido: '2023-04-26',
        cantidad: 3,
      },
      {
        id: 6,
        denominacion: 'PESCADO',
        adquirido: null,
        cantidad: 4,
      },
      {
        id: 7,
        denominacion: 'ACEITE',
        adquirido: null,
        cantidad: 9,
      },
      {
        id: 8,
        denominacion: 'PAN',
        adquirido: '2023-04-26',
        cantidad: 3,
      },
    ],
  },
];
export const ventaRegulada_seed = [
  {
    orden_dia: 5,
    cierre: 202302,
    ticket: '0535-0522-0005',
    corresponde: '2023-04-25',
    confirmado: null,
    entregado: null,
    persona_id: '185FECC8870C430B9712F8E459DDD9FB',
    responsable: 'Leonardo',
    productos: [
      {
        id: 1,
        denominacion: 'POLLO',
        adquirido: '2023-04-26',
        cantidad: 2,
      },
      {
        id: 2,
        denominacion: 'PICADILLO',
        adquirido: null,
        cantidad: 3,
      },
      {
        id: 4,
        denominacion: 'SALCHICHA',
        adquirido: null,
        cantidad: 6,
      },
      {
        id: 5,
        denominacion: 'LECHE',
        adquirido: '2023-04-26',
        cantidad: 3,
      },
      {
        id: 6,
        denominacion: 'PESCADO',
        adquirido: null,
        cantidad: 4,
      },
      {
        id: 7,
        denominacion: 'ACEITE',
        adquirido: null,
        cantidad: 9,
      },
      {
        id: 8,
        denominacion: 'PAN',
        adquirido: '2023-04-26',
        cantidad: 3,
      },
    ],
  },
  {
    orden_dia: 5,
    cierre: 202302,
    ticket: '0535-0522-0005',
    corresponde: '2023-04-25',
    confirmado: null,
    entregado: null,
    persona_id: '185FECC8870C430B9712F8E459DDD9FB',
    responsable: 'Leonardo',
    productos: [
      {
        id: 1,
        denominacion: 'POLLO',
        adquirido: '2023-04-26',
        cantidad: 2,
      },
      {
        id: 2,
        denominacion: 'PICADILLO',
        adquirido: null,
        cantidad: 3,
      },
      {
        id: 4,
        denominacion: 'SALCHICHA',
        adquirido: null,
        cantidad: 6,
      },
      {
        id: 5,
        denominacion: 'LECHE',
        adquirido: '2023-04-26',
        cantidad: 3,
      },
      {
        id: 6,
        denominacion: 'PESCADO',
        adquirido: null,
        cantidad: 4,
      },
      {
        id: 7,
        denominacion: 'ACEITE',
        adquirido: null,
        cantidad: 9,
      },
      {
        id: 8,
        denominacion: 'PAN',
        adquirido: '2023-04-26',
        cantidad: 3,
      },
    ],
  },
];
