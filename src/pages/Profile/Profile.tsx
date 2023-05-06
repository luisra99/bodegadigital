import { Button, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import Meta from '@/shared/components/Meta';

function Profile() {
  return (
    <>
      <Meta title="page 3" />
      <Box sx={{ textAlign: 'center' }}>
        <Grid container spacing={2} padding={2} justifyContent="space-around">
          <Grid item xs={12} sm={10} md={6}>
            <Paper sx={{ padding: '5%' }}>
              <Avatar>LR</Avatar>
              <h2>Luis Raul Alfonso Caballero</h2>
              <h3>Consumidor</h3>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={6}>
            <Paper sx={{ padding: '5%' }}>
              <Box style={{ textAlign: 'left', margin: '5%' }}>
                <h3>CI: 99080100702</h3>
                <h3>Oficina de comercio: 0012</h3>
                <h3>Bodega: 0323</h3>
                <h3>Nucleo: 22</h3>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Button variant={'contained'}>Solicitar registro</Button>
      </Box>
    </>
  );
}

export default Profile;
