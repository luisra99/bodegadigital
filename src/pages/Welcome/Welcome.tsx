import { useState } from 'react';
import { lazy, Suspense } from 'react';

import { Button, Typography, Box } from '@mui/material';

import Loading from '@/shared/components/Loading';
import Meta from '@/shared/components/Meta';

function Welcome() {
  //Consultar si la sesion esta configurada
  const [sessionIsConfig, setConfig] = useState(true);
  const MyLazyComponent = lazy(() => import('@/pages/SignUp/SignUp'));

  return (
    <>
      <Meta title="Inicio" />
      {sessionIsConfig ? (
        <Box style={{ textAlign: 'center' }}>
          <Typography
            p={3}
            variant="h4"
            onClick={() => setConfig(false)}
            style={{ textAlign: 'center' }}
          >
            Bienvenido al sistema de bodega virtual
          </Typography>
          <Typography p={2} variant="h6" style={{ textAlign: 'center' }}>
            Este sistema le permitirá un mejor acceso a las informaciones del acontecer gastronómico
            de nuestra sociedad
          </Typography>
          <Button variant={'contained'}>Comenzar</Button>
        </Box>
      ) : (
        <Suspense fallback={<Loading />}>
          <MyLazyComponent />
        </Suspense>
      )}
    </>
  );
}

export default Welcome;
