import { isValidSession } from '../../../actions/session';
import {
  requestChallenge,
  sendAuthorizationRequest,
} from '../../../actions/sign-in';
import { dispatchLogout } from '../../../actions/sign-out';
import { restoreSession,createSession } from '@/actions/management';
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
      restoreSession(sessionActions);
      return;
    }
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      createSession(sessionActions,code);
      return;
    }
  }, []);
  return (
    <>
      {sessionState ? (
        <>
          <Tooltip className="header-button" title="Notificaciones" arrow>
            <IconButton edge="end" size="large" component={Link} to={'/notifications'}>
              <Badge badgeContent={userData?.notifications ?? 0} max={99} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip className="header-button" title="Cerrar Sesión" arrow>
            <IconButton
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
            <IconButton edge="end" size="large" component={Link} to={'/profile'} disabled={!userData?.PI?.nombre}>
              {userData?.PI?.nombre ? (
                <Avatar
                  alt={userData?.PI?.nombre}
                  src={`https://media.enzona.net/images/user/avatar/${userData?.PI?.username}.png`}
                />
              ) : (
                <CircularProgress color="inherit" />
              )}
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip className="header-button" title="Iniciar sesión" arrow>
            <IconButton
              edge="end"
              size="large"
              disabled={gettingChallenge}
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
        </>
      )}
    </>
  );
  
}

export default HeaderToolbar;