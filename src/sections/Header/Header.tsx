import { isValidSession, getAllSessionParameters, decodeIdToken } from '../../actions/session';
import { sendAuthorizationRequest, sendTokenRequest } from '../../actions/sign-in';
import { dispatchLogout } from '../../actions/sign-out';
import './Header.sass';
import { StyledAppBar } from './styled';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ThemeIcon from '@mui/icons-material/InvertColors';
import LoginIcon from '@mui/icons-material/Login';
import LogOut from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/shared/components/styled';
import { useHotKeysDialog, useSession } from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';
import { showNotification } from '@/utils/notification/notification';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [sessionState, userData, sessionActions] = useSession();
  useEffect(() => {
    // See if there is a valid session.
    if (isValidSession()) {
      const session = getAllSessionParameters();
      const _tokenResponse = {
        access_token: session.ACCESS_TOKEN,
        refresh_token: session.REFRESH_TOKEN,
        scope: session.SCOPE,
        id_token: session.ID_TOKEN,
        token_type: session.TOKEN_TYPE,
        expires_in: parseInt(session.EXPIRES_IN),
      };
      sessionActions.create({
        tokenResponse: _tokenResponse,
        idToken: decodeIdToken(session.ID_TOKEN),
        isLoggedIn: true,
        profile: session.PROFILE,
      });
      return;
    }

    // Reads the URL and retrieves the `code` param.
    const code = new URL(window.location.href).searchParams.get('code');
    history.replaceState({}, document.title, window.location.pathname);
    // If a authorization code exists, sends a token request.
    if (code) {
      console.log(code);
      sendTokenRequest(code)
        .then((response) => {
          console.log('TOKEN REQUEST SUCCESS', response);
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
    }
  }, []);
  return (
    <StyledAppBar color="default" elevation={1} position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
        <FlexBox sx={{ alignItems: 'center' }}>
          <IconButton
            onClick={sidebarActions.toggle}
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{
              mr: 1,
              color: '#fff',
              visibility: sessionState ? 'visible' : 'hidden',
            }}
            disabled={!sessionState}
          >
            <MenuIcon />
          </IconButton>
          <Button
            onClick={() =>
              showNotification(notificationsActions, {
                type: 'info',
                title: 'Producto nuevo en la TRD "Los Combatientes"',
                subTitle: 'Productos',
                content: 'Aceite, Pan, Azúcar',
                secondarySubTitle: 'Distribución',
                secondaryContent: 'Por CDR',
                advice: 'Miércoles 16:00h',
                price: 250.0,
              })
            }
            color="info"
            sx={{ color: '#fff', display: { xs: 'none', md: 'block' } }}
          >
            Probar Aviso
          </Button>
        </FlexBox>
        <FlexBox>
          <Tooltip className="header-button" title="Cambiar tema" arrow>
            <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
              <ThemeIcon />
            </IconButton>
          </Tooltip>
          {sessionState ? (
            <>
              <Tooltip className="header-button" title="Notificaciones" arrow>
                <IconButton
                  color="info"
                  edge="end"
                  size="large"
                  component={Link}
                  to={'/notifications'}
                >
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
                {/* <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}> */}
                <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}>
                  {/* <AccountCircleIcon /> */}
                  <Avatar alt={userData?.nickname} src={userData?.picture ?? 'none'} />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <Tooltip className="header-button" title="Iniciar sesión" arrow>
              <IconButton
                color="info"
                edge="end"
                size="large"
                onClick={() => {
                  sendAuthorizationRequest();
                }}
              >
                <LoginIcon />
              </IconButton>
            </Tooltip>
          )}
        </FlexBox>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
