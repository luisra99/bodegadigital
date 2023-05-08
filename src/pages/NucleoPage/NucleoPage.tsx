import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Column } from '@interfaces/common';

import GTable from '@/shared/components/Generic/GTable/GTable';
import GTableContainer from '@/shared/components/Generic/GTableContainer/GTableContainer';
import Meta from '@/shared/components/Meta';

import axios from 'axios';

function NucleoPage() {
  const Perfil = {
    ci: 99080100702,
    nucleo: 30,
    comercio: 12,
    bodega: 12,
  };
  const datos = [
    {
      numero_nucleo: 1,
      fecha_modificado: '2022-11-24T04:28:44.000Z',
      cons_cant: 1,
      cons_lista: '[{"identidad_numero":"13080765520","jefe_nucleo":false}]',
    },
    {
      numero_nucleo: 2,
      fecha_modificado: '2022-12-05T23:53:57.000Z',
      cons_cant: 0,
      cons_lista: null,
    },
    {
      numero_nucleo: 3,
      fecha_modificado: '2023-02-21T06:04:38.000Z',
      cons_cant: 2,
      cons_lista:
        '[{"identidad_numero":"63032305855","jefe_nucleo":true}, {"identidad_numero":"66043001005","jefe_nucleo":false}]',
    },
  ];
  const columns: Column[] = [
    { header: 'CI de los integrantes', name: 'identidad_numero', type: 'text' },
  ];
  const data =
    '[{"identidad_numero":"63032305855","jefe_nucleo":true}, {"identidad_numero":"66043001005","jefe_nucleo":false}]';
  const json = JSON.parse(data);

  const json2 = json?.filter((data: any) => data.jefe_nucleo)[0];
  const jefe = {
    persona_sid: 'string',
    identidad_numero: '87012430658',
    primer_nombre: 'Alberto',
    segundo_nombre: 'Gonzales',
    primer_apellido: 'Pérez',
    segundo_apellido: 'Pérez',
    persona_id: 'A7EC53BE51E54B1DB929EE4D8F2196E8',
    bodega: '0602',
    nucleo: 188,
    ticket: '0535-0602-0188',
    cons_total: '8',
  };
  const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, identidad_numero } =
    jefe;
  console.log(json2);
  const params = {
    oficina_id: Perfil.comercio,
    bodega_id: Perfil.bodega,
    numero_nucleo: Perfil.nucleo,
    persona_ci: Perfil.ci,
  };
  const datasd = axios.request({
    url: 'http://bv.mtz.xetid.cu/bodegavirtual/public/index.php/api/consumidornucleoci',
    params,
  });
  return (
    <>
      <Meta title="page 1" />
      <Box sx={{ textAlign: 'center' }}>
        <Typography p={4} variant="h4" textAlign={'center'}>
          Usted no se encuentra registrado en su núcleo
        </Typography>
        <Button variant={'contained'}>Solicitar registro</Button>
      </Box>
      {/* <Box sx={{ textAlign: 'center' }}>
        <Typography p={2} variant="h6" textAlign={'center'}>
          Jefe de núcleo:
          <br />
          {`${primer_nombre}${
            segundo_nombre ? ` ${segundo_nombre}` : ''
          } ${primer_apellido} ${segundo_apellido}`}
          <br />
          {identidad_numero}
        </Typography>
        <GTableContainer p={4} variant="h4" textAlign={'center'}>
          {GTable(
            json,
            { prop: 'adquirido', operator: '==', value: null },
            'No hay consumidores en este núcleo',
            columns,
            true,
          )}
        </GTableContainer>
      </Box> */}
    </>
  );
}

export default NucleoPage;
