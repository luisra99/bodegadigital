import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Column } from '@/interfaces/common';

import './GTable.sass';

export default function GTable(
  data: any,
  { prop, operator, value }: Filter,
  messageForEmpty: string,
  columns: any[],
  readOnly: boolean,
) {
  const columnsCount = columns?.length;
  const hiddenCellsCount = columns?.filter((column: Column) => !column.name).length;
  const visibleColumnsCount = columnsCount - hiddenCellsCount;
  const additionalColumnCount = readOnly ? 0 : 1;
  const totalColumnCount = visibleColumnsCount + additionalColumnCount;

  const responsiveMatrix: ResponsiveMatrix = {
    xs: [6, 12, 12, 12, 12, 12, 12],
    sm: [4, 6, 10, 12, 12, 12, 12],
    md: [3, 4, 6, 6, 10, 11, 12],
    lg: [2, 3, 4, 4, 9, 10, 11],
    xl: [1, 2, 3, 4, 9, 10, 11],
  };
  const responsiveValue = (breakPoint: keyof ResponsiveMatrix) =>
    totalColumnCount > 7 ? 12 : responsiveMatrix[breakPoint][totalColumnCount - 1];

  const getColumnClass = (index: number) => 
{const cols=index+additionalColumnCount
return `col-${ cols> 8 ? 'x' : cols}`
}

  const { xs, sm, md, lg, xl } = {
    xs: responsiveValue('xs'),
    sm: responsiveValue('sm'),
    md: responsiveValue('md'),
    lg: responsiveValue('lg'),
    xl: responsiveValue('xl'),
  };
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} minWidth={'275px'}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map(({ header, type }, index: number) => (
                <TableCell
                  key={index}
                  align={type != 'number' ? 'left' : 'center'}
                  className={getColumnClass(index)}
                >
                  {header}
                </TableCell>
              ))}
              {!!hiddenCellsCount && (
                <TableCell align="center" key={-1}>
                  Detalles
                </TableCell>
              )}
              {!readOnly && (
                <TableCell align="center" key={-2}>
                  Acciones
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.length > 0 ? (
                data.map((dataItem: any, index: number) => (
                  <TableRow key={index}>
                    {columns.map(({ name, type }, index) => (
                      <TableCell
                        align={type != 'number' ? 'left' : 'center'}
                        key={index}
                        className={getColumnClass(index)}
                      >
                        {dataItem[name]}
                      </TableCell>
                    ))}
                    {!!hiddenCellsCount && <TableCell align="center">... </TableCell>}
                    {!readOnly && (
                      <TableCell align="center">
                        <EditIcon className="icon-crud edit" />
                        <DeleteIcon className="icon-crud delete" />
                        <RemoveRedEyeIcon className="icon-crud more" />
                      </TableCell>
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={hiddenCellsCount} align={'center'}>
                    <h4>No existen datos</h4>
                  </TableCell>
                </TableRow>
              )
            ) : (
              <TableRow>
                <TableCell colSpan={hiddenCellsCount} align={'center'}>
                  No se pudo conectar
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

type ResponsiveMatrix = {
  xs: number[];
  sm: number[];
  md: number[];
  lg: number[];
  xl: number[];
};

interface Operations {
  '<': () => boolean;
  '<=': () => boolean;
  '===': () => boolean;
  '==': () => boolean;
  '>=': () => boolean;
  '>': () => boolean;
  '!=': () => boolean;
}

interface Filter {
  prop: string;
  operator: keyof Operations;
  value: any;
}

function compare(property: number | string, operator: keyof Operations, value: any) {
  const operations: Operations = {
    '<': () => property < value,
    '<=': () => property <= value,
    '===': () => property === value,
    '==': () => property === value,
    '>=': () => property >= value,
    '>': () => property > value,
    '!=': () => property != value,
  };

  return operations[operator]?.() ?? false;
}
