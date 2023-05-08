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
  price?: number;
  secondarySubTitle?: string;
  secondaryContent?: string;
  advice?: string;
}
