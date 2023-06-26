import './Profile.sass';

import { useState, useEffect } from 'react';

import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { GetProfileConfiguration, ReclaimRegistration } from '@/services/user/user.services';
import GTable from '@/shared/components/Generic/GTable/GTable';
import GTableContainer from '@/shared/components/Generic/GTableContainer/GTableContainer';
import Meta from '@/shared/components/Meta';
import { useSession } from '@/store/hotkeys';

function Profile() {
  const [sessionState, userData, sessionActions] = useSession();

  const [requestButton, activeButton] = useState<boolean>(true);
  useEffect(() => {
    GetProfileConfiguration();
  }, []);
  return (
    <>
      <Meta title="Perfil" />
      <Grid container spacing={2} justifyContent="space-around" mt={2}>
        {!userData ? (
          <Box textAlign={'center'} m={3}>
            <Typography variant="h4">No se pudo obtener la información del perfil</Typography>
          </Box>
        ) : (
          <>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div style={{ textAlign: 'center' }}>
                <Badge
                  id="badge"
                  color="primary"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  badgeContent={userData.profile?.jefe_nucleo ? 'Jefe de Núcleo' : 'Integrante'}
                >
                  <Avatar
                    alt={userData?.given_name}
                    src={`https://media.enzona.net/images/user/avatar/${userData?.sub}.png`}
                    sx={{ width: '4rem', height: '4rem' }}
                  />
                </Badge>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={5}>
              <div style={{ textAlign: 'center', padding: '16px' }}>
                <fieldset>
                  <legend>Información personal</legend>
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="form-group">
                        <div className="row">
                          <Grid xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Nombre:</label>
                          </Grid>
                          <Grid xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{`${userData?.given_name} ${userData?.family_name}`}</span>
                          </Grid>
                        </div>
                      </div>
                      <div className="form-group">
                        <hr />
                        <div className="row">
                          <Grid xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Usuario:</label>
                          </Grid>
                          <Grid xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{userData?.sub}</span>
                          </Grid>
                        </div>
                      </div>
                      <div className="form-group">
                        <hr />
                        <div className="row">
                          <Grid xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Carnet de Identidad:</label>
                          </Grid>
                          <Grid xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{userData?.identification}</span>
                          </Grid>
                        </div>
                      </div>
                      <div className="form-group">
                        <hr />
                        <div className="row">
                          <Grid xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Dirección:</label>
                          </Grid>
                          <Grid xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{userData?.address.address}</span>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Información de contacto</legend>
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="form-group">
                        <div className="row">
                          <Grid xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Teléfono:</label>
                          </Grid>
                          <Grid xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{userData?.phone_number}</span>
                          </Grid>
                        </div>
                      </div>
                      <div className="form-group">
                        <hr />
                        <div className="row">
                          <Grid xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Correo electrónico:</label>
                          </Grid>
                          <Grid xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>
                              <a
                                href="mailto:soportebodega@xetid.cu"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {userData?.email}
                              </a>
                            </span>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={5} m={'auto'}>
              {userData.infoNucleo ? (
                <div style={{ textAlign: 'center' }}>
                  <Typography variant="h5">Información del núcleo</Typography>
                  <Typography>
                    Oficina: {userData.infoNucleo?.oficina} Bodega: {userData.infoNucleo?.bodega}{' '}
                  </Typography>
                  <Typography>Núcleo: {userData.infoNucleo?.nucleo}</Typography>
                  <Box style={{ textAlign: 'left', padding: '0px 10px 10px 10px' }}>
                    <Typography variant="body2" sx={{ marginLeft: '10px', marginBottom: '5px' }}>
                      Integrantes: {userData.infoNucleo?.integrantes_count}
                    </Typography>
                    <GTableContainer>
                      <GTable
                        data={userData?.infoNucleo?.integrantes}
                        messageForEmpty="No se pudieron obtener los integrantes del nucleo"
                        columns={[
                          { header: 'Carnet', name: 'ci', type: 'text' },
                          { header: 'Nombre', name: 'nombre', type: 'text' },
                          { header: 'Primer apellido', name: 'primer_apellido', type: 'text' },
                          { header: 'Segundo apellido', name: 'segundo_apellido', type: 'text' },
                          // { header: 'Edad', name: 'edad', type: 'text' },
                          // { header: 'Sexo', name: 'sex', type: 'text' },
                          // { header: 'Nacimiento', name: 'fecha_n', type: 'text' },
                        ]}
                        fullWith={true}
                        readOnly={true}
                      />
                    </GTableContainer>
                  </Box>
                </div>
              ) : (
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant={'contained'}
                    disabled={!requestButton}
                    onClick={() =>
                      userData.profile &&
                      ReclaimRegistration(activeButton, userData.profile.persona_id)
                    }
                  >
                    Solicitar registro en su núcleo
                  </Button>
                </Box>
              )}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default Profile;
