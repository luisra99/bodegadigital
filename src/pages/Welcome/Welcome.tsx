import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Meta from '@/shared/components/Meta';

import './Welcome.sass';

function Welcome() {
  const login = () => {
    // try {
    // getToken();
    // axios
    //   .get('https://bodegadigital.prod.xetid.cu/iapi/token')
    //   .then(({ data }) => ladaat(data?.title));
    //   signIn().then(async (data) => {
    //     try {
    //       console.table(data);
    //       const response = await GetProfileConfiguration(data);
    //       const isConfig = response?.isConfig ?? false;
    //       // isConfig && navigate('/profile');
    //       setConfig(isConfig);
    //     } catch (error: any) {
    //       showNotification(notificationsActions, {
    //         title: 'Operación fallida',
    //         subTitle: 'Estado',
    //         type: 'error',
    //         content: 'Ha ocurrido un error obteniendo los datos del perfil de usuario',
    //         secondarySubTitle: 'Detalles',
    //         secondaryContent: error,
    //       });
    //     }
    //   });
    // } catch (error: any) {
    //   showNotification(notificationsActions, {
    //     title: 'Operación fallida',
    //     subTitle: 'Estado',
    //     type: 'error',
    //     content: 'Ha ocurrido un error tratando de iniciar la sesión',
    //     secondarySubTitle: 'Detalles',
    //     secondaryContent: error,
    //   });
    // }
  };

  return (
    <>
      <Meta title="Inicio" />
      <Box style={{ textAlign: 'center' }}>
        <Grid container sx={{ position: 'fixed', zIndex: -1 }} className="welcome-pic">
          <Grid
            item
            className="item item--first"
            alignContent={'center'}
            display={'flex'}
            sx={{ width: '100%' }}
          >
            <img src={'/image_c.jpg'} alt="bodega" />
          </Grid>
        </Grid>

        <Typography
          p={3}
          ml={3}
          pb={0}
          variant="h4"
          style={{ textAlign: 'left', textShadow: '1px 1px 5px #3c3c3c' }}
          fontWeight={900}
          color={'whitesmoke'}
        >
          Bienvenido al sistema de bodega digital
        </Typography>
        <Typography
          px={3}
          pb={2}
          ml={3}
          variant="h6"
          style={{ textAlign: 'left', textShadow: '1px 1px 5px #3c3c3c' }}
          color={'whitesmoke'}
        >
          Este sistema le permitirá un mejor acceso a las informaciones del acontecer gastronómico
          de nuestra sociedad funciona
        </Typography>
      </Box>
    </>
  );
}

export default Welcome;
