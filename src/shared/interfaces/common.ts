import { AlertColor } from '@mui/material';

export interface Column {
  header: string;
  name: string | keyof any;
  type: 'text' | 'number' | 'date';
}
export interface CustomNotification {
  type?: AlertColor;
  title: string;
  subTitle: string;
  content: string;
  fecha?: Date;
  price?: number;
  secondarySubTitle?: string;
  secondaryContent?: string;
  advice?: string;
  hora?: string;
}
export interface UserProfile extends Person {
  foto: string;
  tomo: string;
  folio: string;
  direccion: string;
  email: string;
  celular: string;
  jefe_nucleo?: boolean;
  proveedor?: boolean;
  persona_id: string;
}
export interface Person {
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  ci: string;
  edad: number;
  fecha_n: string;
  sex: string;
}

export interface InfoNucleo {
  oficina?: string;
  bodega?: string;
  nucleo?: string;
  integrantes_count?: number;
  integrantes?: Person[];
  qr?: string;
}
export interface ProfileContent {
  profile: UserProfile;
  isConfig?: boolean;
  nucleo?: InfoNucleo;
}
export interface GTableProps {
  data: any;
  messageForEmpty: string;
  columns: Column[];
  readOnly: boolean;
  fullWith?: boolean;
  CustomHeader?: JSX.Element;
}
