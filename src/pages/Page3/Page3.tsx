import { useState } from 'react';

import { Avatar, Badge, Box, Grid, TableContainer } from '@mui/material';
import Typography from '@mui/material/Typography';

import { GetProfileConfiguration } from '@/services/user/user.services';
import GTable from '@/shared/components/Generic/GTable/GTable';
import GTableContainer from '@/shared/components/Generic/GTableContainer/GTableContainer';
import Meta from '@/shared/components/Meta';
import { FullSizeCenteredFlexBox } from '@/shared/components/styled';
import { ProfileContent } from '@/shared/interfaces/common';

import './Nucleo.sass';

function Page3() {
  const [profileContent, setProfileContent] = useState<ProfileContent>(GetProfileConfiguration);
  console.log(profileContent);
  return (
    <>
      <Meta title="page 3" />
      <Grid container spacing={2} justifyContent="space-around" mt={2}>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
          <div style={{ display: 'flex', justifyContent: 'center' }}></div>
          <div style={{ textAlign: 'center' }}>
            <Badge
              id="badge"
              color="primary"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              badgeContent={profileContent.profile?.jefe_nucleo ? 'Jefe de Nucleo' : 0}
            >
              <Avatar
                alt="Remy Sharp"
                src={profileContent.profile?.foto}
                sx={{ width: '6rem', height: '6rem' }}
              />
            </Badge>
            <Typography sx={{ marginX: '10px' }} variant="h5">
              {`${profileContent.profile.nombre} ${profileContent.profile.primer_apellido} ${profileContent.profile.segundo_apellido}`}
            </Typography>
            <Typography variant="subtitle1">CI: {profileContent.profile.ci}</Typography>
            <Typography variant="h6">Informacion Asociada</Typography>
            <Box style={{ textAlign: 'left', padding: '0px 50px 10px 50px' }}>
              <Typography sx={{ textAlign: 'center' }}>
                Telefonos:<b> {profileContent.profile.celular} 45913182</b>
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>
                Direccion: {profileContent.profile.direccion}
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>
                Correo:{` `}
                <a href="mailto:soportebodega@xetid.cu" target="_blank" rel="noopener noreferrer">
                  {profileContent.profile.email}
                </a>
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h5">Informacion del nucleo</Typography>
            <Typography>
              Oficina: {profileContent.nucleo?.oficina} Bodega: {profileContent.nucleo?.bodega}{' '}
            </Typography>
            <Typography>Nucleo: {profileContent.nucleo?.nucleo}</Typography>
            <Box style={{ textAlign: 'left', padding: '0px 10px 10px 10px' }}>
              <Typography variant="body2" sx={{ marginLeft: '10px', marginBottom: '5px' }}>
                Integrantes: {profileContent.nucleo?.integrantes_count}
              </Typography>
              <GTableContainer>
                {GTable(
                  profileContent?.nucleo?.integrantes,
                  'No se pudieron obtener los integrantes del nucleo',
                  [
                    { header: 'Carnet', name: 'ci', type: 'text' },
                    { header: 'Nombre', name: 'nombre', type: 'text' },
                  ],

                  true,
                  true,
                )}
              </GTableContainer>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Page3;
