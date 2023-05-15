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
function VentaRegulada() {
  const [value, setValue] = useState(0);
  const [content, setContent] = useState<any[]>([]);
  const porComprarColmuns: Column[] = [
    { header: 'Producto', name: 'denominacion', type: 'text' },
    { header: 'Cantidad', name: 'cantidad', type: 'number' },
    { header: 'Cantidad', name: 'valor1', type: 'number' },
  ];

  const compradosColmuns: Column[] = [
    { header: 'Producto', name: 'denominacion', type: 'text' },
    { header: 'Cantidad', name: 'cantidad', type: 'number' },
    { header: 'Fecha', name: 'adquirido', type: 'date' },
  ];

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
          ])
        }
        className="boton-cargar"
      >
        CARGAR DATOS
      </Button>
      <GTabPanel
        tabs={[
          { name: 'Por comprar', badge: 1 },
          { name: 'Comprados', badge: 1 },
        ]}
      >
        <GTableContainer>
          {content.map(({ productos }: { productos: any[] }, index) => {
            return (
              <Fragment key={index}>
                {GTable(productos, 'No hay productos por comprar ', porComprarColmuns, true)}
              </Fragment>
            );
          })}
        </GTableContainer>
        <GTableContainer>
          {content.map(({ productos }: { productos: any[] }, index) => {
            return (
              <Fragment key={index}>
                {GTable(productos, 'No hay productos por comprar ', compradosColmuns, false)}
              </Fragment>
            );
          })}
        </GTableContainer>
      </GTabPanel>
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
                  {GTable(productos, 'No hay productos por comprar ', porComprarColmuns, true)}
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
                  {GTable(productos, 'No hay productos por comprar ', compradosColmuns, false)}
                </Fragment>
              );
            })}
          </GTableContainer>
        </TabPanel>
      </Box>
    </>
  );
}

export default VentaRegulada;
