import { useState } from 'react';
import { Link } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import ThemeIcon from '@mui/icons-material/InvertColors';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import Notifications from '@mui/icons-material/Notifications';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { useSession, signIn, signOut } from 'next-auth/react';

import { repository, title } from '@/config';
import { FlexBox } from '@/shared/components/styled';
import { CustomNotification } from '@/shared/interfaces/common';
import useHotKeysDialog from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import { HotKeysButton } from './styled';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();
  const [session, setSession] = useState(true);

  function showNotification(notification: CustomNotification) {
    const {
      type,
      title = '',
      subTitle = '',
      content = '',
      secondarySubTitle = '',
      secondaryContent = '',
      advice = '',
      price = '',
    } = notification;
    const id = Math.random().toString();
    notificationsActions.push(
      {
        options: {
          // Show fully customized notification
          // Usually, to show a notification, you'll use something like this:
          // notificationsActions.push({ message: ... })
          // `message` accepts string as well as ReactNode
          // But you also can use:
          // notificationsActions.push({ options: { content: ... } })
          // to show fully customized notification
          content: (
            <Alert
              severity={type}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    notificationsActions.close(id);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>{title}</AlertTitle>
              <b>{subTitle}: </b>
              {content}
              {price && ` - $${price}.`}
              {!!secondarySubTitle && (
                <>
                  <br />
                  <b>{secondarySubTitle}: </b>
                  {secondaryContent}
                </>
              )}
              {!!advice && (
                <>
                  <br />
                  <p
                    style={{
                      textAlign: 'end',
                      marginTop: '0px',
                      marginBottom: '0px',
                      marginRight: '10px',
                    }}
                  >
                    <i>{advice}</i>
                  </p>
                </>
              )}
            </Alert>
          ),
        },
      },
      id,
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 1, color: '#3f51b5' }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              onClick={() =>
                showNotification({
                  type: 'info',
                  title: 'Producto nuevo en la TRD "Los Combatientes"',
                  subTitle: 'Productos',
                  content: 'Aceite, Pan, Azucar',
                  secondarySubTitle: 'Distribucion',
                  secondaryContent: 'Por CDR',
                  advice: 'Miercoles 16:00h',
                  price: 250.0,
                })
              }
              color="info"
              sx={{ color: '#3f51b5', display: { xs: 'none', md: 'block' } }}
            >
              Probar Aviso
            </Button>
          </FlexBox>
          <FlexBox>
            <FlexBox>
              <Tooltip title="Hot keys" arrow sx={{ display: { xs: 'none', md: 'block' } }}>
                <HotKeysButton
                  size="small"
                  variant="outlined"
                  aria-label="open hotkeys dialog"
                  onClick={hotKeysDialogActions.open}
                >
                  alt + /
                </HotKeysButton>
              </Tooltip>
            </FlexBox>

            <Tooltip title="Cambiar tema" arrow sx={{ color: '#3f51b5' }}>
              <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
                <ThemeIcon />
              </IconButton>
            </Tooltip>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: '0px', paddingLeft: '10px', paddingRight: '10px' }}
            />
            {session ? (
              <>
                <Tooltip title="Notificaciones" arrow sx={{ color: '#3f51b5' }}>
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
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: '0px', paddingLeft: '10px', paddingRight: '10px' }}
                />
                <Tooltip title="Opciones de usuario" arrow sx={{ color: '#3f51b5' }}>
                  <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}>
                    <AccountCircleIcon />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <Tooltip title="Iniciar sesion" arrow sx={{ color: '#3f51b5' }}>
                <IconButton color="info" edge="end" size="large">
                  <LoginIcon />
                </IconButton>
              </Tooltip>
            )}
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
