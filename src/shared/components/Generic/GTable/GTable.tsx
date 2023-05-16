import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Column, GTableProps } from '@interfaces/common';

import './GTable.sass';

export default function GTable(props: GTableProps) {
  const { data, messageForEmpty, columns, readOnly, fullWith, CustomHeader } = props;
  const columnsCount = columns?.length;
  const hiddenCellsCount = columns?.filter((column: Column) => !column.name).length;
  const visibleColumnsCount = columnsCount - hiddenCellsCount;
  const additionalColumnCount = readOnly ? 0 : 1;
  const totalColumnCount = visibleColumnsCount + additionalColumnCount;
  //Para una correcta configuracion si se modifica colsToShow debe modificarse el estilo del acrchivo Gtable.sass
  const responsiveMatrix: ResponsiveMatrix = {
    xs: { matrix: [6, 12, 12, 12, 12, 12, 12], colsToShow: 3 },
    sm: { matrix: [4, 6, 10, 12, 12, 12, 12], colsToShow: 3 },
    md: { matrix: [3, 4, 6, 6, 10, 11, 12], colsToShow: 5 },
    lg: { matrix: [2, 3, 4, 4, 9, 10, 11], colsToShow: 7 },
    xl: { matrix: [1, 2, 3, 4, 9, 10, 11], colsToShow: 8 },
  };
  const responsiveValue = (breakPoint: keyof ResponsiveMatrix): ResponsiveValue => {
    return {
      value:
        fullWith || totalColumnCount > 7
          ? 12
          : responsiveMatrix[breakPoint]?.matrix[totalColumnCount - 1],
      class:
        totalColumnCount > responsiveMatrix[breakPoint]?.colsToShow
          ? ''
          : `show-more-${breakPoint}`,
    };
  };

  const getColumnClass = (index: number) => {
    const cols = index + additionalColumnCount;
    return `col-${cols > 8 ? 'x' : cols}`;
  };

  const { xs, sm, md, lg, xl } = {
    xs: responsiveValue('xs'),
    sm: responsiveValue('sm'),
    md: responsiveValue('md'),
    lg: responsiveValue('lg'),
    xl: responsiveValue('xl'),
  };
  return (
    <Grid
      item
      xs={xs.value}
      sm={sm.value}
      md={md.value}
      lg={lg.value}
      xl={xl.value}
      minWidth={'275px'}
    >
      <TableContainer component={Paper}>
        {CustomHeader && CustomHeader}

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
              {readOnly ? (
                <TableCell
                  align="center"
                  key={-3}
                  className={` icon-crud more ${xs.class} ${sm.class} ${md.class} ${lg.class} ${xl.class}`}
                ></TableCell>
              ) : (
                <TableCell align="center" key={-2}>
                  Acciones
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.length > 0 ? (
                data.map((dataItem: any, dataIndex: number) => (
                  <TableRow key={dataIndex}>
                    {columns.map(({ name, type }, index) => (
                      <TableCell
                        align={type != 'number' ? 'left' : 'center'}
                        key={`${dataIndex}-${index}`}
                        className={getColumnClass(index)}
                      >
                        {dataItem[name]}
                      </TableCell>
                    ))}

                    {!readOnly ? (
                      <TableCell align="center" key={`actions-${dataIndex}`}>
                        <EditIcon className="icon-crud edit" />
                        <DeleteIcon className="icon-crud delete" />
                        <RemoveRedEyeIcon
                          className={`icon-crud more ${xs.class} ${sm.class} ${md.class} ${lg.class} ${xl.class}`}
                        />
                      </TableCell>
                    ) : (
                      <TableCell
                        key={`more-${dataIndex}`}
                        className={`more--alone ${xs.class} ${sm.class} ${md.class} ${lg.class} ${xl.class}`}
                      >
                        <MoreVertIcon className="icon-crud more--alone" />
                      </TableCell>
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow key="no-data-key">
                  <TableCell colSpan={hiddenCellsCount} align={'center'}>
                    <h4>No existen datos</h4>
                  </TableCell>
                </TableRow>
              )
            ) : (
              <TableRow key="conextion-error-key">
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
  xs: { matrix: number[]; colsToShow: number };
  sm: { matrix: number[]; colsToShow: number };
  md: { matrix: number[]; colsToShow: number };
  lg: { matrix: number[]; colsToShow: number };
  xl: { matrix: number[]; colsToShow: number };
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
interface ResponsiveValue {
  value: number;
  class: string;
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
