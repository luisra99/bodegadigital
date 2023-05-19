import { useState } from 'react';
import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Typography, Box, Grid } from '@mui/material';

import { useAuthContext } from '@asgardeo/auth-react';

import { GetProfileConfiguration } from '@/services/user/user.services';
import Loading from '@/shared/components/Loading';
import Meta from '@/shared/components/Meta';
import useNotifications from '@/store/notifications';
import { showNotification } from '@/utils/notification/notification';

import './Welcome.sass';

function Welcome() {
  //Consultar si la sesion esta configurada
  const navigate = useNavigate();
  const [profileConfig, setConfig] = useState<boolean | undefined>(undefined);
  // TODO: Consumir con usuario del login y usar el estado de la sesión para manejar la vista
  const { state, signIn } = useAuthContext();
  const [session, setSession] = useState(false);
  const [, notificationsActions] = useNotifications();
  const MyLazyComponent = lazy(() => import('@/pages/SignUp/SignUp'));
  const login = () => {
    try {
      signIn().then(async ({ username }) => {
        try {
          const { isConfig } = await GetProfileConfiguration({ username: username });
          isConfig && navigate('/profile');
          setConfig(isConfig);
        } catch (error: any) {
          showNotification(notificationsActions, {
            title: 'Operación fallida',
            subTitle: 'Estado',
            type: 'error',
            content: 'Ha ocurrido un error obteniendo los datos del perfil de usuario',
            secondarySubTitle: 'Detalles',
            secondaryContent: error,
          });
        }
      });
    } catch (error: any) {
      showNotification(notificationsActions, {
        title: 'Operación fallida',
        subTitle: 'Estado',
        type: 'error',
        content: 'Ha ocurrido un error tratando de iniciar la sesión',
        secondarySubTitle: 'Detalles',
        secondaryContent: error,
      });
    }
  };

  return (
    <>
      <Meta title="Inicio" />
      {!session ? (
        <Box style={{ textAlign: 'center' }}>
          <Grid container sx={{ position: 'fixed', zIndex: -1 }} className="welcome-pic">
            <Grid item className="item item--first" alignContent={'center'} display={'flex'}>
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=2140x10000:format=jpg/path/s79b46c029f74af8a/image/i8ef3d6ce27214cc4/version/1600381919/image.jpg"
                alt="bodega"
              />
            </Grid>
          </Grid>

          <Typography
            p={3}
            ml={3}
            variant="h4"
            style={{ textAlign: 'left', textShadow: '1px 1px #3c3c3c' }}
            fontWeight={900}
            color={'whitesmoke'}
          >
            Bienvenido al sistema de bodega virtual
          </Typography>
          <Typography
            px={2}
            pb={2}
            ml={3}
            variant="h6"
            style={{ textAlign: 'left', textShadow: '1px 1px #3c3c3c' }}
            color={'whitesmoke'}
          >
            Este sistema le permitirá un mejor acceso a las informaciones del acontecer gastronómico
            de nuestra sociedad
          </Typography>
          <Button variant={'contained'} onClick={login}>
            Comenzar
          </Button>
        </Box>
      ) : typeof profileConfig === 'boolean' ? (
        profileConfig ? (
          navigate('/profile')
        ) : (
          <Suspense fallback={<Loading />}>
            <MyLazyComponent />
          </Suspense>
        )
      ) : (
        <>
          <Box style={{ textAlign: 'center' }}>
            <Typography p={3} variant="h4" style={{ textAlign: 'center' }}>
              Al parecer ha habido un error &#128533;
            </Typography>
            <Typography p={2} variant="h6" style={{ textAlign: 'center' }}>
              Volver a intentarlo nunca esta de más...
            </Typography>
            <Button
              variant={'contained'}
              onClick={() => {
                window.location.reload();
              }}
            >
              Reintentar
            </Button>
          </Box>
        </>
      )}
    </>
  );
}

export default Welcome;
