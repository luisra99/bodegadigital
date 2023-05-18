import { useState, useEffect } from 'react';

import { Avatar, Badge, Box, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useAuthContext } from '@asgardeo/auth-react';

import { GetProfileConfiguration, ReclaimRegistration } from '@/services/user/user.services';
import GTable from '@/shared/components/Generic/GTable/GTable';
import GTableContainer from '@/shared/components/Generic/GTableContainer/GTableContainer';
import Meta from '@/shared/components/Meta';
import { ProfileContent } from '@/shared/interfaces/common';

import './Profile.sass';

function Profile() {
  const [profileContent, setProfileContent] = useState<ProfileContent>({});
  const [requestButton, activeButton] = useState<boolean>(true);
  const { state, signOut } = useAuthContext();
  useEffect(() => {
    GetProfileConfiguration({ username: 'luis' }).then((result) => setProfileContent(result));
  }, []);

  return (
    <>
      <Meta title="Perfil" />
      <Grid container spacing={2} justifyContent="space-around" mt={2}>
        {Object.keys(profileContent).length === 0 ? (
          <Typography variant="h4">No se pudo obtener la información del perfil</Typography>
        ) : (
          <>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
              <div style={{ display: 'flex', justifyContent: 'center' }}></div>
              <div style={{ textAlign: 'center' }}>
                <Badge
                  id="badge"
                  color="primary"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  badgeContent={profileContent.profile?.jefe_nucleo ? 'Jefe de Núcleo' : 0}
                >
                  <Avatar
                    alt={profileContent.profile?.nombre}
                    src={profileContent.profile?.foto}
                    sx={{ width: '6rem', height: '6rem' }}
                  />
                </Badge>
                <Typography sx={{ marginX: '10px' }} variant="h5">
                  {`${profileContent.profile?.nombre} ${profileContent.profile?.primer_apellido} ${profileContent.profile?.segundo_apellido}`}
                </Typography>
                <Typography variant="subtitle1">CI: {profileContent.profile?.ci}</Typography>
                <Typography variant="h6">Información Asociada</Typography>
                <Box style={{ textAlign: 'left', padding: '0px 50px 10px 50px' }}>
                  <Typography sx={{ textAlign: 'center' }}>
                    Teléfonos:<b> {profileContent.profile?.celular}</b>
                  </Typography>
                  <Typography sx={{ textAlign: 'center' }}>
                    Dirección: {profileContent.profile?.direccion}
                  </Typography>
                  <Typography sx={{ textAlign: 'center' }}>
                    Correo:{` `}
                    <a
                      href="mailto:soportebodega@xetid.cu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {profileContent.profile?.email}
                    </a>
                  </Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
              {profileContent.nucleo ? (
                <div style={{ textAlign: 'center' }}>
                  <Typography variant="h5">Información del núcleo</Typography>
                  <Typography>
                    Oficina: {profileContent.nucleo?.oficina} Bodega:{' '}
                    {profileContent.nucleo?.bodega}{' '}
                  </Typography>
                  <Typography>Núcleo: {profileContent.nucleo?.nucleo}</Typography>
                  <Box style={{ textAlign: 'left', padding: '0px 10px 10px 10px' }}>
                    <Typography variant="body2" sx={{ marginLeft: '10px', marginBottom: '5px' }}>
                      Integrantes: {profileContent.nucleo?.integrantes_count}
                    </Typography>
                    <GTableContainer>
                      <GTable
                        data={profileContent?.nucleo?.integrantes}
                        messageForEmpty="No se pudieron obtener los integrantes del nucleo"
                        columns={[
                          { header: 'Carnet', name: 'ci', type: 'text' },
                          { header: 'Nombre', name: 'nombre', type: 'text' },
                          { header: 'Edad', name: 'edad', type: 'text' },
                          { header: 'Sexo', name: 'sex', type: 'text' },
                          { header: 'Nacimiento', name: 'fecha_n', type: 'text' },
                        ]}
                        fullWith={true}
                        readOnly={true}
                      />
                    </GTableContainer>
                  </Box>
                </div>
              ) : (
                <Box sx={{ textAlign: 'center' }}>
                  <Typography p={4} variant="h5" textAlign={'center'}>
                    Usted no se encuentra registrado en su núcleo
                  </Typography>
                  <Button
                    variant={'contained'}
                    disabled={!requestButton}
                    onClick={() =>
                      profileContent.profile &&
                      ReclaimRegistration(activeButton, profileContent.profile.persona_id)
                    }
                  >
                    Solicitar registro
                  </Button>
                </Box>
              )}
            </Grid>
          </>
        )}
        <Grid item xs={12} sx={{ textAlign: 'center', margin: '20px' }}>
          <Button
            variant={'outlined'}
            color="error"
            onClick={() => {
              signOut().then(() => {
                //Consultar datos del perfil
                console.log('SESIÓN CERRADA');
              });
            }}
          >
            CERRAR SESIÓN
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
