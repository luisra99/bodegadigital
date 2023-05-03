import { SyntheticEvent, useState, Fragment } from 'react';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import GTable from '@/components/Generic/GTable/GTable';
import GTableContainer from '@/components/Generic/GTableContainer/GTableContainer';
import Meta from '@/components/Meta';
import { Column } from '@/interfaces/common';

import '../../theme/App.sass';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function ProductosPage() {
  const [value, setValue] = useState(0);
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

  const SERVICE_RESPONSE = {
    data: [
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
          { id: 1, denominacion: 'POLLO', adquirido: '2023-04-26', cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 4, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
          { id: 5, denominacion: 'LECHE', adquirido: '2023-04-26', cantidad: null },
          { id: 6, denominacion: 'PESCADO', adquirido: null, cantidad: null },
          { id: 7, denominacion: 'ACEITE', adquirido: null, cantidad: null },
          { id: 8, denominacion: 'PAN', adquirido: '2023-04-26', cantidad: null },
        ],
      },
      {
        orden_dia: 2,
        cierre: 202302,
        ticket: '0535-0522-0002',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: 'F70E56B3DD4647F48C893FD35E63F918',
        responsable: 'Natacha',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
      {
        orden_dia: 3,
        cierre: 202302,
        ticket: '0535-0522-0003',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: 'C741AD48EE624B67811515D8B13B861B',
        responsable: 'Mayde',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
      {
        orden_dia: 4,
        cierre: 202302,
        ticket: '0535-0522-0004',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: '55E67476AEA844F7A2EAF1000D5692E5',
        responsable: 'Idalberto',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
      {
        orden_dia: 5,
        cierre: 202302,
        ticket: '0535-0522-0005',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: 'C28945A023E74107E043070122606B76',
        responsable: 'Manuel',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
      {
        orden_dia: 6,
        cierre: 202302,
        ticket: '0535-0522-0006',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: 'B2B6AE8EADC641DFB26C1517D2FC06E6',
        responsable: 'Yohanny',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
      {
        orden_dia: 7,
        cierre: 202302,
        ticket: '0535-0522-0007',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: '917F21706E2D43C78909740FE016ECC9',
        responsable: 'José',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
      {
        orden_dia: 8,
        cierre: 202302,
        ticket: '0535-0522-0008',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: 'E51203EDB3AA4B19B01DE1C3D4EBFEBD',
        responsable: 'Zenaida',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
      {
        orden_dia: 9,
        cierre: 202302,
        ticket: '0535-0522-0009',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: '644E79066E84435283D8E74451FDA74C',
        responsable: 'Osney',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
      {
        orden_dia: 10,
        cierre: 202302,
        ticket: '0535-0522-0010',
        corresponde: '2023-04-20T17:27:38.915Z',
        confirmado: null,
        entregado: null,
        persona_id: '8158A1BCF8484458889A2820FFEF947C',
        responsable: 'Lisandra',
        productos: [
          { id: 1, denominacion: 'POLLO', adquirido: null, cantidad: null },
          { id: 2, denominacion: 'PICADILLO', adquirido: null, cantidad: null },
          { id: 3, denominacion: 'SALCHICHA', adquirido: null, cantidad: null },
        ],
      },
    ],
    meta: {
      page: '1',
      limit: '10',
      totalItems: '818',
    },
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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

      <Box sx={{ width: '100%', height: '100%', justifyContent: 'space-between' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <Tab label="Por comprar" {...a11yProps(0)} />
            <Tab label="Comprados" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
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
        </TabPanel>
      </Box>
    </>
  );
}

export default ProductosPage;
