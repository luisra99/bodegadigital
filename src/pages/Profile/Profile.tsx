import './Profile.sass';

import { useState, useEffect } from 'react';

import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
} from '@mui/material';
import Typography from '@mui/material/Typography';

import { GetProfileConfiguration, ReclaimRegistration } from '@/services/user/user.services';
import Meta from '@/shared/components/Meta';
import { useSession } from '@/store/hotkeys';

function Profile() {
  const [, userData, ] = useSession();
  const serverErrorMessage="No se pudieron obtener los datos..."
  const [requestButton, activeButton] = useState<boolean>(true);
  useEffect(() => {
    GetProfileConfiguration();
  }, []);
  return (
    <>
      <Meta title="Perfil" />
      <Grid container spacing={2} justifyContent="space-around" mt={2}>
        {!userData?.PI? (
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
                  badgeContent={
                    userData?.APP?.jnucleo
                      ? userData?.APP?.jnucleo
                        ? 'Jefe de Núcleo'
                        : 'Integrante'
                      : null
                  }
                >
                  <Avatar
                    alt={userData?.PI?.nombre}
                    src={`https://media.enzona.net/images/user/avatar/${userData?.PI?.username}.png`}
                    sx={{ width: '4rem', height: '4rem' }}
                  />
                </Badge>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={5}>
              <div className='fieldset-box'>
                <fieldset>
                  <legend>Información personal</legend>
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="form-group">
                        <div className="row">
                          <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Nombre:</label>
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{`${userData?.PI?.nombre} ${userData?.PI?.apellidos}`}</span>
                          </Grid>
                        </div>
                      </div>
                      <div className="form-group">
                        <hr />
                        <div className="row">
                          <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Usuario:</label>
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{userData?.PI?.username}</span>
                          </Grid>
                        </div>
                      </div>
                      <div className="form-group">
                        <hr />
                        <div className="row">
                          <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Carnet de Identidad:</label>
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{userData?.PI?.ci}</span>
                          </Grid>
                        </div>
                      </div>
                      <div className="form-group">
                        <hr />
                        <div className="row">
                          <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Dirección:</label>
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{userData?.PI?.direccion}</span>
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
                          <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Teléfono:</label>
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>{userData?.PI?.telefono}</span>
                          </Grid>
                        </div>
                      </div>
                      <div className="form-group">
                        <hr />
                        <div className="row">
                          <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                            <label className="label-change-switch">Correo electrónico:</label>
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                            <span>
                              <a
                                href="mailto:soportebodega@xetid.cu"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {userData?.PI?.correo}
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
              {userData.APP ===false? (
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
              ):(
                <div className='fieldset-box' >
                  <fieldset>
                    <legend>Información del Núcleo</legend>
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="form-group">
                          <div className="row">
                            <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                              <label className="label-change-switch">Oficina comercial:</label>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                              <span>{userData?.APP?.oficina??serverErrorMessage}</span>
                            </Grid>
                          </div>
                        </div>
                        <hr />
                        <div className="form-group">
                          <div className="row">
                            <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                              <label className="label-change-switch">Bodega:</label>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                              <span>{userData?.APP?.bodega??serverErrorMessage}</span>
                            </Grid>
                          </div>
                        </div>
                        <hr />
                        <div className="form-group">
                          <div className="row">
                            <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
                              <label className="label-change-switch">Núcleo:</label>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
                              <span>{userData?.APP?.nucleo??serverErrorMessage}</span>
                            </Grid>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>Integrantes del Núcleo</legend>
                    <div className="panel panel-default">
                      {userData.APP?(<div className="panel-body">
                        {['Luis Perez Perez', 'Raul Perez Perez', 'Diego Perez Perez'].map((integrante, i) => {
                          return (
                            <div className="form-group" key={i}>
                              <div className="row">
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  textAlign="center"
                                >
                                  <label className="label-change-switch">{integrante}</label>
                                </Grid>
                              </div>
                              <hr />
                            </div>
                          );
                        })}
                      </div>):<legend>No se pudieron obtener los datos...</legend>}
                    </div>
                  </fieldset>
                </div>
              )}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default Profile;
