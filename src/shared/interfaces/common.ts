import { AlertColor } from '@mui/material';

export interface Column {
  header: string;
  name: string | keyof any;
  type: 'text' | 'number' | 'date';
}
export interface Notification {
  type: AlertColor;
  title: string;
  subTitle: string;
  content: string;
  price?: string;
  additionalContent?: { title: string; content: string };
  advice?: string;
}
