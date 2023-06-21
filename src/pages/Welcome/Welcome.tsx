import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Meta from '@/shared/components/Meta';
import { useSession } from '@/store/hotkeys';

import './Welcome.sass';

function Welcome() {
  const [sessionState, sessionActions] = useSession();

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
            <img loading="lazy" src={'/image_c.jpg'} alt="bodega" />
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
          Bienvenido al sistema de bodega digital{' '}
          {sessionState ? 'Authenticado' : 'No authenticado'}
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
