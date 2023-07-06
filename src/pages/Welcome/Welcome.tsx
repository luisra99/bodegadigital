import './Welcome.sass';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Meta from '@/shared/components/Meta';

function Welcome() {
  return (
    <>
      <Meta title="Inicio" />
      <Box className="welcome" style={{ textAlign: 'center' }}>
        <Typography
          p={3}
          ml={3}
          pb={0}
          variant="h4"
          style={{ textAlign: 'left', textShadow: '1px 1px 5px #3c3c3c' }}
          fontWeight={900}
          color={'whitesmoke'}
        >
          Nos alegra tenerte por aca...
        </Typography>
        <Typography
          px={3}
          pb={2}
          ml={3}
          variant="h6"
          style={{ textAlign: 'left', textShadow: '1px 1px 5px #3c3c3c' }}
          color={'whitesmoke'}
        >
          
        </Typography>
      </Box>
    </>
  );
}

export default Welcome;
