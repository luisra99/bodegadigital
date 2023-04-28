export interface Column {
  header: string;
  name: string | keyof any;
  type: 'text' | 'number' | 'date';
}
