import { SyntheticEvent, useState, Fragment } from 'react';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { Column } from '@interfaces/common';

import GTabPanel from '@/shared/components/Generic/GTabPanel/GTabPanel';
import GTable from '@/shared/components/Generic/GTable/GTable';
import GTableContainer from '@/shared/components/Generic/GTableContainer/GTableContainer';
import Meta from '@/shared/components/Meta';

import '../../theme/App.sass';

function ProductosPage() {
  const [content, setContent] = useState<any[]>([]);
  const porComprarColmuns: Column[] = [
    { header: 'Producto', name: 'denominacion', type: 'text' },
    { header: 'Cantidad', name: 'cantidad', type: 'number' },
    { header: 'Cantidad', name: 'valor1', type: 'number' },
    { header: 'valor2', name: 'valor2', type: 'text' },
    { header: 'valor3', name: 'valor3', type: 'text' },
    { header: 'valor4', name: 'valor4', type: 'text' },
    { header: 'valor5', name: 'valor5', type: 'text' },
  ];

  const compradosColmuns: Column[] = [
    { header: 'Producto', name: 'denominacion', type: 'text' },
    { header: 'Cantidad', name: 'cantidad', type: 'number' },
    { header: 'Fecha', name: 'adquirido', type: 'date' },
  ];
  return (
    <>
      <Meta title="page 2" />
      <Button
        sx={{ display: !content ? 'none' : '' }}
        onClick={() =>
          setContent([
            {
              orden_dia: 5,
              cierre: 202302,
              ticket: '0535-0522-0005',
              corresponde: '2023-04-25T17:27:38.915Z',
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
                  valor1: '123456789',
                  valor2: '123456789098',
                  valor3: '123456789',
                  valor4: 'asdasdasdasdasd',
                  valor5: 'cascascascacas',
                  valor6: 'asvasdasdasdasdasdssd',
                  valor7: 'asdasdasdasss',
                  valor8: 'asvasdasdasdasdasdssd',
                  valor9: 'asdasdasdasss',
                },
                {
                  id: 2,
                  denominacion: 'PICADILLO',
                  adquirido: null,
                  cantidad: 3,
                  valor1: '123456789',
                  valor2: '123456789098',
                  valor3: '123456789',
                  valor4: 'asdasdasdasdasd',
                  valor5: 'cascascascacas',
                  valor6: 'asvasdasdasdasdasdssd',
                  valor7: 'asdasdasdasss',
                  valor8: 'asvasdasdasdasdasdssd',
                  valor9: 'asdasdasdasss',
                },
                {
                  id: 4,
                  denominacion: 'SALCHICHA',
                  adquirido: null,
                  cantidad: 6,
                  valor1: '123456789',
                  valor2: '123456789098',
                  valor3: '123456789',
                  valor4: 'asdasdasdasdasd',
                  valor5: 'cascascascacas',
                  valor6: 'asvasdasdasdasdasdssd',
                  valor7: 'asdasdasdasss',
                  valor8: 'asvasdasdasdasdasdssd',
                  valor9: 'asdasdasdasss',
                },
                {
                  id: 5,
                  denominacion: 'LECHE',
                  adquirido: '2023-04-26',
                  cantidad: 3,
                  valor1: '123456789',
                  valor2: '123456789098',
                  valor3: '123456789',
                  valor4: 'asdasdasdasdasd',
                  valor5: 'cascascascacas',
                  valor6: 'asvasdasdasdasdasdssd',
                  valor7: 'asdasdasdasss',
                  valor8: 'asvasdasdasdasdasdssd',
                  valor9: 'asdasdasdasss',
                },
                {
                  id: 6,
                  denominacion: 'PESCADO',
                  adquirido: null,
                  cantidad: 4,
                  valor1: '123456789',
                  valor2: '123456789098',
                  valor3: '123456789',
                  valor4: 'asdasdasdasdasd',
                  valor5: 'cascascascacas',
                  valor6: 'asvasdasdasdasdasdssd',
                  valor7: 'asdasdasdasss',
                  valor8: 'asvasdasdasdasdasdssd',
                  valor9: 'asdasdasdasss',
                },
                {
                  id: 7,
                  denominacion: 'ACEITE',
                  adquirido: null,
                  cantidad: 9,
                  valor1: '123456789',
                  valor2: '123456789098',
                  valor3: '123456789',
                  valor4: 'asdasdasdasdasd',
                  valor5: 'cascascascacas',
                  valor6: 'asvasdasdasdasdasdssd',
                  valor7: 'asdasdasdasss',
                  valor8: 'asvasdasdasdasdasdssd',
                  valor9: 'asdasdasdasss',
                },
                {
                  id: 8,
                  denominacion: 'PAN',
                  adquirido: '2023-04-26',
                  cantidad: 3,
                  valor1: '123456789',
                  valor2: '123456789098',
                  valor3: '123456789',
                  valor4: 'asdasdasdasdasd',
                  valor5: 'cascascascacas',
                  valor6: 'asvasdasdasdasdasdssd',
                  valor7: 'asdasdasdasss',
                  valor8: 'asvasdasdasdasdasdssd',
                  valor9: 'asdasdasdasss',
                },
              ],
            },
            {
              orden_dia: 1,
              cierre: 202302,
              ticket: '0535-0522-0001',
              corresponde: '2023-04-20T17:27:38.915Z',
              confirmado: null,
              entregado: null,
              persona_id: '185FECC8870C430B9712F8E459DDD9FB',
              responsable: 'Leonardo',
              productos: [
                { id: 1, denominacion: 'POLLO2', adquirido: '2023-04-26', cantidad: 2 },
                { id: 2, denominacion: 'PICADILLO2', adquirido: null, cantidad: 3 },
                { id: 4, denominacion: 'SALCHICHA2', adquirido: null, cantidad: 6 },
                { id: 5, denominacion: 'LECHE2', adquirido: '2023-04-26', cantidad: 3 },
                { id: 6, denominacion: 'PESCADO2', adquirido: null, cantidad: 4 },
                { id: 7, denominacion: 'ACEITE2', adquirido: null, cantidad: 9 },
                { id: 8, denominacion: 'PAN2', adquirido: '2023-04-26', cantidad: 3 },
              ],
            },
            {
              orden_dia: 1,
              cierre: 202302,
              ticket: '0535-0522-0001',
              corresponde: '2023-04-20T17:27:38.915Z',
              confirmado: null,
              entregado: null,
              persona_id: '185FECC8870C430B9712F8E459DDD9FB',
              responsable: 'Leonardo',
              productos: [
                { id: 1, denominacion: 'POLLO2', adquirido: '2023-04-26', cantidad: 2 },
                { id: 2, denominacion: 'PICADILLO2', adquirido: null, cantidad: 3 },
                {
                  id: 4,
                  denominacion: 'SALCHICHA2',
                  adquirido: null,
                  cantidad: 6,
                },
                { id: 5, denominacion: 'LECHE2', adquirido: '2023-04-26', cantidad: 3 },
                { id: 6, denominacion: 'PESCADO2', adquirido: null, cantidad: 4 },
                { id: 7, denominacion: 'ACEITE2', adquirido: null, cantidad: 9 },
                { id: 8, denominacion: 'PAN2', adquirido: '2023-04-26', cantidad: 3 },
              ],
            },
            {
              orden_dia: 1,
              cierre: 202302,
              ticket: '0535-0522-0001',
              corresponde: '2023-04-20T17:27:38.915Z',
              confirmado: null,
              entregado: null,
              persona_id: '185FECC8870C430B9712F8E459DDD9FB',
              responsable: 'Leonardo',
              productos: [
                { id: 1, denominacion: 'POLLO2', adquirido: '2023-04-26', cantidad: 2 },
                { id: 2, denominacion: 'PICADILLO2', adquirido: null, cantidad: 3 },
                { id: 4, denominacion: 'SALCHICHA2', adquirido: null, cantidad: 6 },
                { id: 5, denominacion: 'LECHE2', adquirido: '2023-04-26', cantidad: 3 },
                { id: 6, denominacion: 'PESCADO2', adquirido: null, cantidad: 4 },
                { id: 7, denominacion: 'ACEITE2', adquirido: null, cantidad: 9 },
                { id: 8, denominacion: 'PAN2', adquirido: '2023-04-26', cantidad: 3 },
              ],
            },
            {
              orden_dia: 1,
              cierre: 202302,
              ticket: '0535-0522-0001',
              corresponde: '2023-04-20T17:27:38.915Z',
              confirmado: null,
              entregado: null,
              persona_id: '185FECC8870C430B9712F8E459DDD9FB',
              responsable: 'Leonardo',
              productos: [
                { id: 1, denominacion: 'POLLO2', adquirido: '2023-04-26', cantidad: 2 },
                { id: 2, denominacion: 'PICADILLO2', adquirido: null, cantidad: 3 },
                { id: 4, denominacion: 'SALCHICHA2', adquirido: null, cantidad: 6 },
                { id: 5, denominacion: 'LECHE2', adquirido: '2023-04-26', cantidad: 3 },
                { id: 6, denominacion: 'PESCADO2', adquirido: null, cantidad: 4 },
                { id: 7, denominacion: 'ACEITE2', adquirido: null, cantidad: 9 },
                { id: 8, denominacion: 'PAN2', adquirido: '2023-04-26', cantidad: 3 },
              ],
            },
          ])
        }
        className="boton-cargar"
      >
        CARGAR DATOS
      </Button>
      <GTabPanel tabs={[{ name: 'Comprados' }, { name: 'Por Comprar' }]}>
        <GTableContainer>
          {content.map(({ productos }: { productos: any[] }, index) => {
            return (
              <Fragment key={index}>
                {GTable(
                  productos,
                  { prop: 'adquirido', operator: '==', value: null },
                  'No hay productos por comprar ',
                  porComprarColmuns,
                  true,
                )}
              </Fragment>
            );
          })}
        </GTableContainer>
        <GTableContainer>
          {content.map(({ productos }: { productos: any[] }, index) => {
            return (
              <Fragment key={index}>
                {GTable(
                  productos,
                  { prop: 'adquirido', operator: '==', value: null },
                  'No hay productos por comprar ',
                  compradosColmuns,
                  false,
                )}
              </Fragment>
            );
          })}
        </GTableContainer>
      </GTabPanel>
    </>
  );
}

export default ProductosPage;
