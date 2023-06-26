import { isValidSession, getAllSessionParameters, decodeIdToken } from '../../../actions/session';
import {
  requestChallenge,
  sendAuthorizationRequest,
  sendTokenRequest,
} from '../../../actions/sign-in';
import { dispatchLogout } from '../../../actions/sign-out';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import LogOut from '@mui/icons-material/Logout';
import Notifications from '@mui/icons-material/Notifications';
import { CircularProgress } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { useSession } from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import { showNotification } from '@/utils/notification/notification';

function HeaderToolbar() {
  const [, notificationsActions] = useNotifications();
  const [sessionState, userData, sessionActions] = useSession();
  const [gettingChallenge, setGettingChallenge] = useState(false);
  useEffect(() => {
    if (isValidSession()) {
      getAllSessionParameters().then((sessionParams) => {
        if (sessionParams.ACCESS_TOKEN)
          sessionActions.create({
            tokenResponse: sessionParams,
            idToken: decodeIdToken(sessionParams.ID_TOKEN),
            isLoggedIn: true,
            profile: sessionParams.PROFILE,
          });
      });
      return;
    }
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      history.replaceState({}, document.title, window.location.pathname);
      // console.log(code);
      sendTokenRequest(code)
        .then((response) => {
          // console.log('TOKEN REQUEST SUCCESS', response);
          // console.log(response.access_token);
          if (response.access_token)
            sessionActions.create({
              tokenResponse: response[0],
              idToken: response[1],
              isLoggedIn: true,
              profile: response.profile,
            });
        })
        .catch((error) => {
          console.log('TOKEN REQUEST ERROR', error);
          sessionActions.close();
        });
      return;
    }
  }, []);
  return (
    <>
      {sessionState ? (
        <>
          <Tooltip className="header-button" title="Notificaciones" arrow>
            <IconButton color="info" edge="end" size="large" component={Link} to={'/notifications'}>
              <Badge badgeContent={4} max={99} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip className="header-button" title="Cerrar Sesión" arrow>
            <IconButton
              color="info"
              edge="end"
              size="large"
              onClick={() => {
                dispatchLogout();
              }}
            >
              <LogOut />
            </IconButton>
          </Tooltip>
          <Tooltip className="header-button" title="Opciones de usuario" arrow>
            <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}>
              <Avatar
                alt={userData?.nickname}
                src={`https://media.enzona.net/images/user/avatar/${userData?.sub}.png`}
              />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip className="header-button" title="Iniciar sesión" arrow>
          <IconButton
            color="info"
            edge="end"
            size="large"
            onClick={async () => {
              setGettingChallenge(true);
              await requestChallenge().then((challenge) => {
                if (challenge.challenge) {
                  sendAuthorizationRequest(challenge);
                } else {
                  setGettingChallenge(false);
                  showNotification(notificationsActions, {
                    type: 'error',
                    title: 'Error iniciando sesión',
                    subTitle: 'La conexión ha fallado',
                    content:
                      'No se ha podido conseguir la información necesaria para el inicio de sesión',
                  });
                }
              });
            }}
          >
            {!gettingChallenge ? <LoginIcon /> : <CircularProgress color="inherit" />}
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
export default HeaderToolbar;
